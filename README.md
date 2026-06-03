# Félegyházi Sörműhely

Editorial product carousel for the Félegyházi craft brewery. Dark theme with
horizontal scroll between 6 beers — accent color, background, side cards, and
feature panel all tween to match the centered bottle.

## Stack

Pure static site. No build step. No dependencies.

```
.
├── index.html          # markup + structure
├── style.css           # all styles, dark editorial theme
├── script.js           # carousel state machine + beer data
├── bottles/            # 6 transparent-background bottle PNGs
│   ├── 01.png          # Mangós Búza
│   ├── 02.png          # Bécsi Lager
│   ├── 03.png          # Málnás Gose
│   ├── 04.png          # Belga Búza
│   ├── 05.png          # Piña Colada Sour Ale
│   └── 06.png          # Meggyes
└── .nojekyll           # tells GitHub Pages to serve files as-is
```

## Run locally

Any static server works. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just double-click `index.html` (note: ES module loading needs `http://`,
not `file://`, so the local server is the reliable path).

## Deploy on GitHub Pages

1. Push this folder's contents (not the folder itself — its contents) to the
   root of your repo, or to a `gh-pages` branch.
2. Settings → Pages → Source: pick the branch.
3. Done. Live at `https://<your-username>.github.io/<repo>/`.

The `.nojekyll` file tells GitHub Pages to skip Jekyll preprocessing.

## Editing

- **Change a beer**: edit the `BEERS` array at the top of `script.js`. Fields:
  `num`, `src`, `name`, `sub`, `cardSub`, `desc`, `short`, `type`, `abv`,
  `accent`, `accentSoft`, `pill`, `features`.
- **Swap a bottle image**: replace `bottles/0N.png`. Transparent PNG, portrait.
- **Add a 7th beer**: append to `BEERS` array + add a matching `<img>` in
  `index.html` inside `.bottles`. The progress bar, dots, color tweens, and
  state machine all derive from the array — no logic to touch.
- **Tweak motion**: `COOLDOWN_MS` in `script.js` (debounce); transition
  duration / easing in `style.css` `:root` (`--ease`) and on `.bottle-img`.

## Controls

- Mouse wheel / trackpad: horizontal scroll
- Swipe (touch / mouse drag): horizontal swipe
- Arrow keys: ← →
- Click side bottle: jump to that bottle
- Click progress segment: jump to that beer
- Click ← → arrows in the bottom bar: prev / next
