let lugares_totales = 60;
let tot_art = 0;
let tot_precio = 0;
const clave_articulos = "listaArticulos";


class ArticuloInv {
  constructor(codigo, nombre, precio, tamanio, descripcion) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
    this._tamanio = tamanio;
    this._descripcion = descripcion;
  }

  get codigo() {
    return this._codigo;
  }
  set codigo(n_codigo) {
    this._codigo = n_codigo;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(n_nombre) {
    this._nombre = n_nombre;
  }

  get precio() {
    return this._precio;
  }
  set precio(n_precio) {
    this._precio = n_precio;
  }

  get tamanio() {
    return this._tamanio;
  }
  set tamanio(n_tamanio) {
    this._tamanio = n_tamanio;
  }

  get descripcion() {
    return this._descripcion;
  }
  set descripcion(n_descripcion) {
    this._descripcion = n_descripcion;
  }
}

let visor = document.getElementById("visor");

document.getElementById("carga-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let codigo = document.getElementById("cod_art").value;
    let nombre = document.getElementById("nombre_art").value.toUpperCase();
    let precio = parseInt(document.getElementById("precio_art").value);
    let tamanio = document.getElementById("lista_tamaño").value;
    let descripcion = document.getElementById("descripcion").value;

    const articulo = new ArticuloInv(codigo,nombre,precio,tamanio,descripcion);

    articulos_inventario.push(articulo); 

    guardar_array_local(clave_articulos, articulos_inventario);

    calc_espacios(articulo.tamanio);
    mostrar_valores(tot_art);

    tot_art++;    

  });


  
  function guardar_en_local_ind(clave, articulo){
    
    localStorage.setItem(articulo.codigo,JSON.stringify(articulo));
  }
  
  function guardar_array_local(clave, articulos){

    localStorage.setItem(clave,JSON.stringify(articulos));

  }

function calc_espacios(tamanio) {
  if (tamanio === "s") {
    lugares_totales -= 1;
  } else {
    if (tamanio === "m") {
      lugares_totales -= 2;
    } else if (tamanio === "g") {
      lugares_totales -= 3;
    }
  }
}

function mostrar_valores(cont) {

  document.getElementById("p_ver_id").textContent =
    articulos_inventario[cont].codigo;
  document.getElementById("p_ver_nombre").textContent =
    articulos_inventario[cont].nombre;
  document.getElementById("p_ver_des").textContent =
    articulos_inventario[cont].descripcion;
  document.getElementById("p_cant_items").textContent = tot_art + 1;
  document.getElementById("p_valor_items").textContent = sumar_precios(
    parseInt(articulos_inventario[cont].precio)
  );
  document.getElementById("p_lugares_rest").textContent = lugares_totales;
}

function sumar_precios(precio) {
  return (tot_precio += precio);
}

document
  .getElementById("btn_aceptar").addEventListener("click", function () {

    limpiar_visor();
    
    validar_buscador();
  });

function validar_buscador() {
  const ch_cod = document.getElementById("ch_codigo");
  const ch_nom = document.getElementById("ch_nombre");
  const palabra_clave = document.getElementById("clave_buscador").value.toUpperCase();

  console.log(palabra_clave);

  if (palabra_clave === "") {
    alert("Ingrese lo que desea buscar");
  }
  if (!ch_cod.checked & !ch_nom.checked) {
    alert("Seleccione algún criterio de busqueda");
  }
  if (ch_cod.checked & ch_nom.checked) {
    alert("Seleccione solo un criterio de busqueda");
    ch_cod.checked = false;
    ch_nom.checked = false;
  }
  if (ch_cod.checked) {
    buscador_por_codigo(palabra_clave);
  }
  if (ch_nom.checked) {
    buscador_por_nombre(palabra_clave);  
  }

  
}

  function buscador_por_codigo(clave) { 
  
    const res_bus = genArraydLocal().find(articulo => articulo.codigo == clave); 
    
    if (res_bus) {
      cargar_datos(res_bus.codigo, res_bus.nombre, res_bus.precio, res_bus.tamanio, res_bus.descripcion);
    } else {
      alert("Artículo no encontrado");
    }
  }
  

  function buscador_por_nombre(clave) { 
  
    const res_bus = genArraydLocal().find(articulo => articulo.nombre == clave); 
    
    if (res_bus) {
      cargar_datos(res_bus.codigo, res_bus.nombre, res_bus.precio, res_bus.tamanio, res_bus.descripcion);
    } else {
      alert("Artículo no encontrado");
    }
  }



  function genArraydLocal(){

    const art_mem_local = JSON.parse(localStorage.getItem(clave_articulos));
    
    const articulos_alm = art_mem_local.map(articulo => 
      new ArticuloInv(articulo._codigo, articulo._nombre, articulo._precio, articulo._tamanio, articulo._descripcion)
    );

    return articulos_alm;

  }


  function cargar_datos(codigo,nombre,precio,tamanio,descripcion) {                

     let contenedor = document.getElementById("visor");

     let art_mostrar = document.createElement("div");

  art_mostrar.innerHTML =  `
  <p>ID:${codigo}</p>
  <p>Nombre: ${nombre}</p>
  <p>Precio: ${precio}</p>
  <p>Tamaño: ${tamanio}</p>
  <p>Descripción: ${descripcion}</p>                                      
  <hr>
`;

  contenedor.appendChild(art_mostrar);

  }

  function limpiar_visor(){

     document.getElementById("visor").innerHTML = "";

  }

  



