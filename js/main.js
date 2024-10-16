let lugares_totales = 60;
let nombre = "";
let id = 0;
let precio = 0;
let tamaño = 0;
let descripcion = "";
let tot_art = 0;
let tot_precio = 0;

/* const formulario_carga = document.querySelector("#carga-form"); */

document.getElementById("carga-form").addEventListener("submit", function(event){

    event.preventDefault();

  id = document.getElementById("id_art").value;
  nombre = document.getElementById("nombre_art").value;
  descripcion = document.getElementById("descripcion").value;
  tot_art++;
  tot_precio += parseFloat(document.getElementById("precio_art").value);

  calc_espacios(get_tamanio());
  mostrar_valores();

});

function get_tamanio() {
  return document.getElementById("lista_tamaño").value;
}

function calc_espacios(tamaño){
    if (tamaño === "s") {
        lugares_totales -= 1;
      } else {
        if (tamaño === "m") {
          lugares_totales -= 2;
        } else 
        if(tamaño === "g"){
          lugares_totales -= 3;
        }
    
      }
}

function sumar_precios(precio) {
  return (tot_precio += precio);
}

function mostrar_valores() {
  document.getElementById("p_ver_id").textContent = id;
  document.getElementById("p_ver_nombre").textContent = nombre;
  document.getElementById("p_ver_des").textContent = descripcion;
  document.getElementById("p_cant_items").textContent = tot_art;
  document.getElementById("p_valor_items").textContent = tot_precio;
  document.getElementById("p_lugares_rest").textContent = lugares_totales;
}
