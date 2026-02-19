// main.js
import { fetchClubs } from './fetch.js';
import { setupModal } from './modal.js';
import { initStorage } from './storage.js';

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Load clubs on clubs page
if (document.getElementById('clubs-container')) {
  fetchClubs();
}

// Initialize modal
setupModal();

// Initialize local storage (last visit message)
initStorage();