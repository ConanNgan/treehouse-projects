/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
  
      //helper
      function containsWordB(string, stringB){
        let regex = new RegExp(`\\W+${stringB}\\W+`);
        if (regex.test(string)) return true;  

         regex = new RegExp(`\\W+${stringB}$`);
        if (regex.test(string)) return true;   
       
        regex = new RegExp(`^${stringB}\\W+`);
        if (regex.test(string)) return true;   

        regex = new RegExp(`^${stringB}$`);
        if (regex.test(string)) return true;   

        return false;

    }
    //fields 
    const keyboard = document.querySelector('#qwerty');  
    const scoreboard = document.getElementById('scoreboard');
    //select heart <li>s
    const heartsLiEl = scoreboard.children[0].children;

class Game{

    constructor (phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
        //console.log('hello');

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
     //    Remove all li elements from the Phrase ul element.
            ulBox.innerHtml = '';
        //    Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
        const keys = keyboard.getElementsByTagName('BUTTON');
        for(let key of keys){
            key.className = 'key';
        }

        //    Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.      
        //    //
        let i = 0;
        console.log(heartsLiEl);
        for (let li of heartsLiEl){
         li.firstElementChild.src = 'images/liveHeart.png';
        }
        this.missed = 0;
            
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('body').style.backgroundColor = '#3a3f58';
        this.activePhrase = this.getRandomphrase();
        this.activePhrase.addPhraseToDisplay();
       // console.log(this.activePhrase);
    }


    removeLife(){
        //heart <li>
        heartsLiEl[this.missed].firstElementChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) this.gameOver('lose');
    }
    checkForWin(){
        //for each li of characters in active phrase
        for (let element of ulBox.children){
            // find its class name
            let assignedClass = element.className;
            //if any of them are hidden
            if(containsWordB(assignedClass,'hide')){
                // it's not won yet
               return false;
            }
        }
        //otherwise the game is won
        return true;
    }
    gameOver(win_lose){
        console.log('gameOver');
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        let gameOverMessage = (win_lose)? 'You Won!' : 'Loss';
        document.getElementById('game-over-message').textContent = gameOverMessage;
        overlay.className = (win_lose)? 'win' : 'lose';

 

    }
    handleInteraction(e){
        //selectKeyboard
          
        //console.log('keypress');
            //console.log (e.target.className);
            //if the the user pressed a key
            if (containsWordB(e.target.className, 'key')){
                //console.log('keypress');
                const testLetter = new RegExp (`${e.target.textContent}`);
                console.log(testLetter + ' ' + this.activePhrase.phrase);
                //if that letter is not in the active phrase
                if(!testLetter.test(this.activePhrase.phrase) ){
                    //if that letter isn't already declared wrong
                    if (!containsWordB(e.target.className,'wrong')){
                        //lose a life
                        this.removeLife();
                       // console.log('badguess');
                          //change the class to key wrong
                           e.target.className = 'key wrong';
                    }
                }else{
                    //if it's in the active phrase
                    //declare the class key chosen
                     e.target.className = 'key chosen';
                     // show the letter on the board
                     this.activePhrase.showMatchedLetter(e.target.textContent);
                     //check for win
                     if (this.checkForWin()){
                        this.gameOver('win');
                     }
                }

                   
            }
        
        
    }

    
}
//console.log('what');

