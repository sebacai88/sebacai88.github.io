alert("Bienvenido al CV de Sebastian Diaz, uno de los mejores Licenciados de Higiene y Seguridad de Argentina")

alert("por favor, completá el formulario para una entrevista o presupuesto")

document.getElementById("enviar").onclick = function(){
    console.log("veo que pasa cuando hace click en enviar");
    document.getElementById("envio").innerHTML= "El formulario se envió correctamente"
    document.getElementById('envio').style.color="green"
    document.getElementById('envio').style.fontSize='35px'
}

document.getElementById("reset").onclick = function(){
    console.log("veo que pasa cuando hace click en reset");
    document.getElementById("envio").innerHTML= "COMPLETAR FORMULARIO"
    document.getElementById('envio').style.color="red"
    document.getElementById('envio').style.fontSize='10px'
}