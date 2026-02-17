// main.js
import { fetchClubs } from './fetch.js';
import { setupModal } from './modal.js';
import { initStorage } from './storage.js';

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu toggle
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Load clubs on clubs page
if (document.getElementById('clubs-container')) {
  fetchClubs();
}

// Initialize modal
setupModal();

// Initialize local storage (last visit message)
initStorage();