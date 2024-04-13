// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Toggle button text
    const modeToggle = document.getElementById("mode-toggle");
    if (body.classList.contains("dark-mode")) {
        modeToggle.textContent = "Light Mode";
    } else {
        modeToggle.textContent = "Dark Mode";
    }
}
function myFunction() {
        window.location.href="https://youtu.be/PgAZ8KzfhO8?feature=shared";
      }

// Event listener for the mode toggle button
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", toggleDarkMode);
