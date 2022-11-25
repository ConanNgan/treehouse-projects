/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//fields
  //phrase div 
  const phraseBox = document.getElementById('phrase');
  //ulbox
  const ulBox = phraseBox.firstElementChild;

class Phrase{

    constructor (phrase){
        this.phrase = phrase.toLowerCase();
       // console.log("phrase is:" + this.phrase);
    }
    addPhraseToDisplay(){
      
        //html to be put in ul box
        let html = ``;
        for(let i = 0 ; i < this.phrase.length; i++){
            const letter = this.phrase[i]
         //  console.log(phrase);
            if(letter != ' ')  {
                html += `<li class="hide letter ${letter}"> ${letter}</li>`
            }else{html += ` <li class="space"> </li>`}

        }

        ulBox.innerHTML = html;

    }
    //containsLetter General
    containsLetter(string,letter){
       for(let i = 0 ; i < string.length ; i++){
        if (string.charAt(i) === letter){
            return true;
        }
       }
       return false;
    }

    //checkLetter phrase
    checkLetter(letter){
        return this.containsLetter(this.phrase,letter);
    }
    //showletter
    showMatchedLetter(letter){
        for (let element of ulBox.children){
            let assignedClass = element.className;
            console.log(assignedClass.charAt(assignedClass.length-1));
            if(assignedClass.charAt(assignedClass.length-1) === letter){
                console.log('reached');
               element.className = `show letter ${letter}`;
              
            }
        }


    }

}

// const phrase = new Phrase('hello');
//phrase.addPhraseToDisplay()
// phrase.showMatchedLetter('h');