function funcion1(id){
    
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
        //document.form.submit(); 
        alert("Registrado");
        document.getElementById('modal').style.display = 'none';
        id = 'onsubir';
        } 
    else{ 
        alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
        id='offsubir';
    } 
    return this.id;
}


function funcion2(modal){
    
       let imagen = document.getElementById(modal);	
        if (!imagen){
            alert("El elemento selecionado no existe");
        } else {
            padre = imagen.parentNode;
            padre.removeChild(imagen);
        }
    
}

function funcion3(){
    document.getElementById('modal').style.display = 'block';

}

function funcion4(){
    let persona =  {
        usuario: document.getElementById('usuario').value,
        password: document.getElementById('password').value 
    }
}