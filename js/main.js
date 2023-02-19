'use strict';

//constantes

const userNumber = document.querySelector('.js-label');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const tried = document.querySelector('.js-tried');
const reset = document.querySelector('.js-reset');
const randomNumber = getRandomNumber(100);
let counter = 0;

console.log(`el número aleatorio es ${randomNumber}`);

//función para agrupar todos los innerHTML y no repetir

function msg(message) {
  clue.innerHTML = message;
}

//función para crear un numero aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//función para actualizar el contador de intentos

function count() {
  counter = counter + 1;
  tried.innerHTML = `Número de intentos : ${counter}`;
}

// función comparadora de resultados

function compare() {
  const userNumberValue = parseInt(userNumber.value);
  if (isNaN(userNumberValue)) {
    msg(`Debes introducir un número`);
  } else if (userNumberValue < 1 || userNumberValue > 100) {
    msg(`El número debe estar entre 1 y 100.`);
  } else if (userNumberValue < randomNumber) {
    msg(`El número es demasiado bajo`);
  } else if (userNumberValue > randomNumber) {
    msg(`El número es demasiado alto`);
  } else {
    msg(`Has ganado campeona!!!`);
  }
}

//función manejadora

function handleclick(ev) {
  ev.preventDefault();
  compare();
  count();
}

//función reset para refrescar la página, generar un nuevo número aleatorio y dejar el contador de nuevo en cero

function handleClickReset(ev) {
  counter = 0;
  tried.innerHTML = `Número de intentos: ${counter}`;
  userNumber.value = '';
  location.reload();
}

//eventos

btn.addEventListener('click', handleclick);
reset.addEventListener('click', handleClickReset);
