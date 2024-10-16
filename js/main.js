var lugares_totales = 60;
var nombre = "";
var ID = 0;
var precio = 0;
var tamaño = 0;
var descripcion = "";
var tot_art = 0;
var tot_precio = 0;

const formulario_carga = document.querySelector("#carga-form");

function daleGas() {
  ID = parseInt(document.getElementById("id_art").value);
  nombre = document.getElementById("nombre_art").value.toString;
  descripcion = document.getElementById("descripcion").value.toString;
  tot_art++;
  tot_precio += parseFloat(document.getElementById("precio_art").value);

  if (get_tamanio() === "pequeño") {
    lugares_totales - 1;
  } else {
    if (get_tamanio() === "mediano") {
      lugares_totales - 2;
    } else {
      lugares_totales - 3;
    }
  }

  mostrar_valores();
}

function get_tamanio() {
  return document.getElementById("lista_tamaño").toLowerCase.toString;
}

function sumar_precios(precio) {
  return (tot_precio += precio);
}

function mostrar_valores() {
  document.getElementById("p_ver_id").toString.textContent = ID;
  document.getElementById("p_ver_nombre").toString.textContent = nombre;
  document.getElementById("p_ver_des").toString.textContent = descripcion;
  document.getElementById("p_cant_items").toString.textContent = tot_art;
  document.getElementById("p_valor_items").toString.textContent = tot_precio;
  document.getElementById("p_lugares_rest").toString.textContent =
    lugares_totales;
}
