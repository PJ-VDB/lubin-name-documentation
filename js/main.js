// Main initialization
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Render all visualizations in parallel
    await Promise.all([
      renderTimeline(),
      renderNationalChart(),
      renderBelgiumChart(),
      renderFranceMap()
    ]);

    console.log('✓ All visualizations loaded successfully');
  } catch (error) {
    console.error('Error loading visualizations:', error);
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
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

// Render timeline from JSON
async function renderTimeline() {
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

      // Build citation HTML if citations exist
      let citationHtml = '';
      if (event.citation && event.citationRefs && Array.isArray(event.citationRefs)) {
        // Multiple citations like [4][5]
        citationHtml = event.citationRefs.map(ref =>
          `<a href="#${ref}" class="cite-link">[${ref.replace('ref', '')}]</a>`
        ).join('');
      } else if (event.citation && event.citationRef) {
        // Single citation like [3]
        citationHtml = `<a href="#${event.citationRef}" class="cite-link">${event.citation}</a>`;
      }

      item.innerHTML = `
        <div class="timeline-period">${escapeHtml(event.period)}</div>
        <div class="timeline-content">
          <h4>${escapeHtml(event.title)}</h4>
          <p>${escapeHtml(event.description)}${citationHtml ? '<sup>' + citationHtml + '</sup>' : ''}</p>
        </div>
      `;
      container.appendChild(item);
    });

    console.log(`✓ Timeline loaded: ${events.length} events`);
  } catch (error) {
    console.error('Error loading timeline:', error);
  }
}

// Utility function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Format number with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
