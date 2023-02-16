
fetchQuotes();

async function fetchQuotes() {
  const parent = document.querySelector('#parent');

  const res = await fetch('/api/quotes');
  const data = await res.json();

  parent.innerHTML = `
    <h1 class="quote">"${data.quote}"</h1>
    <br>
    <h2 class="author">- ${data.author} -</h2>
  `;
};