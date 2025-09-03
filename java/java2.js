const cambiarF=document.getElementById('cambiarF');
const body=document.body;


body.classList.add('tema-claro');

cambiarF.addEventListener('click',function(){
let icono=cambiarF.querySelector('i');
if (body.classList.contains('tema-claro')){
  body.classList.remove('tema-claro');
  body.classList.add('tema-oscuro');
  icono.className="bi bi-sun";
  cambiarF.innerHTML='<i class="bi bi-sun"></i>';
}else{
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    icono.className="bi bi-moon-stars-fill"
    cambiarF.innerHTM='<i class="bi bi-moon-stars-fill"></i>'
}});














