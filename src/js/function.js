/**
 * Page soutenir.html
 */
// Boutons pour changer d'onglet
var btnSignin = document.getElementById('toggleSignin');
var btnRegister = document.getElementById('toggleRegister');

// Formulaires connexion/inscription
var formSignin = document.getElementById('signin');
var formRegister = document.getElementById('register');

btnSignin.addEventListener('click', function() {
  formSignin.classList.add('visible');
  btnSignin.classList.add('actived_btn');
  formRegister.classList.remove('visible');
  btnRegister.classList.remove('actived_btn');
})

btnRegister.addEventListener('click', function() {
  formRegister.classList.add('visible');
  btnRegister.classList.add('actived_btn');
  formSignin.classList.remove('visible');
  btnSignin.classList.remove('actived_btn');
})


//============================================
//Boutons pour afficher le formulaire : CB
//============================================
var btnTypeOfCard = document.getElementById('typeOfCardImg1');
var formPaymentPart = document.getElementById('SupportFormPaymentPart');

btnTypeOfCard.addEventListener('click', function() {
  btnTypeOfCard2.classList.remove('activated_typeOfCard');
  btnTypeOfCard3.classList.remove('activated_typeOfCard');

  btnTypeOfCard.classList.add('activated_typeOfCard');
  formPaymentPart.classList.add('visible_PaymentForm');
  formPaymentPart.classList.remove('invisible_PaymentForm');
})


//============================================
//Boutons pour afficher le formulaire : Visa
//============================================
var btnTypeOfCard2 = document.getElementById('typeOfCardImg2');

btnTypeOfCard2.addEventListener('click', function() {
  btnTypeOfCard.classList.remove('activated_typeOfCard');
  btnTypeOfCard3.classList.remove('activated_typeOfCard');

  btnTypeOfCard2.classList.add('activated_typeOfCard');
  formPaymentPart.classList.add('visible_PaymentForm');
  formPaymentPart.classList.remove('invisible_PaymentForm');
})

//============================================
//Boutons pour afficher le formulaire : Mastercard
//============================================
var btnTypeOfCard3 = document.getElementById('typeOfCardImg3');

btnTypeOfCard3.addEventListener('click', function() {
  btnTypeOfCard.classList.remove('activated_typeOfCard');
  btnTypeOfCard2.classList.remove('activated_typeOfCard');

  btnTypeOfCard3.classList.add('activated_typeOfCard');
  formPaymentPart.classList.add('visible_PaymentForm');
  formPaymentPart.classList.remove('invisible_PaymentForm');
})




// FORMULAIRE REGISTER : CHOIX DE LA CARTE
//============================================
//Boutons pour afficher le formulaire : CB
//============================================
var btnTypeOfCard4 = document.getElementById('typeOfCardImg4');
var formPaymentPart2 = document.getElementById('SupportFormPaymentPart2');

btnTypeOfCard4.addEventListener('click', function() {
  btnTypeOfCard5.classList.remove('activated_typeOfCard');
  btnTypeOfCard6.classList.remove('activated_typeOfCard');

  btnTypeOfCard4.classList.add('activated_typeOfCard');
  formPaymentPart2.classList.add('visible_PaymentForm');
  formPaymentPart2.classList.remove('invisible_PaymentForm');
})


//============================================
//Boutons pour afficher le formulaire : Visa
//============================================
var btnTypeOfCard5 = document.getElementById('typeOfCardImg5');

btnTypeOfCard5.addEventListener('click', function() {
  btnTypeOfCard4.classList.remove('activated_typeOfCard');
  btnTypeOfCard6.classList.remove('activated_typeOfCard');

  btnTypeOfCard5.classList.add('activated_typeOfCard');
  formPaymentPart2.classList.add('visible_PaymentForm');
  formPaymentPart2.classList.remove('invisible_PaymentForm');
})

//============================================
//Boutons pour afficher le formulaire : Mastercard
//============================================
var btnTypeOfCard6 = document.getElementById('typeOfCardImg6');

btnTypeOfCard6.addEventListener('click', function() {
  btnTypeOfCard4.classList.remove('activated_typeOfCard');
  btnTypeOfCard5.classList.remove('activated_typeOfCard');

  btnTypeOfCard6.classList.add('activated_typeOfCard');
  formPaymentPart2.classList.add('visible_PaymentForm');
  formPaymentPart2.classList.remove('invisible_PaymentForm');
})



//

// Boutons des montants

var FormPriceButtonOthers = document.getElementById('priceOther');
var InputOtherPrice = document.getElementById('OtherPriceInputContainer');

FormPriceButtonOthers.addEventListener('click', function() {
  FormPriceButtonOthers.classList.add('enabled__price-btn');
  InputOtherPrice.classList.add('visible_OtherPriceInput');
  InputOtherPrice.classList.remove('invisible_OtherPriceInput');
})
