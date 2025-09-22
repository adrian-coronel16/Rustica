const LIBRARY_STORAGE_KEY = "rusticaImageLibrary";
const ASSIGNMENTS_STORAGE_KEY = "rusticaImageAssignments";

const IMAGE_SLOTS = [
  {
    key: "hero-1",
    label: "Hero principal — Imagen 1",
    description: "Primera fotografía del slider de portada.",
    defaultSrc:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2000&auto=format&fit=crop",
    defaultAlt: "Playa turquesa",
  },
  {
    key: "hero-2",
    label: "Hero principal — Imagen 2",
    description: "Segunda fotografía del slider de portada.",
    defaultSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
    defaultAlt: "Ciudad europea al atardecer",
  },
  {
    key: "hero-3",
    label: "Hero principal — Imagen 3",
    description: "Tercera fotografía del slider de portada.",
    defaultSrc:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=2000&auto=format&fit=crop",
    defaultAlt: "Montañas y lago",
  },
  {
    key: "destinos-1",
    label: "Destinos destacados — Caribe",
    description: "Imagen principal del mosaico de destinos (Caribe).",
    defaultSrc:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Caribe, arena blanca y mar turquesa",
  },
  {
    key: "destinos-2",
    label: "Destinos destacados — Roma & Mediterráneo",
    description: "Tarjeta de destinos dedicada a Roma y el Mediterráneo.",
    defaultSrc:
      "https://images.unsplash.com/photo-1473959383410-a6f58845af88?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Roma, Italia",
  },
  {
    key: "destinos-3",
    label: "Destinos destacados — Iguazú",
    description: "Tarjeta del mosaico con las Cataratas del Iguazú.",
    defaultSrc:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Cataratas del Iguazú",
  },
  {
    key: "destinos-4",
    label: "Destinos destacados — Estambul",
    description: "Tarjeta del mosaico dedicada a Estambul.",
    defaultSrc:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Estambul, Turquía",
  },
  {
    key: "destinos-5",
    label: "Destinos destacados — Riviera Maya",
    description: "Tarjeta del mosaico dedicada a la Riviera Maya.",
    defaultSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Riviera Maya",
  },
  {
    key: "destinos-6",
    label: "Destinos destacados — Panamá",
    description: "Tarjeta del mosaico dedicada a Panamá.",
    defaultSrc:
      "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Panamá ciudad y playa",
  },
  {
    key: "promo-1",
    label: "Promociones — Cartagena 4D/3N",
    description: "Primera tarjeta de promociones activas.",
    defaultSrc:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Cartagena de Indias",
  },
  {
    key: "promo-2",
    label: "Promociones — Buenos Aires 4D/3N",
    description: "Segunda tarjeta de promociones activas.",
    defaultSrc:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Buenos Aires",
  },
  {
    key: "promo-3",
    label: "Promociones — Punta Cana 5D/4N",
    description: "Tercera tarjeta de promociones activas.",
    defaultSrc:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Punta Cana",
  },
  {
    key: "testimonio-1",
    label: "Testimonios — Pareja en la playa",
    description: "Primera historia destacada en testimonios.",
    defaultSrc:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Pareja en la playa",
  },
  {
    key: "testimonio-2",
    label: "Testimonios — Familia viajando",
    description: "Segunda historia destacada en testimonios.",
    defaultSrc:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Familia viajando",
  },
  {
    key: "testimonio-3",
    label: "Testimonios — Grupo de amigos",
    description: "Tercera historia destacada en testimonios.",
    defaultSrc:
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Grupo de amigos en ciudad europea",
  },
  {
    key: "contacto-panel",
    label: "Contacto — Imagen lateral",
    description: "Fotografía que acompaña al formulario de contacto.",
    defaultSrc:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    defaultAlt: "Atardecer sobre una ciudad costera",
  },
  {
    key: "footer-bg",
    label: "Footer — Fondo marino",
    description: "Imagen de fondo oscurecida en el pie de página.",
    defaultSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2000&auto=format&fit=crop",
    defaultAlt: "Fondo marino",
  },
];

const form = document.getElementById("imageForm");
const libraryList = document.getElementById("libraryList");
const slotAssignments = document.getElementById("slotAssignments");
const messageElement = document.getElementById("formMessage");
const fileInput = document.getElementById("imageFile");
const urlInput = document.getElementById("imageUrl");

function loadLibrary() {
  try {
    const stored = localStorage.getItem(LIBRARY_STORAGE_KEY);
    if (!stored) {
      return [];
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("No se pudieron cargar las imágenes guardadas.", error);
    return [];
  }
}

function saveLibrary(library) {
  try {
    localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(library));
    return true;
  } catch (error) {
    console.error("No se pudo guardar la biblioteca de imágenes.", error);
    setMessage(
      "No se pudo guardar la biblioteca en este navegador. Verifica el espacio disponible.",
      "error"
    );
    return false;
  }
}

function loadAssignments() {
  try {
    const stored = localStorage.getItem(ASSIGNMENTS_STORAGE_KEY);
    if (!stored) {
      return {};
    }
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.error("No se pudieron cargar las asignaciones guardadas.", error);
    return {};
  }
}

function saveAssignments(assignments) {
  try {
    localStorage.setItem(ASSIGNMENTS_STORAGE_KEY, JSON.stringify(assignments));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar las asignaciones.", error);
    return false;
  }
}

function setMessage(text, type) {
  if (!messageElement) {
    return;
  }
  messageElement.textContent = text;
  messageElement.classList.remove("success", "error");
  if (type) {
    messageElement.classList.add(type);
  }
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo"));
    reader.readAsDataURL(file);
  });
}

function renderLibrary() {
  if (!libraryList) {
    return;
  }

  const library = loadLibrary();
  libraryList.innerHTML = "";

  if (library.length === 0) {
    const empty = document.createElement("p");
    empty.className = "admin-note";
    empty.textContent = "Aún no has agregado imágenes personalizadas.";
    libraryList.append(empty);
    return;
  }

  library.forEach((image) => {
    const card = document.createElement("article");
    card.className = "library-card";

    const preview = document.createElement("img");
    preview.src = image.src;
    preview.alt = image.alt || image.name || "Imagen subida";
    card.append(preview);

    const body = document.createElement("div");
    body.className = "library-body";

    const title = document.createElement("h3");
    title.textContent = image.name;
    body.append(title);

    const alt = document.createElement("p");
    alt.className = "small";
    alt.textContent = image.alt || "Sin texto alternativo";
    body.append(alt);

    card.append(body);

    const actions = document.createElement("div");
    actions.className = "library-actions";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      const confirmDelete = window.confirm(
        `¿Eliminar "${image.name}" de la biblioteca? Esta acción también quitará su uso del sitio.`
      );
      if (!confirmDelete) {
        return;
      }
      deleteImage(image.id);
    });

    actions.append(deleteButton);
    card.append(actions);
    libraryList.append(card);
  });
}

function renderSlots() {
  if (!slotAssignments) {
    return;
  }

  const assignments = loadAssignments();
  const library = loadLibrary();
  const libraryMap = new Map(library.map((image) => [image.id, image]));

  slotAssignments.innerHTML = "";

  IMAGE_SLOTS.forEach((slot) => {
    const card = document.createElement("article");
    card.className = "slot-card shadow-soft";

    const currentImage = libraryMap.get(assignments[slot.key]);

    const preview = document.createElement("img");
    preview.src = currentImage?.src || slot.defaultSrc;
    preview.alt = currentImage?.alt || slot.defaultAlt;
    card.append(preview);

    const title = document.createElement("h3");
    title.textContent = slot.label;
    card.append(title);

    if (slot.description) {
      const description = document.createElement("p");
      description.className = "slot-description";
      description.textContent = slot.description;
      card.append(description);
    }

    const status = document.createElement("p");
    status.className = "slot-status";
    status.textContent = currentImage
      ? `Usando: ${currentImage.name}`
      : "Usando imagen predeterminada.";
    card.append(status);

    const select = document.createElement("select");
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Usar imagen predeterminada";
    select.append(defaultOption);

    library.forEach((image) => {
      const option = document.createElement("option");
      option.value = image.id;
      option.textContent = image.name;
      select.append(option);
    });

    select.value = currentImage ? currentImage.id : "";
    select.addEventListener("change", () => {
      const updatedAssignments = loadAssignments();
      if (select.value) {
        updatedAssignments[slot.key] = select.value;
      } else {
        delete updatedAssignments[slot.key];
      }
      saveAssignments(updatedAssignments);
      renderSlots();
    });

    card.append(select);
    slotAssignments.append(card);
  });
}

function deleteImage(imageId) {
  const library = loadLibrary();
  const filtered = library.filter((image) => image.id !== imageId);
  if (filtered.length === library.length) {
    return;
  }

  if (!saveLibrary(filtered)) {
    return;
  }

  const assignments = loadAssignments();
  let updated = false;
  Object.keys(assignments).forEach((key) => {
    if (assignments[key] === imageId) {
      delete assignments[key];
      updated = true;
    }
  });

  if (updated) {
    saveAssignments(assignments);
  }

  renderLibrary();
  renderSlots();
}

async function handleSubmit(event) {
  event.preventDefault();
  setMessage("", "");

  const formData = new FormData(form);
  const name = String(formData.get("imageName") || "").trim();
  const alt = String(formData.get("imageAlt") || "").trim();
  const url = String(formData.get("imageUrl") || "").trim();
  const file = fileInput?.files?.[0];

  if (!name || !alt) {
    setMessage("Completa el nombre y el texto alternativo de la imagen.", "error");
    return;
  }

  if (!file && !url) {
    setMessage("Sube un archivo o proporciona una URL pública para la imagen.", "error");
    return;
  }

  let src = "";
  if (file) {
    try {
      src = await readFileAsDataURL(file);
    } catch (error) {
      console.error(error);
      setMessage("No se pudo leer el archivo seleccionado.", "error");
      return;
    }
  } else {
    src = url;
  }

  const library = loadLibrary();
  const newImage = {
    id: `img-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    alt,
    src,
  };
  library.push(newImage);

  if (!saveLibrary(library)) {
    return;
  }

  form.reset();
  setMessage("Imagen guardada en la biblioteca.", "success");
  renderLibrary();
  renderSlots();
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}

if (fileInput && urlInput) {
  fileInput.addEventListener("change", () => {
    if (fileInput.files && fileInput.files.length > 0) {
      urlInput.value = "";
    }
  });
  urlInput.addEventListener("input", () => {
    if (urlInput.value) {
      fileInput.value = "";
    }
  });
}

renderLibrary();
renderSlots();
