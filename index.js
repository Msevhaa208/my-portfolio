// Display today's date
const dateElement = document.getElementById("date");
const today = new Date();
dateElement.textContent = `Today is: ${today.toDateString()}`;

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Greeting alert on load
window.onload = () => {
  alert("Welcome to my multimedia & web development portfolio!");
};

