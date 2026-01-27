// members.js
document.addEventListener('DOMContentLoaded', async () => {

    const container = document.getElementById('members-container');
    const gridBtn = document.getElementById('gridBtn');
    const listBtn = document.getElementById('listBtn');

    // Fetch JSON data
    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data;
    }

    function renderMembers(members, view = 'grid') {
        container.innerHTML = '';
        container.className = view + '-view';
        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');

            if(view === 'grid') {
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Website</a></p>
                    <p>Membership Level: ${member.membership}</p>
                `;
            } else {
                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address} | ${member.phone} | <a href="${member.website}" target="_blank">Website</a> | Level: ${member.membership}</p>
                `;
            }

            container.appendChild(card);
        });
    }

    const members = await fetchMembers();
    renderMembers(members);

    gridBtn.addEventListener('click', () => renderMembers(members, 'grid'));
    listBtn.addEventListener('click', () => renderMembers(members, 'list'));
});
