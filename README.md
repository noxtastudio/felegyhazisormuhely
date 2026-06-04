# Félegyházi Sörműhely

Static website for **Félegyházi Sörműhely** — kézműves sörök Kiskunfélegyházáról 2020 óta.

Editorial dark theme with a one-section-per-viewport scroll-snap front page, a webshop catalog mock, and a standalone immersive product showcase for the six hero beers.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Front page — Hero, Sörfőzde, Miért mi?, Galéria, Hol kapható, Kapcsolat |
| `soreink.html` | Söreink — horizontal bottle showcase of the 6 hero beers |
| `webshop.html` | Webshop catalog (12 products, filters, cart drawer mock) |
| `felhasznalasi-feltetelek.html` | ÁSZF (legal) |

## Stack

Pure static. No build step. No framework. No npm.

- Vanilla HTML + CSS + JS (ES modules where it matters)
- Google Fonts (Cormorant Garamond + Inter)
- Embedded Google Maps iframe in the "Hol kapható" section

## Structure

```
.
├── index.html
├── soreink.html
├── webshop.html
├── felhasznalasi-feltetelek.html
├── css/
│   ├── base.css      # shared nav + footer + age gate + tokens
│   ├── index.css     # front-page sections
│   ├── soreink.css   # bottle showcase (loads on top of base.css)
│   ├── webshop.css   # catalog + cart drawer
│   └── legal.css     # ÁSZF / privacy reader
├── js/
│   ├── site.js       # age gate, mobile menu, cart store, cookie strip
│   ├── index.js      # carousel, gallery, section dots
│   ├── soreink.js    # bottle stage state machine
│   └── webshop.js    # filters + cart drawer mock
└── assets/
    ├── bottles/      # 6 transparent bottle renders
    ├── backgrounds/  # per-beer scene backgrounds
    ├── labels/       # SVG label artwork
    ├── featured/     # owner + brewery hero photos
    ├── gallery/      # brewery / event photos
    └── products/     # webshop product photographs
```

## Run locally

```bash
python3 -m http.server 8767
# open http://localhost:8767
```

Any static server works (Node `serve`, `http-server`, Caddy, nginx).

## Deploy

GitHub Pages drop-in. From this repository's **Settings → Pages**:

- Source: **Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`

No build step needed. Push to `main` and Pages serves it.

## Notes

- The mobile hamburger is wired up in `js/site.js`; the slide-down panel styles live in `css/base.css`.
- Cart state persists in `localStorage` under the key `fhs_cart`. Cart drawer is UI-only — no checkout backend.
- The age gate persists once accepted (`fhs_age_verified=true` in localStorage).
- Live brand: <https://www.felegyhazisor.hu/>
- Cég: Jankesz Gasztro Kft. · 6100 Kiskunfélegyháza, Szentesi út 7. · Adószám 27298604-2-03

— Élet, (s)öröm, Félegyháza!
