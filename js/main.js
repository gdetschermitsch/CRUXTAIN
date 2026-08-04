t// ========================
// CRUXTAIN Products JS
// Categorized products + placeholders
// ========================

const categoryOrder = ["html5", "videoGameMods", "addons", "writings"];

const categoryMeta = {
  addons: {
    title: "UPBGE 3.6 / Blender 3.6 Addons",
    description: "Production tools and workflow add-ons for Blender 3.6 and UPBGE 3.6."
  },
  writings: {
    title: "Writings Archive",
    description: "Archive.org writings, theology resources, and CRUXTAIN™ published works."
  },
  html5: {
    title: "HTML5 Programs and Games",
    description: "Interactive tools, browser programs, and game projects."
  },
  videoGameMods: {
    title: "Video Game Mods",
    description: "Game modification projects and released mod downloads for supported titles."
  },
  projects: {
    title: "Projects",
    description: "Coming-soon products, trailers, updates, and CRUXTAIN news."
  }
};

const productsData = {
  // ===== Blender / UPBGE Addons =====
  triIconMaker: {
    category: "addons",
    title: "Tri-IconMaker",
    description: "The Tri-IconMaker addon for Blender 3.6, developed by CRUX-TAIN™, provides a streamlined interface for creating, managing, and using custom icons within Blender’s UI. It maintains a dedicated folder for storing PNG icons and a preview collection for efficient access. Users can import new icons, rename existing ones, and permanently delete unwanted icons through intuitive operators. The addon automatically loads and unloads icons as needed, ensuring that changes are reflected in Blender’s interface. All icons are displayed in a sidebar panel in the 3D View, where users can quickly manage their library and apply custom icons to their own addons using the custom_icon helper function. This makes it a centralized solution for integrating personalized visuals into Blender’s workflow.",
    image: "assets/images/triIconMaker.jpeg",
    gif: "assets/gifs/triIconMaker.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_IconMaker?_gl=1*ihh42*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcwODQkajUwJGwwJGgw"
  },

  triEditTools: {
    category: "addons",
    title: "Tri-EditTools",
    description: "The Tri-EditTools add-on for Blender 3.6, authored by CRUX-TAIN™, provides a comprehensive suite of mesh editing utilities all accessible from a single N-panel in the 3D View. It consolidates common edit mode operations, including selection tools, mesh cleanup tools, and face and geometry modification operators. Additional tools include mirrored selection across axes, measurement, annotation, loop cut, and knife operations. The add-on also features a Hole Manager panel to navigate, select, and manage mesh holes efficiently.",
    image: "assets/images/triEditTools.jpeg",
    gif: "assets/gifs/triEditTools.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_EditTools?_gl=1*1htvkdz*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcwOTEkajQzJGwwJGgw"
  },

  triCarver: {
    category: "addons",
    title: "Tri-Carver",
    description: "The Tri-Carver add-on for Blender 3.6, authored by CRUX-TAIN™, is a mesh editing tool that enables users to apply Boolean Difference operations directly in Edit Mode using a selected carver object. It provides an operator to perform the Boolean difference on the active object while optionally hiding or deleting the carver after application. Tri-Carver streamlines non-destructive mesh carving workflows by allowing quick subtraction of complex shapes without leaving Edit Mode.",
    image: "assets/images/triCarver.jpeg",
    gif: "assets/gifs/triCarver.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_Carver?_gl=1*1w6ibx0*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcxNjIkajYwJGwwJGgw"
  },

  triCombine: {
    category: "addons",
    title: "Tri-Combine",
    description: "Tri-Combine is a streamlined Boolean-combination tool for Blender 3.6 that lets you merge, subtract, or intersect multiple selected objects directly into the active object with a single action. It automatically handles mesh conversion, temporary duplicates, modifier application, and cleanup, and it gives you the choice to preserve your original models or perform destructive merges.",
    image: "assets/images/triCombine.jpeg",
    gif: "assets/gifs/triCombine.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_Combine?_gl=1*1xcamjq*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcxODMkajM5JGwwJGgw"
  },

  triCurserTools: {
    category: "addons",
    title: "Tri-CursorTools",
    description: "Tri-Cursor Tools gives Blender 3.6 a compact little command center for anything involving the 3D cursor and object transforms. It lets you snap the cursor to the world origin, to a selection, or move selected objects straight to the cursor with one click. It also handles object housekeeping by applying location, rotation, and scale instantly, and gives quick access to origin management.",
    image: "assets/images/triCurserTools.jpeg",
    gif: "assets/gifs/triCurserTools.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_CursorTools?_gl=1*1xd9lt3*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcxODYkajM2JGwwJGgw"
  },

  triModifierLink: {
    category: "addons",
    title: "Tri-ModifierLink",
    description: "Tri-ModifierLink is built to spare you the tedium of recreating modifier stacks by hand. It lets you pick any object in your scene that already has modifiers and copy either its entire stack or a single chosen modifier onto another compatible object.",
    image: "assets/images/triModifierLink.jpeg",
    gif: "assets/gifs/triModifierLink.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_ModifierLink?_gl=1*ipzm2q*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU1NjI5NzckbzYkZzEkdDE3NjU1NjcyNDUkajYwJGwwJGgw"
  },

  triPBSDF: {
    category: "addons",
    title: "Tri-PBSDF",
    description: "Tri-PBSDF is a material-tuning add-on built to give Blender 3.6 users immediate, hands-on control over Principled BSDF settings without the usual node-tree digging. It adds live-updating sliders for specular, roughness, emission, alpha, and emission color, plus quick-toggle operators for material display behaviors.",
    image: "assets/images/triPBSDF.jpeg",
    gif: "assets/gifs/triPBSDF.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri_PBSDF?_gl=1*d85azw*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NjU2MDQwMTEkbzExJGcxJHQxNzY1NjA0MzAzJGo2MCRsMCRoMA.."
  },

  triUV: {
    category: "addons",
    title: "Tri-UV",
    description: "Tri-UV is a compact UV-tooling addon for Blender 3.6 that automatically unwraps any mesh into a clean six-tile orthographic UV layout, giving each side of the object its own equal, non-overlapping UV island.",
    image: "assets/images/triUV.jpeg",
    gif: "assets/gifs/triUV.gif",
    link: "https://gdetchermitsch.gumroad.com/l/Tri-UV?_gl=1*b0rvdt*_ga*MTc0NzQyNTE0NS4xNzYxMjU1NDc4*_ga_6LJN6D94N6*czE3NzY3MzU2ODkkbzQ1JGcxJHQxNzc2NzM1NzIxJGoyOCRsMCRoMA.."
  },

  triStamp: {
    category: "addons",
    title: "Tri-Stamp",
    description: "Tri-Stamp is a texture-painting companion built to turn any PNG into a fully formed Blender brush, complete with size, rotation, falloff, and placement controls. It lets you load or swap PNGs on the fly, generate new brushes with custom names, and refine image properties directly in Blender.",
    image: "assets/images/triStamp.jpeg",
    gif: "assets/gifs/triStamp.gif",
    link: "#"
  },

  triEasyNormal: {
    category: "addons",
    title: "Tri-EasyNormal",
    description: "The Tri-EasyNormal add-on for Blender 3.6 is a streamlined tool for converting grayscale height maps into normal maps with real-time previews and adjustment controls.",
    image: "assets/images/triEasyNormal.jpeg",
    gif: "assets/gifs/triEasyNormal.gif",
    link: "#"
  },

  triAniCat: {
    category: "addons",
    title: "Tri-AniCat",
    description: "The Tri-AniCat™ Blender 3.6 add-on is a procedural FK animation tool designed for detailed, per-axis control of armature bones. It supports custom bone categories, live previews, and baking procedural motion into actions.",
    image: "assets/images/triAniCat.jpeg",
    gif: "assets/gifs/triAniCat.gif",
    link: "#"
  },

  triBoneSet: {
    category: "addons",
    title: "Tri-BoneSet",
    description: "The Tri-BoneSet Blender 3.6 addon is a comprehensive rigging tool designed to streamline bone creation and armature setup.",
    image: "assets/images/triBoneSet.jpeg",
    gif: "assets/gifs/triBoneSet.gif",
    link: "#"
  },

  triIK: {
    category: "addons",
    title: "Tri-IK",
    description: "The Tri-IK Blender 3.6 add-on by CRUX-TAIN™ provides a comprehensive suite of rigging tools focused on bone parenting and inverse kinematics workflows.",
    image: "assets/images/triIK.jpeg",
    gif: "assets/gifs/triIK.gif",
    link: "#"
  },

  triSKM: {
    category: "addons",
    title: "Tri-SKM",
    description: "The Tri-SKM add-on for Blender 3.6 is a streamlined N-panel tool for managing shape keys and their associated animations.",
    image: "assets/images/triSKM.jpeg",
    gif: "assets/gifs/triSKM.gif",
    link: "#"
  },

  triBluePrint: {
    category: "addons",
    title: "Tri-BluePrint",
    description: "The Tri-BluePrint Blender 3.6 add-on allows users to generate object layouts directly from PNG blueprint images by mapping colors to specific objects.",
    image: "assets/images/triBluePrint.jpeg",
    gif: "assets/gifs/triBluePrint.gif",
    link: "#"
  },

  triMazeGen: {
    category: "addons",
    title: "TRI-MazeGen",
    description: "The Tri-MazeGen addon for Blender 3.6 is a procedural mesh generator designed to create customizable mazes with a single-object workflow.",
    image: "assets/images/triMazeGen.jpeg",
    gif: "assets/gifs/triMazeGen.gif",
    link: "#"
  },

  triSceneManagers: {
    category: "addons",
    title: "Tri-SceneManagers",
    description: "The Tri-SceneManagers add-on for Blender 3.6 provides a comprehensive suite of tools to manage all core scene data types directly from the 3D View sidebar.",
    image: "assets/images/triSceneManagers.jpeg",
    gif: "assets/gifs/triSceneManagers.gif",
    link: "#"
  },

  triTeeGen: {
    category: "addons",
    title: "Tri-TreeGen",
    description: "The Tri-TreeGen Blender 3.6 add-on is a procedural tree generation tool that allows users to create customizable trees directly in the viewport.",
    image: "assets/images/triTreeGen.jpeg",
    gif: "assets/gifs/triTreeGen.gif",
    link: "#"
  },

  triAnimaterial: {
    category: "addons",
    title: "Tri-Animaterial",
    description: "The Tri-Animaterial add-on for Blender 3.6 (UPBGE) provides a streamlined workflow for converting GIFs into UV-animated materials and integrating them into the game engine.",
    image: "assets/images/triAnimaterial.jpeg",
    gif: "assets/gifs/triAnimaterial.gif",
    link: "#"
  },

  triBrickBox: {
    category: "addons",
    title: "Tri-BrickBox",
    description: "The Tri-BrickBox add-on for Blender 3.6 (UPBGE) provides a streamlined interface for managing logic bricks on selected objects.",
    image: "assets/images/triBrickBox.jpeg",
    gif: "assets/gifs/triBrickBox.gif",
    link: "#"
  },

  triOBJPROP: {
    category: "addons",
    title: "Tri-Obj Prop Manager",
    description: "The Tri-Obj Prop Manager is a comprehensive UPBGE 3.6 add-on designed to streamline management of logic-brick game properties directly within Blender’s 3D View sidebar.",
    image: "assets/images/triOBJPROP.jpeg",
    gif: "assets/gifs/triOBJPROP.gif",
    link: "#"
  },

  triParticle: {
    category: "addons",
    title: "Tri-Particle",
    description: "The Tri-Particle add-on for Blender 3.6 is a bone-driven procedural particle system that converts each bone of an armature into a quad particle for controllable 3D particle grids.",
    image: "assets/images/triParticle.jpeg",
    gif: "assets/gifs/triParticle.gif",
    link: "#"
  },

  // ===== Writings Archive =====
  yhwhLogic: {
    category: "writings",
    title: "YHWH LOGIC",
    description: "Core metaphysical system defining the Heavenly Logic of the Trinity and the principles of Seven.",
    image: "assets/images/yhwhLogic.jpeg",
    gif: "assets/gifs/yhwhLogic.gif",
    link: "https://archive.org/details/God_logic_1"
  },

  sevenSealsWitness: {
    category: "writings",
    title: "7 Seals Witness",
    description: "A structured witness of the seven pillars of divine logic and an examination of the consequences that follow from knowing Unity, Distinction, and Relation.",
    image: "assets/images/sevenSealsWitness.jpeg",
    gif: "assets/gifs/sevenSealsWitness.gif",
    link: "https://archive.org/details/God_logic_2"
  },

  triLiteralization: {
    category: "writings",
    title: "Tri Literal Ization – The Heavenly Root Structure Of All Things",
    description: "A structural analysis of creation’s triadic root logic: Unity, Distinction, Relation.",
    image: "assets/images/triLiteralization.jpeg",
    gif: "assets/gifs/triLiteralization.gif",
    link: "https://archive.org/details/God_logic_3"
  },

  godLogic: {
    category: "writings",
    title: "God Logic",
    description: "An exploration of divine logic, order, and metaphysical structure tailored for critical thinkers and laymen.",
    image: "assets/images/godLogic.jpeg",
    gif: "assets/gifs/godLogic.gif",
    link: "https://archive.org/details/God_logic_4"
  },

  theologyPhilosophyStories: {
    category: "writings",
    title: "Theology, Philosophy & Stories",
    description: "An ongoing archive built on the YHWH Logic 7-Seal Framework, intended to diagnose philosophical confusion, theological distortion, and false systems.",
    image: "assets/images/theologyPhilosophyStories.jpeg",
    gif: "assets/gifs/theologyPhilosophyStories.gif",
    link: "https://archive.org/details/God_logic_Entries"
  },

  // ===== HTML5 Placeholders =====
  html5Placeholder0: {
    category: "html5",
    title: "PortfolioViewerGageD",
    description: "Gage D multi media portfolio",
    image: "assets/images/PortfolioViewer.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/PortfolioViewerV1/#home",
    placeholder: false
  },
    html5Placeholder00: {
    category: "html5",
    title: "Melodicaine",
    description: "Melodicaine is a music-library experience for mp3 and dtt file listeners, provides a dedicated place to organize and play music.",
    image: "assets/images/Melodicaine.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/Melodicaine/",
    placeholder: false
  },
  html5Placeholder1: {
    category: "html5",
    title: "SanityVideo",
    description: "Sanity Video is a web browser video editor",
    image: "assets/images/SanityVideoTitle.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/SanityVideo/",
    placeholder: false
  },
  html5Placeholder2: {
    category: "html5",
    title: "NeutralNote",
    description: "A debate, discourse tool to gather transcript and gaher sound bites from Discourse and debate sessions.",
    image: "assets/images/NeutralNoteTitle.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/NeutralNote/",
    placeholder: false
  },
  html5Placeholder3: {
    category: "html5",
    title: "ViZShow",
    description: "A background Gif, video or preset visualizer.",
    image: "assets/images/ViZShowTitle.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/ViZShow/",
    placeholder: false
  },
  html5Placeholder4: {
    category: "html5",
    title: "StickyMesh",
    description: "A unique 3D modeling web editor.",
    image: "assets/images/StickyMesh.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/StickyMesh/",
    placeholder: false
  },
  html5Placeholder5: {
    category: "html5",
    title: "NoteKnower",
    description: "A program for vocal and instrument training and note detection. Midi control feature coming soon.",
    image: "assets/images/Project3.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/NoteKnowerV1A/",
    placeholder: false
  },
  // ===== Video Game Mods =====
  subnauticaMod: {
    category: "videoGameMods",
    title: "Subnautica",
    description: "Subnautica-Concept-art-posters",
    image: "assets/images/subnauticamod.jpeg",
    gif: "",
    link: "https://www.nexusmods.com/subnautica/mods/2660",
    placeholder: false
  },

  devilMayCryMod: {
    category: "videoGameMods",
    title: "Devil May Cry (DMC) Skins",
    description: "texture replacements for DMC",
    image: "assets/images/Reaperskin.png",
    gif: "",
    link: "https://www.nexusmods.com/profile/CRUXTAIN/mods?gameId=281",
    placeholder: false
  },

  coreKeeperMod: {
    category: "videoGameMods",
    title: "CoreKeeper",
    description: "A Brand new mod for the game CoreKeeper for steam. The mod is a local texture swapper and menu.",
    image: "assets/images/CoreSwapperv1A.png",
    gif: "",
    link: "https://www.nexusmods.com/corekeeper/mods/5",
    placeholder: false
  },

  // ===== Projects Placeholders =====
  projectsPlaceholder1: {
    category: "projects",
    title: "Projects / Trailers / News",
    description: "This section is reserved for coming-soon products, teaser trailers, development clips, and CRUXTAIN news updates. Video clips and summaries will be added here as they are prepared.",
    image: "assets/images/Project1.png",
    gif: "",
    link: "#",
    placeholder: false
  },
  
  projectsPlaceholder2: {
    category: "projects",
    title: "Mobile Browser Compatibility",
    description: "Now the html5 programs and games will begin to include mobile browser support. Programs will have mobile browser compatibility in the desktop versions. Programs created for browser compatibility will be found here: List-Melodicaine-ready, Portfolio- ready, SanityVideo- not ready, VizShow- ready, NeutralNote- Beta ready, StickyMesh- ready Note Knower-Beta ready.",
    image: "assets/images/Project2.png",
    gif: "",
    link: "#",
    placeholder: false
  },
  projectsPlaceholder3: {
    category: "projects",
    title: "NoteKnowerV2B",
    description: "A new program for vocal and instrument training, note detection and now Midi control feature.",
    image: "assets/images/Project3.png",
    gif: "",
    link: "https://gdetschermitsch.github.io/NoteKnowerV2B/",
    placeholder: false
  },
  
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const featuredConfig = {
  current: "html5Placeholder00",
  project: "projectsPlaceholder3",
  product: "coreKeeperMod"
};

function getProductsByCategory(categoryKey) {
  return Object.entries(productsData)
    .filter(([, product]) => product.category === categoryKey)
    .map(([key, product]) => ({ id: key, ...product }));
}

function createMediaMarkup(prod) {
  if (prod.placeholder || (!prod.image && !prod.gif)) {
    return `<div class="project-media empty-media"><div class="placeholder-badge">Coming Soon</div></div>`;
  }

  const imageMarkup = prod.image
    ? `<img src="${prod.image}" alt="${prod.title} image" class="project-image">`
    : "";

  const gifMarkup = prod.gif
    ? `<img src="${prod.gif}" alt="${prod.title} preview" class="project-gif">`
    : "";

  return `<div class="project-media">${imageMarkup}${gifMarkup}</div>`;
}

function getInternalDetailHref(prod, id) {
  if (prod.category === "projects") {
    return `projects.html?project=${id}`;
  }
  return `products.html?product=${id}`;
}

function createActionMarkup(prod, id, label = "View Product") {
  if (prod.placeholder || !prod.link || prod.link === "#") {
    return `<span class="button-like disabled-link">Coming Soon</span>`;
  }

  return `<a href="${getInternalDetailHref(prod, id)}" class="button-link">${label}</a>`;
}

function displayProduct() {
  const productId = getQueryParam("product");
  const projectId = getQueryParam("project");
  const activeId = productId || projectId;
  const container = document.getElementById("productDisplay") || document.getElementById("projectsContainer");

  if (!container || !activeId) return false;
  if (!productsData[activeId]) return false;

  const prod = productsData[activeId];

  const externalLink = prod.link && prod.link !== "#"
    ? `<p><a href="${prod.link}" target="_blank" rel="noopener noreferrer" class="button-link">Download / Learn More</a></p>`
    : `<p><span class="button-like disabled-link">Coming Soon</span></p>`;

  container.innerHTML = `
    <article class="project single-product-card">
      <div class="project-info">
        <p class="category-tag">${categoryMeta[prod.category].title}</p>
        <h2>${prod.title}</h2>
        <p>${prod.description}</p>
        ${externalLink}
      </div>
      ${createMediaMarkup(prod)}
    </article>
  `;

  return true;
}

function normalizeSearchValue(value) {
  return (value || "").toLowerCase().trim();
}

function productMatchesSearch(prod, searchTerm, categoryKey) {
  if (!searchTerm) return true;

  const meta = categoryMeta[categoryKey] || { title: "", description: "" };
  const haystack = [
    prod.title,
    prod.description,
    meta.title,
    meta.description,
    prod.category
  ].join(" ").toLowerCase();

  return haystack.includes(searchTerm);
}

function createProductCardMarkup(prod) {
  const label = prod.category === "projects" ? "View Project" : "View Product";

  return `
    <article class="project">
      ${createMediaMarkup(prod)}
      <div class="project-info">
        <h3>${prod.title}</h3>
        <p>${prod.description}</p>
        ${createActionMarkup(prod, prod.id, label)}
      </div>
    </article>
  `;
}

function generateAllProducts(searchTerm = "") {
  const container = document.getElementById("productsContainer");
  const status = document.getElementById("searchStatus");

  if (!container) return;

  const normalizedSearch = normalizeSearchValue(searchTerm);
  container.innerHTML = "";
  let visibleCount = 0;

  categoryOrder.forEach((categoryKey) => {
    const meta = categoryMeta[categoryKey];
    const items = getProductsByCategory(categoryKey).filter((prod) =>
      productMatchesSearch(prod, normalizedSearch, categoryKey)
    );

    if (!items.length) return;

    const categorySection = document.createElement("section");
    categorySection.className = "product-category";

    const itemsMarkup = items.map((prod) => createProductCardMarkup(prod)).join("");
    visibleCount += items.length;
categorySection.innerHTML = `
  <div class="category-header collapsible-header" role="button" aria-expanded="false" tabindex="0">
    <div class="category-header-inner">
      <h2>${meta.title}</h2>
      <span class="category-toggle-indicator">▶</span>
    </div>
    <p>${meta.description}</p>
  </div>
  <div class="category-grid collapsed">
    ${itemsMarkup}
  </div>
`;

    const header = categorySection.querySelector(".collapsible-header");
    const grid = categorySection.querySelector(".category-grid");
    const indicator = categorySection.querySelector(".category-toggle-indicator");

    const toggleCategory = () => {
      const isCollapsed = grid.classList.toggle("collapsed");
      header.setAttribute("aria-expanded", (!isCollapsed).toString());
      indicator.textContent = isCollapsed ? "▶" : "▼";
    };

    header.addEventListener("click", toggleCategory);
    header.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCategory();
      }
    });

    container.appendChild(categorySection);
  });

  if (!visibleCount) {
    container.innerHTML = `
      <article class="project no-results-card">
        <div class="project-info">
          <h3>No matching products</h3>
          <p>Try a different search term.</p>
        </div>
      </article>
    `;
  }

  if (status) {
    status.textContent = normalizedSearch
      ? `Showing ${visibleCount} matching product${visibleCount === 1 ? "" : "s"} for “${searchTerm.trim()}”.`
      : "Showing all products.";
  }
}

function initProductSearch() {
  const searchInput = document.getElementById("productSearch");
  if (!searchInput) return;

  generateAllProducts(searchInput.value);

  searchInput.addEventListener("input", (event) => {
    generateAllProducts(event.target.value);
  });
}

function generateProjectsPage() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;
  if (displayProduct()) return;

  const meta = categoryMeta.projects;
  const items = getProductsByCategory("projects");
  const itemsMarkup = items.map((prod) => createProductCardMarkup(prod)).join("");

  container.innerHTML = `
    <section class="product-category">
      <div class="category-header">
        <h2>${meta.title}</h2>
        <p>${meta.description}</p>
      </div>
      <div class="category-grid">
        ${itemsMarkup}
      </div>
    </section>
  `;
}

function createFeaturedCardMarkup(prod, label) {
  return `
    <article class="project featured-card">
      ${createMediaMarkup(prod)}
      <div class="project-info">
        <p class="category-tag">${label}</p>
        <h3>${prod.title}</h3>
        <p>${prod.description}</p>
        ${createActionMarkup(prod, prod.id, prod.category === "projects" ? "View Project" : "View Product")}
      </div>
    </article>
  `;
}

function renderHomeFeatured() {
  const container = document.getElementById("featuredProjects");
  if (!container) return;

  const ids = [featuredConfig.current, featuredConfig.project, featuredConfig.product].filter(Boolean);

  const cards = ids
    .map((id, index) => {
      const prod = productsData[id];
      if (!prod) return "";

      const label = index === 0
        ? "Current Feature"
        : (prod.category === "projects" ? "Project Feature" : "Product Feature");

      return createFeaturedCardMarkup({ id, ...prod }, label);
    })
    .filter(Boolean)
    .join("");

  container.innerHTML = cards || `
    <article class="project no-results-card">
      <div class="project-info">
        <h3>No featured items yet</h3>
      </div>
    </article>
  `;
}

function setActiveNav() {
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("nav a").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active-nav");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayProduct();
  generateAllProducts();
  initProductSearch();
  generateProjectsPage();
  renderHomeFeatured();
  setActiveNav();
});
