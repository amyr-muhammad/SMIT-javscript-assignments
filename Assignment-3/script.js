/* This Function is used to create a simple alert */

function simpleAlert() {
  alert("Just a Simple Alert");

  document.getElementById("original").innerHTML = "alert(Just a Simple Alert)";
  document.getElementById("output").innerHTML = "Just a Simple Alert";
}

/* This Function is used to get name from user and print on screen */

function printUserName() {
  let userValue = document.getElementById("userName").value;
  if (userValue === "") {
    alert("please type your name");
    return;
  }
  document.getElementById("original").innerHTML = userValue;
  document.getElementById("output").innerHTML = "Your name is: " + userValue;
}

/* This function is used to Print all cities */

let arrCity = ["Lahore", "Karachi", "Faisalabad", "Islamabad"];

function printAllCities() {
  for (let i = 0; i < arrCity.length; i++) {
    document.getElementById("output").innerHTML += arrCity[i] + "<br />";
  }

  document.getElementById("original").innerHTML = arrCity;
}

/* This Function will add the user city in array */

function addCity() {
  let userCity = document.getElementById("userName").value;

  if (userCity === "") {
    alert("Enter Your City");
    return;
  }

  arrCity.push(userCity);
  document.getElementById("original").innerHTML = arrCity;
}

/* This Function generate a Number Table */

function genTable() {
  let numValue = Number(document.getElementById("userName").value);

  if (Number.isNaN(numValue) || numValue == "") {
    alert("Enter A Number please!");
    document.getElementById("original").innerHTML = numValue;
    document.getElementById("output").innerHTML = "Enter A Number please!";
    return;
  } else {
    document.getElementById("original").innerHTML =
      "Number you Entered is " + numValue;

    for (let i = 1; i <= 10; i++) {

        let results = numValue*i

      document.getElementById("output").innerHTML += numValue + " x " + i + " = " + results + "<br />";
    }
  }
}

/* This Functions Clear the ouput By clicking clear output Button */

function clearOutput(){
    document.getElementById("output").innerHTML = "";
}

