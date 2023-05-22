document.getElementById("alerta_rut").style.display="none";
document.getElementById("alerta_nombre_min").style.display="none";
document.getElementById("alerta_nombre_max").style.display="none";
document.getElementById("alerta_apellido_min").style.display="none";
document.getElementById("alerta_apellido_max").style.display="none";
document.getElementById("alerta_email").style.display="none";
document.getElementById("notview_pass").style.display="none";
document.getElementById("alerta_password").style.display="none";
document.getElementById("alerta_dire_min").style.display="none";
document.getElementById("alerta_dire_max").style.display="none";
document.getElementById("alerta_city_min").style.display="none";
document.getElementById("alerta_city_max").style.display="none";
document.getElementById("alerta_genero").style.display="none";
document.getElementById("alerta_nacimiento").style.display="none";
document.getElementById("alerta_nacimiento").style.display="none";





function validarFormulary() {
    let rut = document.getElementById("idRut").value;
    let nombre = document.getElementById("idNombre").value;
    let apellido = document.getElementById("idApellido").value;
    let email = document.getElementById("idEmail").value;
    let password = document.getElementById("contra").value;
    let direccion = document.getElementById("idDireccion").value;
    let ciudad = document.getElementById("idCiudad").value;
    let masculino = document.getElementById("masculino").value;
    let femenino = document.getElementById("femenino").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  
 

  



    //Validación Rut
    if (rut.trim().length == 0){
        document.getElementById("alerta_rut").style.display = "inline";
        document.getElementById("idRut").classList.add("is-invalid");
    }
    else{
        document.getElementById("alerta_rut").style.display = "none";
        document.getElementById("idRut").classList.remove("is-invalid");
        document.getElementById("idRut").classList.add("is-valid");
    }



    //Validacion nombre

    if (nombre.trim().length == 0){
        document.getElementById("alerta_nombre_min").style.display = "inline";
        document.getElementById("alerta_nombre_max").style.display = "none";
        document.getElementById("idNombre").classList.add("is-invalid");
    }
    else if(nombre.trim().length > 30){
        document.getElementById("alerta_nombre_max").style.display = "inline";
        document.getElementById("alerta_nombre_min").style.display = "none";
        document.getElementById("idNombre").classList.add("is-invalid");
    }
    else{
        document.getElementById("alerta_nombre_min").style.display = "none";
        document.getElementById("alerta_nombre_max").style.display = "none";
        document.getElementById("idNombre").classList.remove("is-invalid");
        document.getElementById("idNombre").classList.add("is-valid");
    }

        //Validación Apellido
        if (apellido.trim().length == 0){
            document.getElementById("alerta_apellido_min").style.display = "inline";
            document.getElementById("alerta_apellido_max").style.display = "none";
            document.getElementById("idApellido").classList.add("is-invalid");
        }
        else if(apellido.trim().length > 30){
            document.getElementById("alerta_apellido_max").style.display = "inline";
            document.getElementById("alerta_apellido_min").style.display = "none";
            document.getElementById("idApellido").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_apellido_min").style.display = "none";
            document.getElementById("alerta_apellido_max").style.display = "none";
            document.getElementById("idApellido").classList.remove("is-invalid");
            document.getElementById("idApellido").classList.add("is-valid");
        }

        //Validacion EMAIL
        let rgEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (rgEmail.test(email) == false){  
            document.getElementById("alerta_email").style.display = "inline";
            document.getElementById("idEmail").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_email").style.display = "none";
            document.getElementById("idEmail").classList.remove("is-invalid");
            document.getElementById("idEmail").classList.add("is-valid");
        }
        //Validacion PASSWORD
        let rgPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{9,14}$/;
        if(rgPass.test(password) == false){
            document.getElementById("alerta_password").style.display = "inline";
            document.getElementById("contra").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_password").style.display = "none";
            document.getElementById("contra").classList.remove("is-invalid");
            document.getElementById("contra").classList.add("is-valid");
        }

        //Validar Direccion
        if (direccion.trim().length == 0){
            document.getElementById("alerta_dire_min").style.display= "inline";
            document.getElementById("alerta_dire_max").style.display= "none";
            document.getElementById("idDireccion").classList.add("is-invalid");
        }
        else if(direccion.trim().length > 30){
            document.getElementById("alerta_dire_max").style.display="inline";
            document.getElementById("alerta_dire_min").style.display="none";
            document.getElementById("idDireccion").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_dire_min").style.display="none";
            document.getElementById("alerta_dire_max").style.display="none";
            document.getElementById("idDireccion").classList.remove("is-invalid");
            document.getElementById("idDireccion").classList.add("is-valid");

        }

                //Validar Direccion
        if (direccion.trim().length == 0){
            document.getElementById("alerta_dire_min").style.display= "inline";
            document.getElementById("alerta_dire_max").style.display= "none";
            document.getElementById("idDireccion").classList.add("is-invalid");
        }
        else if(direccion.trim().length > 30){
            document.getElementById("alerta_dire_max").style.display="inline";
            document.getElementById("alerta_dire_min").style.display="none";
            document.getElementById("idDireccion").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_dire_min").style.display="none";
            document.getElementById("alerta_dire_max").style.display="none";
            document.getElementById("idDireccion").classList.remove("is-invalid");
            document.getElementById("idDireccion").classList.add("is-valid");

        }

        //Validar Ciudad
        if (ciudad.trim().length == 0){
            document.getElementById("alerta_city_min").style.display= "inline";
            document.getElementById("alerta_city_max").style.display= "none";
            document.getElementById("idCiudad").classList.add("is-invalid");
        }
        else if(ciudad.trim().length > 30){
            document.getElementById("alerta_city_max").style.display="inline";
            document.getElementById("alerta_city_min").style.display="none";
            document.getElementById("idCiudad").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_city_min").style.display="none";
            document.getElementById("alerta_city_max").style.display="none";
            document.getElementById("idCiudad").classList.remove("is-invalid");
            document.getElementById("idCiudad").classList.add("is-valid");

        }
        //Validacion GENERO
        let genero = document.getElementsByName("genero");
        let seleccion = 0;
        for(let i=0; i < genero.length; i++){
            if(genero[i].checked){
                seleccion++;
            }
        }
        if(seleccion == 0){
            document.getElementById("alerta_genero").style.display = "inline";
            document.getElementById("genero").classList.add("is-invalid");
        }
        else{
            document.getElementById("alerta_genero").style.display = "none";
            document.getElementById("genero").classList.remove("is-invalid");
            document.getElementById("genero").classList.add("is-valid");
        }
        

}


var boton=document.getElementById("agregar");
var lista=document.getElementById("lista");
var data=[0];
var cant=0;
boton.addEventListener("click",agregar);
function agregar(){
    var rut = document.getElementById("idRut").value;
    var nombre = document.getElementById("idNombre").value;
    var apellido = document.getElementById("idApellido").value;
    var email = document.getElementById("idEmail").value;
    var password = document.getElementById("contra").value;
    var direccion = document.getElementById("idDireccion").value;
    var ciudad = document.getElementById("idCiudad").value;


    data.push(
        {
            "id":cant,
            "rut":rut,
            "nombre":nombre,
            "apellido":apellido,
            "email":email,
            "direccion":direccion,
            "ciudad":ciudad,
        
        }
    );
        var id_row='row'+cant;
        var fila='<tr id='+id_row+'><td>'+rut+'</td><td>'+nombre+'</td><td>'+apellido+'</td><td>'+email+'</td><td>'+direccion+'</><td>'+ciudad+'</td><td>'
        //agregar filita
        $("#lista").append(fila);
        $("#rut").val('');
        $("#nombre").val('');
        $("#apellido").val('');
        $("#email").val('');
        $("#direccion").val('');
        $("#ciudad").val('');
        $("#nombre").focus('');
        cant++;
    
}


function validarRut() {
  
 
    var rutInput = document.getElementById('idRut');
      
     
    var rut = rutInput.value.trim();
    
      
    
     
    
    
    // Expresión regular para validar el RUT
      
     
    var rutRegex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
    
      
    
     
    
    
    if (!rutRegex.test(rut)) {
        rutInput.
       
    classList.add('is-invalid');
        
       
    document.getElementById('rut-feedback').textContent = 'RUT inválido';
      } 
     
    else {
        rutInput.
       
    classList.remove('is-invalid');
        rutInput.
        rut
    classList.add('is-valid');
        
       
    document.getElementById('rut-feedback').textContent = '';
      }
    }

function password(){
    let input = document.getElementById("contra");

    if(input.type == "password"){
        input.type = "text";
        document.getElementById("view_pass").style.display = "none";
        document.getElementById("notview_pass").style.display = "inline";
    }
    else{
        input.type = "password";
        document.getElementById("view_pass").style.display = "inline";
        document.getElementById("notview_pass").style.display = "none";
    }
}   