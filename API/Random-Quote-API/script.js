// https://api.quotable.io/random

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

/* Async/await */
const getQuote = async function () {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quote.textContent = data.content;
  author.textContent = data.author;
};

getQuote();
btn.addEventListener("click", () => getQuote());

/* then() 
const getQuote = function() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quote.textContent = data.content;
      author.textContent = data.author;
    })
}

getQuote();
btn.addEventListener('click', () => getQuote())
*/
