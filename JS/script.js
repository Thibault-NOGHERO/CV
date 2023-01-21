const switch_button = document.getElementById("bouton_burger");
const menu = document.getElementById("menu_invisible");

function menu_switch(){
    if (menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none"
    }
}

switch_button.addEventListener("click", menu_switch);





