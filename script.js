const dropdownBtn = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu-content");
dropdownBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("visible");
})