
// Array of quotes
var quotes = [
  {
    quote: "The only thing to fear is fear itself.",
    source: "Franklin Delano Roosevelt",
    citation: "First Inaugural Address",
    year: "1932"
  },
  {
    quote: "That\'s one small step for man, one giant leap for mankind.",
    source: "Neil Armstrong",
    citation: "The moon",
    year: "1969"
  },
  {
    quote: "It always seems impossible until it is done.",
    source: "Nelson Mandela",
    citation: "",
    year: ""
  },
  {
    quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
    source: "Albert Einstein",
    citation: "",
    year: ""
  },
  {
    quote: "What we think, we become",
    source: "Buddha",
    citation: "",
    year: ""
  },
  {
    quote: "Dream big and dare to fail",
    source: "Norman Vaughan",
    citation: "",
    year: ""
  }
];

// Generating a random number to select a random quote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var randQuote = quotes[randomNumber];
  return randQuote;
}

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
