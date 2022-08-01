/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//array of quote objects to store quotes that will be randomly generated

const quotes = [
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    source: "Michael Scott",
    citation: "'The Office' Season 2, Episode 6: 'The Fight'",
    year: "2005"
  },
  {
    quote: "I'm not superstitious, but I am a little stitious.",
    source: "Michael Scott",
    citation: "'The Office' Season 4, Episode 1: 'Fun Run'",
    year: "2007"
  },
  {
    quote: "Me think, why waste time say lot word when few word do trick.",
    source: "Kevin Malone",
    citation: "'The Office' Season 8, Episode 2: 'The Incentive'",
    year: "2011"
  },
  {
    quote: "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted.",
    source: "Kevin Malone",
    citation: "'The Office' Season 3, Episode 22: 'Beach Games'",
    year: "2007"
  },
  {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    source: "Michael Scott",
    citation: "'The Office' Season 5, Episode 14: 'Stress Relief Part 1'",
    year: "2009"
  },
  {
    quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
    source: "Pam Beesly",
    citation: "'The Office' Season 9, Episode 23: 'Finale'",
    year: "2013"
  },
  {
    quote: "If I don't have some cake soon, I might die.",
    source: "Stanley Hudson",
    citation: "'The Office' Season 4, Episode 7: 'Survivor Man'",
    year: "2007"
  },
]

// returns a random object from the 'quotes' array

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*** 
* replaces contents of quote box with 
* keys and properties of object randomly selected 
* by 'getRandomQuote' function 
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let quote_box = document.getElementById("quote-box");
  let displayQuote = `<p class="quote">${randomQuote.quote}</p>` +
  `<p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    displayQuote += `<span class="citation">${randomQuote.citation}</span>`
  };
  if (randomQuote.year) {
    displayQuote += `<span class="citation">${randomQuote.year}</span>`
  };
  displayQuote += '</p>';
  quote_box.innerHTML = displayQuote;
}

//cycles through randomly generated quotes every 10 seconds

setInterval(printQuote, 10000)

document.getElementById('load-quote').addEventListener("click", printQuote, false);