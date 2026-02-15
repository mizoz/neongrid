// ========================================
// NEONGRID CITY BUILDER - GAME ENGINE
// ========================================

const GAME_CONFIG = {
  GRID_WIDTH: 20,
  GRID_HEIGHT: 15,
  DAY_LENGTH: 60000, // 1 minute day
  NIGHT_LENGTH: 240000, // 4 minutes night
  EVENT_INTERVAL: 30000, // 30 seconds
  TICK_RATE: 1000, // 1 second
  AUTO_SAVE_INTERVAL: 60000, // 60 seconds
};

// ========================================
// BUILDING DEFINITIONS
// ========================================
const BUILDINGS = {
  residential: {
    name: "Residential Block",
    icon: "🏢",
    cost: 200,
    energy: -5,
    population: 25,
    happiness: 0,
    credits: 0,
    tech: 0,
    ascii: "┌───┐\n│RES│\n└───┘",
    desc: "Housing for citizens. Provides population capacity.",
    unlock: null
  },
  power: {
    name: "Power Plant",
    icon: "⚡",
    cost: 500,
    energy: 50,
    population: 0,
    happiness: -5,
    credits: -10,
    tech: 0,
    ascii: "┌┬─┐\n│⚡│\n└┴─┘",
    desc: "Generates energy for your city. Reduces happiness slightly.",
    unlock: null
  },
  commercial: {
    name: "Commercial Zone",
    icon: "🏪",
    cost: 300,
    energy: -10,
    population: 0,
    happiness: 5,
    credits: 50,
    tech: 0,
    ascii: "┌─┬┐\n│$ │\n└─┴┘",
    desc: "Generates credits from trade. Requires energy.",
    unlock: null
  },
  industrial: {
    name: "Industrial Zone",
    icon: "🏭",
    cost: 400,
    energy: -15,
    population: 0,
    happiness: -10,
    credits: 80,
    tech: 0,
    ascii: "┌─┬┐\n│🏭│\n└─┴┘",
    desc: "High credit generation but reduces happiness.",
    unlock: null
  },
  police: {
    name: "Police Station",
    icon: "🚔",
    cost: 350,
    energy: -8,
    population: 0,
    happiness: 15,
    credits: -5,
    tech: 0,
    ascii: "┌─┬┐\n│POL│\n└─┴┘",
    desc: "Increases happiness and protects from crime events.",
    unlock: null
  },
  hospital: {
    name: "Hospital",
    icon: "🏥",
    cost: 600,
    energy: -20,
    population: 0,
    happiness: 20,
    credits: -15,
    tech: 0,
    ascii: "┌─┬┐\n│+ │\n└─┴┘",
    desc: "Major happiness boost. Required for population growth.",
    unlock: null
  },
  entertainment: {
    name: "Entertainment Hub",
    icon: "🎰",
    cost: 800,
    energy: -25,
    population: 0,
    happiness: 30,
    credits: 100,
    tech: 0,
    ascii: "┌─┬┐\n│♪♪│\n└─┴┘",
    desc: "Huge happiness and credit boost. Late game essential.",
    unlock: null
  },
  spaceport: {
    name: "Spaceport",
    icon: "🚀",
    cost: 2000,
    energy: -50,
    population: 0,
    happiness: 10,
    credits: 500,
    tech: 10,
    ascii: "┌─┬─┐\n│🚀│\n└─┴─┘",
    desc: "Massive credit generation. Unlocks end-game content.",
    unlock: "society_3"
  },
  datacenter: {
    name: "Data Center",
    icon: "💾",
    cost: 700,
    energy: -30,
    population: 0,
    happiness: 0,
    credits: 20,
    tech: 15,
    ascii: "┌─┬┐\n│DAT│\n└─┴┘",
    desc: "Generates tech points. Target for cyber attacks.",
    unlock: null
  },
  water: {
    name: "Water Treatment",
    icon: "💧",
    cost: 250,
    energy: -5,
    population: 10,
    happiness: 5,
    credits: -5,
    tech: 0,
    ascii: "┌─┬┐\n│💧│\n└─┴┘",
    desc: "Provides clean water. Required for population growth.",
    unlock: null
  },
  transit: {
    name: "Transit Hub",
    icon: "🚇",
    cost: 900,
    energy: -20,
    population: 0,
    happiness: 10,
    credits: 30,
    tech: 0,
    ascii: "┌─┬─┐\n│🚇│\n└─┴─┘",
    desc: "Boosts all nearby buildings by 20%.",
    unlock: "infrastructure_2"
  },
  research: {
    name: "Research Lab",
    icon: "🔬",
    cost: 1000,
    energy: -35,
    population: 0,
    happiness: 5,
    credits: 10,
    tech: 25,
    ascii: "┌─┬┐\n│R&D│\n└─┴┘",
    desc: "Generates tech points. Essential for tech tree.",
    unlock: null
  },
  clonefarm: {
    name: "Clone Farm",
    icon: "🧬",
    cost: 1500,
    energy: -40,
    population: 100,
    happiness: -5,
    credits: -20,
    tech: 5,
    ascii: "┌─┬─┐\n│🧬│\n└─┴─┘",
    desc: "Massive population boost. Late game only.",
    unlock: "society_2"
  },
  billboard: {
    name: "Neon Billboard",
    icon: "📺",
    cost: 150,
    energy: -2,
    population: 0,
    happiness: 0,
    credits: 25,
    tech: 0,
    ascii: "┌───┐\n│♪ ♪│\n└───┘",
    desc: "Generates credits. Adds to city aesthetic.",
    unlock: null
  },
  defense: {
    name: "Defense Tower",
    icon: "🗼",
    cost: 800,
    energy: -15,
    population: 0,
    happiness: 5,
    credits: -10,
    tech: 0,
    ascii: "┌─┬┐\n│DEF│\n└─┴┘",
    desc: "Protects from alien invasions and disasters.",
    unlock: "infrastructure_1"
  },
  blackmarket: {
    name: "Black Market",
    icon: "⚫",
    cost: 500,
    energy: -10,
    population: 0,
    happiness: -20,
    credits: 200,
    tech: 0,
    ascii: "┌─┬┐\n│⚫│\n└─┴┘",
    desc: "Huge credits but reduces happiness significantly.",
    unlock: "society_1"
  }
};

// ========================================
// TECH TREE DEFINITIONS
// ========================================
const TECH_TREE = {
  infrastructure: {
    name: "Infrastructure",
    nodes: [
      { id: "infrastructure_1", name: "Defensive Grid", cost: 50, desc: "Unlocks Defense Towers", req: null },
      { id: "infrastructure_2", name: "Metro System", cost: 100, desc: "Unlocks Transit Hubs", req: "infrastructure_1" },
      { id: "infrastructure_3", name: "Teleporters", cost: 300, desc: "50% boost to all buildings", req: "infrastructure_2" }
    ]
  },
  energy: {
    name: "Energy",
    nodes: [
      { id: "energy_1", name: "Solar Panels", cost: 50, desc: "+25% energy production", req: null },
      { id: "energy_2", name: "Fusion Reactor", cost: 150, desc: "Doubles energy capacity", req: "energy_1" },
      { id: "energy_3", name: "Zero-Point", cost: 400, desc: "Unlimited energy", req: "energy_2" }
    ]
  },
  society: {
    name: "Society",
    nodes: [
      { id: "society_1", name: "Underworld Ties", cost: 50, desc: "Unlocks Black Market", req: null },
      { id: "society_2", name: "Clone Tech", cost: 200, desc: "Unlocks Clone Farms", req: "society_1" },
      { id: "society_3", name: "Space Program", cost: 350, desc: "Unlocks Spaceport", req: "society_2" }
    ]
  }
};

// ========================================
// ACHIEVEMENTS DEFINITIONS
// ========================================
const ACHIEVEMENTS = [
  { id: "first_building", name: "First Building", desc: "Place your first building", icon: "🏗️" },
  { id: "credits_1000", name: "Getting Rich", desc: "Accumulate 1000 credits", icon: "💰" },
  { id: "pop_100", name: "Growing City", desc: "Reach 100 population", icon: "👥" },
  { id: "survive_disaster", name: "Disaster Survivor", desc: "Survive your first disaster", icon: "🌋" },
  { id: "tech_tree", name: "Tech Master", desc: "Research all tech", icon: "🔬" },
  { id: "happiness_100", name: "Utopia", desc: "Reach 100% happiness", icon: "😊" },
  { id: "credits_10000", name: "Mega Tycoon", desc: "Accumulate 10000 credits", icon: "🤑" },
  { id: "all_buildings", name: "Architect", desc: "Build all building types", icon: "🏙️" },
  { id: "alien_invasion", name: "X-Fighter", desc: "Survive alien invasion", icon: "👽" },
  { id: "spaceport", name: "To The Stars", desc: "Build a Spaceport", icon: "🚀" },
  { id: "max_tech", name: "Transcendence", desc: "Reach max tech level", icon: "🌟" },
  { id: "streak_10", name: "Dedicated Mayor", desc: "Play for 10 days", icon: "📅" },
  { id: "neon_master", name: "Neon Master", desc: "Build 10 Neon Billboards", icon: "📺" },
  { id: "city_planner", name: "City Planner", desc: "Build 10 buildings", icon: "📐" },
  { id: "legend", name: "Cyberpunk Legend", desc: "Unlock all other achievements", icon: "🏆" }
];

// ========================================
// RANDOM EVENTS
// ========================================
const RANDOM_EVENTS = [
  {
    id: "power_outage",
    name: "Power Outage",
    desc: "A cyber attack has caused a city-wide power outage! Some buildings have lost power.",
    choices: [
      { text: "Emergency Repairs", effect: () => { game.credits -= 100; addEvent("Emergency repairs cost 100 credits", "warning"); } },
      { text: "Ride it out", effect: () => { game.happiness -= 15; addEvent("Citizens are unhappy about the blackout", "warning"); } }
    ]
  },
  {
    id: "alien_invasion",
    name: "Alien Invasion",
    desc: "Aliens have landed! They demand tribute or face destruction!",
    choices: [
      { text: "Fight back", effect: () => { 
        const defense = game.buildings.filter(b => b.type === 'defense').length;
        if (defense >= 2) {
          game.credits += 2000;
          game.happiness += 20;
          unlockAchievement("alien_invasion");
          addEvent("Defense towers repelled the aliens! +2000 credits!", "success");
        } else {
          game.credits -= 500;
          game.happiness -= 30;
          addEvent("Your defenses were overwhelmed! -500 credits", "warning");
        }
      }},
      { text: "Surrender", effect: () => { game.credits -= 1000; addEvent("You paid the alien tribute. -1000 credits", "warning"); } }
    ]
  },
  {
    id: "trade_deal",
    name: "Trade Deal",
    desc: "A megacorp wants to establish a trade route through your city.",
    choices: [
      { text: "Accept", effect: () => { game.credits += 500; addEvent("Trade deal accepted! +500 credits", "success"); } },
      { text: "Decline", effect: () => { addEvent("You declined the trade deal", "info"); } }
    ]
  },
  {
    id: "cyber_attack",
    name: "Cyber Attack",
    desc: "Hackers are targeting your data centers!",
    choices: [
      { text: "Counter-attack", effect: () => { 
        if (game.buildings.filter(b => b.type === 'defense').length > 0) {
          game.tech += 50;
          addEvent("Counter-attack successful! +50 tech points", "success");
        } else {
          game.credits -= 200;
          addEvent("No defense! -200 credits", "warning");
        }
      }},
      { text: "Pay ransom", effect: () => { game.credits -= 300; addEvent("You paid the ransom. -300 credits", "warning"); } }
    ]
  },
  {
    id: "riot",
    name: "Riot",
    desc: "Citizens are rioting in the streets! Low happiness has caused chaos.",
    choices: [
      { text: "Deploy police", effect: () => { 
        if (game.buildings.filter(b => b.type === 'police').length > 0) {
          game.happiness += 10;
          addEvent("Police contained the riot!", "success");
        } else {
          game.happiness -= 20;
          game.credits -= 200;
          addEvent("No police! The riot caused damage!", "warning");
        }
      }},
      { text: "Negotiate", effect: () => { game.credits -= 150; game.happiness += 5; addEvent("Negotiations cost 150 credits", "info"); } }
    ]
  },
  {
    id: "disease",
    name: "Disease Outbreak",
    desc: "A mysterious illness is spreading through the city!",
    choices: [
      { text: "Quarantine", effect: () => { 
        if (game.buildings.filter(b => b.type === 'hospital').length > 0) {
          game.credits -= 100;
          addEvent("Hospitals managed the outbreak. -100 credits", "info");
        } else {
          game.population = Math.floor(game.population * 0.7);
          game.happiness -= 20;
          addEvent("No hospitals! Population decimated!", "warning");
        }
      }},
      { text: "Ignore", effect: () => { game.population = Math.floor(game.population * 0.5); game.happiness -= 30; addEvent("Population severely affected by disease!", "warning"); } }
    ]
  },
  {
    id: "meteor",
    name: "Meteor Shower",
    desc: "A meteor shower is approaching! Defense needed!",
    choices: [
      { text: "Shoot them down", effect: () => { 
        const defense = game.buildings.filter(b => b.type === 'defense').length;
        if (defense >= 1) {
          game.credits += 800;
          addEvent("Meteors destroyed! +800 credits", "success");
        } else {
          game.credits -= 300;
          addEvent("No defenses! Meteors hit the city!", "warning");
        }
      }},
      { text: "Evacuate", effect: () => { game.credits -= 400; addEvent("Evacuation cost 400 credits", "warning"); } }
    ]
  },
  {
    id: "black_market_deal",
    name: "Black Market Offer",
    desc: "A shady contact offers illegal goods for sale.",
    choices: [
      { text: "Buy", effect: () => { 
        if (Math.random() > 0.5) {
          game.credits += 1000;
          addEvent("Profited 1000 credits from the deal!", "success");
        } else {
          game.credits -= 500;
          addEvent("It was a scam! -500 credits", "warning");
        }
      }},
      { text: "Report to police", effect: () => { game.happiness += 10; addEvent("Police appreciate the tip! +10 happiness", "success"); } }
    ]
  },
  {
    id: "corporate_takeover",
    name: "Corporate Takeover",
    desc: "A megacorp wants to buy one of your buildings.",
    choices: [
      { text: "Sell", effect: () => { game.credits += 1500; addEvent("Sold building for 1500 credits!", "success"); game.buildings.pop(); }},
      { text: "Refuse", effect: () => { addEvent("You kept your building", "info"); } }
    ]
  },
  {
    id: "neon_festival",
    name: "Neon Festival",
    desc: "It's time for the annual Neon Festival! The city comes alive!",
    choices: [
      { text: "Sponsor", effect: () => { game.credits -= 200; game.happiness += 25; addEvent("Amazing festival! +25 happiness", "success"); }},
      { text: "Let it happen", effect: () => { game.happiness += 10; addEvent("Festival was okay. +10 happiness", "info"); } }
    ]
  },
  {
    id: "mega_storm",
    name: "Mega Storm",
    desc: "A massive storm is hitting the city!",
    choices: [
      { text: "Emergency measures", effect: () => { game.credits -= 300; addEvent("Emergency response cost 300 credits", "info"); }},
      { text: "Hunker down", effect: () => { game.credits -= 100; game.happiness -= 10; addEvent("Storm caused some damage", "warning"); } }
    ]
  },
  {
    id: "tech_breakthrough",
    name: "Tech Breakthrough",
    desc: "Your research labs have made a discovery!",
    choices: [
      { text: "Patent it", effect: () => { game.tech += 100; addEvent("Huge breakthrough! +100 tech!", "success"); }},
      { text: "Open source", effect: () => { game.happiness += 15; game.tech += 30; addEvent("Scientific community celebrates! +15 happy, +30 tech", "success"); } }
    ]
  }
];

// ========================================
// GAME STATE
// ========================================
let game = {
  credits: 1000,
  energy: 50,
  energyMax: 100,
  population: 0,
  happiness: 50,
  tech: 0,
  day: 1,
  timeOfDay: "day",
  weather: "clear",
  paused: false,
  selectedBuilding: null,
  buildings: [],
  techResearched: [],
  achievements: [],
  vehicles: [],
  lastEvent: 0,
  lastSave: 0,
  gameTime: 0,
  buildingCounts: {},
  events: []
};

// ========================================
// AUDIO ENGINE
// ========================================
const AudioEngine = {
  ctx: null,
  
  init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  
  playTone(freq, duration, type = 'square') {
    if (!this.ctx) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },
  
  playPlace() {
    this.playTone(880, 0.1);
    setTimeout(() => this.playTone(1100, 0.1), 50);
  },
  
  playEvent() {
    this.playTone(440, 0.2);
    setTimeout(() => this.playTone(550, 0.2), 100);
    setTimeout(() => this.playTone(660, 0.3), 200);
  },
  
  playWarning() {
    this.playTone(200, 0.3, 'sawtooth');
  },
  
  playSuccess() {
    this.playTone(523, 0.15);
    setTimeout(() => this.playTone(659, 0.15), 100);
    setTimeout(() => this.playTone(784, 0.2), 200);
  },
  
  playTech() {
    this.playTone(330, 0.1);
    setTimeout(() => this.playTone(440, 0.1), 80);
    setTimeout(() => this.playTone(550, 0.1), 160);
    setTimeout(() => this.playTone(660, 0.2), 240);
  },
  
  updateViz(intensity) {
    const bars = document.querySelectorAll('.sound-bar');
    bars.forEach((bar, i) => {
      const height = Math.random() * intensity * 25 + 5;
      bar.style.height = height + 'px';
    });
  }
};

// ========================================
// INITIALIZATION
// ========================================
function init() {
  createGrid();
  createBuildingPanel();
  createTechTree();
  createAchievements();
  setupEventListeners();
  startGameLoop();
  addEvent("Welcome to NeonGrid City Builder!", "info");
}

function createGrid() {
  const grid = document.getElementById('city-grid');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${GAME_CONFIG.GRID_WIDTH}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${GAME_CONFIG.GRID_HEIGHT}, 1fr)`;
  
  for (let y = 0; y < GAME_CONFIG.GRID_HEIGHT; y++) {
    for (let x = 0; x < GAME_CONFIG.GRID_WIDTH; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell empty';
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.textContent = '·';
      cell.addEventListener('click', () => placeBuilding(x, y));
      cell.addEventListener('mouseenter', (e) => showTooltip(e, x, y));
      cell.addEventListener('mouseleave', hideTooltip);
      grid.appendChild(cell);
    }
  }
}

function createBuildingPanel() {
  const list = document.getElementById('building-list');
  list.innerHTML = '';
  
  let keyNum = 1;
  for (const [id, building] of Object.entries(BUILDINGS)) {
    if (building.unlock && !game.techResearched.includes(building.unlock)) continue;
    
    const item = document.createElement('div');
    item.className = 'building-item';
    item.dataset.type = id;
    item.innerHTML = `
      <span class="building-icon">${building.icon}</span>
      <div class="building-info">
        <div class="building-name">${building.name}</div>
        <div class="building-cost">💰 ${building.cost}</div>
      </div>
      <span class="building-key">[${keyNum}]</span>
    `;
    item.addEventListener('click', () => selectBuilding(id));
    list.appendChild(item);
    keyNum++;
  }
}

function createTechTree() {
  const container = document.getElementById('tech-nodes');
  container.innerHTML = '';
  
  for (const [branchId, branch] of Object.entries(TECH_TREE)) {
    const branchDiv = document.createElement('div');
    branchDiv.style.marginBottom = '15px';
    branchDiv.innerHTML = `<span style="color: var(--neon-cyan)">${branch.name}:</span> `;
    
    branch.nodes.forEach((node, idx) => {
      const nodeEl = document.createElement('span');
      const isResearched = game.techResearched.includes(node.id);
      const reqMet = !node.req || game.techResearched.includes(node.req);
      
      nodeEl.className = `tech-node ${isResearched ? 'researched' : ''} ${!reqMet ? 'locked' : ''} ${reqMet && !isResearched ? 'current' : ''}`;
      nodeEl.textContent = node.name;
      nodeEl.title = node.desc + (node.cost ? ` (${node.cost} tech)` : '');
      
      if (reqMet && !isResearched) {
        nodeEl.addEventListener('click', () => researchTech(node));
      }
      
      branchDiv.appendChild(nodeEl);
    });
    
    container.appendChild(branchDiv);
  }
}

function createAchievements() {
  const list = document.getElementById('achievement-list');
  list.innerHTML = '';
  
  ACHIEVEMENTS.forEach(ach => {
    const unlocked = game.achievements.includes(ach.id);
    const el = document.createElement('div');
    el.className = `achievement ${unlocked ? 'unlocked' : ''}`;
    el.innerHTML = `
      <span class="achievement-icon">${unlocked ? ach.icon : '🔒'}</span>
      <div>
        <div class="achievement-name">${unlocked ? ach.name : '???'}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function setupEventListeners() {
  document.getElementById('btn-pause').addEventListener('click', togglePause);
  document.getElementById('btn-save').addEventListener('click', saveGame);
  document.getElementById('btn-load').addEventListener('click', loadGame);
  
  document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '9') {
      const buildings = Object.keys(BUILDINGS);
      const idx = parseInt(e.key) - 1;
      if (idx < buildings.length) {
        selectBuilding(buildings[idx]);
      }
    }
    if (e.key === 's' || e.key === 'S') saveGame();
    if (e.key === 'l' || e.key === 'L') loadGame();
    if (e.key === ' ') { e.preventDefault(); togglePause(); }
    if (e.key === 'Escape') game.selectedBuilding = null;
    updateBuildingPanel();
  });
}

// ========================================
// GAME LOOP
// ========================================
function startGameLoop() {
  setInterval(() => {
    if (!game.paused) {
      gameTick();
    }
  }, GAME_CONFIG.TICK_RATE);
  
  setInterval(updateWeather, 10000);
  setInterval(updateDayNight, 1000);
  setInterval(checkRandomEvent, GAME_CONFIG.EVENT_INTERVAL);
  setInterval(autoSave, GAME_CONFIG.AUTO_SAVE_INTERVAL);
  setInterval(updateTraffic, 2000);
}

function gameTick() {
  game.gameTime++;
  
  let creditGen = 0;
  let energyGen = 0;
  let popCap = 0;
  let happyMod = 0;
  
  game.buildings.forEach(b => {
    const def = BUILDINGS[b.type];
    if (def) {
      creditGen += def.credits || 0;
      energyGen += def.energy || 0;
      popCap += def.population || 0;
      happyMod += def.happiness || 0;
    }
  });
  
  // Tech bonuses
  if (game.techResearched.includes('energy_1')) energyGen = Math.floor(energyGen * 1.25);
  if (game.techResearched.includes('energy_2')) game.energyMax = 200;
  if (game.techResearched.includes('energy_3')) game.energyMax = 9999;
  if (game.techResearched.includes('infrastructure_3')) {
    creditGen = Math.floor(creditGen * 1.5);
    energyGen = Math.floor(energyGen * 1.5);
  }
  
  // Weather effects
  if (game.weather === 'storm') {
    creditGen = Math.floor(creditGen * 0.7);
    happyMod -= 5;
  }
  
  game.credits += creditGen;
  game.energy = Math.min(game.energyMax, Math.max(0, game.energy + energyGen));
  
  // Population growth
  if (game.population < popCap && game.buildings.some(b => b.type === 'water')) {
    if (Math.random() < 0.1) game.population++;
  }
  
  game.happiness = Math.min(100, Math.max(0, game.happiness + happyMod));
  
  updateResources();
  updateCityGrid();
  checkAchievements();
  
  if (game.gameTime % 60 === 0) {
    game.day++;
    document.getElementById('time-of-day').textContent = `DAY ${game.day}`;
  }
}

function updateDayNight() {
  if (game.paused) return;
  
  const cyclePos = (Date.now() % (GAME_CONFIG.DAY_LENGTH + GAME_CONFIG.NIGHT_LENGTH));
  const overlay = document.getElementById('daynight-overlay');
  const icon = document.getElementById('time-icon');
  
  if (cyclePos < GAME_CONFIG.DAY_LENGTH) {
    game.timeOfDay = 'day';
    overlay.className = 'day';
    icon.textContent = '☀️';
  } else if (cyclePos < GAME_CONFIG.DAY_LENGTH + 10000) {
    overlay.className = 'twilight';
    icon.textContent = '🌆';
  } else {
    game.timeOfDay = 'night';
    overlay.className = 'night';
    icon.textContent = '🌙';
  }
}

function updateWeather() {
  if (game.paused) return;
  
  const weathers = ['clear', 'clear', 'rain', 'rain', 'storm', 'snow'];
  const weights = [0.4, 0.4, 0.1, 0.1, 0.05, 0.05];
  let r = Math.random();
  
  for (let i = 0; i < weathers.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      game.weather = weathers[i];
      break;
    }
  }
  
  const icon = document.getElementById('weather-icon');
  icon.textContent = game.weather === 'clear' ? '☁️' : 
                     game.weather === 'rain' ? '🌧️' : 
                     game.weather === 'storm' ? '⛈️' : '❄️';
  
  updateWeatherParticles();
}

function updateWeatherParticles() {
  const overlay = document.getElementById('weather-overlay');
  overlay.innerHTML = '';
  
  if (game.weather === 'clear') return;
  
  const count = game.weather === 'storm' ? 50 : 20;
  const char = game.weather === 'rain' ? '|' : 
               game.weather === 'storm' ? '⚡' : '*';
  
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'weather-particle';
    p.textContent = char;
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 2 + 1) + 's';
    p.style.opacity = Math.random() * 0.5 + 0.3;
    overlay.appendChild(p);
  }
}

function updateTraffic() {
  if (game.paused) return;
  
  const grid = document.getElementById('city-grid');
  const cells = grid.querySelectorAll('.cell.road');
  
  cells.forEach(cell => {
    cell.textContent = Math.random() > 0.9 ? (Math.random() > 0.5 ? '🚗' : '🚕') : '·';
  });
}

// ========================================
// BUILDING SYSTEM
// ========================================
function selectBuilding(type) {
  game.selectedBuilding = type;
  updateBuildingPanel();
  AudioEngine.playTone(440, 0.05);
}

function updateBuildingPanel() {
  document.querySelectorAll('.building-item').forEach(item => {
    item.classList.toggle('selected', item.dataset.type === game.selectedBuilding);
  });
}

function placeBuilding(x, y) {
  if (!game.selectedBuilding) return;
  
  const building = BUILDINGS[game.selectedBuilding];
  
  if (game.credits < building.cost) {
    showNotification("Not enough credits!", "warning");
    AudioEngine.playWarning();
    return;
  }
  
  if (game.energy + building.energy < 0) {
    showNotification("Not enough energy!", "warning");
    AudioEngine.playWarning();
    return;
  }
  
  game.credits -= building.cost;
  game.buildings.push({ type: game.selectedBuilding, x, y });
  
  game.buildingCounts[game.selectedBuilding] = (game.buildingCounts[game.selectedBuilding] || 0) + 1;
  
  const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
  cell.className = `cell building`;
  cell.dataset.type = game.selectedBuilding;
  cell.innerHTML = `<div class="building-ascii">${building.ascii}</div>`;
  
  AudioEngine.playPlace();
  AudioEngine.updateViz(0.8);
  
  addEvent(`Built ${building.name} at (${x},${y})`, "success");
  
  // Replace first building achievement if it was already unlocked
  if (game.achievements.includes("first_building")) {
    game.achievements = game.achievements.filter(a => a !== "first_building");
  }
  unlockAchievement("first_building");
  
  updateResources();
}

function updateCityGrid() {
  game.buildings.forEach(b => {
    const cell = document.querySelector(`.cell[data-x="${b.x}"][data-y="${b.y}"]`);
    if (cell && cell.dataset.type !== b.type) {
      const def = BUILDINGS[b.type];
      cell.className = `cell building`;
      cell.dataset.type = b.type;
      cell.innerHTML = `<div class="building-ascii">${def.ascii}</div>`;
    }
  });
}

// ========================================
// TECH SYSTEM
// ========================================
function researchTech(node) {
  if (game.tech < node.cost) {
    showNotification("Not enough tech points!", "warning");
    AudioEngine.playWarning();
    return;
  }
  
  game.tech -= node.cost;
  game.techResearched.push(node.id);
  
  AudioEngine.playTech();
  AudioEngine.updateViz(1);
  
  addEvent(`Researched: ${node.name}`, "success");
  createTechTree();
  createBuildingPanel();
  updateResources();
}

function unlockAchievement(id) {
  if (!game.achievements.includes(id)) {
    game.achievements.push(id);
    createAchievements();
    AudioEngine.playSuccess();
    
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      showNotification(`Achievement Unlocked: ${ach.name}!`, "success");
    }
  }
}

function checkAchievements() {
  if (game.credits >= 1000) unlockAchievement("credits_1000");
  if (game.credits >= 10000) unlockAchievement("credits_10000");
  if (game.population >= 100) unlockAchievement("pop_100");
  if (game.happiness >= 100) unlockAchievement("happiness_100");
  
  const buildingTypes = [...new Set(game.buildings.map(b => b.type))];
  if (buildingTypes.length >= 16) unlockAchievement("all_buildings");
  if (game.buildings.length >= 10) unlockAchievement("city_planner");
  if ((game.buildingCounts.billboard || 0) >= 10) unlockAchievement("neon_master");
  if (game.buildings.some(b => b.type === 'spaceport')) unlockAchievement("spaceport");
  if (game.techResearched.length >= 9) unlockAchievement("tech_tree");
  if (game.day >= 10) unlockAchievement("streak_10");
  
  const others = ACHIEVEMENTS.filter(a => a.id !== 'legend').map(a => a.id);
  if (others.every(a => game.achievements.includes(a))) unlockAchievement("legend");
}

// ========================================
// RANDOM EVENTS
// ========================================
function checkRandomEvent() {
  if (game.paused) return;
  if (Date.now() - game.lastEvent < GAME_CONFIG.EVENT_INTERVAL) return;
  if (game.buildings.length < 3) return;
  
  game.lastEvent = Date.now();
  
  const event = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
  showEventModal(event);
  AudioEngine.playEvent();
  AudioEngine.updateViz(1);
}

function showEventModal(event) {
  const container = document.getElementById('modal-container');
  container.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <h2>⚠️ ${event.name}</h2>
        <p>${event.desc}</p>
        <div class="modal-buttons">
          ${event.choices.map((c, i) => 
            `<button class="btn ${i === 0 ? 'success' : 'danger'}" onclick="handleEventChoice('${event.id}', ${i})">${c.text}</button>`
          ).join('')}
        </div>
      </div>
    </div>
  `;
}

function handleEventChoice(eventId, choiceIdx) {
  const event = RANDOM_EVENTS.find(e => e.id === eventId);
  if (event && event.choices[choiceIdx]) {
    event.choices[choiceIdx].effect();
  }
  
  document.getElementById('modal-container').innerHTML = '';
  
  if (['power_outage', 'meteor', 'alien_invasion'].includes(eventId)) {
    unlockAchievement("survive_disaster");
  }
}

// ========================================
// UI HELPERS
// ========================================
function updateResources() {
  document.getElementById('credits').textContent = game.credits;
  document.getElementById('energy').textContent = `${game.energy}/${game.energyMax}`;
  document.getElementById('population').textContent = game.population;
  document.getElementById('happiness').textContent = game.happiness + '%';
  document.getElementById('tech').textContent = game.tech;
}

function addEvent(message, type = "info") {
  const log = document.getElementById('event-log');
  const entry = document.createElement('div');
  entry.className = `event-entry ${type}`;
  entry.innerHTML = `
    <div>${message}</div>
    <div class="event-time">${new Date().toLocaleTimeString()}</div>
  `;
  log.insertBefore(entry, log.firstChild);
  
  while (log.children.length > 50) {
    log.removeChild(log.lastChild);
  }
}

function showNotification(message, type = "info") {
  const notif = document.getElementById('notification');
  notif.textContent = message;
  notif.style.display = 'block';
  notif.style.borderColor = type === 'warning' ? 'var(--neon-red)' : 
                             type === 'success' ? 'var(--neon-green)' : 'var(--neon-cyan)';
  
  setTimeout(() => {
    notif.style.display = 'none';
  }, 3000);
}

function showTooltip(e, x, y) {
  const existing = game.buildings.find(b => b.x === x && b.y === y);
  if (!existing || !game.selectedBuilding) return;
  
  const tooltip = document.getElementById('tooltip');
  const building = BUILDINGS[game.selectedBuilding];
  
  tooltip.innerHTML = `
    <h4>${building.name}</h4>
    <p>${building.desc}</p>
    <p>Cost: ${building.cost} | Energy: ${building.energy > 0 ? '+' : ''}${building.energy}</p>
  `;
  tooltip.style.display = 'block';
  tooltip.style.left = (e.clientX + 10) + 'px';
  tooltip.style.top = (e.clientY + 10) + 'px';
}

function hideTooltip() {
  document.getElementById('tooltip').style.display = 'none';
}

function togglePause() {
  game.paused = !game.paused;
  document.getElementById('paused-overlay').style.display = game.paused ? 'block' : 'none';
  document.getElementById('btn-pause').textContent = game.paused ? '▶ PLAY' : '⏸ PAUSE';
}

// ========================================
// SAVE/LOAD SYSTEM
// ========================================
function saveGame() {
  const saveData = {
    credits: game.credits,
    energy: game.energy,
    energyMax: game.energyMax,
    population: game.population,
    happiness: game.happiness,
    tech: game.tech,
    day: game.day,
    buildings: game.buildings,
    techResearched: game.techResearched,
    achievements: game.achievements,
    buildingCounts: game.buildingCounts,
    gameTime: game.gameTime,
    timestamp: Date.now()
  };
  
  const blob = new Blob([JSON.stringify(saveData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `neongrid_save_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  showNotification("Game saved!", "success");
  AudioEngine.playSuccess();
  addEvent("Game saved to file", "success");
}

function loadGame() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      const saveData = JSON.parse(text);
      
      game.credits = saveData.credits || 1000;
      game.energy = saveData.energy || 50;
      game.energyMax = saveData.energyMax || 100;
      game.population = saveData.population || 0;
      game.happiness = saveData.happiness || 50;
      game.tech = saveData.tech || 0;
      game.day = saveData.day || 1;
      game.buildings = saveData.buildings || [];
      game.techResearched = saveData.techResearched || [];
      game.achievements = saveData.achievements || [];
      game.buildingCounts = saveData.buildingCounts || {};
      game.gameTime = saveData.gameTime || 0;
      
      createGrid();
      updateCityGrid();
      createTechTree();
      createAchievements();
      createBuildingPanel();
      updateResources();
      
      showNotification("Game loaded!", "success");
      AudioEngine.playSuccess();
      addEvent("Game loaded from file", "success");
    } catch (err) {
      showNotification("Error loading save file!", "warning");
      AudioEngine.playWarning();
    }
  };
  input.click();
}

function autoSave() {
  game.lastSave = Date.now();
}

// ========================================
// START THE GAME
// ========================================
window.addEventListener('load', init);
