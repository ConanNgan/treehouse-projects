/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat\review\list


/**
 * is a list of quotes.
 * 
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
var quotes = [
{quote: "Dude, suckin' at something is the first step to being sorta good at something." , source: "Jake the Dog", citation: "Adventure Time"},
{quote: "To live life, you need problems. If you get what you want the minute you want it, then what's the point of living?" , source: "Jake the Dog", citation: "Adventure Time"},
{quote: "The way to get started is to quit talking and begin doing." , source: "Walt Dinsey", year: 1957},
{quote: "Life is what happens when you're busy making other plans. " , source: "John Lennon", year: 1980},
{quote: "Always remember that you are absolutely unique. Just like everyone else." , source: "Margaret Mead", year: 1989}
];



/**
 * returns a random quote
 * @constructor
 */
function getRandomQuote(){
  var random = Math.floor(Math.random() * quotes.length) ;
  return quotes[random];
}


/***
 * prints a quote to the site
***/
function printQuote(){
  let quote = getRandomQuote();
  let html = `<p class = "quote"> ${quote.quote} </p>
              <p class = "source"> ${quote.source} `;
              
              if(quote.citation){ html+= `
                <span class = "citation"> ${quote.citation} </span> `;}
              if(quote.year){html+= `
                <span class = "year"> ${quote.year}</span>`;}
  html += `</p>`;
  console.log(" what" + html);
  document.getElementById('quote-box').innerHTML = html; 
}



document.getElementById('load-quote').addEventListener("click", printQuote, false);