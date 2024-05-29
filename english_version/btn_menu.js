
/*
document.addEventListener("DOMContentLoaded", function() {
    const menu_btn = document.getElementById("menu_hamburguesa");
    const menu_list = document.getElementById("lista");

    

    menu_btn.addEventListener("click", function() {
        toggle(menu_list, "active");
    });

    function toggle(element, className = "active") {
        element.classList.toggle(className);
    }
})*/
function menu(){
    document.getElementById("lista").style.display="flex"
    document.getElementById("menu_hamburguesa").style.display="none"
    console.log("funcion menu funcionando")
}
function close(){
    document.getElementById("lista").style.display="none"
    console.log("funcion close funcionando")
}