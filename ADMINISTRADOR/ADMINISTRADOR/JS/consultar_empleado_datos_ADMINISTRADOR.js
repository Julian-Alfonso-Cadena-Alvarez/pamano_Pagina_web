


function validacion(){
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var usuario = document.getElementById('usuario').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var cmbSelectoruno = document.getElementById('selectoruno').selectedIndex;
    var cmbSelectordos = document.getElementById('selectordos').selectedIndex;
    var sueldo = document.getElementById('sueldo').value;
    var comisiones = document.getElementById('comisiones').value;
    var cmbSelectortres = document.getElementById('selectortres').selectedIndex;


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


    if(cmbSelectoruno == null || cmbSelectoruno == 0){
        alert('ERROR: Debe seleccionar tipo de contrato');
        return false;
    }

    if(cmbSelectordos == null || cmbSelectordos == 0){
        alert('ERROR: Debe seleccionar cargo');
        return false;
    }

    if(sueldo == null || sueldo.length == 0 || /^\s+$/.test(sueldo) || !/^\d{5,7}$/.test(sueldo) ){
        alert('ERROR: El campo Sueldo no debe ir vacío');
        return false;
    }
    
    if(comisiones == null || comisiones.length == 0 || /^\s+$/.test(comisiones) || !/^\d{5,7}$/.test(comisiones) ){
        alert('ERROR: El campo Comisiones no debe ir vacío');
        return false;
    }
    
    if(cmbSelectortres == null || cmbSelectortres == 0){
        alert('ERROR: Debe seleccionar EPS');
        return false;
    }





};