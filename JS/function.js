//menu lateral
var menu_visible = "false";
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible=="false"){//si esta oculto
      menu_visible = "true";  
      menu.style.display ="block";
        
    }
   else{

 
    menu_visible = "false";
    menu.style.display ="none";

    }
}

//oculto el menu una vez que selecciono la opción
//let links = document.querySelectorAll("nav a");
//for(var x = 0; x <links.length;x++){
//  links[x].onclick = function (){
//    menu.style.display ="none";
//    menu_visible = false;
//  }
//}
