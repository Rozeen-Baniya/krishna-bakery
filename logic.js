const pagesIcon = document.getElementById('pages-icon');
const dropdown = document.getElementById('dropdown');

pagesIcon.addEventListener('click', () => {
  dropdown.classList.toggle('toggle-view'); 
});


const menuBar = document.getElementById('menu-bar');
const menuDropdown = document.getElementById('menu-dropdown');

menuBar.addEventListener('click', () => {
  menuDropdown.classList.toggle('toggle'); 
});