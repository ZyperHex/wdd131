// Current Year
const currentYear = new Date().getFullYear();

// Last Mod Date
const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;