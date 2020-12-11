


function validacion(){
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var usuario = document.getElementById('usuario').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    var confirmar = document.getElementById('confirmar').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;


    if(nombres == null || nombres.length == 0 || /^\s+$/.test(nombres) || !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombres) ){
        alert('ERROR: El campo Nombres no debe ir vacío o con valores numericos');
        return false;
      }

    if(apellidos == null || apellidos.length == 0 || /^\s+$/.test(apellidos) || !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellidos) ){
        alert('ERROR: El campo Apellidos no debe ir vacío o con valores numericos');
        return false;
    }

    if(usuario == null || usuario.length == 0 || /^\s+$/.test(usuario) || !/^\d{5,11}$/.test(usuario) ){
        alert('ERROR: El campo Usuario no debe ir vacío o con letras');
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

    if(contraseña == null || contraseña.length == 0 || /^\s+$/.test(contraseña) || !/^.{4,12}$/.test(contraseña) ){
        alert('ERROR: El campo Contraseña no debe ir vacío o no debe tener menos de 4 caracteres y mas de 12 caracteres');
        return false;
    }

    if(confirmar == null || confirmar.length == 0 || /^\s+$/.test(confirmar) || !/^.{4,12}$/.test(confirmar)  ){
        alert('ERROR: El campo Confirmar Contraseña no debe ir vacío o no debe tener menos de 4 caracteres y mas de 12 caracteres');
        return false;
    }

    if(confirmar != contraseña){
        alert('ERROR: Las contraseñas no coinciden');
        return false;
    }

    if(cmbSelector == null || cmbSelector == 0){
        alert('ERROR: Debe seleccionar el rol del usuario');
        return false;
    }





};