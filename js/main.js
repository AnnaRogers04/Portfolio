import { projects, filterByTag, sortNewestFirst, getAllTags } from "../src/projects.js";

const grid = document.getElementById("project-grid");
const filters = document.getElementById("filters");

function renderCards(list) {
  grid.innerHTML = "";
  sortNewestFirst(list).forEach((p) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = p.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.innerHTML = `
      <img class="thumb" src="${p.image}" alt="${p.title} cover image" loading="lazy">
      <div class="card-body">
        ${p.year ? `<span class="card-year">${p.year}</span>` : ""}<h3>${p.title}</h3><span class="card-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join(" ")}</span>
        <p>${p.summary}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderFilters() {
  ["all", ...getAllTags(projects)].forEach((tag, i) => {
    const btn = document.createElement("button");
    btn.textContent = tag;
    btn.className = "filter" + (i === 0 ? " active" : "");
    btn.addEventListener("click", () => {
      filters.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(filterByTag(projects, tag));
    });
    filters.appendChild(btn);
  });
}

renderFilters();
renderCards(projects);
