var btn = document.querySelector('.support-form__title1');
var form = document.querySelector('.support-form');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Démarrer la machine') {
    
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}