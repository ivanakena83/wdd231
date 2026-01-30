const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

// Fetch members from JSON
async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    membersContainer.innerHTML = '<p>Error loading members.</p>';
    console.error(error);
  }
}

// Display members in grid by default
function displayMembers(members) {
  membersContainer.innerHTML = '';
  members.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.className = 'member-card';

    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(memberCard);
  });
}

// Grid view
gridBtn.addEventListener('click', () => {
  membersContainer.className = 'grid';
});

// List view
listBtn.addEventListener('click', () => {
  membersContainer.className = 'list';
});

loadMembers();
