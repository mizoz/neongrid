# NeonGrid City Builder

A cyberpunk-themed city builder game that runs in your terminal-style browser interface. Build your own neon-lit metropolis in a dystopian future where megacorps rule and aliens threaten!

![NeonGrid](https://img.shields.io/badge/NeonGrid-City%20Builder-blueviolet)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-orange)

## 🎮 Features

- **16 Building Types** - From Residential Blocks to Spaceports, each with unique ASCII art
- **Real-time Simulation** - Traffic, population, energy, and economy systems
- **Day/Night Cycle** - Watch your city transform between day and night
- **Weather System** - Clear skies, rain, storms, and snow affect your city
- **12 Random Events** - Alien invasions, trade deals, disasters, and more
- **Branching Tech Tree** - Research upgrades across Infrastructure, Energy, and Society
- **15 Achievements** - Unlock milestones as you grow your city
- **Save/Load System** - Export your city to JSON files
- **Sound Effects** - Retro terminal beeps powered by Web Audio API

## 🚀 Getting Started

### Play Online (Single File)
The easiest way to play is to open `neongrid.html` in any modern browser.

### For Developers (Modular Version)
1. Clone this repository:
```bash
git clone https://github.com/yourusername/neongrid-city-builder.git
cd neongrid-city-builder
```

2. Open `index.html` in your browser, or serve it:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

3. Open `http://localhost:8000` in your browser

## 🎯 How to Play

### Controls
- **Click** building in left panel → **Click** grid to place
- **Keys 1-9** - Quick select buildings
- **S** - Save game
- **L** - Load game  
- **Space** - Pause/Resume
- **Escape** - Cancel placement

### Resources
- **Credits** 💰 - Currency for building
- **Energy** ⚡ - Power your city (produce more than you consume!)
- **Population** 👥 - Citizens living in your city
- **Happiness** 😊 - Keep citizens happy or face riots!
- **Tech** 🔬 - Research upgrades

### Tips
- Start with Power Plants to generate energy
- Build Residential Blocks to attract population
- Add Water Treatment for population growth
- Balance Industrial (credits) with Entertainment (happiness)
- Research tech to unlock advanced buildings

## 🏗️ Buildings

| Building | Cost | Effect |
|----------|------|--------|
| Residential Block | 200 | +25 Population capacity |
| Power Plant | 500 | +50 Energy |
| Commercial Zone | 300 | +50 Credits, -10 Energy |
| Industrial Zone | 400 | +80 Credits, -10 Happiness |
| Police Station | 350 | +15 Happiness |
| Hospital | 600 | +20 Happiness |
| Entertainment Hub | 800 | +100 Credits, +30 Happiness |
| Spaceport | 2000 | +500 Credits, +10 Tech |
| Data Center | 700 | +15 Tech, -30 Energy |
| Water Treatment | 250 | +10 Pop, enables growth |
| Transit Hub | 900 | +20% all buildings |
| Research Lab | 1000 | +25 Tech |
| Clone Farm | 1500 | +100 Population |
| Neon Billboard | 150 | +25 Credits |
| Defense Tower | 800 | Protects from attacks |
| Black Market | 500 | +200 Credits, -20 Happiness |

## 🎲 Random Events

- Power Outage
- Alien Invasion
- Trade Deal
- Cyber Attack
- Riot
- Disease Outbreak
- Meteor Shower
- Black Market Deal
- Corporate Takeover
- Neon Festival
- Mega Storm
- Tech Breakthrough

## 🛠️ Tech Tree

### Infrastructure
Defensive Grid → Metro System → Teleporters

### Energy
Solar Panels → Fusion Reactor → Zero-Point

### Society
Underworld Ties → Clone Tech → Space Program

## 🏆 Achievements

- First Building
- Getting Rich (1000 credits)
- Growing City (100 population)
- Disaster Survivor
- Tech Master
- Utopia (100% happiness)
- Mega Tycoon (10000 credits)
- Architect (all buildings)
- X-Fighter (survive alien invasion)
- To The Stars (build Spaceport)
- Transcendence (max tech)
- Dedicated Mayor (10 days)
- Neon Master (10 billboards)
- City Planner (10 buildings)
- Cyberpunk Legend

## 📁 Project Structure

```
neongrid-city-builder/
├── index.html          # Main entry point
├── neongrid.html       # Single-file version (all-in-one)
├── css/
│   └── style.css       # Cyberpunk terminal styles
├── js/
│   └── game.js        # Game engine
├── assets/
│   └── (future: images, sounds)
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- VT323 font from Google Fonts
- Inspired by classic SimCity and modern city builders
- Cyberpunk aesthetic inspired by Blade Runner, Akira, and Neuromancer

---

**Build your city. Survive the chaos. Become a Cyberpunk Legend.** 🌃
