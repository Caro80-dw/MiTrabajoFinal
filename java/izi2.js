const btnExito=document.getElementById('btn-exito');

btnExito.addEventListener('click', function(event) {
    event.preventDefault(); 
    
const nombreUsuario = document.getElementById('username').value.trim();
const emailUsuario = document.getElementById('passwordUsuario').value.trim();

 if (nombreUsuario && emailUsuario) {
        iziToast.success({
            title: '¡Éxito!',
            message: '¡Bienvenido de nuevo!',
            position: 'topCenter',
            timeout: 3000,
            progressBarColor: 'rgba(19, 182, 136, 1)',
            transitionIn: 'fadeInDown'
        });
    } else {
        iziToast.error({
            title: '¡Error!',
            message: 'Por favor, completa todos los datos para continuar.',
            position: 'topCenter',
            timeout: 3000,
            progressBarColor: 'rgba(255, 0, 0, 1)',
            transitionIn: 'fadeInDown'
        });
    }
});