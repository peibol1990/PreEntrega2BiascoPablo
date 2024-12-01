let items = new Array();
const url_db = "../js/db.json"; 
let container = document.querySelector("#cont_mark");

document.addEventListener("DOMContentLoaded",() =>{

    loader = new GestionarDatos();
    loader.cargar();
})