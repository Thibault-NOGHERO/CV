const switch_button = document.getElementById("bouton_burger");
const menu = document.getElementById("menu_invisible");
var body = document.body;
var dernier_element = document.getElementById("mise_menu_burger");
var div_element_a_deplacer = document.getElementById("div_element_a_deplacer");
var competence_come_here = document.getElementById("competence_come_here");

// APPARITION MENU PLUS
function apparition(){
    menu.classList.toggle('show');
}
switch_button.addEventListener("click", apparition);

// competence va dans plus si largeur trop petite
window.addEventListener("resize", function(){
    if(window.matchMedia("(max-width: 1650px)").matches){
        div_element_a_deplacer.removeChild(dernier_element);
        competence_come_here.appendChild(dernier_element);
    }else{
        // body.style.background = "";
        competence_come_here.removeChild(dernier_element);
        div_element_a_deplacer.appendChild(dernier_element);
    }
});
competence_come_here.appendChild(dernier_element);


// ZONE DE TEST

