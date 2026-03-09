/* This Function is used to Lowercase the the string value */

function lowerCase() {
  let inputValue = document.getElementById("inputValue").value;
  let toLowerCase = inputValue.toLowerCase();
  if (inputValue === "") {
    alert("Enter value first!");
  }

  document.getElementById("original").innerHTML = inputValue;
  document.getElementById("output").innerHTML = toLowerCase;
}

/* This Function is used to uppercase the string value */

function upperCase() {
  let inputValue = document.getElementById("inputValue").value;
  let toUpperCase = inputValue.toUpperCase();
  if (inputValue === "") {
    alert("Enter value first!");
  }

  document.getElementById("original").innerHTML = inputValue;
  document.getElementById("output").innerHTML = toUpperCase;
}

/* This Function is used to captalize the string value */

function tocapitalizedCase() {
  let inputValue = document.getElementById("inputValue").value;
  let capitalizedCase = (document.getElementById("output").innerHTML =
    '<span style = "text-transform:capitalize;">' + inputValue + "</span>");
  if (inputValue === "") {
    alert("Enter value first!");
  }

  document.getElementById("original").innerHTML = inputValue;
  document.getElementById("output").innerHTML = capitalizedCase;
}

/* This Function is used to create better formatting */

function btrFormatting() {
  let inputValue = document.getElementById("inputValue").value;
  let lowerCase = inputValue.toLowerCase();
  let formattedText = (document.getElementById("output").innerHTML =
    '<span style = "text-transform:capitalize;">' + lowerCase + "</span>");
  if (inputValue === "") {
    alert("Enter value first!");
  }

  document.getElementById("original").innerHTML = inputValue;
  document.getElementById("output").innerHTML = formattedText;
}

/* This Function is used to Print all cities */

let cities = ["Karachi", "Lahore", "Islamabad"];

function printAllCities() {
  for (let i = 0; i < cities.length; i++) {
    document.getElementById("output").innerHTML += cities[i] + "<br />";
  }

  document.getElementById("original").innerHTML = cities;
}

/* This Function is used to add new city in the array */

function addYourCity() {
  let newCity = document.getElementById("inputValue").value;
  if (newCity === "") {
    alert("Enter Your City");
    return;
  }

  let lowercase = newCity.toLowerCase();
  let newCites = cities.map((city) => city.toLowerCase());
  let checkCity = newCites.includes(lowercase);

  if (checkCity) {
    document.getElementById("ouput").innerHTML = "City is Already in the list"
    return;
  }
  else{
    cities.push(newCity);
  }
  

  document.getElementById("original").innerHTML = cities;
  document.getElementById("output").innerHTML = "Your city is added";
}

/* This Function is used to check if a city exists in the list or not */

function checkYourCity() {
  let cityValue = document.getElementById("inputValue").value;

  if (cityValue === "") {
    alert("Enter City first");
  }

  let lowerCase = cityValue.toLowerCase();
  let newCites = cities.map((city) => city.toLowerCase());
  let checkCity = newCites.includes(lowerCase);

  if (checkCity) {
    document.getElementById("output").innerHTML = "You city is in the list";
    return;
  } else {
    document.getElementById("output").innerHTML =
      "Your City is not in the list";
  }
}

/* This Function is used to Find a word  */

