# Oakhaven - Interactive 3D Mystery Book Game

## Descripción
Oakhaven es un juego de lectura interactivo donde el jugador descubre un misterioso diario antiguo. A través de 150 páginas, experimentará revelaciones progresivas, códigos ocultos, tinta invisible y giros de trama que cuestionarán la realidad de la historia.

## Características Principales
- 📚 **150 páginas interactivas** con historia original
- 🎮 **Experiencia 3D inmersiva** con Three.js
- 🔐 **Códigos y enigmas** a resolver
- 👻 **Tinta invisible** que revela secretos
- 📝 **Páginas rayadas** que cambian dinámicamente
- 😨 **Atmósfera de horror psicológico** con revelaciones
- 🎯 **Ramificaciones narrativas** según decisiones del jugador

## Tecnología
- **Desktop**: Electron
- **3D Graphics**: Three.js
- **Lenguaje**: JavaScript (ES6+)

## Instalación
```bash
npm install
npm start
```

## Estructura del Proyecto
```
Oakhaven/
├── src/
│   ├── main.js
│   ├── renderer.js
│   ├── engine/
│   │   ├��─ bookEngine.js
│   │   ├── storyEngine.js
│   │   └── mysteriumEngine.js
│   ├── graphics/
│   │   ├── bookRenderer3D.js
│   │   ├── pageEffects.js
│   │   └── lightingSystem.js
│   ├── story/
│   │   ├── narrative.js
│   │   ├── chapters/
│   │   └── secrets.js
│   └── ui/
│       ├── controls.js
│       └── hud.js
├── assets/
│   ├── textures/
│   ├── models/
│   └── sounds/
├── index.html
└── package.json
```

## Autor
Yenderwin

## Licencia
MIT
