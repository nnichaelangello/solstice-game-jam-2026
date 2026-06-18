const SAVE_KEY = 'solstice_v4';
const TOTAL_CHAPTERS = 5;
const SOLAR_ENERGY_MAX = 100;
const SOLAR_DRAIN_RATE = 0.35;
const SOLAR_RESTORE_PER_CHAPTER = 20;
const ISLAND_RADIUS = 62;

const CHAPTERS = [
  {
    id: 0,
    title: 'Chapter I',
    location: 'The Ancient Forest',
    intro: [
      'You are Sol — the soul of the Sun itself.',
      'Not a human. Not a god. You are the light that has existed since the beginning of time.',
      'For billions of years, your purpose has been singular: rise every morning and illuminate the world.',
      'But now… you cannot remember why. Five ancient memories have vanished from within you.',
      'Without them, your light grows dimmer with every passing hour. The world is beginning to go dark.',
      'This forest was witness to your very first dawn. Deep within it stands the Ancient Oak — a tree older than civilization itself.',
      'Find the Ancient Oak. It will help you recover your first lost memory.'
    ],
    objective: 'Reach the Ancient Oak and answer its challenge.',
    targetLabel: 'Ancient Oak',
    targetPos: { x: 23, z: -6 },
    interactDist: 5.5,
    puzzle: {
      type: 'choice',
      title: 'The Ancient Oak Speaks',
      question: 'On the June Solstice (around June 21), why is it the longest day of the year in the Northern Hemisphere?',
      context: 'The bark of the oak is carved with sun-symbols stretching back thousands of years. Before surrendering its memory, the ancient tree asks — do you truly understand the nature of light?',
      options: [
        "Earth's axis tilts the North Pole toward the Sun, giving the Northern Hemisphere more daylight hours",
        'Earth is closest to the Sun on this date, making the sunlight stronger and longer',
        'The Sun moves faster through the sky and covers a greater distance overhead',
        'The Moon is positioned to reflect extra sunlight back onto the Earth'
      ],
      answer: 0,
      hint: "Earth's axial tilt of 23.5° is the reason behind all seasons. When the North Pole tilts toward the Sun, the Northern Hemisphere receives sunlight for longer each day — creating the longest day of the year."
    },
    memory: {
      label: 'Memory I — The First Sunrise',
      icon: '🌅',
      text: 'I remember now… I was the very first light to rise above a world still cooling from its own birth. The oceans were steaming. The land was bare and silent. But I was there — blazing, certain, eternal. I remember that every creature that would ever live on this world would know warmth, because I chose to rise.',
      effect: '✦ Forest restored · Sol\'s light +20%'
    },
    solVoice: '"This forest… I remember watching it grow from a single seed. It was my warmth that coaxed it from the earth."',
    worldEffect: { forest: 25, light: 15 }
  },
  {
    id: 1,
    title: 'Chapter II',
    location: 'The Village Square',
    intro: [
      'Good. One memory has returned. You are beginning to feel yourself again.',
      'You are Sol. And you are far more than a ball of fire in the sky.',
      'You are the keeper of time for all life. The planting season and the harvest. The hour of rest and the hour of labor. Everything follows your movement.',
      'In this village, people once built a Sundial — a sun clock — to honor your daily journey across the sky.',
      'Every Solstice, they gathered in the square, danced, and celebrated the longest day of the year.',
      'But now the village is silent. The Sundial has stopped. Because you no longer rise with certainty.',
      'Find the Sundial. Set it to Solar Noon. Restore the memory of celebration and community.'
    ],
    objective: 'Find the Village Sundial and set it to solar noon.',
    targetLabel: 'Village Sundial',
    targetPos: { x: -18, z: 18 },
    interactDist: 5.5,
    puzzle: {
      type: 'sundial',
      title: 'The Village Sundial',
      question: 'The sundial\'s gnomon (the pointer) casts a shadow. Right now it is solar noon — the moment I reach my highest point in the sky. Click the correct position on the clock face to mark 12 o\'clock noon.',
      context: 'The villagers gathered here every solstice to celebrate. Set the sundial hand to noon to unlock their memory.'
    },
    memory: {
      label: 'Memory II — The Celebration',
      icon: '🎉',
      text: 'I remember! For thousands of years, I watched humanity gather beneath me. They danced, they sang, they loved one another. There were those who, on the longest day, found the courage to step into my light for the very first time — bold, joyful, and free. I have never shone more gladly than on those days when they finally lived openly under my sky.',
      effect: '✦ Village restored · Sol\'s light +12%'
    },
    solVoice: '"This village… I remember the music of their celebrations and the laughter of children running beneath my light on Solstice Day."',
    worldEffect: { village: 25, light: 12 }
  },
  {
    id: 2,
    title: 'Chapter III',
    location: 'The Mountain of Freedom',
    intro: [
      'Two memories have returned. You are growing stronger.',
      'But one memory weighs heavier than the others. A memory of profound and lasting darkness.',
      'I — Sol — shine upon the entire Earth without prejudice. But humanity has not always done the same.',
      'For centuries, I watched millions of souls live in bondage. They labored beneath my heat, yet they were not free.',
      'On January 1, 1863, President Lincoln signed the Emancipation Proclamation. Slavery was abolished by law.',
      'But it was not until June 19, 1865 — two and a half years later — that Union soldiers finally arrived in Galveston, Texas. And for the first time, the news of freedom truly reached everyone.',
      'That day is now known as Juneteenth. The day the Sun finally shone equally bright for all.',
      'On this mountain stands a stone marker. Find it, and recover the memory of Freedom.'
    ],
    objective: 'Reach the Mountain Marker and answer its historical challenge.',
    targetLabel: 'Freedom Marker',
    targetPos: { x: -28, z: -9 },
    interactDist: 5.5,
    puzzle: {
      type: 'choice',
      title: 'The Mountain Marker',
      question: 'Juneteenth — June 19, 1865. Union soldiers arrived in Galveston, Texas to announce the end of slavery. Why did this happen nearly 2.5 years AFTER the Emancipation Proclamation of January 1, 1863?',
      context: 'The stone is engraved with words that have waited 160 years to be heard. Understanding this moment unlocks the memory of Freedom.',
      options: [
        'Texas had refused to join the Confederacy and maintained its own separate laws',
        'News and military enforcement could not reach remote Confederate regions until Union troops physically arrived',
        'The Emancipation Proclamation initially applied only to Northern states',
        'Slavery in Texas had already ended voluntarily before 1865'
      ],
      answer: 1,
      hint: 'The Emancipation Proclamation declared freedom on paper, but freedom required physical enforcement on the ground. Texas was one of the last Confederate regions where Union military authority finally arrived to make it a reality.'
    },
    memory: {
      label: 'Memory III — Freedom',
      icon: '🕊️',
      text: 'Freedom moves like light — it cannot be stopped, only delayed. I watched it travel from person to person, generation to generation, until on a June morning in Galveston, the last darkness finally broke. I wept sunlight that day. Because it was the first time in centuries that I could honestly say: I shine equally for everyone.',
      effect: '✦ All realms brightened · Hope restored'
    },
    solVoice: '"Freedom… I remember that June morning. The day I was finally able to shine with equal brightness for every human soul on Earth."',
    worldEffect: { forest: 10, village: 15, ocean: 10, light: 10 }
  },
  {
    id: 3,
    title: 'Chapter IV',
    location: 'The Observatory',
    intro: [
      'Three memories have returned. You are almost whole.',
      'This Observatory was once a place where humanity looked up at my stars and tried to understand the universe.',
      'Here, I remember someone named Alan Turing.',
      'He was a British mathematician. During World War II, he cracked the Nazi encryption machine — a device called Enigma — and helped end the war sooner, saving millions of lives.',
      'He proved that intelligence is not magic. It is mathematics. He laid the foundation for what we today call the computer.',
      'Yet the world repaid him with cruelty — he was persecuted for loving someone the law of his time deemed wrong.',
      'His memory is locked in a cipher panel at the Observatory entrance. Decode it, and restore his light to the world.'
    ],
    objective: 'Enter the Observatory and decode the Turing Cipher.',
    targetLabel: 'Cipher Panel',
    targetPos: { x: 0, z: -24 },
    interactDist: 6,
    puzzle: {
      type: 'cipher',
      title: 'The Turing Cipher',
      question: 'Alan Turing pioneered codebreaking during World War II. This word is encoded with a Caesar cipher — each letter is shifted forward by 3 positions (A becomes D, B becomes E, and so on). Decode it:',
      context: 'The cipher panel glows with encrypted text. Shift each letter BACKWARD by 3 positions to reveal the hidden word.',
      encoded: 'FRPSXWH',
      answer: 'COMPUTE',
      hint: 'Shift each letter backward by 3: F→C, R→O, P→M, S→P, X→U, W→T, H→E. The answer is a 7-letter English word.'
    },
    memory: {
      label: 'Memory IV — Alan Turing',
      icon: '🔭',
      text: 'I remember that mind — a mind that worked like light itself, illuminating what was hidden and revealing patterns in the dark. He proved that thinking could be computed, that intelligence was not magic but pure mathematics. The world punished him for being exactly who he was. I shone brighter than usual on the day history finally acknowledged his genius.',
      effect: '✦ Observatory illuminated · Knowledge restored'
    },
    solVoice: '"Turing… I remember his mind burning as brilliantly as any star I have ever created."',
    worldEffect: { light: 20, village: 10 }
  },
  {
    id: 4,
    title: 'Chapter V',
    location: 'The Ocean Shrine',
    intro: [
      'Four memories have returned. Only one remains.',
      'This is the oldest memory of all. Older than civilization. Older than life itself.',
      'Since the Earth first formed, the ocean and I have been true partners.',
      'I heat the water. It evaporates into clouds that shade the land. The clouds fall as rain, fill the rivers, and feed the forests.',
      'I provide the energy. The ocean stores the warmth. Together, we created the climate that made life possible.',
      'We are a conversation that has lasted four billion years — and will continue for four billion more.',
      'At the edge of this ocean stands an Ancient Shrine. Inside it lies the Solstice Star Chart.',
      'Light the correct stars. Complete the eternal cycle. And I, Sol, will remember everything.'
    ],
    objective: 'Reach the Ocean Shrine and complete the Solstice Star Chart.',
    targetLabel: 'Ocean Shrine',
    targetPos: { x: 0, z: 34 },
    interactDist: 6,
    puzzle: {
      type: 'constellation',
      title: 'The Solstice Star Chart',
      question: 'Chart the path of the Sun on the longest day. Light exactly 5 stars forming a diagonal line from the top-left corner to the bottom-right corner of the 5×5 grid — this represents the arc of the Sun from dawn to dusk.',
      context: 'The shrine\'s ancient star map shows the sky on the summer solstice. The Sun\'s path forms a perfect diagonal arc across the heavens.',
      answer: [0, 6, 12, 18, 24],
      hint: 'Select: Row 1 Col 1, Row 2 Col 2, Row 3 Col 3, Row 4 Col 4, Row 5 Col 5 — the main diagonal from top-left to bottom-right.'
    },
    memory: {
      label: 'Memory V — Sol and the Ocean',
      icon: '🌊',
      text: 'I remember everything now. The ocean and I have been true partners since before life existed. I heat it, it cools me. I lift it into clouds that shade the land, and it calls me back with its glittering surface. We are a conversation that has lasted four billion years. And now I am whole again. I am Sol. And I will always rise.',
      effect: '✦ World fully restored · Sol remembers all'
    },
    solVoice: '"The ocean… my oldest friend. I remember everything now. I am Sol. And I will never forget again."',
    worldEffect: { ocean: 25, light: 20, forest: 10, village: 10 }
  }
];

const COLLISION_BOXES = [
  { minX: -6, maxX: 6, minZ: -41, maxZ: -29 },
  { minX: -24, maxX: -17, minZ: 17, maxZ: 24 },
  { minX: -33, maxX: -25, minZ: 23, maxZ: 30 },
  { minX: -18, maxX: -10, minZ: 26, maxZ: 33 },
  { minX: -27, maxX: -19, minZ: 29, maxZ: 36 },
  { minX: -45, maxX: -25, minZ: -30, maxZ: -10 },
  { minX: -4, maxX: 4, minZ: 40, maxZ: 46 }
];

const CHAPTER_START_POS = [
  { x: 8, z: -3 },
  { x: -7, z: 7 },
  { x: -10, z: -3 },
  { x: 0, z: -7 },
  { x: 0, z: 7 }
];

const TOD_TABLE = [
  { h: 0, sky: [0.01, 0.02, 0.05], fog: [0.01, 0.02, 0.04], dir: [0.15, 0.20, 0.40], dirI: 0.10, ambI: 0.05, hemSky: [0.02, 0.04, 0.10], hemGnd: [0.01, 0.02, 0.04] },
  { h: 5, sky: [0.04, 0.06, 0.15], fog: [0.03, 0.05, 0.12], dir: [0.25, 0.28, 0.45], dirI: 0.18, ambI: 0.15, hemSky: [0.08, 0.10, 0.22], hemGnd: [0.04, 0.05, 0.10] },
  { h: 6, sky: [0.35, 0.20, 0.15], fog: [0.45, 0.25, 0.20], dir: [1.00, 0.50, 0.30], dirI: 0.60, ambI: 0.35, hemSky: [0.40, 0.25, 0.18], hemGnd: [0.15, 0.12, 0.10] },
  { h: 7, sky: [0.40, 0.50, 0.70], fog: [0.55, 0.60, 0.70], dir: [1.00, 0.80, 0.60], dirI: 1.20, ambI: 0.50, hemSky: [0.45, 0.55, 0.70], hemGnd: [0.18, 0.25, 0.15] },
  { h: 10, sky: [0.25, 0.55, 0.85], fog: [0.50, 0.70, 0.88], dir: [1.00, 0.95, 0.85], dirI: 1.80, ambI: 0.70, hemSky: [0.30, 0.55, 0.85], hemGnd: [0.22, 0.35, 0.18] },
  { h: 12, sky: [0.18, 0.48, 0.85], fog: [0.55, 0.75, 0.90], dir: [1.00, 0.98, 0.95], dirI: 2.20, ambI: 0.85, hemSky: [0.22, 0.52, 0.85], hemGnd: [0.25, 0.40, 0.22] },
  { h: 15, sky: [0.22, 0.50, 0.85], fog: [0.60, 0.75, 0.88], dir: [1.00, 0.95, 0.80], dirI: 1.80, ambI: 0.70, hemSky: [0.25, 0.52, 0.82], hemGnd: [0.25, 0.38, 0.20] },
  { h: 17, sky: [0.50, 0.38, 0.25], fog: [0.70, 0.50, 0.35], dir: [1.00, 0.70, 0.40], dirI: 1.20, ambI: 0.50, hemSky: [0.55, 0.42, 0.25], hemGnd: [0.22, 0.20, 0.15] },
  { h: 18, sky: [0.55, 0.22, 0.10], fog: [0.70, 0.30, 0.18], dir: [1.00, 0.40, 0.20], dirI: 0.70, ambI: 0.40, hemSky: [0.55, 0.25, 0.12], hemGnd: [0.18, 0.14, 0.10] },
  { h: 19, sky: [0.25, 0.12, 0.25], fog: [0.35, 0.18, 0.28], dir: [0.60, 0.30, 0.50], dirI: 0.40, ambI: 0.25, hemSky: [0.25, 0.12, 0.25], hemGnd: [0.10, 0.08, 0.12] },
  { h: 20, sky: [0.06, 0.05, 0.15], fog: [0.05, 0.04, 0.12], dir: [0.20, 0.22, 0.40], dirI: 0.15, ambI: 0.10, hemSky: [0.06, 0.05, 0.15], hemGnd: [0.03, 0.03, 0.08] },
  { h: 22, sky: [0.01, 0.02, 0.06], fog: [0.01, 0.02, 0.05], dir: [0.15, 0.18, 0.35], dirI: 0.08, ambI: 0.06, hemSky: [0.02, 0.03, 0.08], hemGnd: [0.01, 0.01, 0.04] },
  { h: 24, sky: [0.01, 0.02, 0.05], fog: [0.01, 0.02, 0.04], dir: [0.15, 0.20, 0.40], dirI: 0.10, ambI: 0.05, hemSky: [0.02, 0.04, 0.10], hemGnd: [0.01, 0.02, 0.04] }
];

function getTimeOfDayState(hour) {
  let i = 0;
  while (i < TOD_TABLE.length - 1 && TOD_TABLE[i + 1].h <= hour) i++;
  if (i >= TOD_TABLE.length - 1) return TOD_TABLE[TOD_TABLE.length - 1];
  const a = TOD_TABLE[i];
  const b = TOD_TABLE[i + 1];
  const t = (hour - a.h) / (b.h - a.h);
  const li = (c1, c2) => [
    c1[0] + (c2[0] - c1[0]) * t,
    c1[1] + (c2[1] - c1[1]) * t,
    c1[2] + (c2[2] - c1[2]) * t
  ];
  return {
    sky: li(a.sky, b.sky),
    fog: li(a.fog, b.fog),
    dir: li(a.dir, b.dir),
    dirI: a.dirI + (b.dirI - a.dirI) * t,
    ambI: a.ambI + (b.ambI - a.ambI) * t,
    hemSky: li(a.hemSky, b.hemSky),
    hemGnd: li(a.hemGnd, b.hemGnd)
  };
}

let gameState = {
  currentChapter: 0,
  completedChapters: [],
  worldState: { forest: 10, village: 10, ocean: 10, light: 10 },
  playerPos: { x: 0, z: 0 },
  solarEnergy: SOLAR_ENERGY_MAX,
  started: false
};

let scene, camera, renderer, clock;
let playerGroup, sunMesh, waterMesh, flameMesh, fireLightRef;
let ambientLight, dirLight, hemisphereLight;
let fireflySystem = null, fireflyBasePos = null, starPoints = null;
let cloudMeshes = [];
let foliageMeshes = [];
let waterVertices = null;
let targetOrb = null;
let puzzleActive = false;
let gameRunning = false;
let introActive = false;
let paused = false;
let tutorialShown = false;
let gameOver = false;
let particleSystem = null;
let skyDomeMesh = null;

let keys = {};
let targetYaw = 0, targetPitch = 0;
let currentYaw = 0, currentPitch = 0;
let isPointerLocked = false;
let animFrameId = null;
let inputsSetup = false;
let navTarget = null;
let sunTime = 9;
let energyDrainActive = false;

let selectedChoice = -1;
let selectedStars = [];
let sundialHour = -1;

let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { }
  }
  return audioCtx;
}

function playTone(frequency, duration, type, gainVal) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.8, ctx.currentTime + duration);
    gain.gain.setValueAtTime(gainVal || 0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) { }
}

function playSuccessChime() {
  [523, 659, 784, 1047].forEach((f, i) => {
    setTimeout(() => playTone(f, 0.35, 'sine', 0.1), i * 100);
  });
}

function playErrorTone() {
  playTone(220, 0.3, 'sawtooth', 0.08);
}

function playMemoryChime() {
  [523, 784, 1047, 1568, 2093].forEach((f, i) => {
    setTimeout(() => playTone(f, 0.5, 'sine', 0.1), i * 120);
  });
}

function playInteractTone() {
  playTone(440, 0.1, 'sine', 0.06);
}

// =============================================
// BACKGROUND MUSIC SYSTEM (Procedural)
// =============================================
let bgMusicMaster = null;
let bgMusicPlaying = false;
let bgArpTimer = null;
let bgDayMode = true;

function startBackgroundMusic() {
  const ctx = getAudioCtx();
  if (!ctx || bgMusicPlaying) return;
  bgMusicPlaying = true;

  bgMusicMaster = ctx.createGain();
  bgMusicMaster.gain.setValueAtTime(0, ctx.currentTime);
  bgMusicMaster.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 4);
  bgMusicMaster.connect(ctx.destination);

  // === LAYER 1: Ambient drone pad (sustained low tones) ===
  const dronePad = (freq, vol) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 600 + Math.random() * 400;
    osc.type = 'sine';
    osc.frequency.value = freq;
    // Subtle vibrato
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.18 + Math.random() * 0.12;
    lfoGain.gain.value = freq * 0.006;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();
    gain.gain.value = vol;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(bgMusicMaster);
    osc.start();
    return osc;
  };
  // D minor ambient: D2, A2, F3, C3
  dronePad(73.4, 0.18);   // D2
  dronePad(110.0, 0.13);  // A2
  dronePad(174.6, 0.10);  // F3
  dronePad(130.8, 0.08);  // C3

  // === LAYER 2: Wind noise (filtered white noise) ===
  const bufLen = ctx.sampleRate * 4;
  const noiseBuffer = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufLen; i++) noiseData[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;
  const windFilter = ctx.createBiquadFilter();
  windFilter.type = 'bandpass';
  windFilter.frequency.value = 320;
  windFilter.Q.value = 0.8;
  const windGain = ctx.createGain();
  windGain.gain.value = 0.035;
  noise.connect(windFilter);
  windFilter.connect(windGain);
  windGain.connect(bgMusicMaster);
  noise.start();

  // === LAYER 3: Melodic arpeggio (gentle pluck melody) ===
  const dayScale = [293.7, 329.6, 392.0, 440.0, 523.3, 587.3, 659.3, 783.9]; // D major
  const nightScale = [293.7, 311.1, 349.2, 391.9, 440.0, 466.2, 523.3, 587.3]; // D minor

  function playArpNote() {
    if (!bgMusicPlaying || !bgMusicMaster) return;
    const ctx2 = getAudioCtx();
    if (!ctx2) return;
    const scale = (sunTime >= 19 || sunTime <= 6) ? nightScale : dayScale;
    const freq = scale[Math.floor(Math.random() * scale.length)] * (Math.random() < 0.25 ? 2 : 1);
    const osc = ctx2.createOscillator();
    const gain = ctx2.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, ctx2.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx2.currentTime + 1.8);
    osc.connect(gain);
    gain.connect(bgMusicMaster);
    osc.start(ctx2.currentTime);
    osc.stop(ctx2.currentTime + 2.0);
    // Next note in 1.2–2.8 seconds
    const delay = 1200 + Math.random() * 1600;
    bgArpTimer = setTimeout(playArpNote, delay);
  }
  bgArpTimer = setTimeout(playArpNote, 2000);
}

function stopBackgroundMusic() {
  bgMusicPlaying = false;
  if (bgArpTimer) clearTimeout(bgArpTimer);
  if (bgMusicMaster) {
    const ctx = getAudioCtx();
    if (ctx) {
      bgMusicMaster.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
    }
    bgMusicMaster = null;
  }
}

function updateMusicTOD() {
  // Called periodically to adjust music based on time of day
  if (!bgMusicMaster || !bgMusicPlaying) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const isNight = sunTime >= 19 || sunTime <= 6;
  if (isNight !== bgDayMode) return;
  bgDayMode = !isNight;
  // Fade master volume slightly at night
  bgMusicMaster.gain.linearRampToValueAtTime(isNight ? 0.5 : 0.7, ctx.currentTime + 6);
}


function saveGame() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(gameState)); } catch (e) { }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      gameState = Object.assign({}, gameState, parsed);
      if (typeof gameState.solarEnergy !== 'number') gameState.solarEnergy = SOLAR_ENERGY_MAX;
      return true;
    }
  } catch (e) { }
  return false;
}

function clearSave() {
  try { localStorage.removeItem(SAVE_KEY); } catch (e) { }
}

function initThree() {
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x87CEEB, 0.003);

  camera = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, 0.1, 500);
  camera.rotation.order = 'YXZ';

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('game-canvas'),
    antialias: true
  });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  clock = new THREE.Clock();

  ambientLight = new THREE.AmbientLight(0xffeedd, 1.0);
  scene.add(ambientLight);

  hemisphereLight = new THREE.HemisphereLight(0xfffde0, 0x4a8a5c, 0.9);
  scene.add(hemisphereLight);

  dirLight = new THREE.DirectionalLight(0xfff8e0, 2.5);
  dirLight.position.set(60, 90, 40);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 4096;
  dirLight.shadow.mapSize.height = 4096;
  dirLight.shadow.camera.near = 10;
  dirLight.shadow.camera.far = 200;
  dirLight.shadow.camera.left = -75;
  dirLight.shadow.camera.right = 75;
  dirLight.shadow.camera.top = 75;
  dirLight.shadow.camera.bottom = -75;
  dirLight.shadow.bias = -0.0005;
  dirLight.shadow.normalBias = 0.05;
  scene.add(dirLight);

  buildWorld();
  buildSkyDome();
  buildSun();
  buildPlayer();
  buildParticleSystem();

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

function buildSkyDome() {
  const geo = new THREE.SphereGeometry(320, 16, 8);
  const mat = new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: 0x87CEEB });
  skyDomeMesh = new THREE.Mesh(geo, mat);
  scene.add(skyDomeMesh);
}

function buildSun() {
  sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(9, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xFFFDE0 })
  );

  const corona1 = new THREE.Mesh(
    new THREE.SphereGeometry(15, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xFFE566, transparent: true, opacity: 0.18 })
  );
  const corona2 = new THREE.Mesh(
    new THREE.SphereGeometry(24, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xFFBB44, transparent: true, opacity: 0.07 })
  );

  sunMesh.add(corona1);
  sunMesh.add(corona2);
  sunMesh.add(new THREE.PointLight(0xFFF8E0, 2.5, 500));
  scene.add(sunMesh);
}

function mkMesh(geo, col, cast, recv) {
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: col, roughness: 0.85, metalness: 0.05 }));
  if (cast) m.castShadow = true;
  if (recv) m.receiveShadow = true;
  return m;
}

function buildParticleSystem() {
  const geo = new THREE.BufferGeometry();
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) positions[i] = 0;
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  particleSystem = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xFFD166,
    size: 0.35,
    transparent: true,
    opacity: 0,
    sizeAttenuation: true
  }));
  particleSystem.userData.active = false;
  particleSystem.userData.timer = 0;
  scene.add(particleSystem);
}

function spawnMemoryParticles(x, y, z) {
  if (!particleSystem) return;
  const pos = particleSystem.geometry.attributes.position.array;
  for (let i = 0; i < pos.length; i += 3) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 6;
    pos[i] = x + Math.cos(angle) * r;
    pos[i + 1] = y + Math.random() * 5;
    pos[i + 2] = z + Math.sin(angle) * r;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
  particleSystem.material.opacity = 0.9;
  particleSystem.userData.active = true;
  particleSystem.userData.timer = 2.5;
  particleSystem.userData.originX = x;
  particleSystem.userData.originY = y;
  particleSystem.userData.originZ = z;
}

function buildWorld() {
  buildIsland();
  buildPaths();
  buildForestArea();
  buildVillageArea();
  buildObservatoryArea();
  buildMountainArea();
  buildOceanArea();
  buildStarField();
  buildAreaMarkers();
  buildGroundCover();
  buildFireflies();
  buildClouds();
}

function buildGroundCover() {
  const grassColors = [0x4a9050, 0x3a8040, 0x5aaa60, 0x2a7030, 0x60b060];
  const zoneConfigs = [
    { cx: 12, cz: 8, r: 18, count: 55 },
    { cx: -8, cz: 12, r: 14, count: 38 },
    { cx: 4, cz: -8, r: 12, count: 32 },
    { cx: -4, cz: -10, r: 10, count: 26 },
    { cx: 6, cz: 18, r: 14, count: 38 }
  ];
  zoneConfigs.forEach(({ cx, cz, r, count }) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * r;
      const gx = cx + Math.cos(angle) * dist;
      const gz = cz + Math.sin(angle) * dist;
      if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS * 0.88) continue;
      const h = 0.28 + Math.random() * 0.44;
      const blade = new THREE.Mesh(
        new THREE.ConeGeometry(0.06 + Math.random() * 0.06, h, 4),
        new THREE.MeshStandardMaterial({ color: grassColors[Math.floor(Math.random() * grassColors.length)], roughness: 0.9, metalness: 0 })
      );
      blade.position.set(gx, 0.06 + h / 2, gz);
      blade.rotation.y = Math.random() * Math.PI * 2;
      blade.rotation.z = (Math.random() - 0.5) * 0.32;
      scene.add(blade);
      foliageMeshes.push({ mesh: blade, baseX: blade.rotation.x, baseZ: blade.rotation.z, speed: 1.5 + Math.random(), type: 'grass' });
    }
  });
  for (let i = 0; i < 60; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 10 + Math.random() * 48;
    const gx = Math.cos(angle) * r;
    const gz = Math.sin(angle) * r;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS * 0.92) continue;
    const isForest = gx > 14 && gz < 0;
    const isVillage = gx < -10 && gz > 12;
    const isMountain = gx < -20 && gz < -5;
    if (isForest || isVillage || isMountain) continue;
    const pebble = new THREE.Mesh(
      new THREE.SphereGeometry(0.12 + Math.random() * 0.16, 5, 4),
      new THREE.MeshStandardMaterial({ color: 0x888870, roughness: 0.7, metalness: 0.1 })
    );
    pebble.scale.y = 0.45;
    pebble.position.set(gx, 0.10, gz);
    scene.add(pebble);
  }
}

function buildIsland() {
  const islandGeo = new THREE.CylinderGeometry(64, 86, 9, 128);
  const island = mkMesh(islandGeo, 0x5a9060, false, true);
  island.position.y = -4.5;
  scene.add(island);

  const base = mkMesh(new THREE.CylinderGeometry(86, 64, 32, 28), 0x8a6a2a);
  base.position.y = -22;
  scene.add(base);

  const rim = mkMesh(new THREE.TorusGeometry(64, 2.2, 8, 52), 0x6a9870);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0;
  scene.add(rim);

  const grass = mkMesh(new THREE.CylinderGeometry(14, 14, 0.3, 32), 0x70c070, false, true);
  grass.position.set(0, 0.16, 0);
  scene.add(grass);

  const pillar = mkMesh(new THREE.CylinderGeometry(0.5, 0.7, 3, 10), 0xaaaacc, true, false);
  pillar.position.set(0, 1.5, 0);
  scene.add(pillar);

  const capGeo = new THREE.SphereGeometry(0.9, 16, 16);
  const capM = mkMesh(capGeo, 0xFFD166, true, false);
  capM.position.set(0, 3.2, 0);
  capM.add(new THREE.PointLight(0xFFD166, 3.5, 24));
  scene.add(capM);

  for (let i = 0; i < 48; i++) {
    const angle = (i / 48) * Math.PI * 2;
    const r = 5 + Math.random() * 7;
    const blade = mkMesh(new THREE.ConeGeometry(0.1, 0.55 + Math.random() * 0.45, 4), 0x4a9050);
    blade.position.set(Math.cos(angle) * r, 0.36, Math.sin(angle) * r);
    blade.rotation.z = (Math.random() - 0.5) * 0.4;
    scene.add(blade);
    foliageMeshes.push({ mesh: blade, baseX: blade.rotation.x, baseZ: blade.rotation.z, speed: 1.5 + Math.random(), type: 'grass' });
  }
}

function buildPaths() {
  const pathMat = new THREE.MeshStandardMaterial({ color: 0xc8a866, roughness: 0.9, metalness: 0.05 });
  const pathConfigs = [
    { steps: 7, startX: 4, startZ: -2, dx: 3.2, dz: -1.8 },
    { steps: 6, startX: -4, startZ: 5, dx: -3, dz: 2.8 },
    { steps: 7, startX: 0, startZ: -5, dx: 0, dz: -4 },
    { steps: 6, startX: -5, startZ: -2, dx: -4.5, dz: -2 },
    { steps: 6, startX: 0, startZ: 6, dx: 0, dz: 5.5 }
  ];

  pathConfigs.forEach(cfg => {
    for (let i = 0; i < cfg.steps; i++) {
      const stone = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.16, 7), pathMat);
      stone.position.set(cfg.startX + i * cfg.dx, 0.08, cfg.startZ + i * cfg.dz);
      stone.receiveShadow = true;
      scene.add(stone);
    }
  });
}

function buildAreaMarkers() {
  const markerData = [
    { x: 18, z: -7, color: 0xFFD166 },
    { x: -16, z: 16, color: 0xFF6B9D },
    { x: -26, z: -7, color: 0x52B788 },
    { x: -2, z: -24, color: 0x9B72CF },
    { x: 2, z: 26, color: 0x48CAE4 }
  ];

  markerData.forEach(({ x, z, color }) => {
    const post = mkMesh(new THREE.CylinderGeometry(0.12, 0.12, 2.8, 6), 0x999999);
    post.position.set(x, 1.4, z);
    scene.add(post);

    const lamp = mkMesh(new THREE.SphereGeometry(0.44, 14, 14), color);
    lamp.position.set(x, 3.1, z);
    lamp.add(new THREE.PointLight(color, 2.2, 15));
    scene.add(lamp);
  });
}

function addTree(x, z, h, leafColor) {
  // Realistic trunk with taper
  const trunkH = h * 0.55;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18 + h * 0.015, 0.32 + h * 0.02, trunkH, 8),
    new THREE.MeshStandardMaterial({ color: 0x4a2a0a, roughness: 0.95, metalness: 0.0 })
  );
  trunk.position.set(x, trunkH / 2, z);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  scene.add(trunk);

  // 3-layer conical foliage — realistic proportion
  const leafMat = new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.85, metalness: 0.0 });
  const treeH = h * 0.6;
  const layers = [
    { py: trunkH + treeH * 0.22, r: 1.9 + h * 0.10, hh: treeH * 0.56 },
    { py: trunkH + treeH * 0.52, r: 1.3 + h * 0.06, hh: treeH * 0.42 },
    { py: trunkH + treeH * 0.74, r: 0.8 + h * 0.04, hh: treeH * 0.28 }
  ];
  layers.forEach(({ py, r, hh }) => {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, hh, 9), leafMat);
    cone.position.set(x, py, z);
    cone.castShadow = true;
    cone.receiveShadow = true;
    scene.add(cone);
    foliageMeshes.push({ mesh: cone, baseX: cone.rotation.x, baseZ: cone.rotation.z, speed: 0.4 + Math.random() * 0.4, type: 'tree' });
  });
}

function buildForestArea() {
  const treeData = [
    [25, -9, 0x3a8060], [30, -16, 0x50aa7c], [22, -19, 0x2a7040], [35, -11, 0x60c090],
    [32, -1, 0x50aa7c], [38, -6, 0x60c090], [26, -3, 0x2a7040],
    [20, -12, 0x50aa7c], [36, -20, 0x3a8060], [42, -8, 0x60c090], [40, -15, 0x50aa7c],
    [45, -2, 0x2a7040], [44, -18, 0x3a8060], [50, -10, 0x50aa7c], [48, -24, 0x60c090],
    [33, -26, 0x2a7040], [24, -26, 0x3a8060], [19, -6, 0x50aa7c], [46, -28, 0x2a7040],
    [52, -16, 0x60c090], [37, -30, 0x3a8060], [28, 6, 0x50aa7c], [22, 2, 0x2a7040]
  ];
  treeData.forEach(([x, z, c]) => addTree(x, z, 5 + Math.random() * 6, c));

  for (let i = 0; i < 48; i++) {
    const gx = 16 + Math.random() * 38;
    const gz = -32 + Math.random() * 40;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    if (Math.abs(gx - 28) < 4 && Math.abs(gz + 11) < 4) continue;
    const col = Math.random() < 0.5 ? 0x2a7040 : (Math.random() < 0.5 ? 0x3a8860 : 0x1e5e2e);
    const bush = mkMesh(new THREE.SphereGeometry(0.38 + Math.random() * 0.58, 7, 5), col);
    bush.scale.y = 0.45 + Math.random() * 0.35;
    bush.position.set(gx, 0.22, gz);
    scene.add(bush);
  }

  for (let i = 0; i < 36; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 2 + Math.random() * 24;
    const gx = 28 + Math.cos(angle) * r;
    const gz = -11 + Math.sin(angle) * r;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    if (Math.abs(gx - 28) < 3.5 && Math.abs(gz + 11) < 3.5) continue;
    const h = 0.9 + Math.random() * 0.9;
    const fern = mkMesh(new THREE.ConeGeometry(0.65 + Math.random() * 0.55, h, 5), Math.random() < 0.6 ? 0x1a5c30 : 0x2a6e3a);
    fern.position.set(gx, h / 2, gz);
    fern.rotation.y = Math.random() * Math.PI * 2;
    fern.rotation.z = (Math.random() - 0.5) * 0.38;
    scene.add(fern);
  }

  const glade = mkMesh(new THREE.CylinderGeometry(7.5, 7.5, 0.14, 16), 0x6ab870, false, true);
  glade.position.set(28, 0.07, -11);
  scene.add(glade);

  addTree(26, -14, 14, 0x1a5530);

  const oakGlow = new THREE.PointLight(0xFFD166, 3.2, 26);
  oakGlow.position.set(26, 9, -14);
  scene.add(oakGlow);

  const flowerColors = [0xffaa00, 0xff7777, 0xaaffaa, 0xaaaaff, 0xffccaa, 0xddaaff, 0xff99cc];
  for (let i = 0; i < 70; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 1.5 + Math.random() * 22;
    const px2 = 26 + Math.cos(angle) * r;
    const pz2 = -14 + Math.sin(angle) * r;
    if (px2 * px2 + pz2 * pz2 > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    if (Math.abs(px2 - 28) < 3.5 && Math.abs(pz2 + 11) < 3.5) continue;
    const flower = mkMesh(new THREE.SphereGeometry(0.13, 6, 4), flowerColors[i % 7]);
    flower.position.set(px2, 0.18 + Math.random() * 0.16, pz2);
    scene.add(flower);
  }

  for (let i = 0; i < 24; i++) {
    const gx = 16 + Math.random() * 42;
    const gz = -34 + Math.random() * 42;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    const mushR = 0.16 + Math.random() * 0.14;
    const capCol = Math.random() < 0.5 ? 0xcc4422 : (Math.random() < 0.5 ? 0xddbb44 : 0x886622);
    const cap = mkMesh(new THREE.SphereGeometry(mushR, 8, 5), capCol);
    cap.scale.y = 0.52;
    cap.position.set(gx, mushR * 0.52 + 0.16, gz);
    scene.add(cap);
    const stem = mkMesh(new THREE.CylinderGeometry(mushR * 0.35, mushR * 0.35, 0.20, 6), 0xeeeedd);
    stem.position.set(gx, 0.10, gz);
    scene.add(stem);
  }

  for (let i = 0; i < 18; i++) {
    const gx = 17 + Math.random() * 40;
    const gz = -30 + Math.random() * 36;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    const log = mkMesh(new THREE.CylinderGeometry(0.18, 0.24, 1.2 + Math.random() * 1.4, 6), 0x5a3010);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = Math.random() * Math.PI;
    log.position.set(gx, 0.22, gz);
    scene.add(log);
  }
}

function buildVillageArea() {
  const houseConfigs = [[-20, 20], [-29, 26], [-14, 29], [-23, 32]];
  const wallColors = [0xd09870, 0xb09060, 0xd4b080, 0xc09468];
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x9a3030, roughness: 0.82, metalness: 0.06 });

  houseConfigs.forEach(([x, z], i) => {
    const w = 5 + (i % 2);
    const d = 5 + (i % 2);
    const wallMat = new THREE.MeshStandardMaterial({ color: wallColors[i], roughness: 0.88, metalness: 0.04 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, 5, d), wallMat);
    body.position.set(x, 2.5, z);
    body.castShadow = true;
    body.receiveShadow = true;
    scene.add(body);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.82, 4, 4), roofMat);
    roof.position.set(x, 6.5, z);
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    scene.add(roof);

    const winMat = new THREE.MeshBasicMaterial({ color: 0xFFFDE0 });
    [-1, 1].forEach(dx => {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.14), winMat);
      win.position.set(x + dx * 1.4, 3.2, z + d / 2 + 0.07);
      scene.add(win);
      win.add(new THREE.PointLight(0xFFFDE0, 0.55, 4.5));
    });
  });

  const sdPed = mkMesh(new THREE.CylinderGeometry(1.9, 2.3, 1.1, 18), 0xCCB060, true, true);
  sdPed.position.set(-22, 0.55, 22);
  scene.add(sdPed);

  const sdTop = mkMesh(new THREE.CylinderGeometry(1.7, 1.9, 0.22, 18), 0xEEC870, true, true);
  sdTop.position.set(-22, 1.21, 22);
  scene.add(sdTop);

  const gnomon = mkMesh(new THREE.CylinderGeometry(0.08, 0.14, 2.2, 7), 0xFFD166, true, false);
  gnomon.position.set(-22, 2.3, 22);
  scene.add(gnomon);

  const sdGlow = new THREE.PointLight(0xFFD166, 2.8, 14);
  sdGlow.position.set(-22, 3.5, 22);
  scene.add(sdGlow);

  const flagColors = [0xe40303, 0xff8c00, 0xffed00, 0x008026, 0x004dff, 0x750787];
  flagColors.forEach((c, i) => {
    const strip = mkMesh(new THREE.BoxGeometry(2.3, 0.82, 0.07), c);
    strip.position.set(-26 + i * 2.3, 6.6, 14);
    scene.add(strip);

    const pole = mkMesh(new THREE.CylinderGeometry(0.07, 0.07, 8.5, 8), 0xb0b0b0);
    pole.position.set(-26 + i * 2.3, 4.25, 14);
    scene.add(pole);
  });

  // --- CAMPFIRE AREA ---
  const bfBase = mkMesh(new THREE.CylinderGeometry(1.1, 1.4, 0.32, 12), 0x443322, false, true);
  bfBase.position.set(-27, 0.16, 17);
  scene.add(bfBase);

  // Campfire logs — realistic cross pattern
  const logMat = new THREE.MeshStandardMaterial({ color: 0x3a1f08, roughness: 0.97, metalness: 0.0 });
  [[0, 0], [60, 0.3], [120, -0.2], [180, 0.1], [240, -0.15], [300, 0.2]].forEach(([deg, oy], i) => {
    const rad = (deg * Math.PI) / 180;
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.10, 0.13, 1.8, 6), logMat);
    log.rotation.z = Math.PI / 2;
    log.rotation.y = rad;
    log.position.set(-27 + Math.cos(rad) * 0.55, 0.32 + oy * 0.1, 17 + Math.sin(rad) * 0.55);
    log.castShadow = true;
    scene.add(log);
  });

  // Charcoal base
  const charcoal = mkMesh(new THREE.CylinderGeometry(0.55, 0.65, 0.14, 10), 0x1a1008, false, true);
  charcoal.position.set(-27, 0.38, 17);
  scene.add(charcoal);

  // Main flame — layered cones for realism
  flameMesh = new THREE.Mesh(
    new THREE.ConeGeometry(0.45, 1.8, 8),
    new THREE.MeshBasicMaterial({ color: 0xFF6600, transparent: true, opacity: 0.95 })
  );
  flameMesh.position.set(-27, 1.3, 17);
  scene.add(flameMesh);

  // Inner bright core
  const flameCore = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 1.2, 7),
    new THREE.MeshBasicMaterial({ color: 0xFFDD00, transparent: true, opacity: 0.92 })
  );
  flameCore.position.set(-27, 1.4, 17);
  scene.add(flameCore);
  flameMesh.userData.core = flameCore;

  // Ember glow ring
  const emberGlow = new THREE.Mesh(
    new THREE.CircleGeometry(0.7, 12),
    new THREE.MeshBasicMaterial({ color: 0xFF4400, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  emberGlow.rotation.x = -Math.PI / 2;
  emberGlow.position.set(-27, 0.4, 17);
  scene.add(emberGlow);
  flameMesh.userData.emberGlow = emberGlow;

  // Fire light — warm flickering
  fireLightRef = new THREE.PointLight(0xFF6622, 4.5, 22);
  fireLightRef.position.set(-27, 2.0, 17);
  fireLightRef.castShadow = true;
  scene.add(fireLightRef);

  // Campfire stone ring
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const stoneR = 0.14 + Math.random() * 0.10;
    const stone = new THREE.Mesh(
      new THREE.SphereGeometry(stoneR, 6, 5),
      new THREE.MeshStandardMaterial({ color: 0x7a7060, roughness: 0.85, metalness: 0.1 })
    );
    stone.scale.set(1 + Math.random() * 0.3, 0.55, 1 + Math.random() * 0.3);
    stone.position.set(-27 + Math.cos(angle) * 1.3, 0.12, 17 + Math.sin(angle) * 1.3);
    scene.add(stone);
  }
}

function buildObservatoryArea() {
  const base = mkMesh(new THREE.CylinderGeometry(5.8, 7.2, 10, 20), 0x8080a0, true, true);
  base.position.set(0, 5, -35);
  scene.add(base);

  const dome = mkMesh(new THREE.SphereGeometry(5.8, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), 0x9090b8, true, false);
  dome.position.set(0, 10, -35);
  scene.add(dome);

  const slit = new THREE.Mesh(new THREE.BoxGeometry(1.3, 5.5, 0.4), new THREE.MeshBasicMaterial({ color: 0x111122 }));
  slit.position.set(0, 12, -30.8);
  scene.add(slit);

  const telescope = mkMesh(new THREE.CylinderGeometry(0.48, 0.75, 7.5, 10), 0xc0a040, true, false);
  telescope.rotation.z = Math.PI / 4;
  telescope.position.set(0.5, 13, -35);
  scene.add(telescope);

  for (let i = 0; i < 5; i++) {
    const step = mkMesh(new THREE.BoxGeometry(3.2, 0.28, 0.9), 0x606080, false, true);
    step.position.set(0, 0.14 + i * 0.28, -29.5 - i * 0.9);
    scene.add(step);
  }

  const plate = mkMesh(new THREE.BoxGeometry(4, 3, 0.22), 0x22223a, false, false);
  plate.position.set(0, 3.2, -28.5);
  scene.add(plate);

  const glowL = new THREE.PointLight(0x8866ff, 3.2, 18);
  glowL.position.set(0, 4.2, -28);
  scene.add(glowL);

  for (let i = 0; i < 4; i++) {
    const win = new THREE.Mesh(new THREE.CircleGeometry(0.6, 12), new THREE.MeshBasicMaterial({ color: 0xaaddff }));
    win.position.set(-4 + i * 2.6, 4 + (i % 2) * 1.5, -29.4);
    scene.add(win);
  }
}

function buildMountainArea() {
  // Multiple rock materials for variety
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x6a6878, roughness: 0.94, metalness: 0.06 });
  const rockMat2 = new THREE.MeshStandardMaterial({ color: 0x54525e, roughness: 0.96, metalness: 0.06 });
  const rockMat3 = new THREE.MeshStandardMaterial({ color: 0x786a6a, roughness: 0.96, metalness: 0.04 });
  const snowMat = new THREE.MeshStandardMaterial({ color: 0xeef2ff, roughness: 0.22, metalness: 0.0 });

  // Main peak — slightly irregular cone set
  const peak = new THREE.Mesh(new THREE.ConeGeometry(13, 24, 10), rockMat);
  peak.position.set(-35, 12, -20);
  peak.castShadow = true; peak.receiveShadow = true;
  scene.add(peak);

  // Secondary peaks
  const peak2 = new THREE.Mesh(new THREE.ConeGeometry(8, 16, 9), rockMat2);
  peak2.position.set(-44, 8, -12);
  peak2.rotation.y = 0.4;
  peak2.castShadow = true; scene.add(peak2);

  const peak3 = new THREE.Mesh(new THREE.ConeGeometry(6, 12, 9), rockMat3);
  peak3.position.set(-39, 6, -30);
  peak3.rotation.y = 1.0;
  peak3.castShadow = true; scene.add(peak3);

  // Snow cap
  const snow = new THREE.Mesh(new THREE.ConeGeometry(5.5, 8, 9), snowMat);
  snow.position.set(-35, 20, -20);
  snow.castShadow = true; scene.add(snow);

  // Grassy mountain base
  const mGrass = mkMesh(new THREE.CylinderGeometry(14, 16, 2, 14), 0x4a7842, false, true);
  mGrass.position.set(-35, -1, -20);
  scene.add(mGrass);

  // Freedom marker platform
  const plat = mkMesh(new THREE.CylinderGeometry(3.5, 4, 0.4, 12), 0x807878, false, true);
  plat.position.set(-28, 0.2, -9);
  scene.add(plat);

  // Marker stone — weathered granite look
  const markerStone = new THREE.Mesh(
    new THREE.BoxGeometry(1.1, 2.6, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x7a8272, roughness: 0.95, metalness: 0.05 })
  );
  markerStone.position.set(-28, 1.5, -9);
  markerStone.castShadow = true;
  scene.add(markerStone);

  const markerGlow = new THREE.PointLight(0x52b788, 2.5, 12);
  markerGlow.position.set(-28, 3.0, -9);
  scene.add(markerGlow);

  // Scattered boulders — varied sizes and shapes
  const boulderMats = [rockMat, rockMat2, rockMat3];
  const boulderData = [
    [-30, -14, 1.2, 0.7], [-38, -10, 0.9, 0.6], [-34, -26, 1.4, 0.75],
    [-42, -18, 0.8, 0.5], [-26, -18, 1.1, 0.65], [-45, -8, 0.7, 0.55],
    [-33, -6, 1.0, 0.6], [-40, -28, 1.3, 0.7], [-29, -24, 0.6, 0.5],
    [-36, -16, 0.85, 0.65], [-43, -24, 0.95, 0.6], [-27, -12, 0.75, 0.55]
  ];
  boulderData.forEach(([bx, bz, bR, bSY], idx) => {
    const boulder = new THREE.Mesh(
      new THREE.SphereGeometry(bR, 7, 6),
      boulderMats[idx % 3]
    );
    boulder.scale.set(1 + Math.random() * 0.3, bSY, 1 + Math.random() * 0.25);
    boulder.position.set(bx, bR * bSY * 0.5, bz);
    boulder.rotation.y = Math.random() * Math.PI;
    boulder.castShadow = true;
    scene.add(boulder);
  });

  // Mountain pine trees
  const pineCols = [0x1a4a28, 0x224a2a, 0x1c5230, 0x284a22, 0x1e4a20];
  [[-28, -5, 6], [-38, -9, 7], [-42, -22, 5], [-30, -24, 6], [-36, -30, 5], [-44, -7, 7], [-26, -18, 5], [-40, -14, 6]].forEach(([px, pz, ph], i) => {
    if (px * px + pz * pz < ISLAND_RADIUS * ISLAND_RADIUS) {
      addTree(px, pz, ph, pineCols[i % 5]);
    }
  });

  // Mountain ground tuft grasses
  for (let i = 0; i < 30; i++) {
    const gx = -46 + Math.random() * 26;
    const gz = -34 + Math.random() * 28;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    const h = 0.25 + Math.random() * 0.45;
    const col = Math.random() < 0.5 ? 0x3a6030 : 0x4a7038;
    const tuft = mkMesh(new THREE.ConeGeometry(0.08 + Math.random() * 0.07, h, 4), col);
    tuft.position.set(gx, h / 2, gz);
    tuft.rotation.z = (Math.random() - 0.5) * 0.38;
    scene.add(tuft);
  }

  // Mountain bushes
  for (let i = 0; i < 14; i++) {
    const gx = -40 + Math.random() * 18;
    const gz = -28 + Math.random() * 20;
    if (gx * gx + gz * gz > ISLAND_RADIUS * ISLAND_RADIUS) continue;
    const bush = mkMesh(new THREE.SphereGeometry(0.38 + Math.random() * 0.45, 6, 5), Math.random() < 0.5 ? 0x2a5a30 : 0x3a6838);
    bush.scale.y = 0.5;
    bush.position.set(gx, 0.22, gz);
    scene.add(bush);
  }
}

function buildOceanArea() {
  // === FULL SURROUNDING OCEAN ===
  // Water that encircles the entire island in all directions
  const oceanGeo = new THREE.PlaneGeometry(600, 600, 80, 80);
  waterVertices = oceanGeo.attributes.position.array.slice();
  waterMesh = new THREE.Mesh(
    oceanGeo,
    new THREE.MeshStandardMaterial({
      color: 0x003e5c,
      roughness: 0.08,
      metalness: 0.92,
      transparent: true,
      opacity: 0.88,
    })
  );
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.set(0, -0.6, 0);
  waterMesh.receiveShadow = true;
  scene.add(waterMesh);

  // Shallow beach ring around the island
  const beachRing = new THREE.Mesh(
    new THREE.RingGeometry(56, 80, 64),
    new THREE.MeshStandardMaterial({ color: 0xd4b870, roughness: 0.9, metalness: 0.05, side: THREE.DoubleSide })
  );
  beachRing.rotation.x = -Math.PI / 2;
  beachRing.position.set(0, -0.3, 0);
  beachRing.receiveShadow = true;
  scene.add(beachRing);

  // Shallow water shimmer near shore
  const shallowWater = new THREE.Mesh(
    new THREE.RingGeometry(52, 68, 64),
    new THREE.MeshStandardMaterial({
      color: 0x48b0d0, roughness: 0.1, metalness: 0.7,
      transparent: true, opacity: 0.55, side: THREE.DoubleSide
    })
  );
  shallowWater.rotation.x = -Math.PI / 2;
  shallowWater.position.set(0, -0.4, 0);
  scene.add(shallowWater);

  // Ocean foam
  const foam = new THREE.Mesh(
    new THREE.RingGeometry(60, 66, 64),
    new THREE.MeshBasicMaterial({ color: 0xc8f0ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false })
  );
  foam.rotation.x = -Math.PI / 2;
  foam.position.set(0, -0.2, 0);
  scene.add(foam);

  // === OCEAN SHRINE (South) ===
  const shrineBase = mkMesh(new THREE.CylinderGeometry(3.5, 4.5, 3.5, 14), 0x2488aa, true, true);
  shrineBase.position.set(0, 1.75, 46);
  scene.add(shrineBase);

  const shrineDome = mkMesh(new THREE.SphereGeometry(2, 18, 9, 0, Math.PI * 2, 0, Math.PI / 2), 0x2488aa, true, false);
  shrineDome.position.set(0, 3.5, 46);
  scene.add(shrineDome);

  const toriiMat = new THREE.MeshStandardMaterial({ color: 0xcc3300, roughness: 0.70, metalness: 0.18 });
  [-3.0, 3.0].forEach(dx => {
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 6, 10), toriiMat);
    col.position.set(dx, 3, 46);
    col.castShadow = true;
    scene.add(col);
  });
  const crossTop = new THREE.Mesh(new THREE.BoxGeometry(8, 0.36, 0.36), toriiMat);
  crossTop.position.set(0, 6.3, 46);
  scene.add(crossTop);
  const crossMid = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.26, 0.26), toriiMat);
  crossMid.position.set(0, 5.6, 46);
  scene.add(crossMid);

  const shrineLamp = new THREE.PointLight(0x48CAE4, 4.0, 28);
  shrineLamp.position.set(0, 4.5, 46);
  scene.add(shrineLamp);

  // Buoys floating in water
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const buoy = mkMesh(new THREE.SphereGeometry(0.3, 8, 8), i % 2 === 0 ? 0xFF4400 : 0xFFDD00);
    buoy.position.set(Math.cos(angle) * 70, -0.1, Math.sin(angle) * 70);
    scene.add(buoy);
  }
}

function buildStarField() {
  const geo = new THREE.BufferGeometry();
  const starCount = 2000;
  const starPos = new Float32Array(starCount * 3);
  const starCols = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = 280 + Math.random() * 40;
    starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starPos[i * 3 + 1] = r * Math.abs(Math.cos(phi)); // Upper hemisphere mostly
    starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

    const ct = Math.random();
    if (ct < 0.6) { starCols[i * 3] = 1; starCols[i * 3 + 1] = 1; starCols[i * 3 + 2] = 1; }
    else if (ct < 0.8) { starCols[i * 3] = 0.8; starCols[i * 3 + 1] = 0.95; starCols[i * 3 + 2] = 1; }
    else { starCols[i * 3] = 1; starCols[i * 3 + 1] = 0.95; starCols[i * 3 + 2] = 0.8; }
  }
  geo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(starCols, 3));
  const starMat = new THREE.PointsMaterial({
    size: 2.0,
    vertexColors: true,
    transparent: true,
    opacity: 0.0,
    sizeAttenuation: true,
    depthWrite: false
  });
  starPoints = new THREE.Points(geo, starMat);
  scene.add(starPoints);
}

function buildFireflies() {
  const count = 90;
  const pos = new Float32Array(count * 3);
  fireflyBasePos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const ang = Math.random() * Math.PI * 2;
    const r = 3 + Math.random() * 30;
    const x = 27 + Math.cos(ang) * r;
    const z = -12 + Math.sin(ang) * r;
    const y = 0.5 + Math.random() * 5;
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    fireflyBasePos[i * 3] = x; fireflyBasePos[i * 3 + 1] = y; fireflyBasePos[i * 3 + 2] = z;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  fireflySystem = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xBBFF44, size: 0.45, transparent: true,
    opacity: 0, sizeAttenuation: true, depthWrite: false
  }));
  scene.add(fireflySystem);
}

function buildClouds() {
  cloudMeshes = [];
  const cfg = [
    { x: 65, y: 62, z: -85, s: 2.4 }, { x: -95, y: 76, z: -38, s: 1.9 },
    { x: 35, y: 58, z: 105, s: 2.8 }, { x: -55, y: 70, z: 82, s: 1.6 },
    { x: 115, y: 82, z: 28, s: 2.1 }, { x: -125, y: 74, z: -8, s: 1.7 },
    { x: 80, y: 90, z: 55, s: 1.4 }, { x: -70, y: 66, z: -65, s: 2.3 }
  ];
  cfg.forEach(({ x, y, z, s }) => {
    const grp = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff, roughness: 1, metalness: 0,
      transparent: true, opacity: 0.82, depthWrite: false
    });
    for (let k = 0; k < 5; k++) {
      const puff = new THREE.Mesh(
        new THREE.SphereGeometry(3.5 + Math.random() * 2.8, 7, 5), mat.clone()
      );
      puff.position.set(
        (Math.random() - 0.5) * 13, (Math.random() - 0.5) * 3.5, (Math.random() - 0.5) * 8
      );
      grp.add(puff);
    }
    grp.position.set(x, y, z);
    grp.scale.setScalar(s);
    scene.add(grp);
    cloudMeshes.push(grp);
  });
}

function updateFireflies(delta) {
  if (!fireflySystem || !fireflyBasePos) return;
  const t = clock.elapsedTime;
  const pos = fireflySystem.geometry.attributes.position;
  let nightFactor = 0;
  if (sunTime >= 20 || sunTime <= 5) nightFactor = 1;
  else if (sunTime > 18 && sunTime < 20) nightFactor = (sunTime - 18) / 2;
  else if (sunTime > 5 && sunTime < 8) nightFactor = 1 - (sunTime - 5) / 3;
  fireflySystem.material.opacity = nightFactor * (0.5 + Math.sin(t * 2.6) * 0.35);
  fireflySystem.material.size = 0.28 + Math.abs(Math.sin(t * 4.8)) * 0.22;
  for (let i = 0; i < pos.count; i++) {
    const bx = fireflyBasePos[i * 3], by = fireflyBasePos[i * 3 + 1], bz = fireflyBasePos[i * 3 + 2];
    const ph = i * 2.3;
    pos.setX(i, bx + Math.sin(t * 0.52 + ph) * 2.6 + Math.cos(t * 0.36 + ph) * 1.3);
    pos.setY(i, by + Math.sin(t * 0.80 + ph) * 1.5);
    pos.setZ(i, bz + Math.cos(t * 0.46 + ph) * 2.3 + Math.sin(t * 0.29 + ph) * 1.1);
  }
  pos.needsUpdate = true;
}

function updateClouds(delta) {
  if (!cloudMeshes.length) return;
  const t = clock.elapsedTime;
  const isNight = sunTime > 20 || sunTime < 6;
  cloudMeshes.forEach((cloud, i) => {
    cloud.position.x += delta * (0.9 + i * 0.25);
    if (cloud.position.x > 170) cloud.position.x = -170;
    cloud.rotation.y = t * 0.018 * (i % 2 === 0 ? 1 : -1);
    cloud.children.forEach(p => {
      p.material.opacity = isNight ? 0.20 : 0.78;
      p.material.color.setHex(isNight ? 0x2a3a55 : 0xffffff);
      p.material.needsUpdate = true;
    });
  });
}

function updateFlora() {
  const t = clock.elapsedTime;
  foliageMeshes.forEach(item => {
    const { mesh, baseX, baseZ, speed, type } = item;
    const sway = Math.sin(t * speed + mesh.position.x * 0.5) * (type === 'grass' ? 0.15 : 0.03);
    mesh.rotation.x = baseX + sway;
    mesh.rotation.z = baseZ + sway * 0.5;
  });
}

function updateWater() {
  if (!waterMesh || !waterVertices) return;
  const t = clock.elapsedTime;
  const pos = waterMesh.geometry.attributes.position;
  // Sample-based update: animate every 4th vertex for performance on 600x600 grid
  for (let i = 0; i < pos.count; i += 3) {
    const vx = waterVertices[i * 3];
    const vy = waterVertices[i * 3 + 1];
    const dist = Math.sqrt(vx * vx + vy * vy);
    // Closer to shore = calmer; open ocean = bigger waves
    const waveMag = 0.12 + Math.min(dist / 400, 1) * 0.35;
    const wave1 = Math.sin(vx * 0.04 + t * 0.9) * waveMag;
    const wave2 = Math.cos(vy * 0.05 + t * 1.1) * waveMag * 0.7;
    const wave3 = Math.sin((vx + vy) * 0.03 + t * 0.7) * waveMag * 0.5;
    pos.setZ(i, wave1 + wave2 + wave3);
  }
  pos.needsUpdate = true;
  waterMesh.geometry.computeVertexNormals();

  // Color shift at sunset/sunrise
  const tod = getTimeOfDayState(sunTime);
  const isNightOrDusk = sunTime < 7 || sunTime > 17;
  if (isNightOrDusk) {
    waterMesh.material.color.setRGB(
      0.004 + tod.sky[0] * 0.15,
      0.04 + tod.sky[1] * 0.12,
      0.10 + tod.sky[2] * 0.25
    );
  } else {
    waterMesh.material.color.setRGB(0, 0.243, 0.360);
  }
  waterMesh.material.needsUpdate = true;
}

function spawnChapterTarget(chapter) {
  if (targetOrb) {
    scene.remove(targetOrb);
    if (targetOrb.userData.ring) scene.remove(targetOrb.userData.ring);
    if (targetOrb.userData.light) scene.remove(targetOrb.userData.light);
    targetOrb = null;
  }

  const colors = [0xFFD166, 0xFF6B9D, 0x52B788, 0x9B72CF, 0x48CAE4];
  const orbColor = colors[chapter.id] || 0xFFD166;
  const { x, z } = chapter.targetPos;
  const orbY = 2.8;

  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 24, 24),
    new THREE.MeshBasicMaterial({ color: orbColor })
  );
  orb.position.set(x, orbY, z);
  orb.userData.baseY = orbY;

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.25, 0.07, 10, 40),
    new THREE.MeshBasicMaterial({ color: orbColor, transparent: true, opacity: 0.5 })
  );
  ring.position.set(x, orbY, z);
  orb.userData.ring = ring;
  scene.add(ring);

  const light = new THREE.PointLight(orbColor, 2.8, 16);
  light.position.set(x, orbY, z);
  orb.userData.light = light;
  scene.add(light);

  scene.add(orb);
  targetOrb = orb;
}

function buildPlayer() {
  playerGroup = new THREE.Group();
  playerGroup.position.set(gameState.playerPos.x, 1.8, gameState.playerPos.z);
  camera.position.set(0, 0, 0);
  playerGroup.add(camera);
  scene.add(playerGroup);
}

function isColliding(x, z) {
  const r = 0.65;
  for (const box of COLLISION_BOXES) {
    if (x + r > box.minX && x - r < box.maxX && z + r > box.minZ && z - r < box.maxZ) {
      return true;
    }
  }
  if (x * x + z * z > ISLAND_RADIUS * ISLAND_RADIUS) return true;
  return false;
}

function startGame(isNew) {
  if (isNew) {
    clearSave();
    gameState = {
      currentChapter: 0,
      completedChapters: [],
      worldState: { forest: 10, village: 10, ocean: 10, light: 10 },
      playerPos: { x: 0, z: 0 },
      solarEnergy: SOLAR_ENERGY_MAX,
      started: true
    };
    targetYaw = 0; targetPitch = 0;
    currentYaw = 0; currentPitch = 0;
    gameOver = false;
  } else {
    gameState.started = true;
    gameOver = false;
  }

  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('hud').classList.remove('hidden');

  if (!scene) {
    initThree();
  } else {
    if (targetOrb) {
      scene.remove(targetOrb);
      if (targetOrb.userData.ring) scene.remove(targetOrb.userData.ring);
      if (targetOrb.userData.light) scene.remove(targetOrb.userData.light);
      targetOrb = null;
    }
    playerGroup.position.set(gameState.playerPos.x, 1.8, gameState.playerPos.z);
    if (isNew) {
      targetYaw = 0; targetPitch = 0; currentYaw = 0; currentPitch = 0;
    }
  }

  updateHUD();
  updateSolarEnergyHUD();
  updateWorldVisuals();

  if (!inputsSetup) {
    setupInputs();
    inputsSetup = true;
  }

  gameRunning = true;
  energyDrainActive = true;
  startBackgroundMusic();
  if (animFrameId) cancelAnimationFrame(animFrameId);
  renderLoop();

  if (isNew && !tutorialShown) {
    tutorialShown = true;
    gameRunning = false;
    energyDrainActive = false;
    document.getElementById('tutorial-overlay').classList.remove('hidden');
  } else {
    const ch = CHAPTERS[gameState.currentChapter];
    if (ch) {
      setTimeout(() => showChapterIntro(ch), 320);
    } else {
      triggerEnding();
    }
  }
}

function showMainMenu() {
  gameRunning = false;
  energyDrainActive = false;
  paused = false;
  stopBackgroundMusic();
  gameOver = false;
  if (document.pointerLockElement) document.exitPointerLock();

  ['hud', 'puzzle-modal', 'memory-reveal', 'chapter-intro-overlay', 'pause-menu', 'ending-screen', 'darkness-warning', 'tutorial-overlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  document.getElementById('main-menu').classList.remove('hidden');
  const hasSave = loadGame() && gameState.started && gameState.completedChapters.length > 0;
  document.getElementById('btn-continue').classList.toggle('hidden', !hasSave);
}

function openPauseMenu() {
  paused = true;
  gameRunning = false;
  energyDrainActive = false;
  if (document.pointerLockElement) document.exitPointerLock();
  saveGame();

  const pct = Math.round(gameState.solarEnergy);
  const done = gameState.completedChapters.length;
  document.getElementById('pause-energy-status').textContent = 'Sol\'s Light: ' + pct + '% remaining';
  document.getElementById('pause-chapter-status').textContent = 'Memories restored: ' + done + ' / ' + TOTAL_CHAPTERS;
  document.getElementById('pause-menu').classList.remove('hidden');
}

function closePauseMenu() {
  paused = false;
  gameRunning = true;
  energyDrainActive = true;
  document.getElementById('pause-menu').classList.add('hidden');
  const canvas = document.getElementById('game-canvas');
  canvas.requestPointerLock();
}

function showChapterIntro(chapter) {
  introActive = true;
  gameRunning = false;
  energyDrainActive = false;
  if (document.pointerLockElement) document.exitPointerLock();

  const overlay = document.getElementById('chapter-intro-overlay');
  document.getElementById('intro-chapter-num').textContent = chapter.title;
  document.getElementById('intro-location').textContent = '📍 ' + chapter.location;
  document.getElementById('intro-obj-text').textContent = chapter.objective;

  const textEl = document.getElementById('intro-text');
  const btn = document.getElementById('intro-next-btn');

  let lineIdx = 0;
  const lines = chapter.intro;

  function showLine() {
    if (lineIdx < lines.length) {
      textEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = lines[lineIdx];
        textEl.style.transition = 'opacity 0.32s ease';
        textEl.style.opacity = '1';
        lineIdx++;
        btn.textContent = lineIdx < lines.length ? 'Continue ▶' : 'Begin Mission →';
      }, 220);
    } else {
      overlay.classList.add('hidden');
      introActive = false;
      gameRunning = true;
      energyDrainActive = true;
      beginChapter(chapter);
    }
  }

  btn.onclick = showLine;
  overlay.classList.remove('hidden');
  showLine();
}

function beginChapter(chapter) {
  const start = CHAPTER_START_POS[chapter.id] || { x: 0, z: 0 };
  playerGroup.position.set(start.x, 1.8, start.z);
  gameState.playerPos = { x: start.x, z: start.z };

  spawnChapterTarget(chapter);
  navTarget = chapter.targetPos;
  document.getElementById('nav-label').textContent = chapter.targetLabel;
  updateHUD();

  setSolVoice(chapter.solVoice);
  setObjectiveText(chapter.objective);
}

function setupInputs() {
  document.addEventListener('keydown', e => {
    keys[e.code] = true;

    if (e.code === 'KeyF' && !puzzleActive && gameRunning && !introActive && !paused && !gameOver) {
      tryInteract();
    }

    if (e.code === 'Escape') {
      if (puzzleActive) {
        closePuzzle();
      } else if (paused) {
        closePauseMenu();
      } else if (gameRunning && !introActive && !gameOver) {
        openPauseMenu();
      }
    }
  });

  document.addEventListener('keyup', e => { keys[e.code] = false; });

  const canvas = document.getElementById('game-canvas');
  canvas.addEventListener('click', () => {
    if (!puzzleActive && gameRunning && !introActive && !paused && !gameOver) {
      canvas.requestPointerLock();
    }
  });

  document.addEventListener('pointerlockchange', () => {
    isPointerLocked = document.pointerLockElement === canvas;
  });

  document.addEventListener('mousemove', e => {
    if (!isPointerLocked || puzzleActive || introActive || paused || gameOver) return;
    targetYaw -= e.movementX * 0.0018;
    targetPitch -= e.movementY * 0.0018;
    targetPitch = Math.max(-Math.PI / 2.3, Math.min(Math.PI / 2.3, targetPitch));
  });

  document.getElementById('pause-resume').addEventListener('click', closePauseMenu);
  document.getElementById('pause-main-menu').addEventListener('click', showMainMenu);
  document.getElementById('pause-restart').addEventListener('click', () => {
    document.getElementById('pause-menu').classList.add('hidden');
    startGame(true);
  });

  document.getElementById('tutorial-start-btn').addEventListener('click', () => {
    document.getElementById('tutorial-overlay').classList.add('hidden');
    gameRunning = true;
    energyDrainActive = true;
    const ch = CHAPTERS[gameState.currentChapter];
    if (ch) setTimeout(() => showChapterIntro(ch), 300);
  });

  document.getElementById('ending-restart').addEventListener('click', () => {
    document.getElementById('ending-screen').classList.add('hidden');
    startGame(true);
  });

  document.getElementById('ending-menu').addEventListener('click', () => {
    document.getElementById('ending-screen').classList.add('hidden');
    showMainMenu();
  });
}

function tryInteract() {
  if (!targetOrb || !playerGroup) return;
  const p = playerGroup.position;
  const chapter = CHAPTERS[gameState.currentChapter];
  if (!chapter) return;
  const dx = p.x - chapter.targetPos.x;
  const dz = p.z - chapter.targetPos.z;
  const dist = Math.sqrt(dx * dx + dz * dz);
  if (dist < (chapter.interactDist || 5.5)) {
    playInteractTone();
    openPuzzle(chapter);
  }
}

function renderLoop() {
  animFrameId = requestAnimationFrame(renderLoop);
  if (!clock || !renderer || !scene || !camera) return;
  const delta = Math.min(clock.getDelta(), 0.08);
  update(delta);
  renderer.render(scene, camera);
}

function update(delta) {
  if ((!gameRunning || paused) && !gameOver) return;
  if (gameOver) return;

  const lerpF = 1 - Math.exp(-20 * delta);
  currentYaw += (targetYaw - currentYaw) * lerpF;
  currentPitch += (targetPitch - currentPitch) * lerpF;
  camera.rotation.y = currentYaw;
  camera.rotation.x = currentPitch;

  if (gameRunning && !paused) {
    updatePlayerMovement(delta);
  }

  updateSunAndSky(delta);
  updateOrbAnimation();
  updateFlame(delta);
  updateProximityPrompt();
  updateNavDisplay();
  updateMinimapCanvas();
  updateParticles(delta);
  updateFireflies(delta);
  updateClouds(delta);
  updateFlora();
  updateWater();
  updateMusicTOD();

  if (energyDrainActive && gameRunning && !paused && !introActive && !puzzleActive) {
    gameState.solarEnergy -= SOLAR_DRAIN_RATE * delta;
    if (gameState.solarEnergy < 0) gameState.solarEnergy = 0;
    updateSolarEnergyHUD();

    if (gameState.solarEnergy <= 0 && !gameOver) {
      gameOver = true;
      triggerDarknessEnding();
      return;
    }
  }

}

function updatePlayerMovement(delta) {
  const sprint = keys['ShiftLeft'] || keys['ShiftRight'];
  const speed = sprint ? 13 : 7.5;

  const fwd = new THREE.Vector3(-Math.sin(currentYaw), 0, -Math.cos(currentYaw));
  const rgt = new THREE.Vector3(Math.cos(currentYaw), 0, -Math.sin(currentYaw));
  const dir = new THREE.Vector3();

  if (keys['KeyW'] || keys['ArrowUp']) dir.add(fwd);
  if (keys['KeyS'] || keys['ArrowDown']) dir.sub(fwd);
  if (keys['KeyA'] || keys['ArrowLeft']) dir.sub(rgt);
  if (keys['KeyD'] || keys['ArrowRight']) dir.add(rgt);

  if (dir.lengthSq() > 0) {
    dir.normalize().multiplyScalar(speed * delta);
    const nx = playerGroup.position.x + dir.x;
    const nz = playerGroup.position.z + dir.z;

    if (!isColliding(nx, nz)) {
      playerGroup.position.x = nx;
      playerGroup.position.z = nz;
    } else if (!isColliding(nx, playerGroup.position.z)) {
      playerGroup.position.x = nx;
    } else if (!isColliding(playerGroup.position.x, nz)) {
      playerGroup.position.z = nz;
    }
  }

  playerGroup.position.y = 1.8;
  gameState.playerPos = { x: playerGroup.position.x, z: playerGroup.position.z };
}

function updateSunAndSky(delta) {
  sunTime += 0.14 * delta;
  if (sunTime > 24) sunTime -= 24;

  const tod = getTimeOfDayState(sunTime);
  const worldHealth = (gameState.worldState.forest + gameState.worldState.village + gameState.worldState.ocean + gameState.worldState.light) / 400;
  const energyFactor = Math.max(0.22, gameState.solarEnergy / SOLAR_ENERGY_MAX);
  const healthMult = 0.58 + worldHealth * 0.42;

  const dayFrac = (sunTime - 6) / 12;
  const clampedFrac = Math.max(-0.3, Math.min(1.3, dayFrac));
  const sunAngle = clampedFrac * Math.PI;
  const sunX = -Math.cos(sunAngle) * 130;
  const sunY = Math.sin(sunAngle) * 90;
  sunMesh.position.set(sunX, sunY, -55);
  sunMesh.visible = sunTime > 5.5 && sunTime < 18.5;

  dirLight.position.copy(sunMesh.position);
  if (!sunMesh.visible) dirLight.position.set(0, -80, 0);
  dirLight.intensity = tod.dirI * healthMult * energyFactor;
  dirLight.color.setRGB(tod.dir[0], tod.dir[1], tod.dir[2]);

  ambientLight.intensity = tod.ambI * healthMult;
  ambientLight.color.setRGB(
    Math.min(1, tod.hemSky[0] * 2.4),
    Math.min(1, tod.hemSky[1] * 2.4),
    Math.min(1, tod.hemSky[2] * 2.4)
  );

  hemisphereLight.intensity = (0.28 + worldHealth * 0.52) * energyFactor;
  hemisphereLight.color.setRGB(tod.hemSky[0], tod.hemSky[1], tod.hemSky[2]);
  hemisphereLight.groundColor.setRGB(tod.hemGnd[0], tod.hemGnd[1], tod.hemGnd[2]);

  if (skyDomeMesh) {
    skyDomeMesh.material.color.setRGB(
      tod.sky[0] * energyFactor,
      tod.sky[1] * energyFactor,
      tod.sky[2] * Math.max(0.45, energyFactor)
    );
  }

  const isRise = sunTime >= 5.5 && sunTime < 7.2;
  const isSet = sunTime >= 17.0 && sunTime < 19.0;
  if (isRise || isSet) {
    sunMesh.material.color.setRGB(1.0, 0.52, 0.22);
  } else if (sunMesh.visible) {
    const noonFactor = Math.max(0, 1 - Math.abs(sunTime - 12) / 6);
    sunMesh.material.color.setRGB(1.0, 0.94 + noonFactor * 0.06, 0.78 + noonFactor * 0.17);
  }

  if (scene.fog) {
    scene.fog.color.setRGB(
      tod.fog[0] * energyFactor,
      tod.fog[1] * energyFactor,
      tod.fog[2] * Math.max(0.38, energyFactor)
    );
    const baseDensity = 0.0038 - worldHealth * 0.0020;
    const nightBonus = tod.ambI < 0.25 ? 0.006 : (tod.ambI < 0.50 ? 0.002 : 0);
    scene.fog.density = Math.max(0.001, baseDensity + nightBonus);
  }

  if (renderer) {
    renderer.toneMappingExposure = Math.max(0.45, 0.65 + tod.dirI * 0.34);
  }

  if (starPoints) {
    let sOp = 0;
    if (sunTime >= 20 || sunTime <= 5) sOp = 0.65;
    else if (sunTime > 18 && sunTime < 20) sOp = ((sunTime - 18) / 2) * 0.65;
    else if (sunTime > 5 && sunTime < 7) sOp = (1 - (sunTime - 5) / 2) * 0.65;
    starPoints.material.opacity = sOp * energyFactor;
  }
}

function updateOrbAnimation() {
  if (!targetOrb) return;
  const t = clock.elapsedTime;
  const by = targetOrb.userData.baseY;
  const energyFactor = gameState.solarEnergy / SOLAR_ENERGY_MAX;
  const urgency = 1 + (1 - energyFactor) * 0.5;

  targetOrb.position.y = by + Math.sin(t * 0.8 * urgency) * 0.38;
  targetOrb.rotation.y = t * 0.5;

  if (targetOrb.userData.ring) {
    targetOrb.userData.ring.rotation.x = t * 0.35;
    targetOrb.userData.ring.rotation.z = t * 0.20;
    targetOrb.userData.ring.position.y = targetOrb.position.y;
  }
  if (targetOrb.userData.light) {
    targetOrb.userData.light.position.y = targetOrb.position.y;
    targetOrb.userData.light.intensity = 2.8 + Math.sin(t * 1.5 * urgency) * 0.8;
  }
}

function updateFlame(delta) {
  if (!flameMesh || !fireLightRef) return;
  const t = clock.elapsedTime;

  // Main outer flame — wiggles and rises
  flameMesh.scale.x = 1 + Math.sin(t * 9.1) * 0.18 + Math.cos(t * 13.7) * 0.08;
  flameMesh.scale.z = 1 + Math.cos(t * 7.4) * 0.15 + Math.sin(t * 11.2) * 0.07;
  flameMesh.scale.y = 0.85 + Math.sin(t * 5.8) * 0.20;
  flameMesh.position.y = 1.3 + Math.sin(t * 6.2) * 0.10;
  flameMesh.rotation.y = t * 1.2;
  flameMesh.material.opacity = 0.82 + Math.sin(t * 8) * 0.13;

  // Inner bright core — faster flicker
  if (flameMesh.userData.core) {
    const core = flameMesh.userData.core;
    core.scale.x = 1 + Math.sin(t * 14.3) * 0.22;
    core.scale.z = 1 + Math.cos(t * 12.8) * 0.18;
    core.scale.y = 0.9 + Math.sin(t * 9.5) * 0.25;
    core.position.y = 1.4 + Math.sin(t * 7.8) * 0.12;
    // Color shifts: yellow -> orange -> white-hot
    const heatCycle = Math.abs(Math.sin(t * 4.2));
    const r = 1.0;
    const g = 0.7 + heatCycle * 0.3;
    const b = heatCycle * 0.15;
    core.material.color.setRGB(r, g, b);
  }

  // Ember glow on ground
  if (flameMesh.userData.emberGlow) {
    flameMesh.userData.emberGlow.material.opacity = 0.3 + Math.abs(Math.sin(t * 5.5)) * 0.35;
    const em = Math.abs(Math.sin(t * 3.1));
    flameMesh.userData.emberGlow.material.color.setRGB(1.0, 0.25 + em * 0.25, 0.0);
  }

  // Flickering fire light — slowed down for realism
  fireLightRef.intensity = 3.8 + Math.sin(t * 3.5) * 0.8 + Math.cos(t * 2.1) * 0.5;
  fireLightRef.color.setRGB(1.0, 0.35 + Math.sin(t * 1.8) * 0.08, 0.05);
}

function updateParticles(delta) {
  if (!particleSystem || !particleSystem.userData.active) return;
  particleSystem.userData.timer -= delta;

  if (particleSystem.userData.timer <= 0) {
    particleSystem.material.opacity = 0;
    particleSystem.userData.active = false;
    return;
  }

  const t = clock.elapsedTime;
  const pos = particleSystem.geometry.attributes.position.array;
  const ox = particleSystem.userData.originX || 0;
  const oz = particleSystem.userData.originZ || 0;

  for (let i = 0; i < pos.length; i += 3) {
    pos[i + 1] += delta * (1.5 + Math.sin(t * 3 + i) * 0.5);
    pos[i] += Math.sin(t * 2 + i * 0.5) * delta * 0.3;
    pos[i + 2] += Math.cos(t * 2 + i * 0.5) * delta * 0.3;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;
  particleSystem.material.opacity = Math.min(0.9, particleSystem.userData.timer * 0.6);
}

function updateProximityPrompt() {
  if (!targetOrb || !playerGroup) return;
  const p = playerGroup.position;
  const chapter = CHAPTERS[gameState.currentChapter];
  if (!chapter) return;

  const dx = p.x - chapter.targetPos.x;
  const dz = p.z - chapter.targetPos.z;
  const dist = Math.sqrt(dx * dx + dz * dz);
  const prompt = document.getElementById('interact-prompt');
  const nameEl = document.getElementById('interact-target-name');

  if (prompt) {
    if (dist < (chapter.interactDist || 5.5)) {
      if (nameEl) nameEl.textContent = chapter.targetLabel;
      prompt.classList.remove('hidden');
    } else {
      prompt.classList.add('hidden');
    }
  }
}

function updateNavDisplay() {
  const wrap = document.getElementById('nav-indicator-wrap');
  const arrowSvg = document.getElementById('nav-arrow-svg');
  const distEl = document.getElementById('nav-dist');

  if (!navTarget || !playerGroup || !wrap) return;

  const dx = navTarget.x - playerGroup.position.x;
  const dz = navTarget.z - playerGroup.position.z;
  const dist = Math.sqrt(dx * dx + dz * dz);

  if (dist < 6) {
    wrap.style.opacity = '0';
    return;
  }

  wrap.style.opacity = '1';
  const fx = -Math.sin(currentYaw);
  const fz = -Math.cos(currentYaw);
  const rx = Math.cos(currentYaw);
  const rz = -Math.sin(currentYaw);
  const len = Math.sqrt(dx * dx + dz * dz) || 1;
  const ndx = dx / len;
  const ndz = dz / len;
  const fdot = ndx * fx + ndz * fz;
  const rdot = ndx * rx + ndz * rz;
  const relAngle = Math.atan2(rdot, fdot);

  if (arrowSvg) {
    arrowSvg.style.transform = 'rotate(' + relAngle + 'rad)';
    arrowSvg.className = dist < 15 ? 'close' : dist < 35 ? 'medium' : 'far';
  }

  if (distEl) {
    const distText = dist < 15 ? Math.round(dist) + 'm — Close' : dist < 35 ? Math.round(dist) + 'm' : Math.round(dist) + 'm — Far';
    distEl.textContent = distText;
  }
}

function updateMinimapCanvas() {
  const canvas = document.getElementById('minimap-canvas');
  if (!canvas || !playerGroup) return;

  const W = 120;
  canvas.width = W;
  canvas.height = W;
  const ctx = canvas.getContext('2d');
  const cx = W / 2, cy = W / 2;
  const scale = W / (ISLAND_RADIUS * 2.2);

  ctx.clearRect(0, 0, W, W);

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, W / 2 - 2, 0, Math.PI * 2);
  ctx.clip();

  ctx.fillStyle = 'rgba(10, 20, 40, 0.6)';
  ctx.fillRect(0, 0, W, W);

  ctx.beginPath();
  ctx.arc(cx, cy, ISLAND_RADIUS * scale, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(70, 130, 80, 0.35)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,209,102,0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();

  const chapterColors = ['#FFD166', '#FF6B9D', '#52B788', '#9B72CF', '#48CAE4'];
  CHAPTERS.forEach((ch, i) => {
    const mx = cx + ch.targetPos.x * scale;
    const my = cy - ch.targetPos.z * scale;
    const completed = gameState.completedChapters.includes(i);
    const current = gameState.currentChapter === i;

    ctx.beginPath();
    ctx.arc(mx, my, current ? 5 : 3.5, 0, Math.PI * 2);
    ctx.fillStyle = completed ? 'rgba(255,209,102,0.9)' : chapterColors[i] + (current ? 'ff' : '88');
    ctx.fill();
    if (current) {
      ctx.strokeStyle = '#FFD166';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  });

  const px = cx + playerGroup.position.x * scale;
  const py = cy - playerGroup.position.z * scale;

  const coneLen = 14;
  const halfAngle = 0.32;
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(Math.PI + currentYaw);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(Math.sin(-halfAngle) * coneLen, -Math.cos(-halfAngle) * coneLen);
  ctx.lineTo(Math.sin(halfAngle) * coneLen, -Math.cos(halfAngle) * coneLen);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,255,255,0.22)';
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(px, py, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,209,102,0.9)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.restore();
}

function updateSolarEnergyHUD() {
  const bar = document.getElementById('sol-energy-bar');
  const pct = document.getElementById('sol-energy-pct');
  const warn = document.getElementById('darkness-warning');

  const energy = Math.max(0, gameState.solarEnergy);
  const pctVal = Math.round(energy);

  if (bar) {
    bar.style.width = pctVal + '%';
    bar.className = '';
    if (energy < 25) {
      bar.classList.add('low');
    } else if (energy < 55) {
      bar.classList.add('medium');
    }
  }

  if (pct) {
    pct.textContent = pctVal + '%';
    if (energy < 25) pct.style.color = '#FF8888';
    else if (energy < 55) pct.style.color = '#FFB866';
    else pct.style.color = '#FFD166';
  }

  if (warn) {
    if (energy < 25 && gameRunning) {
      warn.classList.remove('hidden');
    } else {
      warn.classList.add('hidden');
    }
  }
}

function setSolVoice(text) {
  const el = document.getElementById('sol-voice-text');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = text;
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = '1';
  }, 300);
}

function setObjectiveText(text) {
  const el = document.getElementById('objective-text');
  if (el) el.textContent = text;
}

function updateHUD() {
  const dotsEl = document.getElementById('fragment-dots');
  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 0; i < TOTAL_CHAPTERS; i++) {
      const dot = document.createElement('div');
      const done = gameState.completedChapters.includes(i);
      const current = gameState.currentChapter === i && !done;
      dot.className = 'frag-dot' + (done ? ' found' : '') + (current ? ' current' : '');
      dot.title = 'Chapter ' + (i + 1) + ': ' + (CHAPTERS[i] ? CHAPTERS[i].location : '');
      dot.textContent = i + 1;
      dotsEl.appendChild(dot);
    }
  }

  const ws = gameState.worldState;
  const setBar = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.style.width = Math.min(100, v) + '%';
  };
  setBar('ws-forest', ws.forest);
  setBar('ws-village', ws.village);
  setBar('ws-ocean', ws.ocean);
  setBar('ws-light', ws.light);

  const ch = CHAPTERS[gameState.currentChapter];
  const labelEl = document.getElementById('chapter-label');
  if (labelEl && ch) {
    labelEl.textContent = ch.title + ' — ' + ch.location;
  }
}

function updateWorldVisuals() {
  const ws = gameState.worldState;
  const avg = (ws.forest + ws.village + ws.ocean + ws.light) / 4;
  const t = avg / 100;

  if (scene && scene.fog) {
    scene.fog.density = Math.max(0.001, 0.012 - t * 0.009);
  }
  if (ambientLight) {
    ambientLight.intensity = 0.35 + t * 0.9;
  }
  if (hemisphereLight) {
    hemisphereLight.intensity = 0.45 + t * 0.8;
  }
}

function openPuzzle(chapter) {
  puzzleActive = true;
  selectedChoice = -1;
  selectedStars = [];
  sundialHour = -1;

  if (document.pointerLockElement) document.exitPointerLock();

  const puzzle = chapter.puzzle;
  document.getElementById('puzzle-title').textContent = puzzle.title;

  const feedbackEl = document.getElementById('puzzle-feedback');
  feedbackEl.textContent = '';
  feedbackEl.className = 'puzzle-feedback';

  const area = document.getElementById('puzzle-area');
  area.innerHTML = '';

  if (puzzle.type === 'choice') buildChoicePuzzle(area, puzzle);
  else if (puzzle.type === 'sundial') buildSundialPuzzle(area, puzzle);
  else if (puzzle.type === 'cipher') buildCipherPuzzle(area, puzzle);
  else if (puzzle.type === 'constellation') buildConstellationPuzzle(area, puzzle);

  document.getElementById('puzzle-modal').classList.remove('hidden');
  document.getElementById('puzzle-submit').onclick = () => submitPuzzle(puzzle);
  document.getElementById('puzzle-close').onclick = closePuzzle;
}

function closePuzzle() {
  puzzleActive = false;
  document.getElementById('puzzle-modal').classList.add('hidden');
  document.getElementById('puzzle-area').innerHTML = '';
}

function buildChoicePuzzle(area, puzzle) {
  const wrap = document.createElement('div');
  wrap.className = 'choice-puzzle';

  if (puzzle.context) {
    const ctx = document.createElement('p');
    ctx.className = 'puzzle-context';
    ctx.textContent = puzzle.context;
    wrap.appendChild(ctx);
  }

  const q = document.createElement('p');
  q.className = 'puzzle-question';
  q.textContent = puzzle.question;
  wrap.appendChild(q);

  const optsEl = document.createElement('div');
  optsEl.className = 'choice-options';
  puzzle.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-opt';
    btn.innerHTML = '<span class="choice-letter">' + String.fromCharCode(65 + i) + '</span><span class="choice-text">' + opt + '</span>';
    btn.onclick = () => {
      document.querySelectorAll('.choice-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedChoice = i;
    };
    optsEl.appendChild(btn);
  });
  wrap.appendChild(optsEl);

  if (puzzle.hint) {
    const hintBtn = document.createElement('button');
    hintBtn.className = 'hint-toggle';
    hintBtn.textContent = '💡 Show hint';
    const hintBox = document.createElement('div');
    hintBox.className = 'hint-box hidden';
    hintBox.textContent = puzzle.hint;
    hintBtn.onclick = () => {
      hintBox.classList.toggle('hidden');
      hintBtn.textContent = hintBox.classList.contains('hidden') ? '💡 Show hint' : '🔼 Hide hint';
    };
    wrap.appendChild(hintBtn);
    wrap.appendChild(hintBox);
  }

  area.appendChild(wrap);
}

function buildSundialPuzzle(area, puzzle) {
  sundialHour = -1;
  const wrap = document.createElement('div');
  wrap.className = 'sundial-puzzle';

  if (puzzle.context) {
    const ctx = document.createElement('p');
    ctx.className = 'puzzle-context';
    ctx.textContent = puzzle.context;
    wrap.appendChild(ctx);
  }

  const q = document.createElement('p');
  q.className = 'puzzle-question';
  q.textContent = puzzle.question;
  wrap.appendChild(q);

  const instr = document.createElement('p');
  instr.className = 'sundial-instr';
  instr.textContent = 'Click on the clock face to set the gnomon hand position.';
  wrap.appendChild(instr);

  const cWrap = document.createElement('div');
  cWrap.className = 'sundial-wrap';
  const canvas = document.createElement('canvas');
  canvas.width = 280; canvas.height = 280;
  canvas.id = 'sundial-canvas';
  cWrap.appendChild(canvas);
  wrap.appendChild(cWrap);

  const status = document.createElement('div');
  status.className = 'sundial-status';
  status.textContent = 'Click the clock face to choose a time';
  wrap.appendChild(status);

  area.appendChild(wrap);

  const ctx2d = canvas.getContext('2d');
  drawSundial(ctx2d, -1);

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = 280 / rect.width;
    const scaleY = 280 / rect.height;
    const sx = (e.clientX - rect.left) * scaleX;
    const sy = (e.clientY - rect.top) * scaleY;
    const dx = sx - 140, dy = sy - 140;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 40 || dist > 124) return;
    let angle = Math.atan2(dy, dx) + Math.PI / 2;
    if (angle < 0) angle += Math.PI * 2;
    sundialHour = Math.round(angle / (Math.PI * 2) * 12) % 12;
    const labels = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    status.textContent = 'Selected: ' + labels[sundialHour] + " o'clock";
    drawSundial(ctx2d, sundialHour);
  });
}

function drawSundial(ctx, selected) {
  const W = 280, cx = 140, cy = 140, R = 122, innerR = 44;
  ctx.clearRect(0, 0, W, W);

  const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
  bgGrad.addColorStop(0, '#1c1008');
  bgGrad.addColorStop(1, '#080604');
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fillStyle = bgGrad; ctx.fill();

  for (let h = 0; h < 12; h++) {
    const startA = (h / 12) * Math.PI * 2 - Math.PI / 2;
    const endA = ((h + 1) / 12) * Math.PI * 2 - Math.PI / 2;
    const isSel = h === selected;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R - 2, startA, endA); ctx.closePath();
    ctx.fillStyle = isSel ? 'rgba(255,209,102,0.22)' : 'rgba(255,255,255,0.028)';
    ctx.fill();
    ctx.strokeStyle = isSel ? 'rgba(255,209,102,0.55)' : 'rgba(255,255,255,0.1)';
    ctx.lineWidth = isSel ? 1.5 : 0.7; ctx.stroke();
  }

  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1.5; ctx.stroke();

  for (let h = 0; h < 12; h++) {
    const a = (h / 12) * Math.PI * 2 - Math.PI / 2;
    const isMain = h % 3 === 0;
    const tLen = isMain ? 18 : 11;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * (R - tLen), cy + Math.sin(a) * (R - tLen));
    ctx.lineTo(cx + Math.cos(a) * (R - 2), cy + Math.sin(a) * (R - 2));
    ctx.strokeStyle = isMain ? 'rgba(255,209,102,0.92)' : 'rgba(255,255,255,0.36)';
    ctx.lineWidth = isMain ? 2.2 : 1; ctx.stroke();

    const numR = R - 32;
    ctx.fillStyle = h === selected ? '#FFD166' : (isMain ? 'rgba(255,240,204,0.72)' : 'rgba(255,255,255,0.45)');
    ctx.font = (isMain ? 'bold 14px' : '11px') + ' sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(h === 0 ? 12 : h, cx + Math.cos(a) * numR, cy + Math.sin(a) * numR);
  }

  ctx.beginPath(); ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  const innerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerR);
  innerGrad.addColorStop(0, '#221800');
  innerGrad.addColorStop(1, '#0a0806');
  ctx.fillStyle = innerGrad; ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1; ctx.stroke();

  ctx.fillStyle = 'rgba(255,209,102,0.55)';
  ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('NOON', cx, cy);

  if (selected >= 0) {
    const gAngle = (selected / 12) * Math.PI * 2 - Math.PI / 2;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(gAngle + Math.PI / 2);
    const gGrad = ctx.createLinearGradient(0, innerR + 6, 0, R - 34);
    gGrad.addColorStop(0, '#F4845F'); gGrad.addColorStop(1, '#FFD166');
    ctx.strokeStyle = gGrad; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, innerR + 6); ctx.lineTo(0, R - 34); ctx.stroke();
    ctx.fillStyle = '#FFD166';
    ctx.beginPath(); ctx.arc(0, R - 34, 5.5, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  } else {
    ctx.strokeStyle = 'rgba(244,132,95,0.25)'; ctx.lineWidth = 2; ctx.lineCap = 'round';
    ctx.setLineDash([4, 5]);
    ctx.beginPath(); ctx.moveTo(cx, cy + innerR + 6); ctx.lineTo(cx, cy - R + 34); ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2);
  ctx.fillStyle = '#FFD166'; ctx.fill();
}

function buildCipherPuzzle(area, puzzle) {
  const wrap = document.createElement('div');
  wrap.className = 'cipher-puzzle';

  if (puzzle.context) {
    const ctx = document.createElement('p');
    ctx.className = 'puzzle-context';
    ctx.textContent = puzzle.context;
    wrap.appendChild(ctx);
  }

  const q = document.createElement('p');
  q.className = 'puzzle-question';
  q.textContent = puzzle.question;
  wrap.appendChild(q);

  const encBox = document.createElement('div');
  encBox.className = 'cipher-encoded';
  encBox.innerHTML = puzzle.encoded.split('').map(ch => '<span class="cipher-letter">' + ch + '</span>').join('');
  wrap.appendChild(encBox);

  const mappings = puzzle.encoded.split('').map(ch => {
    const code = ch.charCodeAt(0) - 65;
    const dec = ((code - 3) + 26) % 26;
    return ch + '→' + String.fromCharCode(dec + 65);
  });

  const mapDiv = document.createElement('div');
  mapDiv.className = 'cipher-mapping';
  mapDiv.innerHTML = '<span class="cipher-map-title">Decode guide:</span> ' + mappings.map(s => '<code>' + s + '</code>').join(' ');
  wrap.appendChild(mapDiv);

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'cipher-input';
  input.placeholder = 'Type decoded answer here…';
  input.maxLength = 20;
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.id = 'cipher-input';
  input.addEventListener('input', () => {
    input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '');
  });
  input.addEventListener('keydown', e => {
    if (e.code === 'Enter') submitPuzzle(puzzle);
  });
  wrap.appendChild(input);

  if (puzzle.hint) {
    const hintBtn = document.createElement('button');
    hintBtn.className = 'hint-toggle';
    hintBtn.textContent = '💡 Show hint';
    const hintBox = document.createElement('div');
    hintBox.className = 'hint-box hidden';
    hintBox.textContent = puzzle.hint;
    hintBtn.onclick = () => {
      hintBox.classList.toggle('hidden');
      hintBtn.textContent = hintBox.classList.contains('hidden') ? '💡 Show hint' : '🔼 Hide hint';
    };
    wrap.appendChild(hintBtn);
    wrap.appendChild(hintBox);
  }

  area.appendChild(wrap);
  setTimeout(() => input.focus(), 90);
}

function buildConstellationPuzzle(area, puzzle) {
  const wrap = document.createElement('div');
  wrap.className = 'constellation-puzzle';

  if (puzzle.context) {
    const ctx = document.createElement('p');
    ctx.className = 'puzzle-context';
    ctx.textContent = puzzle.context;
    wrap.appendChild(ctx);
  }

  const q = document.createElement('p');
  q.className = 'puzzle-question';
  q.textContent = puzzle.question;
  wrap.appendChild(q);

  const gridWrap = document.createElement('div');
  gridWrap.className = 'const-grid-wrap';

  const header = document.createElement('div');
  header.className = 'const-grid-header';
  header.innerHTML = '<div></div>' + [1, 2, 3, 4, 5].map(c => '<div>Col ' + c + '</div>').join('');
  gridWrap.appendChild(header);

  const container = document.createElement('div');
  container.className = 'const-grid-container';

  const rowLabels = document.createElement('div');
  rowLabels.className = 'const-row-labels';
  for (let r = 1; r <= 5; r++) {
    const lbl = document.createElement('div');
    lbl.textContent = 'Row ' + r;
    rowLabels.appendChild(lbl);
  }

  const grid = document.createElement('div');
  grid.className = 'constellation-grid';

  const countEl = document.createElement('div');
  countEl.className = 'star-count';
  countEl.textContent = '0 / 5 stars selected';

  for (let i = 0; i < 25; i++) {
    const row = Math.floor(i / 5) + 1;
    const col = (i % 5) + 1;
    const cell = document.createElement('div');
    cell.className = 'star-cell';
    cell.dataset.idx = i;
    cell.title = 'Row ' + row + ', Col ' + col;
    const dot = document.createElement('div');
    dot.className = 'star-dot';
    cell.appendChild(dot);
    cell.onclick = () => {
      const idx = parseInt(cell.dataset.idx);
      if (selectedStars.includes(idx)) {
        selectedStars = selectedStars.filter(s => s !== idx);
        cell.classList.remove('lit');
      } else {
        selectedStars.push(idx);
        cell.classList.add('lit');
      }
      const cnt = selectedStars.length;
      countEl.textContent = cnt + ' / 5 stars selected';
      countEl.className = 'star-count' + (cnt === 5 ? ' ready' : '');
    };
    grid.appendChild(cell);
  }

  container.appendChild(rowLabels);
  container.appendChild(grid);
  gridWrap.appendChild(container);
  wrap.appendChild(gridWrap);
  wrap.appendChild(countEl);

  if (puzzle.hint) {
    const hintBtn = document.createElement('button');
    hintBtn.className = 'hint-toggle';
    hintBtn.textContent = '💡 Show hint';
    const hintBox = document.createElement('div');
    hintBox.className = 'hint-box hidden';
    hintBox.textContent = puzzle.hint;
    hintBtn.onclick = () => {
      hintBox.classList.toggle('hidden');
      hintBtn.textContent = hintBox.classList.contains('hidden') ? '💡 Show hint' : '🔼 Hide hint';
    };
    wrap.appendChild(hintBtn);
    wrap.appendChild(hintBox);
  }

  area.appendChild(wrap);
}

function submitPuzzle(puzzle) {
  const fb = document.getElementById('puzzle-feedback');

  if (puzzle.type === 'choice') {
    if (selectedChoice === -1) { setFeedback(fb, 'Please select an answer first.', 'neutral'); return; }
    if (selectedChoice === puzzle.answer) { showPuzzleSuccess(fb); return; }
    playErrorTone();
    setFeedback(fb, '✗ Not quite — try again. Use the hint if you need guidance.', 'error');
  } else if (puzzle.type === 'sundial') {
    if (sundialHour === -1) { setFeedback(fb, 'Click the clock face to choose a position.', 'neutral'); return; }
    if (sundialHour === 0) { showPuzzleSuccess(fb); return; }
    playErrorTone();
    setFeedback(fb, '✗ Not quite — solar noon is when the Sun is highest, at 12 o\'clock.', 'error');
  } else if (puzzle.type === 'cipher') {
    const inp = document.getElementById('cipher-input');
    if (!inp || !inp.value.trim()) { setFeedback(fb, 'Type your decoded answer in the field above.', 'neutral'); return; }
    if (inp.value.trim().toUpperCase() === puzzle.answer) { showPuzzleSuccess(fb); return; }
    playErrorTone();
    setFeedback(fb, '✗ Incorrect — use the decode guide: shift each letter backward by 3 positions.', 'error');
  } else if (puzzle.type === 'constellation') {
    if (selectedStars.length !== 5) {
      setFeedback(fb, 'Select exactly 5 stars. (' + selectedStars.length + '/5 selected)', 'neutral'); return;
    }
    const sorted = [...selectedStars].sort((a, b) => a - b);
    if (JSON.stringify(sorted) === JSON.stringify(puzzle.answer)) { showPuzzleSuccess(fb); return; }
    playErrorTone();
    setFeedback(fb, '✗ Wrong pattern — the diagonal runs from Row 1 Col 1 to Row 5 Col 5.', 'error');
  }
}

function setFeedback(el, msg, type) {
  el.textContent = msg;
  el.className = 'puzzle-feedback' + (type === 'success' ? ' success' : type === 'error' ? ' error' : '');
}

function showPuzzleSuccess(fb) {
  playSuccessChime();
  setFeedback(fb, '✓ Memory restored! Sol remembers…', 'success');
  setTimeout(() => { closePuzzle(); triggerChapterComplete(); }, 1000);
}

async function triggerChapterComplete() {
  const idx = gameState.currentChapter;
  const chapter = CHAPTERS[idx];
  if (!chapter) return;

  const orbPos = targetOrb ? targetOrb.position.clone() : new THREE.Vector3(0, 2, 0);

  if (targetOrb) {
    scene.remove(targetOrb);
    if (targetOrb.userData.ring) scene.remove(targetOrb.userData.ring);
    if (targetOrb.userData.light) scene.remove(targetOrb.userData.light);
    targetOrb = null;
  }

  spawnMemoryParticles(orbPos.x, orbPos.y, orbPos.z);
  playMemoryChime();

  if (!gameState.completedChapters.includes(idx)) {
    gameState.completedChapters.push(idx);
  }

  Object.entries(chapter.worldEffect).forEach(([k, v]) => {
    gameState.worldState[k] = Math.min(100, (gameState.worldState[k] || 0) + v);
  });

  gameState.solarEnergy = Math.min(SOLAR_ENERGY_MAX, gameState.solarEnergy + SOLAR_RESTORE_PER_CHAPTER);
  updateSolarEnergyHUD();
  updateWorldVisuals();

  const reveal = document.getElementById('memory-reveal');
  document.getElementById('memory-label').textContent = chapter.memory.label;
  document.getElementById('memory-text').textContent = chapter.memory.text;
  document.getElementById('memory-effect').textContent = chapter.memory.effect;

  const iconEl = reveal.querySelector('.memory-sun-glow');
  if (iconEl) iconEl.textContent = chapter.memory.icon;

  reveal.classList.remove('hidden');

  document.getElementById('memory-continue-btn').onclick = () => {
    reveal.classList.add('hidden');
    gameState.currentChapter = idx + 1;
    saveGame();
    updateHUD();

    if (gameState.currentChapter >= TOTAL_CHAPTERS) {
      setTimeout(triggerEnding, 700);
    } else {
      const nextCh = CHAPTERS[gameState.currentChapter];
      setSolVoice(nextCh ? nextCh.solVoice : '');
      setTimeout(() => showChapterIntro(nextCh), 600);
    }
  };
}

function triggerDarknessEnding() {
  gameRunning = false;
  energyDrainActive = false;
  navTarget = null;
  if (document.pointerLockElement) document.exitPointerLock();
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('darkness-warning').classList.add('hidden');

  const done = gameState.completedChapters.length;

  showEndingScreen({
    type: 'lose',
    badge: 'ENDLESS NIGHT',
    sun: '🌑',
    title: 'Endless Night',
    text: 'Sol\'s light faded to nothing. ' + done + ' of 5 memories were restored, but it was not enough. The world falls into eternal darkness. The Sun whispers: "I tried… but the darkness was faster than memory."',
    memories: done,
    energy: 0
  });
}

function triggerEnding() {
  gameRunning = false;
  energyDrainActive = false;
  navTarget = null;
  if (document.pointerLockElement) document.exitPointerLock();
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('darkness-warning').classList.add('hidden');

  const ws = gameState.worldState;
  const avg = (ws.forest + ws.village + ws.ocean + ws.light) / 4;
  const done = gameState.completedChapters.length;
  const energy = Math.round(gameState.solarEnergy);

  let ending;

  if (done >= 5 && energy >= 60) {
    ending = {
      type: 'win',
      badge: 'PERFECT ENDING',
      sun: '☀️',
      title: 'The Remembered Sun',
      text: 'You restored all five memories before darkness could claim the world. Sol rises fully whole, blazing brighter than it has in centuries. "I remember the first sunrise, the celebrations, the day freedom finally arrived, the mind that shone like a star, and my oldest companion the ocean. I remember everything. Thank you."',
      memories: done,
      energy: energy
    };
  } else if (done >= 5 && energy > 0) {
    ending = {
      type: 'win',
      badge: 'VICTORY',
      sun: '🌤️',
      title: 'The Awakening Sun',
      text: 'All five memories restored! Sol awakens fully, though the journey was close. The world brightens across every horizon. Sol speaks warmly: "Every memory you returned to me was a gift. The world remembers how to be warm again."',
      memories: done,
      energy: energy
    };
  } else if (done >= 3) {
    ending = {
      type: 'partial',
      badge: 'PARTIAL VICTORY',
      sun: '🌥️',
      title: 'The Dimming Dawn',
      text: done + ' of 5 memories were restored. The world partially brightens, but some corners remain in shadow. Sol speaks softly: "I remember enough to keep the world turning. Thank you for what you gave back. The rest… I will search for on my own."',
      memories: done,
      energy: energy
    };
  } else {
    ending = {
      type: 'lose',
      badge: 'FORGOTTEN',
      sun: '🌫️',
      title: 'The Forgotten Sun',
      text: 'Only ' + done + ' of 5 memories were recovered. Sol fades into the forgetting. The sun still rises, but dimly, mechanically, without joy. "I existed," Sol whispers. "That, at least, I know."',
      memories: done,
      energy: energy
    };
  }

  clearSave();
  showEndingScreen(ending);
}

function showEndingScreen(ending) {
  const screen = document.getElementById('ending-screen');
  screen.className = ending.type === 'win' ? 'win-screen' : ending.type === 'partial' ? 'win-screen' : 'lose-screen';

  document.getElementById('ending-sun').textContent = ending.sun;

  const badge = document.getElementById('ending-type-badge');
  badge.textContent = ending.badge;
  badge.className = ending.type === 'win' ? 'ending-badge-win' : ending.type === 'partial' ? 'ending-badge-partial' : 'ending-badge-lose';

  document.getElementById('ending-title').textContent = ending.title;
  document.getElementById('ending-text').textContent = ending.text;

  const statsEl = document.getElementById('ending-stats');
  statsEl.innerHTML = `
    <div class="ending-stat">
      <div class="ending-stat-value">${ending.memories}/${TOTAL_CHAPTERS}</div>
      <div class="ending-stat-label">Memories</div>
    </div>
    <div class="ending-stat">
      <div class="ending-stat-value">${ending.energy}%</div>
      <div class="ending-stat-label">Sol's Light</div>
    </div>
    <div class="ending-stat">
      <div class="ending-stat-value">${Math.round((ending.memories / TOTAL_CHAPTERS) * 100)}%</div>
      <div class="ending-stat-label">Completion</div>
    </div>
  `;

  screen.classList.remove('hidden');
}

function initUI() {
  const barEl = document.getElementById('loading-bar');
  const txtEl = document.getElementById('loading-text');
  const loadSteps = [
    [15, 'Igniting the first light…'],
    [30, 'Growing the ancient forest…'],
    [50, 'Building the village…'],
    [65, 'Raising the mountain…'],
    [80, 'Charting the observatory…'],
    [92, 'Preparing the ocean shrine…'],
    [100, 'Ready.']
  ];

  let si = 0;
  const iv = setInterval(() => {
    if (si >= loadSteps.length) {
      clearInterval(iv);
      setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        initThree();
        showMainMenu();
      }, 440);
      return;
    }
    const [pct, msg] = loadSteps[si++];
    if (barEl) barEl.style.width = pct + '%';
    if (txtEl) txtEl.textContent = msg;
  }, 360);

  document.getElementById('btn-new-game').addEventListener('click', () => startGame(true));
  document.getElementById('btn-continue').addEventListener('click', () => {
    loadGame();
    tutorialShown = true;
    startGame(false);
  });
}

document.addEventListener('DOMContentLoaded', initUI);