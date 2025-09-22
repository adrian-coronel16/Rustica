// Rustica Travel - JS extraído de index.html

// Año dinámico (se valida la existencia por si el script se reutiliza en otra página)
const yearElement = document.getElementById("y");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Gestión de imágenes personalizables
const LIBRARY_STORAGE_KEY = "rusticaImageLibrary";
const ASSIGNMENTS_STORAGE_KEY = "rusticaImageAssignments";

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

applyManagedImages();

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
