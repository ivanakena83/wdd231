import { places } from "../data/discover.mjs";

const container = document.querySelector("#discoverCards");

// BUILD CARDS
places.forEach((place, index) => {
  const card = document.createElement("article");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>

    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
    </figure>

    <address>${place.address}</address>

    <p>${place.description}</p>

    <button>Learn More</button>
  `;

  container.appendChild(card);
});


// LOCAL STORAGE MESSAGE

const messageBox = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageBox.textContent = "You last visited 1 day ago.";
  } else {
    messageBox.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);