const nav = document.querySelector("#lista_contenedor")
const abrir = document.querySelector("#menu_hamburguesa")

abrir.addEventListener("click", () => {
    lista_contenedor.classList.add("visible")
})