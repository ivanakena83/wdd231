// modal.js
export function setupModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close');
  const modalInfo = document.getElementById('modal-info');

  if (!modal || !closeBtn || !modalInfo) return;

  // Event delegation for dynamically added buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('details')) {
      e.preventDefault();
      const clubData = e.target.getAttribute('data-club');
      if (clubData) {
        const club = JSON.parse(clubData);
        modalInfo.textContent = `${club.name} – Coach: ${club.coach}, League: ${club.league}, Members: ${club.members}`;
      } else {
        modalInfo.textContent = 'Club details coming soon.';
      }
      modal.style.display = 'block';
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}