// Current language — shared with chart/map files via window.currentLang
window.currentLang = localStorage.getItem('lang') || 'da';

function t(key) {
  return (translations[window.currentLang] && translations[window.currentLang][key]) || key;
}

function applyStaticTranslations(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = translations[lang][el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = translations[lang][el.dataset.i18nAria];
    if (val !== undefined) el.setAttribute('aria-label', val);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `lang-${lang}`);
  });

  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', isOpen ? translations[lang]['nav.close'] : translations[lang]['nav.open']);
  }
}

function applyLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem('lang', lang);
  applyStaticTranslations(lang);

  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = '';
    renderTimeline(lang);
  }

  updateNationalChart();
  updateBelgiumChart();
}

// Main initialization
document.addEventListener('DOMContentLoaded', async () => {
  // Apply translations to static content immediately — no English flash
  applyStaticTranslations(window.currentLang);

  try {
    // Charts and timeline render using window.currentLang from the start
    await Promise.all([
      renderTimeline(window.currentLang),
      renderNationalChart(),
      renderBelgiumChart(),
      renderFranceMap()
    ]);

    console.log('✓ All visualizations loaded successfully');
  } catch (error) {
    console.error('Error loading visualizations:', error);
  }

  // Language toggle buttons
  document.getElementById('lang-en').addEventListener('click', () => applyLanguage('en'));
  document.getElementById('lang-da').addEventListener('click', () => applyLanguage('da'));

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? t('nav.close') : t('nav.open'));
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', t('nav.open'));
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Render timeline from JSON, language-aware
async function renderTimeline(lang) {
  try {
    const response = await fetch('data/timeline-events.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const events = await response.json();
    const container = document.getElementById('timeline-container');

    if (!container) {
      console.error('Timeline container not found');
      return;
    }

    events.forEach(event => {
      const item = document.createElement('div');
      item.className = 'timeline-item';

      const title = (lang === 'da' && event.da_title) ? event.da_title : event.title;
      const description = (lang === 'da' && event.da_description) ? event.da_description : event.description;

      let citationHtml = '';
      if (event.citation && event.citationRefs && Array.isArray(event.citationRefs)) {
        citationHtml = event.citationRefs.map(ref =>
          `<a href="#${ref}" class="cite-link">[${ref.replace('ref', '')}]</a>`
        ).join('');
      } else if (event.citation && event.citationRef) {
        citationHtml = `<a href="#${event.citationRef}" class="cite-link">${event.citation}</a>`;
      }

      item.innerHTML = `
        <div class="timeline-period">${escapeHtml(event.period)}</div>
        <div class="timeline-content">
          <h4>${escapeHtml(title)}</h4>
          <p>${escapeHtml(description)}${citationHtml ? '<sup>' + citationHtml + '</sup>' : ''}</p>
        </div>
      `;
      container.appendChild(item);
    });

    console.log(`✓ Timeline loaded: ${events.length} events`);
  } catch (error) {
    console.error('Error loading timeline:', error);
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
