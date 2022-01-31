/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Sayon Angus
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
            [OBJECTIVES]
 * @quote - context (actual quote)
 * @source - person / character who said it
 * @citation - reference to origin of source
 * @year - (string / number value) when the source was produced
 * @tags - categories quote falls under (optional)
***/
let quotes = [
    {
      quote: "An organized mind is a disciplined mind, Joker. And a disciplined mind is a powerful mind.",
      source: "Batman",
      citation: "Batman: The Brave and the Bold",
      year: 2011,
      tags: "| animation, efficient, discipline"
     },
     {
       quote: "Sometimes, the best way to solve your problems is to help someone else.",
       source: "Iroh",
       citation: "Avatar: The Last AirBender",
       year: 2005,
       tags: "| animation, inquisitive, cooperative"
     },
     {
       quote: "Think lightly of yourself and deeply of the world.",
       source: "Miyamoto Mushasi",
       citation: "Dokkōdō",
       year: 1645,
       tags: "| novel, self-reflection, vigilance"
     },
     {
       quote: "You can never defeat another if you know not how to defeat yourself.",
       source: "Samurai Jack",
       citation: "Samurai Jack",
       year: 2001,
       tags: "| animation, motivation, self-reflection"
     },
     {
       quote: "I do not fear this new challenge. Rather like a true warrior I will rise to meet it.",
       source: "Vegeta",
       citation: "Dragon Ball Z",
       year: 1989,
       tags: "| animation, confidence, adamant"
     },
     {
       quote: "Sometimes, we have to look beyond what we want and do what's best.",
       source: "Piccolo",
       citation: "Dragon Ball Z",
       year: 1989,
       tags: "| animation, intent, patience"
     },
     {
       quote: "When logic doesn't work, use ingenuity. The time to plan for a rainy day is when the sun is shining.",
       source: "Panthro",
       citation: "ThunderCats",
       year: 1985,
       tags: "| animation, intuition, inventive"
     },
     {
       quote: "You made a mistake, but mistakes can be valuable if you learn from them.",
       source: "Lion-O",
       citation: "ThunderCats",
       year: 1985,
       tags: "| animation, principle, knowledge"
     }
  ];

/***
 * `getRandomQuote` function
  * Randomises the index value between the range of min: 0 - max: 8 for quotes set in the array
***/
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/**
 * `getRandomColor` function
 * alters background colour of page with randomised quote when printed
 ***/
function getRandomColor() {
  // reduced the max colour value from 255 to 215 to compliment font colour
  const rgbValue = () => { return Math.floor(Math.random() * 215); }
    return `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
}

/**
 * `showTimer` function
 * Automatically prints a new quote to the page at fixed intervals
 ***/

const showTimer = () => {
  printQuote();
}; 
// changes quote every 15,000 milliseconds | 15 seconds
setInterval(showTimer, 15000);

/***
 * `printQuote` function
 * Displays a new quote once `show another quote` button is pressed by user.

***/
const printQuote = () => {
  let selectQuote = getRandomQuote(quotes);
  let html = `
    <p class="quote">${selectQuote.quote}</p>
    <p class="source">${selectQuote.source}`
  // conditional statement to acknowledge properties in use
    if (selectQuote.citation) html +=`<span class="citation">${selectQuote.citation}</span>`
    if (selectQuote.year) html += `<span class="year">${selectQuote.year}</span>`
    if (selectQuote.tags) html += `\n` + `<span class="tags">${selectQuote.tags}</span>`
  html += `</p>`

  document.getElementById('quote-box').innerHTML = html;
  
  document.querySelector('body').style = `background-color: ${getRandomColor()} `;
  // console.log(printQuote);
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);