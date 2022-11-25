/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
  
      //helper
      function containsStringB(string, stringB){
        regex = new RegExp(`${stringB}\\W`);
        console.log(regex);
        return regex.test(string);
    }

class Game{

    constructor (phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
        console.log('hello');

    }
        //helper
        containsStringB(string, stringB){
            regex = new RegExp(`/${stringB}/`);
            return regex.test(string);
        }
    
        
    getRandomphrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('body').style.backgroundColor = '#3a3f58';
        this.activePhrase = this.getRandomphrase();
        this.activePhrase.addPhraseToDisplay();
       // console.log(this.activePhrase);

    }

    removeLife(){

    }
    handleInteraction(){
        //selectKeyboard
        const keyboard = document.querySelector('#qwerty');
    
        keyboard.addEventListener('click', e =>{
            //console.log('keypress');
            console.log (e.target.className);
            if (containsStringB(e.target.className, 'key')){
                console.log('keypress');
                const testLetter = new RegExp (`/${e.target.textContent}/`);
                if(testLetter.test(this.activePhrase)){
                    e.target.className = 'key wrong';
                    this.removeLife();
                    console.log('badguess');
                }
                   
            }
        });
        
    }

    
}
console.log('what');
    const game = new Game([new Phrase('hello'),new Phrase('beans'),new Phrase('goodbye'),new Phrase('change')]);
     const beans = new Phrase('beans');
     
    console.log(beans.phrase);
    console.log(game.phrases[3].phrase);
    game.startGame();
    game.handleInteraction();
    