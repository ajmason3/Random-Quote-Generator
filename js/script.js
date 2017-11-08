
// Array of quotes
var quotes = [
  {
    quote: "The only thing to fear is fear itself.",
    source: "Franklin Delano Roosevelt",
    citation: "First Inaugural Address",
    year: "1932",
    tags: "politics"
  },
  {
    quote: "That\'s one small step for man, one giant leap for mankind.",
    source: "Neil Armstrong",
    citation: "The moon",
    year: "1969",
    tags: "explorer"
  },
  {
    quote: "It always seems impossible until it is done.",
    source: "Nelson Mandela",
    citation: "",
    year: "",
    tags: "politics"
  },
  {
    quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
    source: "Albert Einstein",
    citation: "",
    year: "",
    tags: "science"
  },
  {
    quote: "What we think, we become",
    source: "Buddha",
    citation: "",
    year: "",
    tags: "religion"
  },
  {
    quote: "Dream big and dare to fail",
    source: "Norman Vaughan",
    citation: "",
    year: "",
    tags: "explorer"
  }
];

// Generating a random number to select a random quote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var randQuote = quotes[randomNumber];
  return randQuote;
}

// Generating a random color
function backgroundColor() {
  // Generate random numbers for red, green, and blue
  // Then add them together
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var mixColor = "rgb(" + red + "," + green + ", " + blue + ")";
  return mixColor;
}

// print quotes properties to the document
function printQuote() {
  var randomQuote = getRandomQuote();
  var randomColor = backgroundColor();
  var html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '<span class="tags">, ' + randomQuote.tags + '</span>';
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

// Use the setInterval method to change the quote every 10 seconds
setInterval(printQuote, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
