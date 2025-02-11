// Get the button and quote elements
const clickButton = document.getElementById("click");
const quoteElement = document.getElementById("quote");

// Array of quotes
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
];

// Function to generate a random quote
function QuoteGenerator() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomIndex, randomQuote);

  // Add fade-in effect
  quoteElement.style.opacity = 0;
  setTimeout(() => {
    quoteElement.textContent = `${randomQuote.quote} - ${randomQuote.author}`;
    quoteElement.style.opacity = 1;
  }, 200);
}

// Add event listener to button
clickButton.addEventListener("click", QuoteGenerator);

// Call function initially
QuoteGenerator();
console.log(QuoteGenerator);
