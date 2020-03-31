function mostraralerta(){
  alert('Hizo Click')
}
function hacerclic(){
  var  elemento = document.querySelector('#principal p');
  elemento.addEventListener('click', mostraralerta, false);
  }
window.addEventListener('load',hacerclic,false);
