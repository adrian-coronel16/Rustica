// Rustica Travel - JS extraído de index.html

// Año dinámico (se valida la existencia por si el script se reutiliza en otra página)
const yearElement = document.getElementById("y");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Gestión de imágenes personalizables
const LIBRARY_STORAGE_KEY = "rusticaImageLibrary";
const ASSIGNMENTS_STORAGE_KEY = "rusticaImageAssignments";
const CONTENT_STORAGE_KEY = "rusticaContentSettings";

function loadLibraryFromStorage() {
  try {
    const stored = localStorage.getItem(LIBRARY_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("No se pudieron cargar las imágenes personalizadas.", error);
    return [];
  }
}

function loadAssignmentsFromStorage() {
  try {
    const stored = localStorage.getItem(ASSIGNMENTS_STORAGE_KEY);
    if (!stored) {
      return {};
    }
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("No se pudieron cargar las asignaciones de imágenes.", error);
    return {};
  }
}

function loadContentFromStorage() {
  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!stored) {
      return {};
    }
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("No se pudieron cargar los textos personalizados.", error);
    return {};
  }
}

function applyManagedImages() {
  const library = loadLibraryFromStorage();
  const assignments = loadAssignmentsFromStorage();
  const libraryMap = new Map(library.map((image) => [image.id, image]));

  document.querySelectorAll("[data-image-key]").forEach((img) => {
    const key = img.dataset.imageKey;
    if (!key) {
      return;
    }
    const defaultSrc = img.dataset.defaultSrc || img.getAttribute("src");
    const defaultAlt = img.dataset.defaultAlt || img.getAttribute("alt") || "";
    const imageId = assignments[key];
    const customImage = imageId ? libraryMap.get(imageId) : undefined;

    if (customImage && customImage.src) {
      img.src = customImage.src;
      img.alt = customImage.alt || defaultAlt;
    } else {
      img.src = defaultSrc;
      img.alt = defaultAlt;
    }
  });
}

function applyManagedContent() {
  const contentSettings = loadContentFromStorage();

  document.querySelectorAll("[data-content-key]").forEach((element) => {
    const key = element.dataset.contentKey;
    if (!key) {
      return;
    }

    const defaultContent =
      element.dataset.defaultContent !== undefined
        ? element.dataset.defaultContent
        : element.textContent;

    const storedValue = contentSettings[key];
    const valueToUse =
      typeof storedValue === "string" && storedValue.trim().length > 0
        ? storedValue
        : defaultContent || "";

    element.textContent = valueToUse;

    if (element instanceof HTMLAnchorElement) {
      element.setAttribute("aria-label", valueToUse);
    }
  });
}

function refreshManagedAssets() {
  applyManagedImages();
  applyManagedContent();
}

refreshManagedAssets();

window.addEventListener("storage", (event) => {
  if (event.storageArea !== localStorage) {
    return;
  }

  if (
    event.key === null ||
    event.key === LIBRARY_STORAGE_KEY ||
    event.key === ASSIGNMENTS_STORAGE_KEY
  ) {
    applyManagedImages();
  }

  if (event.key === null || event.key === CONTENT_STORAGE_KEY) {
    applyManagedContent();
  }
});

// Slider simple y ligero
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".indicator .dot");
let idx = 0;

function show(i) {
  slides.forEach((s, j) => {
    s.style.opacity = j === i ? 1 : 0;
    s.style.transition = "opacity .9s ease";
    s.style.position = "absolute";
  });
  dots.forEach((d, j) => {
    d.classList.toggle("active", j === i);
  });
}

if (slides.length > 0) {
  show(0);
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, 4500);
}
