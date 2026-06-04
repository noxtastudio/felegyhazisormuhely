/* ═══════════════════════════════════════════════════════════════════════
   index.js — front page (Söreink carousel · section dots · gallery)
   ═══════════════════════════════════════════════════════════════════════ */

const BEERS = [
  { num:"01", name:"Mangós Búza", sub:"Trópusi gyümölcsös búzasör", cardSub:"Witbier",
    type:"Witbier", abv:"5% V/V", vol:"330 ml", accent:"#E87B2C", pill:"Újdonság",
    bottle:"assets/bottles/02.png", bg:"assets/backgrounds/mango.png",
    desc:"Trópusi mangó-pulp búzasör alapon. Lágy és gyümölcsös, természetes mangóval. Először édes, majd savanyú, azután lehengerlően gyümölcsös — mint egy trópusi utazás.",
    short:"Lágy, gyümölcsös, mangós witbier.",
    features:[{label:"Trópusi mangó",note:"Természetes gyümölccsel",icon:"mango"},{label:"Búza alap",note:"Lágy, selymes test",icon:"wheat"},{label:"Friss & üde",note:"Könnyed lecsengés",icon:"hop"}] },

  { num:"02", name:"Bécsi Lager", sub:"Klasszikus világos lager", cardSub:"Világos lager",
    type:"Világos lager", abv:"5% V/V", vol:"330 ml", accent:"#E3B925", pill:"Klasszikus",
    bottle:"assets/bottles/01.png", bg:"assets/backgrounds/nemet.png",
    desc:"Bécsi típusú lager. Karamellás malátaív, tiszta, letisztult finálé. Mély bernsteinből aranyszínűig — klasszikus, jól ismerős íz.",
    short:"Karamellás, klasszikus, mély arany.",
    features:[{label:"Bécsi maláta",note:"Karamellás malátaív",icon:"wheat"},{label:"Tiszta jelleg",note:"Letisztult, kerek",icon:"drop"},{label:"Aranyszínű",note:"Mély bernsteinből",icon:"leaf"}] },

  { num:"03", name:"Málnás Gose", sub:"Sós-savanyú málnás búzasör", cardSub:"Gose",
    type:"Gose", abv:"5% V/V", vol:"330 ml", accent:"#D63B33", pill:"Limited",
    bottle:"assets/bottles/05.png", bg:"assets/backgrounds/malna.png",
    desc:"Gose típusú, enyhén sós, savanyú búzasör málnával. Bírod a savanyút? Ez savanyú! De ez tényleg savanyú… Mi szóltunk!",
    short:"Sós, savanyú, málnás. Komolyan savanyú.",
    features:[{label:"Friss málna",note:"Természetes málnával",icon:"berry"},{label:"Enyhén sós",note:"Gose stílus",icon:"drop"},{label:"Igazi savanyú",note:"Nem viccelünk!",icon:"leaf"}] },

  { num:"04", name:"Belga Búza", sub:"Citrusos belga witbier", cardSub:"Witbier",
    type:"Witbier", abv:"5% V/V", vol:"330 ml", accent:"#3D6BB8", pill:"Stílus",
    bottle:"assets/bottles/04.png", bg:"assets/backgrounds/belgabuza.png",
    desc:"Belga stílusú, citrusos witbier. Korianderrel és narancshéjjal készítve, lágy, fűszeres test, hosszú frissítő lecsengés.",
    short:"Citrusos, fűszeres, lágy belga búza.",
    features:[{label:"Citrushéj",note:"Narancs és koriander",icon:"mango"},{label:"Búza körte",note:"Lágy, fűszeres",icon:"wheat"},{label:"Hosszú íz",note:"Frissítő lecsengés",icon:"leaf"}] },

  { num:"05", name:"Piña Colada Sour Ale", sub:"Ananász-kókusz sour ale", cardSub:"Sour ale",
    type:"Sour ale", abv:"5% V/V", vol:"330 ml", accent:"#D9CC1E", pill:"Tropical",
    bottle:"assets/bottles/03.png", bg:"assets/backgrounds/pinacolada.png",
    desc:"Ananász és kókusz. Savanyú sör, laktózzal erjesztve. Trópusi és selymes — koktél a pohárban.",
    short:"Ananász, kókusz, sour. Koktél söralapon.",
    features:[{label:"Ananász",note:"Friss trópusi gyümölcs",icon:"mango"},{label:"Kókusz",note:"Selymes laktóz",icon:"drop"},{label:"Sour",note:"Pörgős savanyú",icon:"hop"}] },

  { num:"06", name:"Meggyes", sub:"Könnyed, frissítő meggyes sör", cardSub:"Gyümölcsös sör",
    type:"Gyümölcsös sör", abv:"4% V/V", vol:"330 ml", accent:"#E03B2E", pill:"Klasszikus",
    bottle:"assets/bottles/06.png", bg:"assets/backgrounds/meggy.png",
    desc:"Könnyed, frissítő gyümölcsös sör. Először a meggy harsány zamata dominál, majd a gyümölcs édessége és buja fanyarsága felváltva jelenik meg a kortyokban.",
    short:"Harsány meggyes, édes-fanyar gyümölcsös.",
    features:[{label:"Harsány meggy",note:"Friss zamat",icon:"berry"},{label:"Édes-fanyar",note:"Játékos kortyok",icon:"leaf"},{label:"Könnyű",note:"4% — egész napra",icon:"drop"}] }
];

const ICONS = {
  mango:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-4 0-7 3-7 8s3 9 7 9 7-4 7-9-3-8-7-8z"/><path d="M12 4c-1-2-3-2-3-2"/></svg>`,
  wheat:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M12 6c-2 0-3 2-3 3"/><path d="M12 6c2 0 3 2 3 3"/><path d="M12 11c-2 0-3 2-3 3"/><path d="M12 11c2 0 3 2 3 3"/><path d="M12 16c-2 0-3 2-3 3"/><path d="M12 16c2 0 3 2 3 3"/></svg>`,
  hop:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 1-5 4-5 8s2 7 5 9c3-2 5-5 5-9s-2-7-5-8z"/><path d="M9 8c1 1 2 1 3 0"/><path d="M9 12c1 1 2 1 3 0"/><path d="M9 16c1 1 2 1 3 0"/></svg>`,
  berry:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="6"/><path d="M12 8V4"/><path d="M9 4c2 1 4 1 6 0"/></svg>`,
  leaf:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M5 19l10-10"/></svg>`,
  drop:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/></svg>`
};

/* ─── Gallery photos ────────────────────────────────────────────────────── */
const GALLERY = [
  ["g13.jpg","A sörfőzde erjesztő tankjai"],
  ["g04.jpg","Friss csapolás a műhely poharába"],
  ["g07.jpg","A teljes szortiment egy bárpulton"],
  ["g09.jpg","A Félegyházi szélmalom-embléma a falon"],
  ["g08.jpg","Erjesztő tankok a sörfőzdében"],
  ["g05.jpg","Strong Ale és burger"],
  ["g01.jpg","Balogh Máté, alapító"],
  ["g06.jpg","Belga Meggyes a szabadban"],
  ["g03.jpg","Sörcsapolás vendéglátó partnernél"],
  ["g12.jpg","Kóstolópoharak sorban"],
  ["g10.jpg","Irish Red Ale a fűben"],
  ["g02.jpg","A csapat egy fesztiválon"],
  ["g14.jpg","Oatmeal Stout, alapanyagaival"]
];

document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  initCarousel();
  initDots();
  initNewsletter();
});

/* ═══ Gallery — horizontal scroll (wheel + drag + native swipe) ════════ */
function buildGallery() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const cell = ([src, alt]) =>
    `<figure><img loading="lazy" draggable="false" src="assets/gallery/${src}" alt="${alt}"></figure>`;
  track.innerHTML = GALLERY.map(cell).join('');

  const wrap = track.parentElement;          // .marquee
  if (!wrap) return;

  // No wheel hijack — vertical wheel/swipe must stay vertical (page snap),
  // horizontal trackpad/touch swipe scrolls the gallery natively via overflow-x.

  // Click-and-drag to scroll (mouse users; touch already works natively).
  let down = false, startX = 0, startScroll = 0, moved = 0;
  wrap.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch') return;   // let native touch handle it
    down = true; moved = 0;
    startX = e.clientX;
    startScroll = wrap.scrollLeft;
    wrap.classList.add('is-dragging');
    wrap.setPointerCapture(e.pointerId);
  });
  wrap.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.abs(dx);
    wrap.scrollLeft = startScroll - dx;
  });
  const end = e => {
    if (!down) return;
    down = false;
    wrap.classList.remove('is-dragging');
    try { wrap.releasePointerCapture(e.pointerId); } catch {}
  };
  wrap.addEventListener('pointerup', end);
  wrap.addEventListener('pointercancel', end);
  // Swallow click that follows a real drag, so nothing inside the gallery
  // misinterprets the drag as a tap.
  wrap.addEventListener('click', e => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } }, true);
}

/* ═══ Söreink carousel ══════════════════════════════════════════════════ */
function initCarousel() {
  const stage = document.getElementById('beerStage');
  if (!stage) return;

  const bottlesEl = document.getElementById('bottles');
  const bgA = document.getElementById('bgA');
  const bgB = document.getElementById('bgB');
  const content = document.getElementById('beerContent');
  const features = document.getElementById('beerFeatures');
  const sideLeft = document.getElementById('sideLeft');
  const sideRight = document.getElementById('sideRight');
  const progress = document.getElementById('stageProgress');

  const titleEl = document.getElementById('beerTitle');
  const subEl = document.getElementById('beerSubtitle');
  const descEl = document.getElementById('beerDesc');
  const pillEl = document.getElementById('beerPill');
  const specType = document.getElementById('specType');
  const specAbv = document.getElementById('specAbv');
  const specVol = document.getElementById('specVol');
  const countNum = document.getElementById('countNum');
  const countTotal = document.getElementById('countTotal');

  // bottles
  bottlesEl.innerHTML = BEERS.map((b,i) =>
    `<img class="bottle-img" data-idx="${i}" src="${b.bottle}" alt="${b.name}">`).join('');
  const bottles = [...bottlesEl.querySelectorAll('.bottle-img')];

  // progress segments
  const N = BEERS.length;
  countTotal.textContent = String(N).padStart(2,'0');
  progress.innerHTML = '';
  BEERS.forEach((_,i) => {
    const s = document.createElement('button');
    s.className = 'seg'; s.setAttribute('aria-label', `Sör ${i+1}`);
    s.addEventListener('click', () => goTo(i));
    progress.appendChild(s);
  });
  const segs = [...progress.children];

  // preload backgrounds
  BEERS.forEach(b => { const im = new Image(); im.src = b.bg; });
  let bgActive = bgA, bgIdle = bgB;
  function setBg(beer) {
    if (bgActive.getAttribute('src') === beer.bg) return;
    bgIdle.src = beer.bg;
    void bgIdle.offsetWidth;
    bgIdle.classList.add('active');
    bgActive.classList.remove('active');
    [bgActive, bgIdle] = [bgIdle, bgActive];
  }

  function renderFeatures(beer) {
    features.innerHTML = beer.features.map(f =>
      `<div class="feature"><span class="feature-icon">${ICONS[f.icon]||''}</span>
       <div><div class="feature-head">${f.label}</div><div class="feature-body">${f.note}</div></div></div>`).join('');
  }
  function renderSide(card, beer) {
    if (!card) return;
    card.querySelector('.sc-name').textContent = beer.name;
    card.querySelector('.sc-sub').textContent = beer.cardSub;
    card.querySelector('.sc-desc').textContent = beer.short;
    card.querySelector('.sc-abv').textContent = `ALC. ${beer.abv}`;
  }

  let current = 0, busy = false;
  const COOLDOWN = 620;

  function update() {
    const beer = BEERS[current];
    const prev = BEERS[(current-1+N)%N];
    const next = BEERS[(current+1)%N];
    stage.style.setProperty('--accent', beer.accent);
    setBg(beer);

    bottles.forEach((b,i) => {
      let off = i - current;
      if (off >  N/2) off -= N;
      if (off < -N/2) off += N;
      let state = off===0 ? 'state-center' : off===-1 ? 'state-left' : off===1 ? 'state-right'
                : off<=-2 ? 'state-far-left' : 'state-far-right';
      b.className = `bottle-img ${state}`;
    });

    [content, features, sideLeft, sideRight].filter(Boolean).forEach(el => el.style.opacity = '0');
    setTimeout(() => {
      titleEl.innerHTML = beer.name.replace(/ /g,'<br>');
      subEl.textContent = beer.sub;
      descEl.textContent = beer.desc;
      pillEl.textContent = beer.pill;
      specType.textContent = beer.type;
      specAbv.textContent = beer.abv;
      specVol.textContent = beer.vol;
      countNum.textContent = beer.num;
      renderFeatures(beer);
      renderSide(sideLeft, prev);
      renderSide(sideRight, next);
      [content, features, sideLeft, sideRight].filter(Boolean).forEach(el => el.style.opacity = '1');
    }, 200);

    segs.forEach((s,i) => s.classList.toggle('active', i===current));
  }

  function goTo(idx) {
    if (busy) return;
    const n = ((idx % N) + N) % N;
    if (n === current) return;
    current = n; busy = true;
    update();
    setTimeout(() => busy = false, COOLDOWN);
  }
  function advance(d) { goTo(current + d); }

  bottles.forEach((b,i) => b.addEventListener('click', () => goTo(i)));
  document.getElementById('stagePrev').addEventListener('click', () => advance(-1));
  document.getElementById('stageNext').addEventListener('click', () => advance(1));
  sideLeft && sideLeft.querySelector('.sc-plus').addEventListener('click', () => advance(-1));
  sideRight && sideRight.querySelector('.sc-plus').addEventListener('click', () => advance(1));

  // keyboard ←/→ controls the carousel
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') advance(1);
    if (e.key === 'ArrowLeft') advance(-1);
  });

  // horizontal drag / swipe on the stage
  let drag = null;
  stage.addEventListener('pointerdown', e => { drag = { x:e.clientX, y:e.clientY }; });
  stage.addEventListener('pointerup', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) advance(dx < 0 ? 1 : -1);
    drag = null;
  });

  update();
}

/* ═══ Section dots + active state ═══════════════════════════════════════ */
function initDots() {
  const sections = [...document.querySelectorAll('.snap-main > [data-screen-label]')];
  const dotsWrap = document.getElementById('dots');
  if (!dotsWrap || !sections.length) return;

  sections.forEach((sec, i) => {
    const b = document.createElement('button');
    b.dataset.label = sec.dataset.screenLabel;
    b.setAttribute('aria-label', sec.dataset.screenLabel);
    b.addEventListener('click', () => sec.scrollIntoView({ behavior: 'smooth' }));
    dotsWrap.appendChild(b);
  });
  const dots = [...dotsWrap.children];

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const i = sections.indexOf(en.target);
        dots.forEach((d,di) => d.classList.toggle('active', di===i));
      }
    });
  }, { threshold: 0.55 });
  sections.forEach(s => io.observe(s));
}

/* ═══ Newsletter (mock) ═════════════════════════════════════════════════ */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = form.parentElement.querySelector('.msg');
    msg.textContent = 'Köszönjük! Hamarosan jelentkezünk a hírlevelünkkel.';
    form.reset();
  });
}
