// storage.js
export function initStorage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  const messageEl = document.getElementById('visit-message');

  if (messageEl) {
    if (!lastVisit) {
      messageEl.textContent = 'Welcome to KFCA! Let us know if you have any questions.';
    } else {
      const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
      if (days < 1) {
        messageEl.textContent = 'Back so soon! Awesome!';
      } else if (days === 1) {
        messageEl.textContent = 'You last visited 1 day ago.';
      } else {
        messageEl.textContent = `You last visited ${days} days ago.`;
      }
    }
  }

  // Save current visit
  localStorage.setItem('lastVisit', now.toString());

  // Optional: store a user preference (e.g., theme)
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }
}