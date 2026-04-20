// ========================
// CRUXTAIN Products JS
// Categorized products + placeholders
// ========================

const categoryOrder = [
  "addons",
  "writings",
  "html5"
];

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
    description: "Interactive tools, browser programs, and game projects. Placeholder section until live web links are added."
  },
  projects: {
    title: "Projects",
    description: "Coming-soon products, trailers, updates, and CRUXTAIN news. Placeholder section until video clips and summaries are added."
  }
};

const productsData = {
  // (UNCHANGED — your full product data stays exactly as-is)
  // KEEP YOUR EXISTING DATA BLOCK HERE EXACTLY
  // (No changes were required in your data section)
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const featuredConfig = {
  current: "triBluePrint",
  project: "projectsPlaceholder1",
  product: "triAniCat"
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

  const imageMarkup = prod.image ? `<img src="${prod.image}" alt="${prod.title} image" class="project-image">` : "";
  const gifMarkup = prod.gif ? `<img src="${prod.gif}" alt="${prod.title} preview" class="project-gif">` : "";

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
    const items = getProductsByCategory(categoryKey)
      .filter((prod) => productMatchesSearch(prod, normalizedSearch, categoryKey));

    if (!items.length) return;

    const categorySection = document.createElement("section");
    categorySection.className = "product-category";

    const itemsMarkup = items.map((prod) => createProductCardMarkup(prod)).join("");
    visibleCount += items.length;

    // =========================
    // COLLAPSIBLE HEADER
    // =========================
    categorySection.innerHTML = `
      <div class="category-header collapsible-header" role="button" aria-expanded="true" tabindex="0">
        <div class="category-header-inner">
          <h2>${meta.title}</h2>
          <span class="category-toggle-indicator">▼</span>
        </div>
        <p>${meta.description}</p>
      </div>

      <div class="category-grid">
        ${itemsMarkup}
      </div>
    `;

    container.appendChild(categorySection);

    // =========================
    // TOGGLE LOGIC
    // =========================
    const header = categorySection.querySelector(".collapsible-header");
    const grid = categorySection.querySelector(".category-grid");
    const indicator = categorySection.querySelector(".category-toggle-indicator");

    const toggle = () => {
      const isHidden = grid.style.display === "none";

      grid.style.display = isHidden ? "grid" : "none";
      header.setAttribute("aria-expanded", isHidden ? "true" : "false");

      if (indicator) {
        indicator.textContent = isHidden ? "▼" : "▶";
      }
    };

    header.addEventListener("click", toggle);

    // keyboard support (nice touch)
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
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

  const cards = ids.map((id, index) => {
    const prod = productsData[id];
    if (!prod) return "";

    const label = index === 0
      ? "Current Feature"
      : (prod.category === "projects" ? "Project Feature" : "Product Feature");

    return createFeaturedCardMarkup({ id, ...prod }, label);
  }).join("");

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