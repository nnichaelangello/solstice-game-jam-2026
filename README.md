# SOLSTICE: The Sun Remembers

> A 3D open-world puzzle exploration game built for the [June Solstice Game Jam](https://dev.to/challenges/june-game-jam-2026-06-03).

You don't play as a human. You play as **Sol** — the soul of the Sun itself, a being that has risen every day for billions of years without ever questioning why. Five ancient memories have been lost, and Sol's light is fading. Explore the world, restore each memory through a unique puzzle, and stop eternal darkness from falling before time runs out.

![status](https://img.shields.io/badge/status-game%20jam%20submission-FFD166)
![engine](https://img.shields.io/badge/engine-Three.js%20r128-000000)
![audio](https://img.shields.io/badge/audio-100%25%20procedural-blue)

---

## 🎮 Play It

[https://solstice-game-jam-2026.vercel.app](https://solstice-game-jam-2026.vercel.app)

## 📺 Video Demo

[https://youtu.be/zl4c6IrKuCA](https://youtu.be/zl4c6IrKuCA)

## 📝 Full Submission Post

[INSERT DEV.TO SUBMISSION LINK]

---

## About the Game 📖

SOLSTICE reinterprets the game jam's theme — light, darkness, and the passage of time — through the lens of a Sun that has forgotten *why* it shines. Each of its five lost memories is tied to a real June celebration, expressed as both a location and a distinct puzzle mechanic:

| Chapter | Location | June Theme | Puzzle Mechanic |
|---|---|---|---|
| I | The Ancient Forest | The Solstice itself | Multiple-choice — Earth's axial tilt |
| II | The Village Square | Pride | Interactive sundial — click to set solar noon |
| III | The Mountain of Freedom | Juneteenth | Historical puzzle — the journey from Emancipation to Galveston |
| IV | The Observatory | Alan Turing | A real, working Caesar cipher |
| V | The Ocean Shrine | Closing the cycle | 5×5 constellation grid — chart the Sun's path |

Sol's light drains passively over time and refills as each memory is restored, creating gentle pressure to keep exploring without making the game punishing. Multiple endings are possible depending on how many memories you recover and how much light remains.

## 🛠️ Built With

- **[Three.js (r128)](https://threejs.org/)** — all 3D rendering, loaded via CDN, no build step
- **Vanilla JavaScript** — no framework, no bundler
- **Web Audio API** — every sound effect and the entire background score are synthesized live in code (oscillators, filtered noise, layered drone pads); there isn't a single audio file in the project
- **Google Fonts** — Cinzel & Inter/Outfit for UI typography

## ✨ Technical Highlights

- **Dynamic time-of-day lighting** — sky color, fog, directional/ambient/hemisphere light are linearly interpolated across a table of keyframed hours, driving sunrise, day, sunset, and night transitions in real time.
- **Zero audio assets** — chimes, ambient pads, and wind noise are all generated procedurally through the Web Audio API.
- **Unified puzzle framework** — four different puzzle types (multiple-choice, click-position, cipher-decode, grid-select) are defined as data and rendered through one shared modal, rather than four hardcoded UIs.
- **Navigation aids** — a directional arrow, live distance readout, and minimap help players find objectives without a full quest-marker system.
- **Save/load support** and **branching endings** based on memories recovered and remaining light.

## 📂 Project Structure

```
.
├── index.html      # Page structure, UI overlays (menu, HUD, puzzle modals, endings)
├── style.css       # All visual styling and animations
└── game.js         # Game logic: Three.js scene, chapters, puzzles, audio, save system
```

No build tools, no dependencies to install — open `index.html` in a browser (or serve it locally) and it runs.

## 🕹️ Controls (Kontrol)

| Key | Action |
|---|---|
| `WASD` | Move |
| Mouse | Look around |
| `F` | Interact |
| `Shift` | Sprint |
| `Esc` | Pause |

## 🏆 Prize Category

Submitted for **Best Ode to Alan Turing** — Chapter IV centers entirely on Turing's legacy, both narratively (his codebreaking work and the persecution he faced) and mechanically (a real Caesar cipher the player decodes by hand).

## 🤝 Credits

Built solo by Michael Angello Qadosy Riyadi for the June Solstice Game Jam (June 3–21, 2026).

🤖 **AI disclosure:** Gemini 3.1 Pro was used as a coding assistant throughout development — helping with Three.js scene setup, debugging lighting interpolation logic, and brainstorming puzzle mechanics. All narrative direction, puzzle content, historical research, and creative decisions are my own.

## 💭 Conclusion

SOLSTICE began with a simple question: what if everything June asks us to celebrate — light, identity, freedom, brilliance — was something the Sun itself had forgotten how to hold onto? Building four genuinely distinct puzzle mechanics around four genuinely distinct pieces of history turned out to be the most rewarding part of this jam, and probably the part I learned the most from technically (especially the lighting and audio systems).

Thanks for reading, and thanks for checking out Sol's journey. ⭐ If you enjoyed it, a star on this repo or a comment on the submission post would mean a lot — feedback and bug reports are always welcome too! 🙏
