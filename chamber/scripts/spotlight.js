async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const qualified = members.filter(m => m.level >= 2);
  qualified.sort(() => 0.5 - Math.random());

  const spotlights = qualified.slice(0, 3);
  const container = document.getElementById("spotlights");

  spotlights.forEach(member => {
    const card = document.createElement("section");
    card.className = "member-card";

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><strong>${member.level === 3 ? "Gold" : "Silver"} Member</strong></p>
    `;

    container.appendChild(card);
  });
}

loadSpotlights();
