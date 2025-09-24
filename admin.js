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
    groups: [
      {
        id: "destinos-intro",
        title: "Textos introductorios",
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
        id: "destinos-card-1",
        title: "Tarjeta: Caribe",
        description: "Texto superpuesto en la imagen principal del mosaico.",
        fields: [
          {
            key: "destinosCard1Title",
            label: "Nombre del destino",
            defaultValue: "Caribe",
            placeholder: "Caribe",
            helper: "Título destacado sobre la imagen.",
            maxLength: 40,
          },
          {
            key: "destinosCard1Price",
            label: "Detalle destacado",
            defaultValue: "desde USD 925",
            helper: "Texto pequeño ubicado debajo del nombre.",
            maxLength: 60,
          },
        ],
      },
      {
        id: "destinos-card-2",
        title: "Tarjeta: Roma & Mediterráneo",
        description: "Texto visible en la segunda tarjeta del mosaico.",
        fields: [
          {
            key: "destinosCard2Title",
            label: "Nombre del destino",
            defaultValue: "Roma & Mediterráneo",
            placeholder: "Roma & Mediterráneo",
            helper: "Título que aparece sobre la fotografía.",
            maxLength: 40,
          },
        ],
      },
      {
        id: "destinos-card-3",
        title: "Tarjeta: Iguazú",
        description: "Texto visible en la tercera tarjeta del mosaico.",
        fields: [
          {
            key: "destinosCard3Title",
            label: "Nombre del destino",
            defaultValue: "Iguazú",
            placeholder: "Iguazú",
            helper: "Título que aparece sobre la imagen.",
            maxLength: 40,
          },
        ],
      },
      {
        id: "destinos-card-4",
        title: "Tarjeta: Estambul",
        description: "Texto y badge de la tarjeta dedicada a Estambul.",
        fields: [
          {
            key: "destinosCard4Title",
            label: "Nombre del destino",
            defaultValue: "Estambul",
            placeholder: "Estambul",
            helper: "Título principal de la tarjeta.",
            maxLength: 40,
          },
          {
            key: "destinosCard4Badge",
            label: "Etiqueta destacada",
            defaultValue: "2x1",
            helper: "Se muestra como badge sobre la imagen.",
            maxLength: 20,
          },
        ],
      },
      {
        id: "destinos-card-5",
        title: "Tarjeta: Riviera Maya",
        description: "Texto visible en la quinta tarjeta del mosaico.",
        fields: [
          {
            key: "destinosCard5Title",
            label: "Nombre del destino",
            defaultValue: "Riviera Maya",
            placeholder: "Riviera Maya",
            helper: "Título que aparece sobre la fotografía.",
            maxLength: 40,
          },
        ],
      },
      {
        id: "destinos-card-6",
        title: "Tarjeta: Panamá",
        description: "Texto visible en la última tarjeta del mosaico.",
        fields: [
          {
            key: "destinosCard6Title",
            label: "Nombre del destino",
            defaultValue: "Panamá",
            placeholder: "Panamá",
            helper: "Título que aparece sobre la imagen.",
            maxLength: 40,
          },
        ],
      },
    ],
  },
  {
    id: "promos",
    title: "Promociones activas",
    description: "Encabezado y botón que acompañan a las tarjetas de ofertas.",
    groups: [
      {
        id: "promos-intro",
        title: "Textos introductorios",
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
        id: "promo-1",
        title: "Promoción: Cartagena 4D/3N",
        description: "Textos superpuestos en la primera tarjeta de promociones.",
        fields: [
          {
            key: "promo1Badge",
            label: "Etiqueta destacada",
            defaultValue: "¡Salidas confirmadas!",
            helper: "Texto del badge superior.",
            maxLength: 60,
          },
          {
            key: "promo1Title",
            label: "Título de la tarjeta",
            defaultValue: "Cartagena 4D/3N",
            placeholder: "Cartagena 4D/3N",
            helper: "Nombre principal de la promoción.",
            maxLength: 60,
          },
          {
            key: "promo1Details",
            label: "Detalle complementario",
            defaultValue: "desde USD 845 · Hotel 3*",
            helper: "Texto pequeño con condiciones o beneficios.",
            maxLength: 80,
          },
        ],
      },
      {
        id: "promo-2",
        title: "Promoción: Buenos Aires 4D/3N",
        description: "Textos superpuestos en la segunda tarjeta de promociones.",
        fields: [
          {
            key: "promo2Badge",
            label: "Etiqueta destacada",
            defaultValue: "Nuevo 2026",
            helper: "Texto del badge superior.",
            maxLength: 60,
          },
          {
            key: "promo2Title",
            label: "Título de la tarjeta",
            defaultValue: "Buenos Aires 4D/3N",
            placeholder: "Buenos Aires 4D/3N",
            helper: "Nombre principal de la promoción.",
            maxLength: 60,
          },
          {
            key: "promo2Details",
            label: "Detalle complementario",
            defaultValue: "desde USD 925 · Hotel 3*",
            helper: "Texto pequeño con condiciones o beneficios.",
            maxLength: 80,
          },
        ],
      },
      {
        id: "promo-3",
        title: "Promoción: Punta Cana 5D/4N",
        description: "Textos superpuestos en la tercera tarjeta de promociones.",
        fields: [
          {
            key: "promo3Badge",
            label: "Etiqueta destacada",
            defaultValue: "Últimos cupos",
            helper: "Texto del badge superior.",
            maxLength: 60,
          },
          {
            key: "promo3Title",
            label: "Título de la tarjeta",
            defaultValue: "Punta Cana 5D/4N",
            placeholder: "Punta Cana 5D/4N",
            helper: "Nombre principal de la promoción.",
            maxLength: 60,
          },
          {
            key: "promo3Details",
            label: "Detalle complementario",
            defaultValue: "desde USD 1,569 · All Inclusive",
            helper: "Texto pequeño con condiciones o beneficios.",
            maxLength: 80,
          },
        ],
      },
    ],
  },
  {
    id: "testimonios",
    title: "Historias que inspiran",
    description: "Textos que acompañan la galería de testimonios.",
    groups: [
      {
        id: "testimonios-intro",
        title: "Textos introductorios",
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
        id: "testimonio-1",
        title: "Testimonio 1",
        description: "Mensaje que acompaña la fotografía de la pareja en la playa.",
        fields: [
          {
            key: "testimonio1Quote",
            label: "Cita destacada",
            multiline: true,
            defaultValue: "“¡Atención impecable y el mejor precio para el Caribe!”",
            helper: "Texto del bloque de cita bajo la imagen.",
            maxLength: 220,
          },
        ],
      },
      {
        id: "testimonio-2",
        title: "Testimonio 2",
        description: "Mensaje que acompaña la fotografía de la familia viajando.",
        fields: [
          {
            key: "testimonio2Quote",
            label: "Cita destacada",
            multiline: true,
            defaultValue: "“La promoción de fin de año fue real: salidas confirmadas.”",
            helper: "Texto del bloque de cita bajo la imagen.",
            maxLength: 220,
          },
        ],
      },
      {
        id: "testimonio-3",
        title: "Testimonio 3",
        description: "Mensaje que acompaña la fotografía del grupo de amigos.",
        fields: [
          {
            key: "testimonio3Quote",
            label: "Cita destacada",
            multiline: true,
            defaultValue: "“Roma y Barcelona en crucero: ¡experiencia épica!”",
            helper: "Texto del bloque de cita bajo la imagen.",
            maxLength: 220,
          },
        ],
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

const SLOT_CONTENT_BINDINGS = {
  "destinos-1": [
    { fieldKey: "destinosCard1Title", className: "slot-overlay-title", element: "h4" },
    { fieldKey: "destinosCard1Price", className: "slot-overlay-chip", element: "span" },
  ],
  "destinos-2": [
    { fieldKey: "destinosCard2Title", className: "slot-overlay-title", element: "h4" },
  ],
  "destinos-3": [
    { fieldKey: "destinosCard3Title", className: "slot-overlay-title", element: "h4" },
  ],
  "destinos-4": [
    { fieldKey: "destinosCard4Title", className: "slot-overlay-title", element: "h4" },
    { fieldKey: "destinosCard4Badge", className: "slot-overlay-chip", element: "span" },
  ],
  "destinos-5": [
    { fieldKey: "destinosCard5Title", className: "slot-overlay-title", element: "h4" },
  ],
  "destinos-6": [
    { fieldKey: "destinosCard6Title", className: "slot-overlay-title", element: "h4" },
  ],
  "promo-1": [
    { fieldKey: "promo1Badge", className: "slot-overlay-chip", element: "span" },
    { fieldKey: "promo1Title", className: "slot-overlay-title", element: "h4" },
    { fieldKey: "promo1Details", className: "slot-overlay-note", element: "p" },
  ],
  "promo-2": [
    { fieldKey: "promo2Badge", className: "slot-overlay-chip", element: "span" },
    { fieldKey: "promo2Title", className: "slot-overlay-title", element: "h4" },
    { fieldKey: "promo2Details", className: "slot-overlay-note", element: "p" },
  ],
  "promo-3": [
    { fieldKey: "promo3Badge", className: "slot-overlay-chip", element: "span" },
    { fieldKey: "promo3Title", className: "slot-overlay-title", element: "h4" },
    { fieldKey: "promo3Details", className: "slot-overlay-note", element: "p" },
  ],
};

const LIBRARY_PREVIEW_LIMIT = 4;

const form = document.getElementById("imageForm");
const libraryList = document.getElementById("libraryList");
const libraryModal = document.getElementById("libraryModal");
const libraryModalList = document.getElementById("libraryModalList");
const openLibraryModalButton = document.getElementById("openLibraryModal");
const closeLibraryModalButton = document.getElementById("closeLibraryModal");
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
let lastFocusedElementBeforeModal = null;

function getSectionFieldGroups(section) {
  if (!section) {
    return [];
  }

  if (Array.isArray(section.groups) && section.groups.length > 0) {
    return section.groups
      .map((group, index) => {
        const fields = Array.isArray(group?.fields) ? group.fields : [];
        return {
          id: group?.id || `${section.id || "section"}-group-${index}`,
          title: group?.title,
          description: group?.description,
          fields,
        };
      })
      .filter((group) => group.fields.length > 0);
  }

  if (Array.isArray(section.fields) && section.fields.length > 0) {
    return [
      {
        id: `${section.id || "section"}-group`,
        title: undefined,
        description: undefined,
        fields: section.fields,
      },
    ];
  }

  return [];
}

function getSectionFields(section) {
  return getSectionFieldGroups(section).flatMap((group) => group.fields);
}

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
    const fields = getSectionFields(section);
    const field = fields.find((item) => item.key === fieldKey);
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
    const result = commitContentSave(key, stringValue);
    if (result.changed && result.reset) {
      renderLandingSections();
    }
  }, 400);
  contentSaveTimers.set(key, timer);
}

function commitContentSave(fieldKey, value) {
  const { field } = findContentFieldByKey(fieldKey);
  if (!field) {
    return { changed: false, reset: false };
  }

  const currentContent = loadContent();
  const trimmed = value.trim();
  let updated = false;
  let reset = false;

  if (trimmed.length === 0) {
    if (Object.prototype.hasOwnProperty.call(currentContent, fieldKey)) {
      delete currentContent[fieldKey];
      updated = true;
      reset = true;
    }
  } else if (currentContent[fieldKey] !== value) {
    currentContent[fieldKey] = value;
    updated = true;
  }

  if (!updated) {
    return { changed: false, reset: false };
  }

  if (saveContent(currentContent)) {
    if (reset) {
      setContentMessage(`Se restableció el texto de "${field.label}".`, "success");
    } else {
      setContentMessage(`Texto guardado para "${field.label}".`, "success");
    }
    return { changed: true, reset };
  } else {
    setContentMessage("No se pudo guardar el texto actualizado.", "error");
    return { changed: false, reset: false };
  }
}

function saveContentImmediately(fieldKey, value) {
  if (!fieldKey) {
    return { changed: false, reset: false };
  }

  const key = String(fieldKey);
  if (contentSaveTimers.has(key)) {
    window.clearTimeout(contentSaveTimers.get(key));
    contentSaveTimers.delete(key);
  }

  return commitContentSave(key, typeof value === "string" ? value : String(value ?? ""));
}

function setupInlineContentEditor(element, options) {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  const { fieldKey, field, multiline = false, maxLength } = options || {};
  if (!fieldKey || !field) {
    return;
  }

  element.classList.add("slot-editable");
  element.setAttribute("tabindex", "0");
  element.setAttribute("role", "textbox");
  element.setAttribute("aria-label", `Editar ${field.label}`);
  element.title = `Haz doble clic para editar "${field.label}".`;

  const startEditing = () => {
    if (element.querySelector(".slot-inline-editor")) {
      return;
    }

    const currentText = element.textContent || "";
    const input = multiline ? document.createElement("textarea") : document.createElement("input");
    input.className = "slot-inline-editor";
    if (multiline) {
      input.classList.add("slot-inline-editor--multiline");
      const lineCount = currentText.split("\n").length || 1;
      input.rows = Math.min(6, Math.max(3, lineCount));
    } else {
      input.type = "text";
    }

    if (typeof maxLength === "number" && maxLength > 0) {
      input.setAttribute("maxlength", String(maxLength));
    }

    input.value = currentText;
    element.replaceChildren(input);

    window.requestAnimationFrame(() => {
      input.focus();
      if (typeof input.select === "function") {
        input.select();
      }
    });

    const finish = (shouldSave) => {
      if (!shouldSave) {
        element.textContent = currentText;
        window.requestAnimationFrame(() => {
          if (typeof element.focus === "function") {
            try {
              element.focus({ preventScroll: true });
            } catch (error) {
              element.focus();
            }
          }
        });
        return;
      }

      const nextValue = input.value;
      if (nextValue.trim() === currentText.trim()) {
        element.textContent = currentText;
        window.requestAnimationFrame(() => {
          if (typeof element.focus === "function") {
            try {
              element.focus({ preventScroll: true });
            } catch (error) {
              element.focus();
            }
          }
        });
        return;
      }

      const result = saveContentImmediately(fieldKey, nextValue);
      if (result.changed) {
        renderLandingSections();
      } else {
        element.textContent = currentText;
        window.requestAnimationFrame(() => {
          if (typeof element.focus === "function") {
            try {
              element.focus({ preventScroll: true });
            } catch (error) {
              element.focus();
            }
          }
        });
      }
    };

    input.addEventListener("blur", () => finish(true));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish(false);
      }
      if (!multiline && event.key === "Enter") {
        event.preventDefault();
        finish(true);
      }
      if (multiline && event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        finish(true);
      }
    });
  };

  element.addEventListener("dblclick", (event) => {
    event.preventDefault();
    startEditing();
  });

  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      startEditing();
    }
  });
}

function resetContentSection(sectionId) {
  const section = CONTENT_SECTIONS.find((item) => item.id === sectionId);
  if (!section) {
    return;
  }

  const fields = getSectionFields(section);
  if (fields.length === 0) {
    setContentMessage(`El bloque "${section.title}" no tiene textos configurables.`, "");
    return;
  }

  const currentContent = loadContent();
  let contentChanged = false;

  fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(currentContent, field.key)) {
      delete currentContent[field.key];
      contentChanged = true;
    }
  });

  if (!contentChanged) {
    setContentMessage(
      `El bloque "${section.title}" ya usa los textos predeterminados.`,
      ""
    );
    return;
  }

  if (!saveContent(currentContent)) {
    setContentMessage("No se pudieron restablecer los textos del bloque.", "error");
    return;
  }

  setContentMessage(`Se restablecieron los textos de "${section.title}".`, "success");
  renderLandingSections();
}

function resetAllContent() {
  const currentContent = loadContent();
  const hasContent = Object.keys(currentContent).length > 0;

  if (!hasContent) {
    setContentMessage("Aún no hay textos personalizados para restablecer.", "");
    return;
  }

  const confirmReset = window.confirm(
    "¿Restablecer todos los textos personalizados del landing page?"
  );
  if (!confirmReset) {
    return;
  }

  if (!saveContent({})) {
    setContentMessage("No se pudieron restablecer todos los textos.", "error");
    return;
  }

  setContentMessage("Todos los textos volvieron a su versión original.", "success");
  renderLandingSections();
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
    const fieldGroups = getSectionFieldGroups(contentSection);
    const hasContent = fieldGroups.length > 0;

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

    if (hasContent) {
      const column = document.createElement("div");
      column.className =
        "landing-section-column landing-section-column--content";

      const columnTitle = document.createElement("h4");
      columnTitle.textContent = "Textos personalizados";
      column.append(columnTitle);

      const fieldsWrapper = document.createElement("div");
      fieldsWrapper.className = "content-fields";

      fieldGroups.forEach((group) => {
        const groupWrapper = document.createElement("div");
        groupWrapper.className = "content-fields-group";

        const shouldFrame = Boolean(
          group.title || group.description || fieldGroups.length > 1
        );
        if (shouldFrame) {
          groupWrapper.classList.add("content-fields-group--framed");
        }

        if (group.title) {
          const groupTitle = document.createElement("h5");
          groupTitle.className = "content-fields-group__title";
          groupTitle.textContent = group.title;
          groupWrapper.append(groupTitle);
        }

        if (group.description) {
          const groupDescription = document.createElement("p");
          groupDescription.className = "admin-note content-fields-group__description";
          groupDescription.textContent = group.description;
          groupWrapper.append(groupDescription);
        }

        group.fields.forEach((field) => {
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
          groupWrapper.append(fieldWrapper);
        });

        fieldsWrapper.append(groupWrapper);
      });

      column.append(fieldsWrapper);
      columns.append(column);
    }

    if (hasSlots) {
      const column = document.createElement("div");
      column.className =
        "landing-section-column landing-section-column--media";

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

        const media = document.createElement("div");
        media.className = "slot-card__media";

        const preview = document.createElement("img");
        preview.src = currentImage?.src || slot.defaultSrc;
        preview.alt = currentImage?.alt || slot.defaultAlt;
        media.append(preview);

        const contentBindings = Array.isArray(SLOT_CONTENT_BINDINGS[slot.key])
          ? SLOT_CONTENT_BINDINGS[slot.key]
          : [];

        if (contentBindings.length > 0) {
          const overlay = document.createElement("div");
          overlay.className = "slot-card__overlay";

          contentBindings.forEach((binding) => {
            const { field } = findContentFieldByKey(binding.fieldKey);
            if (!field) {
              return;
            }

            const currentValue =
              typeof currentContent[field.key] === "string" && currentContent[field.key].trim().length > 0
                ? currentContent[field.key]
                : field.defaultValue || "";

            const overlayElement = document.createElement(binding.element || "p");
            overlayElement.textContent = currentValue;
            overlayElement.classList.add("slot-overlay-item");
            if (binding.className) {
              overlayElement.classList.add(binding.className);
            }

            overlay.append(overlayElement);

            setupInlineContentEditor(overlayElement, {
              fieldKey: field.key,
              field,
              multiline: Boolean(field.multiline),
              maxLength: field.maxLength,
            });
          });

          media.append(overlay);
        }

        card.append(media);

        const status = document.createElement("p");
        status.className = "slot-status";
        status.textContent = currentImage
          ? `Usando: ${currentImage.name}`
          : "Usando imagen predeterminada.";
        card.append(status);

        if (contentBindings.length > 0) {
          const tip = document.createElement("p");
          tip.className = "slot-tip";
          tip.textContent = "Haz doble clic en los textos sobre la imagen para personalizarlos.";
          card.append(tip);
        }

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

function buildLibraryCard(image) {
  const card = document.createElement("article");
  card.className = "library-card";

  const media = document.createElement("div");
  media.className = "library-media";

  const preview = document.createElement("img");
  preview.src = image.src;
  preview.alt = image.alt || image.name || "Imagen subida";
  media.append(preview);

  const overlay = document.createElement("div");
  overlay.className = "library-overlay";

  const badge = document.createElement("span");
  badge.className = "library-chip";
  badge.textContent = "Imagen personalizada";
  overlay.append(badge);

  const title = document.createElement("h3");
  title.textContent = image.name;
  overlay.append(title);

  if (image.alt) {
    const altPreview = document.createElement("p");
    altPreview.className = "library-overlay-text";
    altPreview.textContent = image.alt;
    overlay.append(altPreview);
  }

  media.append(overlay);
  card.append(media);

  const meta = document.createElement("div");
  meta.className = "library-meta";

  const info = document.createElement("div");
  info.className = "library-info";

  const label = document.createElement("span");
  label.className = "library-label";
  label.textContent = "Texto alternativo";
  info.append(label);

  const alt = document.createElement("p");
  alt.className = "library-alt";
  if (!image.alt) {
    alt.classList.add("is-placeholder");
  }
  alt.textContent = image.alt || "Sin texto alternativo";
  info.append(alt);

  const actions = document.createElement("div");
  actions.className = "library-actions";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "library-delete";
  deleteButton.innerHTML =
    '<span class="library-delete-icon" aria-hidden="true">🗑</span><span>Eliminar</span>';
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
  meta.append(info, actions);
  card.append(meta);

  return card;
}

function renderLibraryPreview(library) {
  if (!libraryList) {
    return;
  }

  libraryList.innerHTML = "";

  if (library.length === 0) {
    const empty = document.createElement("p");
    empty.className = "admin-note library-empty";
    empty.textContent = "Aún no has agregado imágenes personalizadas.";
    libraryList.append(empty);
    return;
  }

  const previewItems = library.slice(0, LIBRARY_PREVIEW_LIMIT);
  previewItems.forEach((image) => {
    const card = buildLibraryCard(image);
    card.classList.add("library-card--preview");
    libraryList.append(card);
  });

  if (library.length > previewItems.length) {
    const extraCount = library.length - previewItems.length;
    const moreCard = document.createElement("article");
    moreCard.className = "library-card library-card--more";

    const moreButton = document.createElement("button");
    moreButton.type = "button";
    moreButton.className = "library-more-btn";
    moreButton.innerHTML = `
      <span class="library-more-count">+${extraCount}</span>
      <span class="library-more-label">${
        extraCount === 1 ? "imagen guardada" : "imágenes guardadas"
      }</span>
      <span class="library-more-action">Abrir biblioteca</span>
    `;
    moreButton.addEventListener("click", openLibraryModal);

    moreCard.append(moreButton);
    libraryList.append(moreCard);
  }
}

function renderLibraryModal(library) {
  if (!libraryModalList) {
    return;
  }

  libraryModalList.innerHTML = "";

  if (library.length === 0) {
    const empty = document.createElement("p");
    empty.className = "admin-note";
    empty.textContent = "Aún no has agregado imágenes personalizadas.";
    libraryModalList.append(empty);
    return;
  }

  library.forEach((image) => {
    const card = buildLibraryCard(image);
    libraryModalList.append(card);
  });
}

function updateLibraryControls(library) {
  if (!openLibraryModalButton) {
    return;
  }

  if (library.length === 0) {
    openLibraryModalButton.disabled = true;
    openLibraryModalButton.setAttribute("aria-disabled", "true");
  } else {
    openLibraryModalButton.disabled = false;
    openLibraryModalButton.removeAttribute("aria-disabled");
  }
}

function renderLibrary() {
  const library = loadLibrary();
  renderLibraryPreview(library);
  renderLibraryModal(library);
  updateLibraryControls(library);
}

function handleLibraryKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeLibraryModal();
  }
}

function openLibraryModal() {
  if (!libraryModal) {
    return;
  }

  if (libraryModal.classList.contains("is-open")) {
    return;
  }

  const activeElement = document.activeElement;
  if (activeElement instanceof HTMLElement) {
    lastFocusedElementBeforeModal = activeElement;
  } else {
    lastFocusedElementBeforeModal = null;
  }

  libraryModal.classList.add("is-open");
  libraryModal.removeAttribute("hidden");
  libraryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  libraryModal.addEventListener("keydown", handleLibraryKeydown);

  if (closeLibraryModalButton) {
    window.requestAnimationFrame(() => {
      try {
        closeLibraryModalButton.focus();
      } catch (error) {
        // No se requiere manejo especial si el enfoque falla.
      }
    });
  }
}

function closeLibraryModal() {
  if (!libraryModal) {
    return;
  }

  if (!libraryModal.classList.contains("is-open")) {
    return;
  }

  libraryModal.classList.remove("is-open");
  libraryModal.setAttribute("aria-hidden", "true");
  libraryModal.setAttribute("hidden", "");
  document.body.classList.remove("no-scroll");
  libraryModal.removeEventListener("keydown", handleLibraryKeydown);

  const focusTarget = lastFocusedElementBeforeModal;
  lastFocusedElementBeforeModal = null;
  if (focusTarget && typeof focusTarget.focus === "function") {
    try {
      focusTarget.focus();
    } catch (error) {
      // Ignorar si el elemento ya no es enfocable.
    }
  }
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

if (openLibraryModalButton) {
  openLibraryModalButton.addEventListener("click", openLibraryModal);
}

if (closeLibraryModalButton) {
  closeLibraryModalButton.addEventListener("click", closeLibraryModal);
}

if (libraryModal) {
  libraryModal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.dataset.closeModal === "library" || target === libraryModal) {
      closeLibraryModal();
    }
  });
}

renderLibrary();
renderLandingSections();
setupOverviewNavigation();
