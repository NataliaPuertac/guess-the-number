'use strict';

//constantes

const userNumber = document.querySelector('.js-label');
const btn = document.querySelector('.js-btn');
const pista = document.querySelector('.js-pista');
const intentos = document.querySelector('.js-intentos');
const randomNumber = getRandomNumber(100);

console.log(`el número aleatorio es ${randomNumber}`);

//funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function compare() {
  const userNumberValue = userNumber.value;
  if (parseInt(userNumberValue) === randomNumber) {
    pista.innerHTML = `Has ganado campeona!!!`;
  } else if (parseInt(userNumberValue) === 0) {
    pista.innerHTML = `El número debe estar entre 1 y 100.`;
  } else if (parseInt(userNumberValue) > 100) {
    pista.innerHTML = `El número debe estar entre 1 y 100.`;
  } else if (parseInt(userNumberValue) < randomNumber) {
    pista.innerHTML = `El número es demasiado bajo`;
  } else if (parseInt(userNumberValue) > randomNumber) {
    pista.innerHTML = `El número es demasiado alto`;
  }
}

//eventos y función manejadora

function handleclick(ev) {
  ev.preventDefault();
  compare();
}

btn.addEventListener('click', handleclick);
