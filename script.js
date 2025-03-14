// Funcție pentru toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
}

// Adaugă event listener pe buton
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);