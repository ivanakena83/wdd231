// fetch.js
export async function fetchClubs() {
  const container = document.getElementById('clubs-container');
  if (!container) {
    console.error('Error: #clubs-container not found in the HTML.');
    return;
  }

  try {
    const response = await fetch('data/clubs.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    const clubs = await response.json();

    // Clear any placeholder
    container.innerHTML = '';

    clubs.forEach(club => {
      const card = document.createElement('div');
      card.classList.add('club-card');
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
    container.innerHTML = `<p style="color: red; text-align: center;">
      <strong>Error loading clubs:</strong> ${error.message}<br>
      Make sure you're using a local server (Live Server) and the JSON file is in data/clubs.json.
    </p>`;
  }
}