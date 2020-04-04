/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

(function() {
  // var gameImage = document.querySelector('#game-image');
// var storyOptions = document.querySelectorAll('.story-options');
var userInput = document.querySelector('#input-username');
var btnSubmitUser = document.querySelector('#btn-submit-user');
var weapon1 = document.querySelector('#weapon-select-1');
var loginPage = document.querySelector('#login-page-wrapper');
var gamePage = document.querySelector('#game-wrapper');
var player, game;


btnSubmitUser.addEventListener('click', registerPlayer);
  
function registerPlayer() {
  if(userInput.value !== '' && weapon1.value !=='') {
  player = new Player(userInput.value, [weapon1.value]);
  game = new Game(player);
    
   //change the stat of the game
  loginPage.className = 'hide';
  gamePage.className = 'show';
  }
}

weapons.forEach(function(val, index) {
  var option = document.createElement('OPTION');
  option.innerText = val.name;
  option.value = val.id;
  weapon1.appendChild(option);
  
});

})();




