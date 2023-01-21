const switch_button = document.getElementById("bouton_burger");
const menu = document.getElementById("menu_invisible");


function aanimation(){
    if (menu.classList.contains("open")){
        menu.classList.remove("open");
        menu.style.display = "none";
    }else{
        menu.classList.add("open");
        menu.style.display = "block";
    }
}
// switch_button.addEventListener("click", aanimation);


// ZONE DE TEST

function apparition(){
    menu.classList.toggle('show');
}
switch_button.addEventListener("click", apparition);