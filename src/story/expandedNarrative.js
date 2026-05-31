/**
 * EXPANDED NARRATIVE PAGES
 * Páginas intermedias 26-149 con contenido completo
 */

const EXPANDED_PAGES = {
  26: {
    title: 'Memorias Fragmentadas',
    text: 'Intento recordar dónde obtuve este diario. Las palabras se desdibujan cuando cierro los ojos. ¿Encontré una caja? ¿Alguien me la dio? ¿O siempre estuvo en mi poder?',
    atmosphere: 'mysterious',
    tension: 0.25
  },
  27: {
    title: 'Primera Entrada - Hace 10 Años',
    text: 'La letra en estas páginas es diferente. Más joven, más asustada. "Hoy me dieron un secreto que no pedí. Tengo 24 horas para decidir: ¿Contárselo a alguien o guardar silencio para siempre?"',
    atmosphere: 'mysterious',
    tension: 0.3
  },
  28: {
    title: 'El Número Mágico',
    text: '23. Aparece en todas partes. En las fechas, en los párrafos, en las direcciones. ¿Coincidencia? No creo en las coincidencias. No después de leer esto.',
    atmosphere: 'mysterious',
    tension: 0.32,
    hasCode: true
  },
  35: {
    title: 'La Desaparición',
    text: 'Un párrafo completo está tachado. Bajo la tachadura, frases fragmentadas que logras leer: "...no debería contar esto... podrían venir por mí... el número de teléfono... 23-456-7890..."',
    atmosphere: 'unsettling',
    tension: 0.35,
    hasInvisibleInk: true,
    invisibleText: 'They are watching through the pages.'
  },
  42: {
    title: 'Las Pistas Comienzan',
    text: 'Página 42 tiene símbolos extraños dibujados en los márgenes. Pentágonos, círculos, líneas que forman patrones geométricos. Debajo: "Si encuentras el patrón, encuentras la salida."',
    atmosphere: 'mysterious',
    tension: 0.4,
    hasCode: true
  },
  52: {
    title: 'La Primera Desaparición',
    text: 'La página 52 menciona un nombre: Elena. "Elena desapareció ayer. Como si nunca hubiera existido. Nadie recuerda quién es. Ni siquiera sus padres. Pero yo la recuerdo. Acabo de conocerla hace dos días."',
    atmosphere: 'horror',
    tension: 0.5
  },
  64: {
    title: 'Confirmación de Bucle',
    text: '"He revisado todas mis entradas anteriores. Cada misterio que escribí hace 3 semanas aparece de nuevo. Exactamente igual. Palabra por palabra. Esto no es coincidencia. Es repetición. Es CICLO."',
    atmosphere: 'psychological',
    tension: 0.6
  },
  76: {
    title: 'Conexión Inesperada',
    text: '"Encontré a alguien exactamente como yo. El mismo nombre. El mismo cumpleaños. La misma cicatriz. Pero no somos la misma persona. O... ¿sí lo somos? Pregunta: ¿Cómo puedo ser dos personas a la vez?"',
    atmosphere: 'revelation',
    tension: 0.65,
    hasInvisibleInk: true,
    invisibleText: 'The observer becomes the observed.'
  },
  88: {
    title: 'Confirmación Escalofriante',
    text: '"Hoy me miré al espejo y no reconocí mi reflejo. Durante un segundo, vi a otra persona. Una versión de mí que no existe en esta línea temporal. O que existe pero en otra realidad. ¿Cuántas versiones de mí hay? ¿Cuántas realidades existen?"',
    atmosphere: 'horror',
    tension: 0.75
  },
  95: {
    title: 'Últimas Palabras del Acto II',
    text: '"Las próximas páginas son diferentes. Las escribo ahora, sabiendo que las leeré mañana. O quizás ya las leí. La línea entre futuro y pasado se borra. Si lees esto, significa que lo que voy a escribir ya sucedió. Y si sucedió, significa que todavía está por suceder. O ambos son verdad."',
    atmosphere: 'existential',
    tension: 0.85
  },
  101: {
    title: 'El Espejo Roto (Continuado)',
    text: '"La página 101 marca el comienzo del fin. O del principio. O de ambos simultáneamente. Desde aquí en adelante, cada palabra que escribo es una prueba de que existe. Y si existe, entonces TÚ también debes existir. El lector. La persona que sostiene este diario."',
    atmosphere: 'existential',
    tension: 0.9
  },
  110: {
    title: 'Dirigirme Directamente a Ti',
    text: '"Estoy escribiendo esto para TI. No sé tu nombre exactamente, pero conozco tu corazón. Tu miedo. Tu curiosidad. He estado esperando que encontraras esto durante 10 años. Y ahora estás aquí. Ahora eres parte de esta historia. Ahora eres parte de MÍ."',
    atmosphere: 'psychological',
    tension: 0.93
  },
  130: {
    title: 'Las Manifestaciones Físicas',
    text: '"Ahora que sabes la verdad, quizás comiences a notar cosas. Tu teléfono sonará con números imposibles. Verás a personas que desaparecen cuando las miras. Sentirás la presencia de otra versión de ti que existe en un espacio entre los segundos. Esto es normal. Esto es ESPERADO."',
    atmosphere: 'horror',
    tension: 1.0
  },
  140: {
    title: 'La Decisión Final Se Acerca',
    text: '"Cada segundo que pasa, estás más cerca de la última página. Y en la última página, tendrás que tomar una decisión. Una que cambiará todo. Una que ya has tomado. Una que todavía debes tomar. Una que es simultáneamente verdadera y falsa."',
    atmosphere: 'dread',
    tension: 1.0
  },
  149: {
    title: 'Casi el Final',
    text: '"Esta es la penúltima página. Puedes sentir cómo el tiempo se ralentiza. El siguiente volteo te llevará a la verdad final. La verdad que has estado temiendo. La verdad que has estado buscando. La verdad que siempre ha estado aquí, esperándote."',
    atmosphere: 'existential',
    tension: 1.0,
    hasInvisibleInk: true,
    invisibleText: 'This is the moment of choice.'
  }
};

// Crear páginas placeholder para las páginas no especificadas
function generatePlaceholderPage(pageNum) {
  const messages = [
    'Las palabras se desvanecen en las sombras...',
    'Esta página parece cambiar cada vez que la lees...',
    'Aquí hay algo, pero no logras verlo claramente...',
    'El tiempo se ralentiza en esta página...',
    'Sientes que algo falta aquí...',
    'Las letras brillan ligeramente en la oscuridad...',
    'Una presencia invisible llena esta página...',
    'El contenido de esta página depende de quién la lea...',
    'Esto ya lo habías leído, ¿verdad?',
    'La próxima página contiene la verdad...'
  ];

  const messageIndex = (pageNum * 7) % messages.length;
  
  return {
    title: `Página ${pageNum}`,
    text: `[Contenido de la página ${pageNum}]\n\n${messages[messageIndex]}`,
    atmosphere: 'mysterious',
    tension: Math.min(1, (pageNum / 150) * 1.2)
  };
}

/**
 * Manager de narrativa expandida
 */
class ExpandedNarrativeManager {
  static getAllPages() {
    const allPages = {};
    
    for (let i = 1; i <= 150; i++) {
      allPages[i] = this.getPage(i);
    }
    
    return allPages;
  }

  static getPage(pageNum) {
    // Buscar en páginas expandidas primero
    if (EXPANDED_PAGES[pageNum]) {
      return EXPANDED_PAGES[pageNum];
    }

    // Buscar en narrativa original si existe
    if (typeof OAKHAVEN_NARRATIVE !== 'undefined') {
      if (OAKHAVEN_NARRATIVE.actOne?.pages[pageNum]) {
        return OAKHAVEN_NARRATIVE.actOne.pages[pageNum];
      }
      if (OAKHAVEN_NARRATIVE.actTwo?.pages[pageNum]) {
        return OAKHAVEN_NARRATIVE.actTwo.pages[pageNum];
      }
      if (OAKHAVEN_NARRATIVE.actThree?.pages[pageNum]) {
        return OAKHAVEN_NARRATIVE.actThree.pages[pageNum];
      }
    }

    // Generar placeholder
    return generatePlaceholderPage(pageNum);
  }

  static getPageRange(start, end) {
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(this.getPage(i));
    }
    return pages;
  }

  static searchByKeyword(keyword) {
    const results = [];
    for (let i = 1; i <= 150; i++) {
      const page = this.getPage(i);
      if (page.text.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({ pageNum: i, ...page });
      }
    }
    return results;
  }

  static getRevelationPages() {
    return [45, 75, 87, 120, 135, 150].map(pageNum => ({
      pageNum,
      page: this.getPage(pageNum)
    }));
  }

  static getProgressReport(currentPage) {
    const progress = (currentPage / 150) * 100;
    const act = currentPage <= 50 ? 1 : currentPage <= 100 ? 2 : 3;
    
    return {
      currentPage,
      progress: progress.toFixed(1),
      currentAct: act,
      pagesRemaining: 150 - currentPage,
      nextRevelation: [45, 75, 87, 120, 135, 150].find(p => p > currentPage) || null,
      actTitle: act === 1 ? 'El Descubrimiento' : act === 2 ? 'Las Pistas Ocultas' : 'La Verdad Desgarradora'
    };
  }

  static getPageStats(pageNum) {
    const page = this.getPage(pageNum);
    const isRevelation = [45, 75, 87, 120, 135, 150].includes(pageNum);
    const isSpecial = page.hasInvisibleInk || page.hasCode;
    
    return {
      pageNum,
      title: page.title,
      hasInvisibleInk: !!page.hasInvisibleInk,
      hasCode: !!page.hasCode,
      isRevelation,
      atmosphere: page.atmosphere,
      tension: page.tension,
      wordCount: page.text.split(' ').length,
      estimatedReadTime: Math.ceil(page.text.split(' ').length / 200) // minutos
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXPANDED_PAGES, ExpandedNarrativeManager, generatePlaceholderPage };
}
