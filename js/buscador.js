document.getElementById("btn_aceptar").addEventListener("click", function(event){

    alert("Se presiono el boton aceptar");

    const p_clave = document.getElementById("clave_buscador").value.toUpperCase(); 

    alert(p_clave);

    const res_buscar = articulos_inventario.find((articulo) => articulo.codigo == p_clave); 

    alert(res_buscar); 

   buscador_por_param(p_clave,validar_buscador());
  
  });  
  

function validar_buscador(){     
  
    const ch_cod = document.getElementById("ch_codigo");
    const ch_nom = document.getElementById("ch_nombre");
    const palabra_clave =document.getElementById("clave_buscador").value;



    if(palabra_clave === ""){
        alert("Ingrese lo que desea buscar");
    }if(!ch_cod.checked & !ch_nom.checked){
        alert("Seleccione algún criterio de busqueda"); 
    }if(ch_cod.checked & ch_nom.checked){
        alert("Seleccione solo un criterio de busqueda"); 
        ch_cod.checked = false;
        ch_nom.checked = false;   
    }if(ch_cod.checked){
        return ch_cod.value; 
    }if(ch_nom.checked){
        return ch_nom.value;
    }

}

function buscador_por_param(clave,propiedad){
    
    if(propiedad == "codigo"){
        const res_busqueda = articulos_inventario.find((art) => art.codigo === clave);
    }
    
    

    alert(alerta); 

    /* const res_busqueda= articulos_inventario.find((articulo) => articulo.nombre === clave );

    alert(res_busqueda);  */
    
}
