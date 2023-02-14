'use strict';

//constantes

const userNumber = document.querySelector('.js-label');
const btn = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const tried = document.querySelector('.js-tried');
const randomNumber = getRandomNumber(100);
let counter = 0;

console.log(`el número aleatorio es ${randomNumber}`);

//funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function count() {
  counter = counter + 1;
  tried.innerHTML = `Número de intentos = ${counter}`;
}

function compare() {
  const userNumberValue = userNumber.value;
  if (parseInt(userNumberValue) === randomNumber) {
    clue.innerHTML = `Has ganado campeona!!!`;
  } else if (parseInt(userNumberValue) === 0) {
    clue.innerHTML = `El número debe estar entre 1 y 100.`;
  } else if (parseInt(userNumberValue) > 100) {
    clue.innerHTML = `El número debe estar entre 1 y 100.`;
  } else if (parseInt(userNumberValue) < randomNumber) {
    clue.innerHTML = `El número es demasiado bajo`;
  } else if (parseInt(userNumberValue) > randomNumber) {
    clue.innerHTML = `El número es demasiado alto`;
  }
}

//eventos y función manejadora

function handleclick(ev) {
  ev.preventDefault();
  compare();
  count();
}

btn.addEventListener('click', handleclick);
