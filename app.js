const articles = [
  {
    id: "aurora", title: "Aurora", category: "Nature", icon: "🌌", art: "art-aurora",
    summary: "A luminous display in the sky, painted by charged particles from the Sun.",
    intro: "An aurora is a natural light display in Earth's sky, most often seen in high-latitude regions. Curtains of green, pink, and violet light ripple across the night as our planet's magnetic field guides charged particles toward the atmosphere.",
    sections: [
      ["How auroras form", "The Sun continually sends a stream of charged particles into space. When some of these particles encounter Earth's magnetic field, they are guided toward the polar regions. There they collide with gases high in the atmosphere, transferring energy that the gases release as light."],
      ["A changing palette", "The colour of an aurora depends largely on which gas is involved and how high the collision happens. Oxygen often produces green light, while higher-altitude oxygen can glow red. Nitrogen can add shades of blue and purple."],
      ["Northern and southern lights", "Auroras occur around both magnetic poles. In the north the display is called the aurora borealis, or northern lights; around the south it is known as the aurora australis."]
    ]
  },
  {
    id: "moon", title: "The Moon", category: "Science", icon: "🌙", art: "art-moon",
    summary: "Earth's closest neighbour shapes our tides, calendars, and imagination.",
    intro: "The Moon is Earth's only natural satellite and the brightest object in our night sky. Its familiar phases are the changing portions of its sunlit half that we see from Earth as it travels along its orbit.",
    sections: [
      ["A companion in space", "The Moon orbits Earth at an average distance of about 384,400 kilometres. It takes roughly a month to travel around our planet, and the same side is almost always turned toward us."],
      ["Phases and tides", "As the Moon moves around Earth, our viewing angle changes and the visible sunlit part appears to grow and shrink. The Moon's gravity also helps drive ocean tides, working together with the Sun's gravitational pull."],
      ["A world of its own", "The lunar surface is covered with ancient craters, broad plains of dark volcanic rock, and fine dust. With virtually no atmosphere, footprints and other marks can remain undisturbed for a very long time."]
    ]
  },
  {
    id: "octopus", title: "Octopus", category: "Nature", icon: "🐙", art: "art-octopus",
    summary: "A clever, soft-bodied animal with eight arms and a remarkable sense of touch.",
    intro: "An octopus is a soft-bodied marine animal known for its eight arms, keen senses, and remarkable ability to change colour and texture. Octopuses live in oceans around the world, from shallow reefs to the deep sea.",
    sections: [
      ["A body built for discovery", "Each of an octopus's eight arms is lined with suckers that can taste and feel as well as grip. Most of its neurons are distributed through its arms, giving them considerable independence as they explore."],
      ["Masters of disguise", "Specialised skin cells let an octopus rapidly change colour and pattern. Tiny muscles can also alter the skin's texture, helping the animal blend into rocks, sand, or coral."],
      ["Problem solvers", "Octopuses have been observed opening containers, navigating mazes, and using objects as shelter. Their intelligence is unusual among invertebrates and continues to inspire scientific study."]
    ]
  },
  {
    id: "forest", title: "Forest", category: "Nature", icon: "🌲", art: "art-forest",
    summary: "A living community where trees, soil, water, and wildlife intertwine.",
    intro: "A forest is an ecosystem dominated by trees and other woody plants. Forests cover a substantial part of Earth's land and support a vast variety of life, while helping shape climates, soils, and the movement of water.",
    sections: [
      ["Many kinds of forest", "Forests take many forms. Tropical forests are warm and often rich in species; temperate forests experience more seasonal change; boreal forests stretch across colder northern regions."],
      ["A connected ecosystem", "Trees, fungi, insects, animals, and microorganisms interact in complex ways. Forest soils store nutrients and water, and roots and fungal networks connect life beneath the surface."],
      ["Why forests matter", "Forests provide habitats, resources, and recreation. They also absorb and store carbon, protect watersheds, and help regulate local and global environments."]
    ]
  },
  {
    id: "coral-reef", title: "Coral reef", category: "Nature", icon: "🪸", art: "art-octopus",
    summary: "A vibrant underwater habitat built by tiny animals over generations.",
    intro: "A coral reef is a marine ecosystem formed largely by colonies of coral animals. Though reefs occupy a small area of the ocean, their intricate structures shelter an extraordinary diversity of life.",
    sections: [
      ["Reef builders", "Reef-building corals produce hard skeletons from calcium carbonate. Over many generations these structures accumulate into the varied formations that create reef habitat."],
      ["Life in the reef", "Fish, molluscs, sea turtles, algae, and countless other organisms make use of reefs. The complex landscape offers food, shelter, and places to raise young."],
      ["A changing environment", "Reefs are sensitive to shifts in ocean temperature and chemistry. Researchers and communities study reef ecosystems and work to understand the pressures they face."]
    ]
  },
  {
    id: "printing-press", title: "Printing press", category: "History", icon: "📜", art: "art-moon",
    summary: "A technology that helped ideas travel further and faster than ever before.",
    intro: "The printing press is a device for producing text and images on a medium such as paper. Movable-type printing developed in Europe during the fifteenth century and helped books become more widely available.",
    sections: [
      ["Movable type", "Movable type uses individual reusable pieces for letters and characters. Printers arrange them into a page, apply ink, and press the type onto paper."],
      ["A wider readership", "Printing made it possible to produce multiple copies of a text more efficiently than hand-copying. Books, pamphlets, and other printed works could reach new audiences."],
      ["An evolving craft", "Printing methods changed over time, from hand-operated presses to mechanised production and modern digital techniques. Each innovation changed how information could be shared."]
    ]
  },
  {
    id: "honeybee", title: "Honeybee", category: "Nature", icon: "🐝", art: "art-forest",
    summary: "A social pollinator whose teamwork supports flowering plants and food crops.",
    intro: "Honeybees are social insects that live in organised colonies. As they collect nectar and pollen from flowers, they also carry pollen between plants, helping many species reproduce.",
    sections: [
      ["Life in a colony", "A honeybee colony includes a queen, worker bees, and drones. Workers take on different tasks over their lives, including caring for young, building comb, and foraging."],
      ["Finding flowers", "Foraging bees use visual and scent cues to find flowers. A returning bee can communicate the direction and distance of a food source through movements known as a waggle dance."],
      ["Pollination", "As bees visit flowers, pollen grains can stick to their bodies and be carried to another flower. This process supports the reproduction of many flowering plants."]
    ]
  },
  {
    id: "great-barrier-reef", title: "Great Barrier Reef", category: "Places", icon: "🌊", art: "art-aurora",
    summary: "An immense network of reefs and islands off Australia's northeast coast.",
    intro: "The Great Barrier Reef is a vast reef system in the Coral Sea, off the coast of Queensland, Australia. It includes thousands of individual reefs and islands, creating a varied marine landscape.",
    sections: [
      ["A broad seascape", "The reef system stretches along a large section of Australia's northeastern coastline. Its habitats range from shallow lagoons to outer reef slopes."],
      ["A living mosaic", "Corals, fish, sea turtles, seabirds, and many other organisms inhabit the region. Different areas of the reef support different communities of life."],
      ["Learning and stewardship", "Scientists, Traditional Owners, local communities, and visitors all contribute to how the reef is understood and cared for. Long-term observation helps track changes in this dynamic ecosystem."]
    ]
  },
  {
    id: "solar-system", title: "Solar System", category: "Science", icon: "🪐", art: "art-moon",
    summary: "Our Sun and the diverse worlds, rocks, and dust that travel around it.",
    intro: "The Solar System consists of the Sun and the objects held by its gravity. These include eight planets, their moons, dwarf planets, asteroids, comets, and countless smaller particles.",
    sections: [
      ["At the centre", "The Sun is a star whose gravity holds the Solar System together. Its light and heat influence the conditions on planets and other nearby worlds."],
      ["Different kinds of worlds", "The planets vary greatly: some are rocky, some are gas giants, and others are rich in ice. They follow their own paths around the Sun."],
      ["A neighbourhood still being explored", "Spacecraft and telescopes have revealed new details about planets, moons, and small bodies. Each mission adds to our understanding of the system we call home."]
    ]
  },
  {
    id: "origami", title: "Origami", category: "Arts & culture", icon: "🦢", art: "art-forest",
    summary: "The art of turning a sheet of paper into a world of folded forms.",
    intro: "Origami is the art of folding paper into shapes and figures. The practice is strongly associated with Japan, where paper-folding traditions developed over centuries and continue to inspire artists around the world.",
    sections: [
      ["A sheet becomes a sculpture", "Many origami forms begin with a single square sheet. Carefully planned folds can transform it into animals, flowers, geometric shapes, and elaborate designs."],
      ["Learning through folds", "Traditional instructions use a sequence of diagrams or steps to guide the folder. A small change in a fold can change the proportions and character of the finished form."],
      ["Art and mathematics", "Origami connects creative practice with geometry and design. Artists and engineers alike have explored how folding can shape objects and solve practical problems."]
    ]
  },
  {
    id: "library-of-alexandria", title: "Library of Alexandria", category: "History", icon: "🏛️", art: "art-moon",
    summary: "An ancient centre of scholarship and learning in Egypt.",
    intro: "The Library of Alexandria was part of a larger scholarly institution in ancient Alexandria, Egypt. It is remembered as an ambitious centre for collecting texts and bringing scholars together.",
    sections: [
      ["A city of learning", "Alexandria became a major centre of culture and scholarship in the Hellenistic world. Scholars studied, wrote, and exchanged ideas in the city."],
      ["Collecting knowledge", "The Library is associated with efforts to gather written works from many places. Ancient accounts describe a wide-ranging collection, though details are difficult to establish with certainty."],
      ["A lasting symbol", "Stories about the Library have made it a lasting symbol of the pursuit of knowledge. Its history also reminds us how much of the ancient written record has been lost."]
    ]
  },
  {
    id: "artificial-intelligence", title: "Artificial intelligence", category: "Technology", icon: "✳️", art: "art-aurora",
    summary: "A field exploring how computers can perform tasks associated with human intelligence.",
    intro: "Artificial intelligence is a field of computing focused on building systems that can perform tasks such as recognising patterns, generating language, and making predictions. Different systems use different methods and have different capabilities.",
    sections: [
      ["Learning from examples", "Many modern AI systems are trained on examples. They adjust internal parameters to identify patterns that can help them respond to new inputs."],
      ["A broad field", "AI includes areas such as machine learning, robotics, language technologies, and computer vision. Not every AI system learns in the same way or has the same purpose."],
      ["People and technology", "AI systems are designed, evaluated, and used by people. Their effects depend on how they are built and applied, making careful testing and thoughtful use important."]
    ]
  }
];

const subjects = [
  { name: "Science", icon: "🔭", count: "3 articles" },
  { name: "History", icon: "🏺", count: "2 articles" },
  { name: "Nature", icon: "🌿", count: "4 articles" },
  { name: "Arts & culture", icon: "🎨", count: "1 article" },
  { name: "Technology", icon: "💡", count: "1 article" },
  { name: "Places", icon: "🧭", count: "1 article" }
];

const home = document.querySelector(".page-layout");
const articleView = document.querySelector("#article-view");
const resultsView = document.querySelector("#results-view");
const toast = document.querySelector("#toast");
const savedKey = "negopedia-saved-articles";
let savedArticles = readSavedArticles();
let installPrompt = null;
let toastTimer;

function readSavedArticles() {
  try {
    const saved = JSON.parse(localStorage.getItem(savedKey) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => articles.some((article) => article.id === id)) : [];
  } catch (error) {
    console.warn("Saved articles could not be loaded.", error);
    return [];
  }
}

function updateSavedCount() {
  document.querySelectorAll(".saved-count").forEach((count) => {
    count.textContent = savedArticles.length;
    count.setAttribute("aria-label", `${savedArticles.length} saved`);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function saveArticle(id) {
  const article = articles.find((item) => item.id === id);
  if (!article) return;
  const isSaved = savedArticles.includes(id);
  savedArticles = isSaved ? savedArticles.filter((item) => item !== id) : [...savedArticles, id];
  try {
    localStorage.setItem(savedKey, JSON.stringify(savedArticles));
  } catch (error) {
    savedArticles = isSaved ? [...savedArticles, id] : savedArticles.filter((item) => item !== id);
    showToast("Couldn't save this article on your device.");
    console.error("Saved articles could not be stored.", error);
    return;
  }
  updateSavedCount();
  showToast(isSaved ? "Removed from your saved articles." : "Saved for later, on this device.");
  if (location.hash === "#saved") renderSavedArticles();
}

function renderPopular() {
  const picks = ["aurora", "moon", "octopus", "forest"].map((id) => articles.find((article) => article.id === id));
  document.querySelector("#popular-grid").innerHTML = picks.map((article) => `
    <a class="popular-card" href="#/wiki/${article.id}" data-article="${article.id}">
      <div class="card-art ${article.art}"><span class="art-symbol" aria-hidden="true">${article.icon}</span></div>
      <div class="card-category">${article.category}</div><h3>${article.title}</h3><p>${article.summary}</p>
    </a>`).join("");
}

function renderFeatured() {
  const article = articles.find((item) => item.id === "coral-reef");
  document.querySelector("#featured-card").innerHTML = `
    <div class="feature-copy"><div class="card-category">${article.category} · 5 MIN READ</div>
      <h3>${article.title}</h3><p>${article.summary} Explore the living landscape, the creatures it supports, and the many ways people are learning about it.</p>
      <a class="feature-link" href="#/wiki/${article.id}" data-article="${article.id}">Read the story <span aria-hidden="true">↗</span></a></div>
    <div class="feature-art" aria-hidden="true"><span>${article.icon}</span></div>`;
}

function renderSubjects() {
  document.querySelector("#subject-cards").innerHTML = subjects.map((subject) => `
    <a class="subject-card" href="#subject/${encodeURIComponent(subject.name.toLowerCase())}" data-subject="${subject.name}">
      <span class="subject-emoji" aria-hidden="true">${subject.icon}</span><span>${subject.name}</span><span aria-hidden="true">↗</span>
    </a>`).join("");
}

function renderArticle(id) {
  const article = articles.find((item) => item.id === id);
  if (!article) return renderNotFound();
  home.hidden = true;
  resultsView.hidden = true;
  articleView.hidden = false;
  articleView.innerHTML = `
    <button class="back-link" type="button" data-home><span aria-hidden="true">←</span> Back to discover</button>
    <div class="article-category">${article.category}</div>
    <h1>${article.title}</h1>
    <p class="article-lede">${article.intro}</p>
    <div class="article-meta">A Negopedia introduction · About 3 minutes to read</div>
    <div class="article-visual ${article.art}" aria-hidden="true">${article.icon}</div>
    <div class="article-actions">
      <button type="button" data-save="${article.id}">${savedArticles.includes(article.id) ? "★ Saved" : "☆ Save article"}</button>
      <button type="button" data-share="${article.id}">Share article ↗</button>
    </div>
    <div class="article-body">
      <p>${article.intro}</p>
      ${article.sections.map(([heading, text]) => `<h2>${heading}</h2><p>${text}</p>`).join("")}
    </div>`;
  window.scrollTo(0, 0);
}

function renderResults(query, list = articles, label = "Search results") {
  home.hidden = true;
  articleView.hidden = true;
  resultsView.hidden = false;
  const normalized = query.trim().toLocaleLowerCase();
  const matches = list.filter((article) => !normalized || `${article.title} ${article.category} ${article.summary} ${article.intro}`.toLocaleLowerCase().includes(normalized));
  resultsView.innerHTML = `
    <button class="back-link" type="button" data-home><span aria-hidden="true">←</span> Back to discover</button>
    <span class="section-kicker">${label.toUpperCase()}</span>
    <h1>${label === "Search results" ? `Explore “${escapeHtml(query.trim())}”` : escapeHtml(label)}<span class="heading-period">.</span></h1>
    <p class="results-count">${matches.length} ${matches.length === 1 ? "article" : "articles"} to explore</p>
    <div class="result-list">${matches.length ? matches.map((article) => `
      <a class="result-item" href="#/wiki/${article.id}" data-article="${article.id}">
        <span>${article.category}</span><h2>${article.title}</h2><p>${article.summary}</p>
      </a>`).join("") : `<p class="empty-state">No articles found for that search. Try another word or browse a subject.</p>`}
    </div>`;
  window.scrollTo(0, 0);
}

function renderSavedArticles() {
  renderResults("", articles.filter((article) => savedArticles.includes(article.id)), "Saved articles");
}

function renderNotFound() {
  home.hidden = true;
  resultsView.hidden = false;
  articleView.hidden = true;
  resultsView.innerHTML = `<button class="back-link" type="button" data-home><span aria-hidden="true">←</span> Back to discover</button><h1>That page isn't here<span class="heading-period">.</span></h1><p class="empty-state">Try searching or return to the Negopedia homepage.</p>`;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function search(query) {
  const value = query.trim();
  if (!value) {
    showToast("Type a word or topic to explore.");
    return;
  }
  document.querySelectorAll(".search-form input").forEach((input) => { input.value = value; });
  location.hash = `search/${encodeURIComponent(value)}`;
}

function renderRoute() {
  const route = decodeURIComponent(location.hash.slice(1) || "home");
  if (route === "home" || route === "") {
    home.hidden = false; articleView.hidden = true; resultsView.hidden = true;
    window.scrollTo(0, 0);
  } else if (route === "all") {
    renderResults("", articles, "All articles");
  } else if (route === "saved") {
    renderSavedArticles();
  } else if (route.startsWith("/wiki/")) {
    renderArticle(route.slice(6));
  } else if (route.startsWith("search/")) {
    renderResults(route.slice(7));
  } else if (route.startsWith("subject/")) {
    const requested = route.slice(8).toLocaleLowerCase();
    const subject = subjects.find((item) => item.name.toLocaleLowerCase() === requested);
    subject ? renderResults("", articles.filter((item) => item.category.toLocaleLowerCase() === requested), subject.name) : renderNotFound();
  } else {
    renderNotFound();
  }
}

document.addEventListener("submit", (event) => {
  if (!event.target.matches(".search-form")) return;
  event.preventDefault();
  search(new FormData(event.target).get("q") || "");
});

document.addEventListener("click", async (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const articleLink = target.closest("[data-article]");
  if (articleLink) {
    event.preventDefault();
    location.hash = `/wiki/${articleLink.dataset.article}`;
    return;
  }
  if (target.closest("[data-home]")) { location.hash = "home"; return; }
  const savedToggle = target.closest(".saved-toggle");
  if (savedToggle) { location.hash = "saved"; return; }
  const subjectLink = target.closest("[data-subject]");
  if (subjectLink) {
    event.preventDefault();
    location.hash = `subject/${encodeURIComponent(subjectLink.dataset.subject.toLowerCase())}`;
    return;
  }
  const scrollLink = target.closest("[data-scroll]");
  if (scrollLink) {
    event.preventDefault();
    document.querySelector(`#${scrollLink.dataset.scroll}`)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const viewLink = target.closest("[data-view]");
  if (viewLink) { event.preventDefault(); location.hash = viewLink.dataset.view; return; }
  const suggestion = target.closest("[data-query]");
  if (suggestion) { search(suggestion.dataset.query); return; }
  const saveButton = target.closest("[data-save]");
  if (saveButton) { saveArticle(saveButton.dataset.save); renderArticle(saveButton.dataset.save); return; }
  const shareButton = target.closest("[data-share]");
  if (shareButton) {
    const shareData = { title: `Negopedia: ${articles.find((item) => item.id === shareButton.dataset.share)?.title}`, url: location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) { await navigator.clipboard.writeText(shareData.url); showToast("Article link copied."); }
      else showToast("Copy this page's address to share the article.");
    } catch (error) {
      if (error.name !== "AbortError") { showToast("Couldn't share this article."); console.error("Sharing failed.", error); }
    }
  }
});

document.querySelector(".header-search input").addEventListener("focus", (event) => {
  document.querySelectorAll(".search-form input").forEach((input) => { input.value = event.target.value; });
});
document.querySelector(".hero-search input").addEventListener("focus", (event) => {
  document.querySelectorAll(".search-form input").forEach((input) => { input.value = event.target.value; });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  event.preventDefault();
  document.querySelector(".header-search input").focus();
});
window.addEventListener("hashchange", renderRoute);
window.addEventListener("storage", (event) => {
  if (event.key === savedKey) { savedArticles = readSavedArticles(); updateSavedCount(); }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  document.querySelectorAll(".install-button").forEach((button) => { button.hidden = false; button.style.display = "inline-flex"; });
});
document.querySelectorAll(".install-button").forEach((button) => button.addEventListener("click", async () => {
  if (!installPrompt) {
    showToast("In your browser menu, choose “Install app” or “Add to Home Screen.”");
    return;
  }
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
}));
window.addEventListener("appinstalled", () => {
  document.querySelector(".install-callout").hidden = true;
  document.querySelectorAll(".install-button").forEach((button) => { button.hidden = true; });
  installPrompt = null;
});

renderPopular();
renderFeatured();
renderSubjects();
updateSavedCount();
renderRoute();
if (window.matchMedia("(display-mode: standalone)").matches) {
  document.querySelector(".install-callout").hidden = true;
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Negopedia could not enable offline support.", error);
    });
  });
}
