alert("directory.js is running");

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("members");
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");

  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Fetch failed");

    const members = await response.json();

    members.forEach(member => {
      const card = document.createElement("section");
      card.className = "member-card";

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Website</a>
      `;

      container.appendChild(card);
    });

    gridBtn.onclick = () => {
      container.className = "member-container grid";
    };

    listBtn.onclick = () => {
      container.className = "member-container list";
    };

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p style='color:red'>Members failed to load.</p>";
  }
});
