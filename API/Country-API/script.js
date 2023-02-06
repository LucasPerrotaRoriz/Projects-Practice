// https://restcountries.com/v3.1/alpha/${neighbour}

const searchContainer = document.querySelector(".country-search");
const results = document.querySelector(".results");
const input = document.querySelector(".country-input");
const btn = document.querySelector(".btn");

const renderError = function (err) {
  const html = `
    <div class="error">${err.message}</div>
    `;
  searchContainer.insertAdjacentHTML("beforeend", html);
};

input.focus();

/* Then() method */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    fetch(`https://restcountries.com/v3.1/name/${input.value}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          renderError(new Error("Country not found. Try again!"));
        }
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        results.innerHTML = "";
        const html = `
        <img src=${data[0].flags.png} class="country-flag" alt="${
          data[0].name.common
        } image">
        <p class="country-name">${data[0].name.common}</p>
        <div class="country-data">
            <p class="country-row"><span>Capital:</span> ${data[0].capital}</p>
            <p class="country-row"><span>Continent:</span> ${
              data[0].continents[0]
            }</p>
            <p class="country-row"><span>Population:</span> ${+(
              data[0].population / 1000000
            ).toFixed(2)}</p>
            <p class="country-row"><span>Currency:</span> ${
              Object.values(data[0].currencies)[0].symbol
            } - 
            ${Object.values(data[0].currencies)[0].name}</p>
            <p class="country-row"><span>Common Languages:</span> ${
              Object.values(data[0].languages)[0]
            }</p>
        </div>
        `;
        results.insertAdjacentHTML("beforeend", html);
      })
      .catch((err) => {
        renderError(err);
        console.error(`An error has occurred ${err}, ${err.message}`);
        throw err;
      });
  } catch (err) {
    renderError(err);
    console.error(`An error has occurred ${err}, ${err.message}`);
    throw err;
  }
});

/* Async/await 
btn.addEventListener("click", (e) => getCountry(e));

const getCountry = async function (e) {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${input.value}`
    );
    if (!response.ok) renderError(new Error("Country not found. Try again!"));
    const data = await response.json();
    console.log(data[0]);

    results.innerHTML = '';

    const html = `
        <img src=${data[0].flags.png} class="country-flag" alt="${
      data[0].name.common
    } image">
        <p class="country-name">${data[0].name.common}</p>
        <div class="country-data">
            <p class="country-row"><span>Capital:</span> ${data[0].capital}</p>
            <p class="country-row"><span>Continent:</span> ${
              data[0].continents[0]
            }</p>
            <p class="country-row"><span>Population:</span> ${+(
              data[0].population / 1000000
            ).toFixed(2)} million</p>
            <p class="country-row"><span>Currency:</span> ${
              Object.values(data[0].currencies)[0].symbol
            } - 
            ${Object.values(data[0].currencies)[0].name}</p>
            <p class="country-row"><span>Common Languages:</span> ${
              Object.values(data[0].languages)[0]
            }</p>
        </div>
        `;
    results.insertAdjacentHTML("beforeend", html);
  } catch (err) {
    renderError(err);
    console.error(`An error has occurred ${err}, ${err.message}`);
    throw err;
  }
}; */
