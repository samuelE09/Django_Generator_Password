/* console.log("archivo js cargado") */ 
/* 
Swal.fire({
    icon: 'info',
    title: 'Atención!',
    text: 'Se agradece el uso Responsable de esta herramienta',
    footer: 'Aplication Password Generator',
    timer: 3000,
    timerProgressBar: true,
});
*/
/**
Funcion para Activar y Desactivar un Boton de
acuerdo al estado de un Checkbox


function validar(obj){
    var d = document.formulario;
    var data_length = document.getElementById("length").value;
    console.log(data_length);

    var data = parseInt(data_length) 
    console.log(typeof(data_length)) 
    console.log(data);
    console.log(typeof(data))

    if(obj.checked== true){
        if (isNaN(data)){
            d.generar.disabled = true;
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'warning',
                title: 'CUIDADO...!',
                text: 'Falta ingresar la Longitud de tu Password. (*) Campos Requeridos',
            })
        }
        else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: 'Excelente..!',
                text: 'Estas a punto de generar tu Password',
            })
        }

    }
}**/