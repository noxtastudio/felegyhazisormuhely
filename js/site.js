/* ═══════════════════════════════════════════════════════════════════════
   site.js — shared behaviour (age gate · nav · cart store · cookie strip)
   ═══════════════════════════════════════════════════════════════════════ */

/* ─── Cart store (localStorage) ─────────────────────────────────────────── */
const FHSCart = {
  KEY: 'fhs_cart',
  read() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch (e) { return []; } },
  write(items) { localStorage.setItem(this.KEY, JSON.stringify(items)); this.sync(); },
  add(id, qty = 1) {
    const items = this.read();
    const row = items.find(i => i.id === id);
    if (row) row.qty += qty; else items.push({ id, qty });
    this.write(items);
  },
  setQty(id, qty) {
    let items = this.read();
    if (qty <= 0) items = items.filter(i => i.id !== id);
    else { const row = items.find(i => i.id === id); if (row) row.qty = qty; }
    this.write(items);
  },
  count() { return this.read().reduce((a, i) => a + i.qty, 0); },
  clear() { this.write([]); },
  sync() {
    const c = this.count();
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = c;
      b.style.display = c > 0 ? 'flex' : 'none';
    });
    document.dispatchEvent(new CustomEvent('cart:change'));
  }
};
window.FHSCart = FHSCart;

/* ─── Boot ──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Age gate ------------------------------------------------------------- */
  const gate = document.getElementById('agegate');
  if (gate) {
    const verified = localStorage.getItem('fhs_age_verified') === 'true';
    if (verified) {
      gate.classList.add('hide');
      gate.setAttribute('aria-hidden', 'true');
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
    const yes = gate.querySelector('[data-gate="yes"]');
    const no  = gate.querySelector('[data-gate="no"]');
    yes && yes.addEventListener('click', () => {
      localStorage.setItem('fhs_age_verified', 'true');
      gate.classList.add('hide');
      document.documentElement.style.overflow = '';
      setTimeout(() => gate.setAttribute('aria-hidden', 'true'), 500);
    });
    no && no.addEventListener('click', () => {
      const card = gate.querySelector('.agegate-card');
      card.innerHTML = '<div class="agegate-mark">Félegyházi<span>Sörműhely</span></div>' +
        '<div class="agegate-rule"></div>' +
        '<p class="agegate-denied">Sajnáljuk, de csak 18 éven felüliek léphetnek be az oldalra.<br><br>' +
        'Élet, (s)öröm, Félegyháza!</p>';
    });
  }

  /* Nav scrolled state --------------------------------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      nav.classList.toggle('scrolled', y > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile menu (burger) ------------------------------------------------- */
  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* Cookie strip --------------------------------------------------------- */
  const cookie = document.getElementById('cookie');
  if (cookie) {
    if (localStorage.getItem('fhs_cookie') !== 'ok') {
      setTimeout(() => cookie.classList.add('show'), 1400);
    }
    const ok = cookie.querySelector('button');
    ok && ok.addEventListener('click', () => {
      localStorage.setItem('fhs_cookie', 'ok');
      cookie.classList.remove('show');
    });
  }

  /* Auto year ------------------------------------------------------------ */
  document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* Cart badge initial sync --------------------------------------------- */
  FHSCart.sync();
});
