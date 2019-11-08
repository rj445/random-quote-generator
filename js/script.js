/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "I have no special talent. I am only passionately curious.",
    source: "Albert Einstein"
  },
  {
    quote: "If you judge people, you have no time to love them. ",
    source: "Mother Teresa"
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs",
    tags: ["Motivation"]
  },
  {
    quote: "A great man is always willing to be little.",
    source: "Ralph Waldo Emerson",
    tags: ["Motivation"]
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    source: "Malcolm X",
    tags: ["Motivation"]
  },
  {
    quote: "Try not to become a man of success but rather to become a man of value.",
    source: "Albert Einstein",
    tags: ["Motivation"]
  },
  {
    quote: "It’s not how much you have that makes people look up to you, it’s who you are.",
    source: "Elvis Presley",
    tags: ["Motivation"]
  },
  {
    quote: "Problems are not stop signs, they are guidelines.",
    source: "Robert H. Schuller",
    tags: ["Motivation"],
    citation: "brainyquote.com.",
    year: 2001
  },
  {
    quote: "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
    source: "Audrey Hepburn",
    tags: ["Life", "Wisdom"],
    citation: "brainyquote.com.",
    year: 2019
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    tags: ["Matter", "Motivation"],
    citation: "brainyquote.com.",
    year: 2019
  }
];

/***
 * colors array which will be used to set background color for body
***/

const colors = [
  '#555',
  '#003f5c',
  '#472b62',
  '#bc4873',
  '#fb5b5a',
  '#1f6650',
  '#6f9a8d',
  '#bd574e'
];

/***
 * Get the ranom color from 'colors' array
***/

function getRandomColor() {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  return colors[randomColorIndex];
}

/***
 * Set the color to body
***/

function setBackgroundColor() {
  document.body.style.background = getRandomColor();
}

/***
 * Get the ranom quote from 'quotes' array
***/

function getRandomQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

/***
 * Prints the quote in #quote-box
***/

function printQuote() {
  console.log('Printing quote');
  const quote = getRandomQuote();
  let tagsContent = "";
  if (quote.tags && quote.tags.length > 0) {
    quote.tags.forEach(function (tag) {
      tagsContent += `<li>${tag}</li>`
    });
  }
  if (tagsContent != "") {
    tagsContent = `
      <ul class="tags">
      ${tagsContent}
      </ul>
      `;
  }
  const contentToDisplay = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
    ${(quote.citation) ? '<span class="citation">' + quote.citation + '</span>' : ''}
    ${(quote.year) ? '<span class="year">' + quote.year + '</span>' : ''}
    </p>
    ${tagsContent}
  `;
  document.getElementById('quote-box').innerHTML = contentToDisplay;
  setBackgroundColor();
}


/***
   * Listen for button click having id 'load-quote'
   * it will perform 'printQuote' action after click
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Print the quote after every 30sec.
***/

setInterval(printQuote, 30000);