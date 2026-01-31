const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

async function loadMembers() {
  try {
    // Fetch members.json from data folder
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch members.json');

    const members = await response.json();

    displayMembers(members, 'grid');

    // Toggle grid/list
    gridBtn.addEventListener('click', () => displayMembers(members, 'grid'));
    listBtn.addEventListener('click', () => displayMembers(members, 'list'));
  } catch (error) {
    console.error(error);
    membersContainer.innerHTML = `<p style="color:red">Failed to load members.</p>`;
  }
}

function displayMembers(members, viewType) {
  membersContainer.innerHTML = '';
  membersContainer.className = `member-container ${viewType}`;

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';

    // Badge color
    let badgeClass = '';
    let badgeText = '';
    if (member.level === 3) { badgeClass='gold'; badgeText='Gold'; }
    else if (member.level === 2) { badgeClass='silver'; badgeText='Silver'; }
    else { badgeClass='member'; badgeText='Member'; }

    card.innerHTML = `
      <div class="badge ${badgeClass}">${badgeText}</div>
      <img src="images/${member.image}" alt="${member.name}">
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      </div>
    `;
    membersContainer.appendChild(card);
  });
}

// Load on page load
loadMembers();
