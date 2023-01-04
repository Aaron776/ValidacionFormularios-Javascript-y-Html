window.addEventListener('load', ()=>{
    const formulario=document.querySelector('#formulario') // el metodo querySelector es lo mismo que getElementById la unica diferencia es que en selector toca especificar si es un id o una class el elemento que queremos capturar
    const usuario=document.getElementById('nombre')
    const email=document.getElementById('email')
    const contraseña=document.getElementById('password')
    const confirmarContraseña=document.getElementById('confirm-password')

    formulario.addEventListener('submit',(e)=>{
        e.preventDefault(); // evita que se recargue el formualrio
        validarCampos();
    })

    
    function validarCampos(){
        //Capturar valores del formulario
        const usuarioValor=usuario.value;
        const emailValor=email.value;
        const contraseñaValor=contraseña.value;
        const confirmarValor=confirmarContraseña.value;

        //validando campo usuario
        if (usuarioValor==='') {
            validacionFalla(usuario,'Campo Vacio');
        } else {
            validacionPaso(usuario);
        }

        // validando campo email
        if(emailValor===''){
            validacionFalla(email,'Campo Vacio');
        }else if(!validaEmail(emailValor)){
            validacionFalla(email,'El email no es valido');
        }else{
            validacionPaso(email); 
        }

        //validando campo password
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
        if(contraseñaValor==='') {
            validacionFalla(contraseña, 'Campo vacío')
        } else if (confirmarValor.length < 8) {             
            validacionFalla(contraseña, 'Debe tener 8 caracteres cómo mínimo.')
        } else if (!contraseñaValor.match(er)) {
            validacionFalla(contraseña, 'Debe tener al menos una mayuscula, una minuscula y un número.')
        } else {
            validacionPaso(contraseña)
        }

        //validando campo password Confirmación
        if(confirmarValor===''){
            validacionFalla(confirmarContraseña, 'Confirme su contraseña')
        } else if(confirmarContraseña !== confirmarValor) {
            validacionFalla(confirmarContraseña, 'Las contraseñas no coinciden')
        } else {
            validacionPaso(confirmarContraseña)
        }
            
   }


   function validacionFalla(input,mensaje){
    const formControl=input.parentElement
    const aviso=formControl.querySelector('p')
    aviso.innerText=mensaje;
    
    formControl.className='form-control falla'
   }

   function validacionPaso(input){
        const formControl=input.parentElement
        formControl.className='form-control ok'

   }

   function validaEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }
    

    

})