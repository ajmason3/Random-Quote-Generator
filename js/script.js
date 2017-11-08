
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

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
