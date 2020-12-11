


function validacion(){
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var usuario = document.getElementById('usuario').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
   


    if(nombres == null || nombres.length == 0 || /^\s+$/.test(nombres) || !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombres) ){
        alert('ERROR: El campo Nombres no debe ir vacío o con valores numericos');
        return false;
      }

    if(apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos) || !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellidos) ){
        alert('ERROR: El campo Apellidos no debe ir vacío o con valores numericos');
        return false;
    }

    if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario) || !/^\d{5,11}$/.test(usuario) ){
        alert('ERROR: El campo Cedula no debe ir vacío o con letras');
        return false;
    }

    if(telefono == null || telefono.length == 0 || /^\s+$/.test(telefono) || !/^\d{5,11}$/.test(telefono) ){
        alert('ERROR: El campo Telefono no debe ir vacío o con letras');
        return false;
    }

    if(correo == null || correo.length == 0 || /^\s+$/.test(correo) || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo) ){
        alert('ERROR: El campo Correo no debe ir vacío');
        return false;
    }
};