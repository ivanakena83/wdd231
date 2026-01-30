const menuBtn = document.getElementById('menu');
const navList = document.querySelector('#nav ul');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});
