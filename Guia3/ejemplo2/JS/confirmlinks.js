//Iniciando el manejador para los enlaces de la pagina.
window.onload = confirmAllLinks;

//Controlador de eventos para elementos de enlace y area en mapas.
//Utiliza la palabra clave this para hacer referencia al alemento
//del documento y puede devolver false para evitar que el navegador vaya al vinculo.
function confirmLinks(){
    return confirm("¿Está seguro que quiere visitar el sitio: " + this.href + "?");
}
//Recorrer todos los enlaces (Hipervinculos) del documento y asignar
//la función confirmLink a cada uno como controlador de evento.
function confirmAllLinks(){
    for(var i=0; i<document.links.length; i++){
        document.links[i].onclick = confirmLink;
    }
}