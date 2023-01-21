const switch_button = document.getElementById("bouton_burger");
const menu = document.getElementById("menu_invisible");

// APPARITION MENU PLUS
function apparition(){
    menu.classList.toggle('show');
}
switch_button.addEventListener("click", apparition);

// ZONE DE TEST
