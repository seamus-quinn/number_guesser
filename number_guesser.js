//variables

var userInput = document.querySelector('.input');
var clear = document.querySelector('.clearButton');
var reset = document.querySelector('.resetButton');
var guess = document.querySelector('.guessButton');

//number generator
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//inputfield

userInput.addEventListener('keyup', function (){
  var userInteger = parseInt(userInput.value);
  if (userInteger >= 0 && userInteger <= 100) {
    guess.removeAttribute('disabled')
  } else {
    guess.setAttribute('disabled', '')
  }
});

userInput.addEventListener('keyup', function (){
  if (userInput.value.length > 0) {
    clear.removeAttribute('disabled')
  } else {
    clear.setAttribute('disabled', '')
  }
});

//guessbutton
guess.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.p_top').innerText = 'Your last guess was';
  var userInteger = parseInt(userInput.value);
  if (userInteger > randomNumber){
    document.querySelector('.p_middle').innerText = userInteger;
    document.querySelector('.p_bottom').innerText = 'That is too high';
    userInput.value = '';
  } else if (userInteger < randomNumber){
    document.querySelector('.p_middle').innerText = userInteger;
    document.querySelector('.p_bottom').innerText = 'That is too low';
    userInput.value = '';
  } else if (userInteger === randomNumber){
    document.querySelector('.p_middle').innerText = userInteger;
    document.querySelector('.p_bottom').innerText = 'Correct! Click Reset to Play Again!';
    userInput.value = '';
    reset.removeAttribute('disabled');
  } else {
    alert('Please input a value between 0 and 100!');
  }
});

// //clearbutton//

clear.addEventListener('click', function(event) {
  event.preventDefault();
  userInput.value = '';
  
})

// //resetbutton//
reset.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100);
  document.querySelector('.p_top').innerText = 'Guess a number between 0 and 100';
  document.querySelector('.p_middle').innerText = 'N/A';
  document.querySelector('.p_bottom').innerText = 'The computer will tell you if you are too high or too low.';
  console.log(randomNumber);
})




