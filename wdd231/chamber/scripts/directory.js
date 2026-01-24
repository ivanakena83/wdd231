const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

// Navigation toggle
menuButton.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Fetch members
async function getMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    membersContainer.appendChild(card);
  });
}

// Grid/List toggle
gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();

