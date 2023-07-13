const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data?.content;
  author.innerHTML = data?.author;
}

getQuote(apiUrl);

function twitter() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML} ---- By ${author.innerHTML}`,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}
