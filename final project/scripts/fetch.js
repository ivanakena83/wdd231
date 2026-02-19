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

    // Placeholder image data URI (gray square) – replace with actual images if available
    const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E";

    clubs.forEach(club => {
      const card = document.createElement('div');
      card.classList.add('club-card');
      // Use club.image if it exists and is not empty, otherwise placeholder
      const imageSrc = club.image && club.image.trim() !== '' ? club.image : placeholderImage;
      card.innerHTML = `
        <img src="${imageSrc}" alt="${club.name} logo" class="club-image" loading="lazy">
        <div class="club-info">
          <h3>${club.name}</h3>
          <p><strong>Coach:</strong> ${club.coach}</p>
          <p><strong>League:</strong> ${club.league}</p>
          <p><strong>Members:</strong> ${club.members}</p>
          <button class="details" data-club='${JSON.stringify(club)}'>Details</button>
        </div>
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