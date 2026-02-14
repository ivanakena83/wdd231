const memberDirectory = document.getElementById('member-directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    memberDirectory.innerHTML = '<p>Failed to load members. Please try again later.</p>';
    console.error(error);
  }
}

function displayMembers(members) {
  memberDirectory.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('community-box', 'member-card');

    let levelText = '';
    switch(member.level) {
      case 1: levelText = 'Member'; break;
      case 2: levelText = 'Silver'; break;
      case 3: levelText = 'Gold'; break;
    }

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership:</strong> ${levelText}</p>
    `;
    memberDirectory.appendChild(card);
  });
}

// Toggle Grid/List view
gridBtn.addEventListener('click', () => {
  memberDirectory.classList.remove('list-view');
  memberDirectory.classList.add('community-grid');
});

listBtn.addEventListener('click', () => {
  memberDirectory.classList.remove('community-grid');
  memberDirectory.classList.add('list-view');
});

// Initialize
fetchMembers();