/*FUNCIONES PARA ANIMACION*/
$(".info-item .btn").click(function(){
    $(".container").toggleClass("log-in");
});

$(".container-form .btn").click(function(){
    $(".container").addClass("active");
});


/*FUNCIONES PARA ALERTAS*/
$('#registrar').click(function(event) {
    
    var nombre, telefono, correo, contraseña,
        ERTelefono, ERCorreo, ERCorreoOficial, ERContraseña;
    
    nombre = $('#nombre').val();
    telefono = $('#telefono').val();
    correo = $('#correo').val();
    contraseña = $('#contraseña').val();
    ERTelefono = /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/;
    ERCorreo=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ERCorreoOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    ERContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;

    if(nombre.length == 0 || telefono.length == 0 || correo.length == 0 || contraseña.length == 0) {
        Swal.fire("Error", "Favor de no dejar campos vacios", "error");
        return false;
    } else if(nombre.length > 30) {
        Swal.fire("Oops..!", "El nombre es demasiado largo", "error");
        return false;
    } else if(isNaN(telefono)){
        Swal.fire("Telefono no valido", "Favor de solo ingresar numeros", "error");
        return false;
    } else if(!ERTelefono.test(telefono)){
        Swal.fire("Telefono no valido", "Favor de solo ingresar numeros", "error");
        return false;
    } else if(telefono.length !== 10){
        Swal.fire("Telefono no valido", "Favor de verificar que solo sean 10 digitos", "error");
        return false;
    } else if(!ERCorreo.test(correo) && !ERCorreoOficial.test(correo)){
        Swal.fire("Correo no valido", "Favor de verificar que este escrito correctamente", "error");
        return false;
    } else if(correo.length > 45) {
        Swal.fire("Oops..!", "El correo es demasiado largo", "error");
        return false;
    } else if(!ERContraseña.test(contraseña)) {
        Swal.fire("Contraseña no valida", "Favor de usar Mayusculas, Minusculas, Numeros y Caracteres Especiales", "error");
        return false;
    }

    Swal.fire("Success", "Usuario registrado correctamente", "success");
    
});

$('#sesion').click(function(event){

    var correo, contraseña,
        ERCorreo, ERCorreoOficial, ERContraseña;
    
    correo = $('#correoSesion').val();
    contraseña = $('#contraseñaSesion').val();
    ERCorreo=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ERCorreoOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    ERContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;

    if(correo.length == 0 || contraseña.length == 0) {
        Swal.fire("Error", "Favor de no dejar campos vacios", "error");
        return false;
    } else if(correo.length > 30){
        Swal.fire("Oops..!", "El correo es demasiado largo", "error");
        return false;
    } else if(!ERCorreo.test(correo) && !ERCorreoOficial.test(correo)){
        Swal.fire("Correo no valido", "Favor de verificar que este escrito correctamente", "error");
        return false;
    } else if(!ERContraseña.test(contraseña)){
        Swal.fire("Contraseña no valida", "Favor de usar Mayusculas, Minusculas, Numeros y Caracteres Especiales", "error");
        return false;
    } 

    Swal.fire("Success", "Bienvenido usuario", "success");

});