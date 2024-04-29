const nav = document.querySelector("#lista_contenedor")
const abrir = document.querySelector("#menu_hamburguesa")
const cerrar = document.querySelector("cerrar")

abrir.addEventListener("click", () => {
    lista_contenedor.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    lista_contendor.classList.add("hide")
})
