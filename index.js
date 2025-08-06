// Show current date
const dateElement = document.getElementById("date");
const today = new Date();
dateElement.textContent = `Today is: ${today.toDateString()}`;

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Greeting on load
window.onload = function() {
  alert("Welcome to my portfolio!");
}
