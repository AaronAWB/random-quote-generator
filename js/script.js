/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "Michael Scott",
    citation: "Season 2, Episode 6: 'The Fight'",
    year: "2005"
  },
  {
    quote: "I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation: "Season 4, Episode 1: 'Fun Run'",
    year: "2007"
  },
  {
    quote: "Me think, why waste time say lot word when few word do trick.",
    source: "Kevin Malone",
    citation: "Season 8, Episode 2: 'The Incentive'",
    year: "2011"
  },
  {
    quote: "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted.",
    source: "Kevin Malone",
    citation: "Season 3, Episode 22: 'Beach Games'",
    year: "2007"
  },
  {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    source: "Michael Scott",
    citation: "Season 5, Episode 14: 'Stress Relief Part 1'",
    year: "2009"
  },
  {
    quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
    source: "Pam Beesly",
    citation: "Season 9, Episode 23: 'Finale'",
    year: "2013"
  },
  {
    quote: "If I don't have some cake soon, I might die.",
    source: "Stanley Hudson",
    citation: "Season 4, Episode 7: 'Survivor Man'",
    year: "2007"
  },
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuoteSelection = quotes[randomNumber];
  return randomQuoteSelection
}

/***
 * `printQuote` function
***/

function printQuote() {
  const randomQuote = getRandomQuote();
  let quote_box = document.getElementById("quote-box");
  let displayQuote = '<p class="quote">`${randomQuote.quote}`</p>' +
  '<p class="source">`${randomQuote.source}`';
  if (randomQuote.citation) {
    displayQuote += '<span class="citation">`${randomQuote.citation}`</span>'
  };
  if (randomQuote.year) {
    displayQuote += '<span class="citation">`${randomQuote.year}`</span>'
  };
  displayQuote += '</p>';

}

document.quote_box.innerHTML = quote_box


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);