const themeToggle = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const toggleIcon = document.getElementById('toggle-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeText.textContent = 'Light Mode';
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); /* Uses the Toggle native keyword to
  add and remove the dark theme to the class list of Body. when it does this, all
  the CSS styles from "dark theme" are applied to the css and applied to the page*/
  
  // Update text content
  if (document.body.classList.contains('dark-theme')) {
    themeText.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeText.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
  
  // Add a nice animation effect
  themeToggle.classList.add('clicked');
  setTimeout(() => {
    themeToggle.classList.remove('clicked');
  }, 300);
});