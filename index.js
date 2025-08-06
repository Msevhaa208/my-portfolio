const dateElement = document.getElementById("date");
const customDate = new Date("2025-07-28");
dateElement.textContent = `Date: ${customDate.toDateString()}`;

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}


window.onload = () => {
  alert("Welcome to my multimedia & web development portfolio!");
};


