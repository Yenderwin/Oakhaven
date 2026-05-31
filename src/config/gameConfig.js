/**
 * GAME CONFIG
 * Configuración global del juego
 */

const GAME_CONFIG = {
  // Información del Juego
  game: {
    title: 'Oakhaven',
    version: '1.0.0',
    author: 'Yenderwin',
    release_date: '2026-05-31',
    description: 'An interactive mystery book game with 150 pages of revelations'
  },

  // Configuración de Narrativa
  narrative: {
    totalPages: 150,
    acts: 3,
    revelationPages: [45, 75, 87, 120, 135, 150],
    startingPage: 1
  },

  // Configuración de Gráficos
  graphics: {
    resolution: {
      width: 1600,
      height: 900,
      fullscreen: false
    },
    rendering: {
      antialiasing: true,
      shadows: true,
      shadowQuality: 'high',
      fov: 75
    },
    atmosphere: {
      initialDarkness: 0.5,
      maxDarkness: 0.8,
      fogEnabled: true
    }
  },

  // Configuración de Audio
  audio: {
    masterVolume: 0.3,
    ambientVolume: 0.2,
    effectsVolume: 0.4,
    musicVolume: 0.25,
    enabled: true,
    useWebAudio: true
  },

  // Configuración de Jugabilidad
  gameplay: {
    autoSaveInterval: 5, // páginas
    pageFlipDuration: 600, // ms
    glitchIntensity: 0.05,
    tensionIncrement: 0.015,
    enableTutorial: true,
    enableAccessibility: true
  },

  // Configuración de Efectos
  effects: {
    enableInvisibleInk: true,
    enableGlitch: true,
    enableVignette: true,
    enableChromaticAberration: false,
    enableParticles: true,
    enableFlicker: true
  },

  // Configuración de Controles
  controls: {
    keyboard: true,
    mouse: true,
    touchscreen: false,
    controller: false,
    invertedY: false
  },

  // Configuración de Dificultad
  difficulty: {
    default: 'normal',
    levels: {
      easy: {
        tensionMultiplier: 0.7,
        glitchFrequency: 0.3,
        hintFrequency: 'high'
      },
      normal: {
        tensionMultiplier: 1.0,
        glitchFrequency: 0.5,
        hintFrequency: 'normal'
      },
      hard: {
        tensionMultiplier: 1.3,
        glitchFrequency: 0.8,
        hintFrequency: 'low'
      },
      nightmare: {
        tensionMultiplier: 1.5,
        glitchFrequency: 1.0,
        hintFrequency: 'none'
      }
    }
  },

  // Configuración de Red
  network: {
    enableCloud: false,
    enableMultiplayer: false,
    enableStatistics: false,
    enableAnalytics: false
  },

  // Configuración de Accesibilidad
  accessibility: {
    fontSize: 'normal',
    colorBlindMode: 'none',
    highContrast: false,
    screenReaderEnabled: false,
    textToSpeech: false,
    subtitles: true,
    doubleClickTime: 500
  },

  // Configuración de Plataforma
  platform: {
    type: 'electron', // 'electron' o 'web'
    os: process.platform || 'unknown',
    language: 'es',
    region: 'ES'
  },

  // URLs y Recursos
  resources: {
    cdnUrl: 'https://cdnjs.cloudflare.com',
    threejsUrl: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    githubRepo: 'https://github.com/Yenderwin/Oakhaven',
    supportEmail: 'support@oakhaven.game'
  },

  // Debug
  debug: {
    enabled: false,
    showStats: false,
    showFPS: false,
    wireframe: false,
    skipIntro: false,
    startPage: 1
  }
};

/**
 * Config Manager - Gestionar configuración
 */
class ConfigManager {
  constructor() {
    this.config = { ...GAME_CONFIG };
    this.loadUserConfig();
  }

  /**
   * Obtener configuración completa
   */
  getConfig() {
    return this.config;
  }

  /**
   * Obtener valor específico
   */
  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.config);
  }

  /**
   * Establecer valor específico
   */
  set(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let obj = this.config;

    keys.forEach(key => {
      if (!obj[key]) obj[key] = {};
      obj = obj[key];
    });

    obj[lastKey] = value;
    this.saveUserConfig();
  }

  /**
   * Cargar configuración del usuario desde localStorage
   */
  loadUserConfig() {
    try {
      const saved = localStorage.getItem('oakhaven_config');
      if (saved) {
        const userConfig = JSON.parse(saved);
        this.config = { ...this.config, ...userConfig };
      }
    } catch (error) {
      console.warn('Error loading user config:', error);
    }
  }

  /**
   * Guardar configuración del usuario
   */
  saveUserConfig() {
    try {
      localStorage.setItem('oakhaven_config', JSON.stringify(this.config));
    } catch (error) {
      console.warn('Error saving user config:', error);
    }
  }

  /**
   * Resetear a configuración predeterminada
   */
  reset() {
    this.config = { ...GAME_CONFIG };
    localStorage.removeItem('oakhaven_config');
  }

  /**
   * Exportar configuración
   */
  export() {
    return JSON.stringify(this.config, null, 2);
  }

  /**
   * Importar configuración
   */
  import(jsonConfig) {
    try {
      this.config = JSON.parse(jsonConfig);
      this.saveUserConfig();
      return true;
    } catch (error) {
      console.error('Error importing config:', error);
      return false;
    }
  }
}

// Instancia global de configuración
const gameConfig = new ConfigManager();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GAME_CONFIG, ConfigManager, gameConfig };
}
