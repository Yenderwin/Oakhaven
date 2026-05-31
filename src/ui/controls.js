/**
 * UI CONTROLS
 * Sistema de controles y entrada del usuario
 */

class UIControls {
  constructor(gameEngine) {
    this.gameEngine = gameEngine;
    this.notificationQueue = [];
    this.setupEventListeners();
  }

  /**
   * Configurar event listeners
   */
  setupEventListeners() {
    // Botones de navegación
    document.getElementById('prev-page')?.addEventListener('click', () => this.onPreviousPage());
    document.getElementById('next-page')?.addEventListener('click', () => this.onNextPage());

    // Acciones especiales
    document.getElementById('reveal-invisible')?.addEventListener('click', () => this.onRevealInvisible());
    document.getElementById('decode-cipher')?.addEventListener('click', () => this.onDecodeCipher());
    document.getElementById('examine-page')?.addEventListener('click', () => this.onExaminePage());

    // Menú de pausa
    document.addEventListener('keydown', (e) => this.handleKeypress(e));
    document.getElementById('resume-btn')?.addEventListener('click', () => this.togglePause());
    document.getElementById('pause-btn')?.addEventListener('click', () => this.togglePause());

    // Ratón - voltear páginas con clic
    document.addEventListener('click', (e) => this.handlePageFlip(e));

    // Teclas de acceso rápido
    document.addEventListener('keydown', (e) => this.handleShortcuts(e));
  }

  /**
   * Página anterior
   */
  onPreviousPage() {
    if (this.gameEngine.storyEngine.previousPage()) {
      this.updateDisplay();
      this.showNotification('← Página anterior');
    }
  }

  /**
   * Página siguiente
   */
  onNextPage() {
    if (this.gameEngine.storyEngine.nextPage()) {
      this.updateDisplay();
      this.showNotification('Página siguiente →');
    }
  }

  /**
   * Revelar tinta invisible
   */
  onRevealInvisible() {
    const page = this.gameEngine.storyEngine.getPage(
      this.gameEngine.storyEngine.currentPage
    );

    if (page.hasInvisibleInk && page.invisibleText) {
      this.gameEngine.bookRenderer.applyInvisibleInkEffect();
      this.showNotification(`👻 ${page.invisibleText}`);
    } else {
      this.showNotification('No hay tinta invisible en esta página');
    }
  }

  /**
   * Descodificar cifra
   */
  onDecodeCipher() {
    const page = this.gameEngine.storyEngine.getPage(
      this.gameEngine.storyEngine.currentPage
    );

    if (page.hasCode && page.code) {
      const cipher = this.gameEngine.mysteriumEngine.decodeCipher(`cipher_${page.code.type}`);
      if (cipher) {
        this.showNotification(`🔐 Descodificado: ${cipher.decoded}`);
      }
    } else {
      this.showNotification('No hay códigos en esta página');
    }
  }

  /**
   * Examinar página
   */
  onExaminePage() {
    const status = this.gameEngine.mysteriumEngine.getStatus();
    const revelation = this.gameEngine.mysteriumEngine.checkForRevelation(
      this.gameEngine.storyEngine.currentPage
    );

    if (revelation) {
      this.showNotification(`🎭 REVELACIÓN: ${revelation.hint}`);
      this.gameEngine.bookRenderer.applyGlitchEffect(0.1);
    } else {
      this.showNotification(`Tensión: ${(status.tension * 100).toFixed(0)}% | Secretos revelados: ${status.revelationsCount}/${status.totalSecrets}`);
    }
  }

  /**
   * Manejar presión de teclas
   */
  handleKeypress(e) {
    if (e.key === 'Escape') {
      this.togglePause();
    } else if (e.key === 'ArrowLeft') {
      this.onPreviousPage();
    } else if (e.key === 'ArrowRight') {
      this.onNextPage();
    }
  }

  /**
   * Manejar atajos de teclado
   */
  handleShortcuts(e) {
    if (e.key === 'r' || e.key === 'R') {
      this.onRevealInvisible();
    } else if (e.key === 'd' || e.key === 'D') {
      this.onDecodeCipher();
    } else if (e.key === 'e' || e.key === 'E') {
      this.onExaminePage();
    }
  }

  /**
   * Manejar flip de página con clic de ratón
   */
  handlePageFlip(e) {
    if (e.target.id === '3d-canvas') {
      const x = e.clientX;
      const centerX = window.innerWidth / 2;

      if (x < centerX - 100) {
        this.onPreviousPage();
      } else if (x > centerX + 100) {
        this.onNextPage();
      }
    }
  }

  /**
   * Alternar pausa
   */
  togglePause() {
    const pauseMenu = document.getElementById('pause-menu');
    pauseMenu.classList.toggle('hidden');
  }

  /**
   * Mostrar notificación
   */
  showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
      notification.textContent = message;
      notification.style.display = 'block';

      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    }
  }

  /**
   * Actualizar información en pantalla
   */
  updateDisplay() {
    const status = this.gameEngine.storyEngine.getStatus();
    const page = this.gameEngine.storyEngine.getPage(status.currentPage);

    document.getElementById('current-page').textContent =
      `Página ${status.currentPage}/150`;
    document.getElementById('chapter-title').textContent =
      `Capítulo ${status.currentChapter}: ${page.title}`;

    // Actualizar atmósfera
    const atmosphereStatus = this.gameEngine.mysteriumEngine.getStatus();
    if (atmosphereStatus.tension > 0.7) {
      document.getElementById('main-container').classList.add('high-tension');
    } else {
      document.getElementById('main-container').classList.remove('high-tension');
    }

    // Aplicar efecto atmosférico
    const effect = this.gameEngine.mysteriumEngine.getAtmosphereEffect();
    this.gameEngine.bookRenderer.setAtmosphericDarkness(effect.vignette);

    if (effect.glitch > 0) {
      this.gameEngine.bookRenderer.applyGlitchEffect(effect.glitch);
    }
  }

  /**
   * Mostrar elecciones de rama narrativa
   */
  displayChoices(choices) {
    const container = document.getElementById('choices-container');
    if (!container) return;

    container.innerHTML = '';

    choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.textContent = choice.text;
      button.addEventListener('click', () => {
        this.gameEngine.storyEngine.recordChoice(
          this.gameEngine.storyEngine.currentPage,
          index
        );
        this.gameEngine.storyEngine.currentPage = choice.next;
        this.updateDisplay();
        this.displayChoices([]);
      });

      container.appendChild(button);
    });
  }

  /**
   * Guardar progreso
   */
  saveProgress() {
    const gameState = {
      currentPage: this.gameEngine.storyEngine.currentPage,
      currentChapter: this.gameEngine.storyEngine.currentChapter,
      playerChoices: this.gameEngine.storyEngine.playerChoices,
      revealed: Array.from(this.gameEngine.mysteriumEngine.revealed),
      timestamp: Date.now()
    };

    localStorage.setItem('oakhaven_save', JSON.stringify(gameState));
    this.showNotification('💾 Progreso guardado');
  }

  /**
   * Cargar progreso
   */
  loadProgress() {
    const save = localStorage.getItem('oakhaven_save');
    if (save) {
      const gameState = JSON.parse(save);
      this.gameEngine.storyEngine.currentPage = gameState.currentPage;
      this.gameEngine.storyEngine.currentChapter = gameState.currentChapter;
      this.gameEngine.storyEngine.playerChoices = gameState.playerChoices;
      this.gameEngine.mysteriumEngine.revealed = new Set(gameState.revealed);
      this.updateDisplay();
      return true;
    }
    return false;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UIControls;
}
