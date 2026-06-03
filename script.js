// ──────────────────────────────────────────────────────────────────────────
// Félegyházi Sörműhely — dark editorial carousel
//
// Per-beer data lives here. Reordered so two reds (Málnás Gose at idx 2,
// Meggyes at idx 5) are never adjacent, and Mangós Búza is the front beer.
// ──────────────────────────────────────────────────────────────────────────

const BEERS = [
  {
    num: "01",
    src: "bottles/02.png",
    name: "Mangós Búza",
    sub: "Mangós witbier szűretlen kisüzemi sör",
    cardSub: "Witbier",
    desc: "Mangós Witbier típusú szűretlen kisüzemi sör. Először édes, majd savanyú, azután pedig lehengerlően gyümölcsös. Olyan, mint egy trópusi utazás, tele kanyarokkal.",
    short: "Mangós witbier. Édes, savanyú, gyümölcsös trópusi utazás.",
    type: "Witbier",
    abv: "5% V/V",
    accent: "#E87B2C",   // orange
    accentSoft: "rgba(232, 123, 44, 0.55)",
    pill: "Újdonság",
    features: [
      { head: "Trópusi mangó", body: "Természetes gyümölccsel", icon: "mango" },
      { head: "Búza alap",     body: "Lágy, selymes test",      icon: "wheat" },
      { head: "Friss & üde",   body: "Könnyed, gyümölcsös lecsengés", icon: "hop" },
    ],
  },
  {
    num: "02",
    src: "bottles/01.png",
    name: "Bécsi Lager",
    sub: "Klasszikus világos lager",
    cardSub: "Világos lager",
    desc: "Bécsi típusú lager. Karamellás malátaív, tiszta, letisztult finálé.",
    short: "Klasszikus bécsi lager. Malátás, letisztult, aranyszínű.",
    type: "Világos lager",
    abv: "5% V/V",
    accent: "#E3B925",
    accentSoft: "rgba(227, 185, 37, 0.55)",
    pill: "Klasszikus",
    features: [
      { head: "Bécsi maláta",  body: "Karamellás malátaív",  icon: "wheat" },
      { head: "Tiszta jelleg", body: "Letisztult, kerek",     icon: "drop" },
      { head: "Aranyszínű",    body: "Mély bernsteinből",     icon: "leaf" },
    ],
  },
  {
    num: "03",
    src: "bottles/05.png",
    name: "Málnás Gose",
    sub: "Sós-savanyú gose málnával",
    cardSub: "Gose",
    desc: "Gose típusú, enyhén sós, savanyú búzasör málnával. Bírod a savanyút? Ez savanyú! De ez tényleg savanyú… Mi szóltunk!",
    short: "Sós, savanyú búzasör málnával. Komolyan savanyú.",
    type: "Gose (savanyú búzasör)",
    abv: "5% V/V",
    accent: "#D63B33",
    accentSoft: "rgba(214, 59, 51, 0.55)",
    pill: "Limited",
    features: [
      { head: "Friss málna", body: "Valódi gyümölcs", icon: "berry" },
      { head: "Sós-citrusos", body: "Tipikus gose karakter", icon: "drop" },
      { head: "Sav-arány",   body: "Üdítő, élénk", icon: "leaf" },
    ],
  },
  {
    num: "04",
    src: "bottles/04.png",
    name: "Belga Búza",
    sub: "Belga stílusú witbier",
    cardSub: "Witbier",
    desc: "Klasszikus belga búza koriander- és narancshéj jeggyel. Lágy, csiszolt karakter.",
    short: "Klasszikus belga búza koriander- és narancshéjjal.",
    type: "Witbier",
    abv: "5% V/V",
    accent: "#3D6BB8",
    accentSoft: "rgba(61, 107, 184, 0.55)",
    pill: "Stílus",
    features: [
      { head: "Koriander",   body: "Finoman fűszeres", icon: "leaf" },
      { head: "Narancshéj",  body: "Citrusos jegyek",  icon: "mango" },
      { head: "Búza alap",   body: "Lágy, selymes",    icon: "wheat" },
    ],
  },
  {
    num: "05",
    src: "bottles/03.png",
    name: "Piña Colada Sour Ale",
    sub: "Ananász-kókusz sour ale",
    cardSub: "Sour ale",
    desc: "Ananász és kókusz. Savanyú sör, laktózzal erjesztve. Trópusi és selymes.",
    short: "Ananász és kókusz. Savanyú sör, laktózzal erjesztve.",
    type: "Sour ale",
    abv: "5% V/V",
    accent: "#D9CC1E",
    accentSoft: "rgba(217, 204, 30, 0.55)",
    pill: "Tropical",
    features: [
      { head: "Ananász",   body: "Trópusi édesség",   icon: "mango" },
      { head: "Kókusz",    body: "Krémes lecsengés",  icon: "drop" },
      { head: "Laktóz",    body: "Selymes test",      icon: "wheat" },
    ],
  },
  {
    num: "06",
    src: "bottles/06.png",
    name: "Meggyes",
    sub: "Könnyed, frissítő meggyes gyümölcsös sör",
    cardSub: "Gyümölcsös sör",
    desc: "Könnyed, frissítő gyümölcsös sör, melyben először a meggy harsány zamata dominál, majd a gyümölcs édessége és buja fanyarsága felváltva jelenik meg a kortyokban.",
    short: "Könnyed, frissítő gyümölcsös sör meggyel.",
    type: "Gyümölcsös sör",
    abv: "4% V/V",
    accent: "#E03B2E",
    accentSoft: "rgba(224, 59, 46, 0.55)",
    pill: "Klasszikus",
    features: [
      { head: "Magyar meggy", body: "Fanyar és édes", icon: "berry" },
      { head: "Lágy maláta",  body: "Selymes alap",   icon: "wheat" },
      { head: "Frissítő",     body: "Könnyed test",   icon: "drop" },
    ],
  },
];

// ──────────────────────────────────────────────────────────────────────────
// Icon library — used in the right feature panel
// ──────────────────────────────────────────────────────────────────────────

const ICONS = {
  mango: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-4 0-7 3-7 8s3 9 7 9 7-4 7-9-3-8-7-8z"/><path d="M12 4c-1-2-3-2-3-2"/></svg>`,
  wheat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M12 6c-2 0-3 2-3 3"/><path d="M12 6c2 0 3 2 3 3"/><path d="M12 11c-2 0-3 2-3 3"/><path d="M12 11c2 0 3 2 3 3"/><path d="M12 16c-2 0-3 2-3 3"/><path d="M12 16c2 0 3 2 3 3"/></svg>`,
  hop:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 1-5 4-5 8s2 7 5 9c3-2 5-5 5-9s-2-7-5-8z"/><path d="M9 8c1 1 2 1 3 0"/><path d="M9 12c1 1 2 1 3 0"/><path d="M9 16c1 1 2 1 3 0"/></svg>`,
  berry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="6"/><path d="M12 8V4"/><path d="M9 4c2 1 4 1 6 0"/></svg>`,
  leaf:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19l10-10"/></svg>`,
  drop:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/></svg>`,
};

// ──────────────────────────────────────────────────────────────────────────
// DOM
// ──────────────────────────────────────────────────────────────────────────

const bottlesEl = document.getElementById("bottles");
const podium    = document.getElementById("podium");
const content   = document.getElementById("content");
const features  = document.getElementById("features");
const sideLeft  = document.getElementById("sideLeft");
const sideRight = document.getElementById("sideRight");
const progress  = document.getElementById("progress");
const prevBtn   = document.getElementById("prev");
const nextBtn   = document.getElementById("next");

const titleEl    = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const descEl     = document.getElementById("description");
const pillEl     = document.getElementById("pillText");
const specType   = document.getElementById("specType");
const specAbv    = document.getElementById("specAbv");
const capNum     = document.getElementById("capNum");
const capTotal   = document.getElementById("capTotal");

const bottles = [...bottlesEl.querySelectorAll(".bottle-img")];

const N = BEERS.length;
let current = 0;
let busy = false;
const COOLDOWN_MS = 600;

// Build progress segments
capTotal.textContent = String(N).padStart(2, "0");
BEERS.forEach((_, i) => {
  const seg = document.createElement("button");
  seg.className = "seg";
  seg.setAttribute("aria-label", `Beer ${i + 1}`);
  seg.addEventListener("click", () => goTo(i));
  progress.appendChild(seg);
});
const segNodes = [...progress.children];

// ──────────────────────────────────────────────────────────────────────────
// Render features panel for the centered beer
// ──────────────────────────────────────────────────────────────────────────

function renderFeatures(beer) {
  features.innerHTML = beer.features.map(f => `
    <div class="feature">
      <span class="feature-icon">${ICONS[f.icon] || ""}</span>
      <div>
        <div class="feature-head">${f.head}</div>
        <div class="feature-body">${f.body}</div>
      </div>
    </div>
  `).join("");
}

function renderSideCard(card, beer) {
  card.querySelector(".side-name").textContent = beer.name;
  card.querySelector(".side-sub").textContent  = beer.cardSub;
  card.querySelector(".side-desc").textContent = beer.short;
  card.querySelector(".side-abv").textContent  = `ALC. ${beer.abv}`;
}

// ──────────────────────────────────────────────────────────────────────────
// Main update — repositions bottles, swaps content, animates accents
// ──────────────────────────────────────────────────────────────────────────

function update() {
  const beer = BEERS[current];
  const prev = BEERS[(current - 1 + N) % N];
  const next = BEERS[(current + 1) % N];

  // Set the CSS accent vars so border/text colors tween together
  document.documentElement.style.setProperty("--accent", beer.accent);
  document.documentElement.style.setProperty("--accent-soft", beer.accentSoft);

  // Reposition bottles
  bottles.forEach((b, i) => {
    let off = i - current;
    if (off >  N / 2) off -= N;
    if (off < -N / 2) off += N;

    let state;
    if (off === 0)       state = "state-center";
    else if (off === -1) state = "state-left";
    else if (off === 1)  state = "state-right";
    else if (off <= -2)  state = "state-far-left";
    else                 state = "state-far-right";

    b.className = `bottle-img ${state}`;
  });

  // Fade out → swap content → fade in
  content.style.opacity   = "0";
  features.style.opacity  = "0";
  sideLeft.style.opacity  = "0";
  sideRight.style.opacity = "0";

  setTimeout(() => {
    titleEl.innerHTML  = beer.name.replace(/ /g, "<br>");
    subtitleEl.textContent = beer.sub;
    descEl.textContent     = beer.desc;
    pillEl.textContent     = beer.pill;
    specType.textContent   = beer.type;
    specAbv.textContent    = beer.abv;
    capNum.textContent     = beer.num;

    renderFeatures(beer);
    renderSideCard(sideLeft, prev);
    renderSideCard(sideRight, next);

    content.style.opacity   = "1";
    features.style.opacity  = "1";
    sideLeft.style.opacity  = "1";
    sideRight.style.opacity = "1";
  }, 220);

  segNodes.forEach((s, i) => s.classList.toggle("active", i === current));
}

// ──────────────────────────────────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────────────────────────────────

function goTo(idx) {
  if (busy) return;
  const next = ((idx % N) + N) % N;
  if (next === current) return;
  current = next;
  busy = true;
  update();
  setTimeout(() => { busy = false; }, COOLDOWN_MS);
}
function advance(d) { goTo(current + d); }

bottles.forEach((b, i) => b.addEventListener("click", () => goTo(i)));
prevBtn.addEventListener("click", () => advance(-1));
nextBtn.addEventListener("click", () => advance(1));

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") advance(1);
  if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   advance(-1);
});

let wheelLock = false;
window.addEventListener("wheel", (e) => {
  if (e.target.closest(".content, .features, .side-card")) return; // allow inner scroll if needed
  e.preventDefault();
  if (wheelLock) return;
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (Math.abs(dx) < 8) return;
  wheelLock = true;
  advance(dx > 0 ? 1 : -1);
  setTimeout(() => { wheelLock = false; }, COOLDOWN_MS);
}, { passive: false });

let dragStart = null;
window.addEventListener("pointerdown", (e) => {
  dragStart = { x: e.clientX, y: e.clientY };
});
window.addEventListener("pointerup", (e) => {
  if (!dragStart) return;
  const dx = e.clientX - dragStart.x;
  const dy = e.clientY - dragStart.y;
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
    advance(dx < 0 ? 1 : -1);
  }
  dragStart = null;
});

// ──────────────────────────────────────────────────────────────────────────
// Boot
// ──────────────────────────────────────────────────────────────────────────

update();
