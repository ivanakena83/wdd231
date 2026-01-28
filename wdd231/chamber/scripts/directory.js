const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const section = document.createElement("section");
    section.classList.add("member");

    section.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Membership Level: ${member.membership}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(section);
  });
}

gridButton.addEventListener("click", () => {
  membersContainer.className = "grid";
});

listButton.addEventListener("click", () => {
  membersContainer.className = "list";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

getMembers();
