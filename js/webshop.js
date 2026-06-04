/* ═══════════════════════════════════════════════════════════════════════
   webshop.js — catalog · filters · cart drawer (mock)
   ═══════════════════════════════════════════════════════════════════════ */

const PRODUCTS = [
  { id:1, name:"Schwarzbier", type:"klasszikus", cat:"Alsó erjesztésű", abv:"5%", vol:"330 ml", price:1090, accent:"#B8893C", tag:null,
    desc:"Szűretlen alsó erjesztésű fekete sör, csokoládé malátával és német nemes komlóval.",
    media:{kind:"photo", src:"assets/products/schwarzbier.jpeg"} },
  { id:2, name:"Hot Toddy Strong Ale", type:"eros", cat:"Strong Ale", abv:"7,7%", vol:"375 ml", price:1490, accent:"#E0A24C", tag:"Limitált",
    desc:"Whiskey-ben áztatott tölgyfa chipsen érlelt, fahéjas-gyömbéres melegítő koktélsör.",
    media:{kind:"photo", src:"assets/products/hot-toddy.jpeg"} },
  { id:3, name:"Irish Red Ale", type:"klasszikus", cat:"Red Ale", abv:"5%", vol:"330 ml", price:1090, accent:"#C24A2E", tag:null,
    desc:"Ír vörös típusú szűretlen kisüzemi sör. Komplex malátás test, enyhén komlós ízjegyek.",
    media:{kind:"photo", src:"assets/products/irish-red-ale.png"} },
  { id:4, name:"Belga Meggyes", type:"gyumolcsos", cat:"Belga Golden Ale", abv:"6,3%", vol:"330 ml", price:1190, accent:"#B5324B", tag:null,
    desc:"Belga golden ale típusú szűretlen meggyes sör, észteres, aszalt gyümölcsös jegyekkel.",
    media:{kind:"photo", src:"assets/products/belga-meggyes.jpeg"} },
  { id:5, name:"Bar Project Pakk — Világutazó", type:"pakk", cat:"6-os válogatás", abv:"vegyes", vol:"6 × 330 ml", price:7090, accent:"#C98A3C", tag:"Mix pakk",
    desc:"Piña Colada, Irish Red, Meggyes, Belga Meggyes, Mangós Búza, Málnás Gose — egy doboz, körbeutazva a világot.",
    media:{kind:"pack", srcs:["assets/bottles/03.png","assets/bottles/02.png","assets/bottles/05.png"]} },
  { id:6, name:"Csak a gyümölcs pakk", type:"pakk", cat:"6-os válogatás", abv:"vegyes", vol:"6 × 330 ml", price:6390, accent:"#D9603C", tag:"Mix pakk",
    desc:"2× Meggyes, 2× Mangós Búza, 2× Málnás Gose. A gyümölcsös sör szerelmeseinek.",
    media:{kind:"pack", srcs:["assets/bottles/06.png","assets/bottles/02.png","assets/bottles/05.png"]} },
  { id:7, name:"Málnás Gose", type:"gyumolcsos", cat:"Gose", abv:"5%", vol:"330 ml", price:1190, accent:"#D63B33", tag:null,
    desc:"Enyhén sós, savanyú búzasör málnával. Tényleg savanyú — szóltunk!",
    media:{kind:"bottle", src:"assets/bottles/05.png"} },
  { id:8, name:"Mangós Búza", type:"gyumolcsos", cat:"Witbier", abv:"5%", vol:"330 ml", price:1190, accent:"#E87B2C", tag:null,
    desc:"Mangós witbier. Először édes, majd savanyú, azután lehengerlően gyümölcsös.",
    media:{kind:"bottle", src:"assets/bottles/02.png"} },
  { id:9, name:"Smoky Stout", type:"klasszikus", cat:"Stout", abv:"5,5%", vol:"330 ml", price:1090, accent:"#8C6F52", tag:null,
    desc:"Bükkfán füstölt malátával főzve. Kávés, étcsokoládés, határozott füstös ízjegyek.",
    media:{kind:"photo", src:"assets/products/smoky-stout.jpg"} },
  { id:10, name:"Meggyes", type:"gyumolcsos", cat:"Gyümölcsös sör", abv:"4%", vol:"330 ml", price:990, accent:"#E03B2E", tag:"Bestseller",
    desc:"Könnyed, frissítő meggyes sör. Harsány zamat, édes-fanyar lecsengés.",
    media:{kind:"bottle", src:"assets/bottles/06.png"} },
  { id:11, name:"Kezdő pakk — Ismerkedj", type:"pakk", cat:"6-os válogatás", abv:"vegyes", vol:"6 × 330 ml", price:6090, accent:"#C98A3C", tag:"Mix pakk",
    desc:"Német Pils, Meggyes, Gose, Mangós Búza, Irish Red, Piña Colada — a szortiment esszenciája.",
    media:{kind:"pack", srcs:["assets/bottles/01.png","assets/bottles/06.png","assets/bottles/03.png"]} },
  { id:12, name:"Csapolt hordós sör 30L", type:"hordo", cat:"Hordós", abv:"vegyes", vol:"30 L hordó", price:33000, accent:"#8A9099", tag:"Rendelésre",
    desc:"Családi rendezvényre, baráti összejövetelre. Bécsi Lager 33.000 Ft-tól, Meggyes 36.000 Ft. Sörcsap és kiszállítás benne.",
    media:{kind:"photo", src:"assets/products/hordo.jpg"} }
];

const FILTERS = [
  ["mind","Mind"], ["klasszikus","Klasszikus"], ["gyumolcsos","Gyümölcsös"],
  ["eros","Erős"], ["pakk","Pakk"], ["hordo","Hordó"]
];

const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + ' Ft';
const byId = id => PRODUCTS.find(p => p.id === id);

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderGrid('mind');
  initDrawer();
  initPromo();
  document.addEventListener('cart:change', renderDrawer);
  renderDrawer();
});

/* ─── Media markup per product ──────────────────────────────────────────── */
function mediaHTML(p) {
  const m = p.media;
  if (m.kind === 'photo')  return `<div class="photo-art"><img loading="lazy" src="${m.src}" alt="${p.name}"></div>`;
  if (m.kind === 'bottle') return `<img class="bottle" loading="lazy" src="${m.src}" alt="${p.name}">`;
  if (m.kind === 'label')  return `<div class="label-art"><img loading="lazy" src="${m.src}" alt="${p.name} címke"></div>`;
  if (m.kind === 'pack')   return `<div class="pack-art"><span class="pack-badge">6×</span>${m.srcs.map(s=>`<img loading="lazy" src="${s}" alt="">`).join('')}</div>`;
  if (m.kind === 'keg')    return `<div class="keg-art"><div class="keg-body"><span>30 L</span></div></div>`;
  return `<div class="placeholder-art">
      <span class="pl-mark"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/><path d="M12 4v-2"/></svg></span>
      <span class="pl-name">${m.word}</span><span class="pl-sub">${m.sub}</span></div>`;
}

/* ─── Filters ───────────────────────────────────────────────────────────── */
let activeFilter = 'mind';
function renderFilters() {
  const wrap = document.getElementById('filters');
  wrap.innerHTML = FILTERS.map(([k,l]) =>
    `<button class="filter${k==='mind'?' active':''}" data-f="${k}">${l}</button>`).join('');
  wrap.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => {
    activeFilter = b.dataset.f;
    wrap.querySelectorAll('.filter').forEach(x => x.classList.toggle('active', x===b));
    renderGrid(activeFilter);
  }));
}

/* ─── Grid ──────────────────────────────────────────────────────────────── */
function renderGrid(filter) {
  const grid = document.getElementById('grid');
  const list = filter === 'mind' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);
  grid.innerHTML = list.map(p => `
    <article class="card" style="--pa:${p.accent}" data-screen-label="${p.name}">
      <div class="card-media">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
        ${mediaHTML(p)}
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-spec"><span>${p.abv === 'vegyes' ? 'Vegyes' : 'ALC. '+p.abv}</span><span>${p.vol}</span></div>
        <div class="card-foot">
          <div class="card-price">${p.price >= 33000 ? `<small>tól</small> ` : ''}${fmt(p.price)}</div>
          <button class="add-btn" data-add="${p.id}">
            Kosárba
            <svg viewBox="0 0 24 24" fill="none"><path d="M6 7h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7z M9 7a3 3 0 0 1 6 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </article>`).join('');
  grid.querySelectorAll('[data-add]').forEach(b =>
    b.addEventListener('click', () => { FHSCart.add(+b.dataset.add); toast(); }));
  const rc = document.getElementById('resultCount');
  if (rc) rc.textContent = `${list.length} termék`;
}

/* ─── Toast ─────────────────────────────────────────────────────────────── */
let toastTimer;
function toast(msg = 'Hozzáadva a kosárhoz') {
  const t = document.getElementById('toast');
  t.querySelector('span').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ─── Cart drawer ───────────────────────────────────────────────────────── */
function initDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const open = () => { drawer.classList.add('open'); overlay.classList.add('open'); };
  const close = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };
  document.querySelectorAll('[data-cart-open]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); open(); }));
  document.getElementById('drawerClose').addEventListener('click', close);
  overlay.addEventListener('click', close);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function lineThumb(p) {
  const m = p.media;
  if (m.kind === 'photo')  return `<img src="${m.src}" alt="">`;
  if (m.kind === 'bottle') return `<img src="${m.src}" alt="">`;
  if (m.kind === 'pack')   return `<img src="${m.srcs[1]}" alt="">`;
  if (m.kind === 'label')  return `<span class="mini">${p.name[0]}</span>`;
  if (m.kind === 'keg')    return `<span class="mini">30L</span>`;
  return `<span class="mini">${m.word[0]}</span>`;
}

function renderDrawer() {
  const items = FHSCart.read();
  const body = document.getElementById('drawerBody');
  const foot = document.getElementById('drawerFoot');
  const countEl = document.getElementById('drawerCount');
  const total = FHSCart.count();
  countEl.textContent = total ? `${total} tétel` : 'Üres';

  if (!items.length) {
    body.innerHTML = `<div class="drawer-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 7h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7z M9 7a3 3 0 0 1 6 0" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>A kosarad még üres.<br>Válassz a söreink közül!</p></div>`;
    foot.style.display = 'none';
    return;
  }
  foot.style.display = 'block';
  body.innerHTML = items.map(it => {
    const p = byId(it.id); if (!p) return '';
    return `<div class="line">
      <div class="line-thumb">${lineThumb(p)}</div>
      <div class="line-info">
        <div class="l-name">${p.name}</div>
        <div class="l-price">${fmt(p.price)} / db</div>
      </div>
      <div class="line-right">
        <div class="l-total">${fmt(p.price * it.qty)}</div>
        <div class="qty">
          <button data-dec="${p.id}" aria-label="Kevesebb">−</button>
          <span>${it.qty}</span>
          <button data-inc="${p.id}" aria-label="Több">+</button>
        </div>
      </div></div>`;
  }).join('');

  body.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => {
    const id = +b.dataset.inc; const r = FHSCart.read().find(i=>i.id===id); FHSCart.setQty(id, (r?r.qty:0)+1);
  }));
  body.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => {
    const id = +b.dataset.dec; const r = FHSCart.read().find(i=>i.id===id); FHSCart.setQty(id, (r?r.qty:0)-1);
  }));

  const subtotal = items.reduce((a,it) => { const p = byId(it.id); return a + (p?p.price*it.qty:0); }, 0);
  const eligible = subtotal >= 16000;
  const discount = eligible ? Math.round(subtotal * 0.05) : 0;
  const grand = subtotal - discount;

  foot.innerHTML = `
    <div class="drawer-line"><span>Részösszeg</span><span>${fmt(subtotal)}</span></div>
    ${eligible ? `<div class="drawer-line discount"><span>5% kedvezmény</span><span>−${fmt(discount)}</span></div>`
               : `<div class="drawer-line"><span style="color:var(--ink-faint)">5% kedvezmény 16.000 Ft felett</span><span style="color:var(--ink-faint)">—</span></div>`}
    <div class="drawer-total"><span class="t-label">Összesen</span><span class="t-val">${fmt(grand)}</span></div>
    <p class="drawer-note">A szállítási költség a pénztárnál kerül kiszámításra. Friss tételek, rövid szavatossággal.</p>
    <button class="checkout-btn" disabled>Tovább a pénztárhoz <span class="soon">(Hamarosan)</span></button>`;
}

/* ─── Promo banner ──────────────────────────────────────────────────────── */
function initPromo() {
  const promo = document.getElementById('promo');
  if (!promo) return;
  if (sessionStorage.getItem('fhs_promo_closed') === '1') promo.classList.add('hide');
  promo.querySelector('.promo-close').addEventListener('click', () => {
    promo.classList.add('hide');
    sessionStorage.setItem('fhs_promo_closed', '1');
  });
}
