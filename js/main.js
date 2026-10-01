/* =========================================================
   Kindly — main.js
   Shared logic used across all pages
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  renderStepper();
  initNavbarCollapseOnClick();
  initFeatureCards();
});

function highlightActiveNav() {
  const currentPage = document.body.getAttribute('data-page');
  document.querySelectorAll('.navlearn .nav-link[data-nav]').forEach(link => {
    if (link.getAttribute('data-nav') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initNavbarCollapseOnClick() {
  const navCollapse = document.getElementById('mainNav');
  if (!navCollapse) return;
  navCollapse.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });
}

/**
 * 4-step learning path: Material -> Example -> Quiz -> Result
 * Rendered as friendly emoji bubbles.
 */
function renderStepper() {
  const container = document.querySelector('.stepper-track');
  if (!container) return;

  const steps = [
    { key: 'material', label: 'Material', emoji: '' },
    { key: 'example',  label: 'Example',  emoji: '' },
    { key: 'quiz',     label: 'Quiz',     emoji: '' },
    { key: 'result',   label: 'Result',   emoji: '' }
  ];

  const currentKey = container.getAttribute('data-current');
  const currentIndex = steps.findIndex(s => s.key === currentKey);

  let html = '';
  steps.forEach((step, i) => {
    let stateClass = '';
    if (i < currentIndex) stateClass = 'done';
    else if (i === currentIndex) stateClass = 'current';

    const bubbleContent = i < currentIndex ? '' : step.emoji;

    html += `
      <a href="${step.key}.html" class="stepper-node ${stateClass}" style="text-decoration:none;">
        <div class="bubble">${bubbleContent}</div>
        <div class="label">${step.label}</div>
      </a>`;

    if (i < steps.length - 1) {
      html += `<div class="stepper-line ${i < currentIndex ? 'done' : ''}"></div>`;
    }
  });

  container.innerHTML = html;
}

function initFeatureCards() {
  document.querySelectorAll('.feature-card').forEach(card => {
    const head = card.querySelector('.chip-head');
    if (!head) return;
    head.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}
