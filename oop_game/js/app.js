/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameBtn = document.getElementById('btn__reset');
    
startGameBtn.addEventListener('click',  ()=>{
    let game = new Game([new Phrase('hello'),new Phrase('beans'),new Phrase('goodbye'),new Phrase('change')]);
    game.startGame();
    let keyboard = document.querySelector('#qwerty');
    keyboard.addEventListener('click', (e) => {game.handleInteraction(e)});
    
});
