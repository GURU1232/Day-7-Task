//................................................................................................
//. 1 a. Asian Countries Filter

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);
  });

  //.................................................................................................
  // .b Population Filter

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const populationLessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with population less than 2 lakhs:",
    populationLessThan2Lakh
  );
};

//...................................................................................................
// c. Details of name,captial,flag

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  countryData.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
  });
};

//.....................................................................................................
// d. Population of countries

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const populationLessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with population less than 2 lakhs:",
    populationLessThan2Lakh
  );
};


//.....................................................................................................
// e. us dollor currency
var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload = function () {
  var res = JSON.parse(req.response);
  var currency = res.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code === "USD") {
        return element;
      }
    }
  });
  console.log(currency);
};

//......................................end..................................................................