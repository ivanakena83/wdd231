// fetch.js
export async function fetchClubs() {
  const container = document.getElementById('clubs-container');
  if (!container) return;

  try {
    const response = await fetch('data/clubs.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const clubs = await response.json();

    // Clear any placeholder
    container.innerHTML = '';

    // Use forEach (array method) to create cards – club name at the bottom
    clubs.forEach(club => {
      const card = document.createElement('div');
      card.classList.add('club-card');
      // Template literal – name placed at the bottom, just above button
      card.innerHTML = `
        <p><strong>Coach:</strong> ${club.coach}</p>
        <p><strong>League:</strong> ${club.league}</p>
        <p><strong>Members:</strong> ${club.members}</p>
        <h3>${club.name}</h3>
        <button class="details" data-club='${JSON.stringify(club)}'>Details</button>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Fetch error:', error);
    container.innerHTML = '<p>Sorry, clubs could not be loaded.</p>';
  }
}