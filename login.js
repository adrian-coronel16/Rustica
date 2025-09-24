const ADMIN_SESSION_STORAGE_KEY = "rusticaAdminSession";
const ADMIN_CREDENTIAL_DIGEST = "e89b310bb7f4858570fc303df9c0701ac98489c1709021638b5a654c8da7abd4";
const ADMIN_SESSION_MAX_AGE = 1000 * 60 * 60 * 4; // 4 horas

function readAdminSession() {
  try {
    const stored = localStorage.getItem(ADMIN_SESSION_STORAGE_KEY);
    if (!stored) {
      return null;
    }
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return parsed;
  } catch (error) {
    console.warn("No fue posible leer la sesión almacenada.", error);
    return null;
  }
}

function isStoredSessionValid(session) {
  if (!session) {
    return false;
  }
  const { token, timestamp } = session;
  if (token !== ADMIN_CREDENTIAL_DIGEST) {
    return false;
  }
  if (typeof timestamp !== "number") {
    return false;
  }
  const expired = Date.now() - timestamp > ADMIN_SESSION_MAX_AGE;
  if (expired) {
    localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
    return false;
  }
  return true;
}

function storeAdminSession() {
  const session = {
    token: ADMIN_CREDENTIAL_DIGEST,
    timestamp: Date.now(),
  };
  localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, JSON.stringify(session));
}

async function digestCredentials(username, password) {
  if (!window.crypto?.subtle) {
    throw new Error(
      "Este navegador no admite el módulo de seguridad requerido para el inicio de sesión."
    );
  }
  const normalizedUser = username.trim().toLowerCase();
  const encoder = new TextEncoder();
  const data = encoder.encode(`${normalizedUser}::${password}`);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function setFeedback(message, type = "") {
  const feedback = document.getElementById("loginFeedback");
  if (!feedback) {
    return;
  }
  feedback.textContent = message;
  feedback.classList.remove("success", "error");
  if (type) {
    feedback.classList.add(type);
  }
}

function redirectToAdmin() {
  window.location.replace("admin.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const storedSession = readAdminSession();
  if (isStoredSessionValid(storedSession)) {
    redirectToAdmin();
    return;
  }

  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");

  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener("click", () => {
      const showing = passwordInput.type === "text";
      passwordInput.type = showing ? "password" : "text";
      togglePasswordButton.setAttribute("aria-pressed", String(!showing));
      const icon = togglePasswordButton.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
      }
      passwordInput.focus();
    });
  }

  if (!form || !usernameInput || !passwordInput) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setFeedback("", "");

    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
    }

    try {
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (!username || !password) {
        setFeedback("Completa usuario y contraseña para continuar.", "error");
        return;
      }

      const digest = await digestCredentials(username, password);
      if (digest !== ADMIN_CREDENTIAL_DIGEST) {
        setFeedback("Credenciales no válidas. Inténtalo nuevamente.", "error");
        passwordInput.focus();
        passwordInput.select();
        return;
      }

      storeAdminSession();
      setFeedback("Acceso concedido. Redirigiendo...", "success");
      redirectToAdmin();
    } catch (error) {
      console.error(error);
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un problema al iniciar sesión. Inténtalo en unos segundos.",
        "error"
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
      }
    }
  });
});
