const LIBRARY_STORAGE_KEY = "rusticaImageLibrary";
const ASSIGNMENTS_STORAGE_KEY = "rusticaImageAssignments";
const CONTENT_STORAGE_KEY = "rusticaContentSettings";

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

const CONTENT_SECTIONS = [
  {
    id: "hero",
    title: "Hero de portada",
    description: "Texto principal del slider y botones de acción.",
    fields: [
      {
        key: "heroTitleLeading",
        label: "Título principal (inicio)",
        placeholder: "Tu viaje soñado",
        defaultValue: "Tu viaje soñado",
        helper: "Se muestra al inicio del gran titular del hero.",
        maxLength: 60,
      },
      {
        key: "heroTitleAccent",
        label: "Título principal (resaltado)",
        placeholder: "empieza aquí",
        defaultValue: "empieza aquí",
        helper: "Palabra o frase destacada en color arena.",
        maxLength: 60,
      },
      {
        key: "heroSubtitle",
        label: "Descripción corta",
        multiline: true,
        defaultValue:
          "Ofertas, destinos y salidas confirmadas. ¡Vuela con nosotros a tu próxima aventura!",
        helper: "Mensaje que aparece debajo del título principal.",
        maxLength: 220,
      },
      {
        key: "heroSecondaryCta",
        label: "Botón secundario",
        placeholder: "Ver promociones",
        defaultValue: "Ver promociones",
        helper: "Texto del botón fucsia que dirige a la sección de promociones.",
        maxLength: 40,
      },
      {
        key: "heroPrimaryCta",
        label: "Botón principal",
        placeholder: "Solicitar cotización",
        defaultValue: "Solicitar cotización",
        helper: "Texto del botón azul que lleva al formulario de contacto.",
        maxLength: 40,
      },
    ],
  },
  {
    id: "destinos",
    title: "Destinos destacados",
    description: "Encabezado del mosaico de seis destinos inspiradores.",
    fields: [
      {
        key: "destinationsTitle",
        label: "Título de sección",
        defaultValue: "Destinos destacados",
        placeholder: "Destinos destacados",
        helper: "Encabezado principal sobre el mosaico de destinos.",
        maxLength: 70,
      },
      {
        key: "destinationsSubtitle",
        label: "Descripción",
        multiline: true,
        defaultValue:
          "Imágenes grandes para inspirarte. Explora playas, ciudades icónicas y experiencias inolvidables.",
        helper: "Texto que introduce el mosaico de destinos destacados.",
        maxLength: 260,
      },
    ],
  },
  {
    id: "promos",
    title: "Promociones activas",
    description: "Encabezado y botón que acompañan a las tarjetas de ofertas.",
    fields: [
      {
        key: "promosTitle",
        label: "Título de sección",
        defaultValue: "Promociones activas",
        placeholder: "Promociones activas",
        helper: "Encabezado principal sobre las ofertas disponibles.",
        maxLength: 70,
      },
      {
        key: "promosSubtitle",
        label: "Descripción",
        multiline: true,
        defaultValue:
          "Actualizamos constantemente las mejores ofertas. El color fucsia destaca oportunidades limitadas.",
        helper: "Texto que explica cómo se actualizan las promociones.",
        maxLength: 260,
      },
      {
        key: "promosButton",
        label: "Texto del botón",
        placeholder: "Quiero esta oferta",
        defaultValue: "Quiero esta oferta",
        helper: "Botón que conecta directamente con la sección de contacto.",
        maxLength: 40,
      },
    ],
  },
  {
    id: "testimonios",
    title: "Historias que inspiran",
    description: "Textos que acompañan la galería de testimonios.",
    fields: [
      {
        key: "testimonialsTitle",
        label: "Título de sección",
        defaultValue: "Historias que inspiran",
        placeholder: "Historias que inspiran",
        helper: "Encabezado principal de la sección de testimonios.",
        maxLength: 70,
      },
      {
        key: "testimonialsSubtitle",
        label: "Descripción",
        multiline: true,
        defaultValue: "Clientes reales en sus destinos favoritos.",
        helper: "Frase breve bajo el título de testimonios.",
        maxLength: 160,
      },
    ],
  },
  {
    id: "contacto",
    title: "Contacto y cierre",
    description: "Mensajes del formulario de cotización final.",
    fields: [
      {
        key: "contactTitle",
        label: "Título del formulario",
        defaultValue: "Solicita tu cotización",
        placeholder: "Solicita tu cotización",
        helper: "Encabezado que invita a completar el formulario de contacto.",
        maxLength: 70,
      },
      {
        key: "contactSubtitle",
        label: "Descripción",
        multiline: true,
        defaultValue:
          "Cuéntanos a dónde quieres ir y te enviamos la mejor propuesta.",
        helper: "Mensaje que refuerza la acción del formulario.",
        maxLength: 220,
      },
    ],
  },
];

const SECTION_LAYOUT = [
  {
    id: "hero",
    slotKeys: ["hero-1", "hero-2", "hero-3"],
  },
  {
    id: "destinos",
    slotKeys: [
      "destinos-1",
      "destinos-2",
      "destinos-3",
      "destinos-4",
      "destinos-5",
      "destinos-6",
    ],
  },
  {
    id: "promos",
    slotKeys: ["promo-1", "promo-2", "promo-3"],
  },
  {
    id: "testimonios",
    slotKeys: ["testimonio-1", "testimonio-2", "testimonio-3"],
  },
  {
    id: "contacto",
    slotKeys: ["contacto-panel", "footer-bg"],
  },
];

const form = document.getElementById("imageForm");
const libraryList = document.getElementById("libraryList");
const messageElement = document.getElementById("formMessage");
const fileInput = document.getElementById("imageFile");
const urlInput = document.getElementById("imageUrl");
const landingSections = document.getElementById("landingSections");
const contentMessageElement = document.getElementById("contentMessage");
const resetContentButton = document.getElementById("resetContentButton");
const flowLinks = document.querySelectorAll(".flow-link[data-target]");
const contentSaveTimers = new Map();
const sectionHighlightTimers = new WeakMap();
let contentMessageTimer;

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

function loadContent() {
  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!stored) {
      return {};
    }
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.error("No se pudieron cargar los textos personalizados.", error);
    return {};
  }
}

function saveContent(content) {
  try {
    const entries = content && typeof content === "object" ? Object.keys(content) : [];
    if (entries.length === 0) {
      localStorage.removeItem(CONTENT_STORAGE_KEY);
    } else {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    }
    return true;
  } catch (error) {
    console.error("No se pudo guardar el contenido personalizado.", error);
    setContentMessage(
      "No se pudo guardar el contenido en este navegador. Verifica el espacio disponible.",
      "error"
    );
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

function setContentMessage(text, type) {
  if (!contentMessageElement) {
    return;
  }
  if (contentMessageTimer) {
    window.clearTimeout(contentMessageTimer);
    contentMessageTimer = undefined;
  }
  contentMessageElement.textContent = text;
  contentMessageElement.classList.remove("success", "error");
  if (type) {
    contentMessageElement.classList.add(type);
  }
  if (text) {
    const timeout = type === "error" ? 5000 : 3200;
    contentMessageTimer = window.setTimeout(() => {
      if (!contentMessageElement) {
        return;
      }
      contentMessageElement.textContent = "";
      contentMessageElement.classList.remove("success", "error");
      contentMessageTimer = undefined;
    }, timeout);
  }
}

function findContentFieldByKey(fieldKey) {
  for (const section of CONTENT_SECTIONS) {
    const field = section.fields.find((item) => item.key === fieldKey);
    if (field) {
      return { section, field };
    }
  }
  return { section: undefined, field: undefined };
}

function queueContentSave(fieldKey, value) {
  if (!fieldKey) {
    return;
  }
  const key = String(fieldKey);
  const stringValue = typeof value === "string" ? value : String(value ?? "");
  if (contentSaveTimers.has(key)) {
    window.clearTimeout(contentSaveTimers.get(key));
  }
  const timer = window.setTimeout(() => {
    contentSaveTimers.delete(key);
    commitContentSave(key, stringValue);
  }, 400);
  contentSaveTimers.set(key, timer);
}

function commitContentSave(fieldKey, value) {
  const { field } = findContentFieldByKey(fieldKey);
  if (!field) {
    return;
  }

  const currentContent = loadContent();
  const trimmed = value.trim();
  let updated = false;

  if (trimmed.length === 0) {
    if (Object.prototype.hasOwnProperty.call(currentContent, fieldKey)) {
      delete currentContent[fieldKey];
      updated = true;
    }
  } else if (currentContent[fieldKey] !== value) {
    currentContent[fieldKey] = value;
    updated = true;
  }

  if (!updated) {
    return;
  }

  if (saveContent(currentContent)) {
    if (trimmed.length === 0) {
      setContentMessage(`Se restableció el texto de "${field.label}".`, "success");
      renderLandingSections();
    } else {
      setContentMessage(`Texto guardado para "${field.label}".`, "success");
    }
  } else {
    setContentMessage("No se pudo guardar el texto actualizado.", "error");
  }
}

function resetContentSection(sectionId) {
  const section = CONTENT_SECTIONS.find((item) => item.id === sectionId);
  if (!section) {
    return;
  }

  const currentContent = loadContent();
  let changed = false;

  section.fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(currentContent, field.key)) {
      delete currentContent[field.key];
      changed = true;
    }
  });

  if (!changed) {
    setContentMessage(
      `El bloque "${section.title}" ya usa los textos predeterminados.`,
      ""
    );
    return;
  }

  if (saveContent(currentContent)) {
    setContentMessage(`Se restablecieron los textos de "${section.title}".`, "success");
    renderLandingSections();
  } else {
    setContentMessage("No se pudieron restablecer los textos del bloque.", "error");
  }
}

function resetAllContent() {
  const currentContent = loadContent();
  if (Object.keys(currentContent).length === 0) {
    setContentMessage("Aún no hay textos personalizados para restablecer.", "");
    return;
  }

  const confirmReset = window.confirm(
    "¿Restablecer todos los textos personalizados del landing page?"
  );
  if (!confirmReset) {
    return;
  }

  if (saveContent({})) {
    setContentMessage("Todos los textos volvieron a su versión original.", "success");
    renderLandingSections();
  } else {
    setContentMessage("No se pudieron restablecer todos los textos.", "error");
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

function renderLandingSections() {
  if (!landingSections) {
    return;
  }

  contentSaveTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });
  contentSaveTimers.clear();

  const assignments = loadAssignments();
  const library = loadLibrary();
  const libraryMap = new Map(library.map((image) => [image.id, image]));
  const currentContent = loadContent();

  landingSections.innerHTML = "";

  SECTION_LAYOUT.forEach((sectionConfig) => {
    const contentSection = CONTENT_SECTIONS.find((item) => item.id === sectionConfig.id);
    const hasSlots = Array.isArray(sectionConfig.slotKeys) && sectionConfig.slotKeys.length > 0;
    const hasContent = Boolean(contentSection?.fields?.length);

    if (!hasSlots && !hasContent) {
      return;
    }

    const sectionElement = document.createElement("article");
    sectionElement.className = "landing-section";
    sectionElement.id = `section-${sectionConfig.id}`;
    sectionElement.setAttribute("tabindex", "-1");

    const header = document.createElement("div");
    header.className = "landing-section-header";

    const headerBody = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = contentSection?.title || "Sección del landing";
    headerBody.append(title);

    if (contentSection?.description) {
      const description = document.createElement("p");
      description.className = "admin-note";
      description.textContent = contentSection.description;
      headerBody.append(description);
    }

    header.append(headerBody);

    if (hasContent) {
      const resetButton = document.createElement("button");
      resetButton.type = "button";
      resetButton.className = "reset-btn";
      resetButton.textContent = "Restablecer bloque";
      resetButton.addEventListener("click", () => {
        resetContentSection(sectionConfig.id);
      });
      header.append(resetButton);
    }

    sectionElement.append(header);

    const columns = document.createElement("div");
    columns.className = "landing-section-columns";

    if (hasSlots) {
      const column = document.createElement("div");
      column.className = "landing-section-column";

      const columnTitle = document.createElement("h4");
      columnTitle.textContent = contentSection
        ? `Imágenes — ${contentSection.title}`
        : "Imágenes del bloque";
      column.append(columnTitle);

      const slotGrid = document.createElement("div");
      slotGrid.className = "slot-grid";

      sectionConfig.slotKeys.forEach((slotKey) => {
        const slot = IMAGE_SLOTS.find((item) => item.key === slotKey);
        if (!slot) {
          return;
        }

        const card = document.createElement("article");
        card.className = "slot-card shadow-soft";

        const currentImage = libraryMap.get(assignments[slot.key]);

        const preview = document.createElement("img");
        preview.src = currentImage?.src || slot.defaultSrc;
        preview.alt = currentImage?.alt || slot.defaultAlt;
        card.append(preview);

        const cardTitle = document.createElement("h3");
        cardTitle.textContent = slot.label;
        card.append(cardTitle);

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
          renderLandingSections();
        });

        card.append(select);
        slotGrid.append(card);
      });

      column.append(slotGrid);
      columns.append(column);
    }

    if (hasContent) {
      const column = document.createElement("div");
      column.className = "landing-section-column";

      const columnTitle = document.createElement("h4");
      columnTitle.textContent = "Textos personalizados";
      column.append(columnTitle);

      const fieldsWrapper = document.createElement("div");
      fieldsWrapper.className = "content-fields";

      contentSection.fields.forEach((field) => {
        const fieldWrapper = document.createElement("div");
        fieldWrapper.className = "content-field";

        const inputId = `content-${sectionConfig.id}-${field.key}`;

        const label = document.createElement("label");
        label.setAttribute("for", inputId);
        label.textContent = field.label;
        fieldWrapper.append(label);

        let helperId;
        if (field.helper) {
          const helper = document.createElement("small");
          helperId = `${inputId}-helper`;
          helper.id = helperId;
          helper.textContent = field.helper;
          fieldWrapper.append(helper);
        }

        const input = field.multiline
          ? document.createElement("textarea")
          : document.createElement("input");

        if (!field.multiline) {
          input.type = "text";
        }

        input.id = inputId;
        input.value =
          typeof currentContent[field.key] === "string"
            ? currentContent[field.key]
            : field.defaultValue;

        if (field.placeholder) {
          input.placeholder = field.placeholder;
        }

        if (field.maxLength) {
          input.maxLength = field.maxLength;
        }

        if (field.multiline) {
          input.rows = 3;
        }

        if (helperId) {
          input.setAttribute("aria-describedby", helperId);
        }

        input.addEventListener("input", (event) => {
          queueContentSave(field.key, event.target.value || "");
        });

        input.addEventListener("blur", () => {
          if (!input.value.trim()) {
            queueContentSave(field.key, "");
            input.value = field.defaultValue;
          }
        });

        fieldWrapper.append(input);
        fieldsWrapper.append(fieldWrapper);
      });

      column.append(fieldsWrapper);
      columns.append(column);
    }

    sectionElement.append(columns);
    landingSections.append(sectionElement);
  });
}

function setupOverviewNavigation() {
  if (!flowLinks || flowLinks.length === 0) {
    return;
  }

  flowLinks.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      if (!targetId) {
        return;
      }

      const targetSection = document.getElementById(targetId);
      if (!targetSection) {
        return;
      }

      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      if (typeof targetSection.focus === "function") {
        try {
          targetSection.focus({ preventScroll: true });
        } catch (error) {
          targetSection.focus();
        }
      }

      targetSection.classList.add("is-highlighted");

      const existingTimer = sectionHighlightTimers.get(targetSection);
      if (existingTimer) {
        window.clearTimeout(existingTimer);
      }

      const timer = window.setTimeout(() => {
        targetSection.classList.remove("is-highlighted");
        sectionHighlightTimers.delete(targetSection);
      }, 1800);

      sectionHighlightTimers.set(targetSection, timer);
    });
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
  renderLandingSections();
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
  renderLandingSections();
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

if (resetContentButton) {
  resetContentButton.addEventListener("click", resetAllContent);
}

renderLibrary();
renderLandingSections();
setupOverviewNavigation();
