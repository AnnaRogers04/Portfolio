/**
 * @file Project data helpers for the portfolio site.
 * The same functions are used by the browser (js/main.js) and documented
 * automatically by JSDoc in the GitHub Actions workflow.
 * @module projects
 */

/**
 * A single portfolio project.
 * @typedef {Object} Project
 * @property {string} title - Display name of the project.
 * @property {string} summary - One or two sentence description.
 * @property {number} [year] - Year the project was made (optional).
 * @property {string[]} tags - Category tags, e.g. "puzzle" or "action".
 * @property {string} url - Link to the project (here, its itch.io page).
 * @property {string} image - Thumbnail image URL (here, the itch.io cover image).
 */

/**
 * The projects shown on the Projects page, taken from my itch.io profile
 * (https://lunarlynx-games.itch.io/). Edit this list to update the site.
 * @type {Project[]}
 */
export const projects = [
  {
    title: "The Lantern Keeper",
    summary: "An action game you can play right in your browser.",
    tags: ["action"],
    url: "https://lunarlynx-games.itch.io/lantern",
    image: "https://img.itch.zone/aW1nLzMwNjI4NTcxLnBuZw==/original/qmBIB%2B.png",
  },
  {
    title: "Grave Robbing",
    summary: "You play as a ghost trying to figure out how you died during a bank heist.",
    tags: ["story"],
    url: "https://lunarlynx-games.itch.io/grave-robbing",
    image: "https://img.itch.zone/aW1nLzIxMjk1MDg0LnBuZw==/original/Vy3MvZ.png",
  },
  {
    title: "The Quarry - Bizarre Yet Bonafide",
    summary: "A student-made game created by a group of nine people.",
    tags: ["group"],
    url: "https://lunarlynx-games.itch.io/thequarrystudentinspired",
    image: "https://img.itch.zone/aW1nLzIwNjM4MDYxLnBuZw==/original/NlEePA.png",
  },
  {
    title: "Gems Of Time",
    summary: "Find all the gems to escape the dungeon.",
    tags: ["puzzle"],
    url: "https://lunarlynx-games.itch.io/gems-of-time",
    image: "https://img.itch.zone/aW1nLzE5NjIyNjYyLmpwZw==/original/R%2BIY%2Bn.jpg",
  },
];

/**
 * Return only the projects that include a given tag.
 * Passing "all" (or an empty string) returns every project.
 *
 * @param {Project[]} list - The projects to filter.
 * @param {string} tag - The tag to match, case-insensitive.
 * @returns {Project[]} A new array of matching projects.
 * @example
 * filterByTag(projects, "puzzle"); // -> every project tagged "puzzle"
 */
export function filterByTag(list, tag) {
  if (!tag || tag.toLowerCase() === "all") return [...list];
  const wanted = tag.toLowerCase();
  return list.filter((p) => p.tags.some((t) => t.toLowerCase() === wanted));
}

/**
 * Sort projects from newest to oldest. Projects without a year keep their
 * original order. Does not change the original array.
 *
 * @param {Project[]} list - The projects to sort.
 * @returns {Project[]} A new, sorted array.
 */
export function sortNewestFirst(list) {
  return [...list].sort((a, b) => (b.year || 0) - (a.year || 0));
}

/**
 * Collect every unique tag used across a list of projects.
 *
 * @param {Project[]} list - The projects to scan.
 * @returns {string[]} Alphabetically sorted unique tags.
 */
export function getAllTags(list) {
  return [...new Set(list.flatMap((p) => p.tags))].sort();
}
