const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const darkTheme = 'dark';
const lightTheme = 'light';

// Image Mode: Dark or Light
function imageMode(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Toggle Dark & Light Mode
function toggleDarkLightMode(theme) {
  nav.style.backgroundColor =
    theme === darkTheme ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor =
    theme === darkTheme ? 'rgb(255 255 255 /50%)' : 'rgb(0 0 0 /50%)';
  // console.log(toggleIcon.children);
  toggleIcon.children[0].textContent =
    theme === darkTheme ? 'Dark Mode' : 'Light Mode';
  theme === darkTheme
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  // Image Mode: Dark
  theme === darkTheme ? imageMode('dark') : imageMode('light');
}

// Switch theme dynamically
function switchTheme(event) {
  // console.log(event.target.checked); // Display checked status
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode('light');
  }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode('dark');
  }
}
