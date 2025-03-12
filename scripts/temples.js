// Current Year
const currentYear = new Date().getFullYear();

// Last Mod Date
const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

// Hamburger Menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    if (mainNav.classList.contains("open")) {
        hamburgerBtn.textContent = "✖"; 
    } else {
        hamburgerBtn.textContent = "☰"; 
    }
});