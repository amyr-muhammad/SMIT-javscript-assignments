//Name of the today
document.getElementById("nameOfToday").addEventListener("click", function () {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = days[new Date().getDay()];
  document.getElementById("output").innerHTML = today;
});

//Days passed since i born
document
  .getElementById("calculateDaysSinceBirth")
  .addEventListener("click", function () {
    let dob = document.getElementById("input").value;
    if (!dob) {
      alert("Enter Value");
    }

    let currentTime = new Date();
    let DobTime = new Date(dob);

    let age = currentTime - DobTime;
    let dayPassed = Math.floor(age / (1000 * 60 * 60 * 24));

    document.getElementById("output").innerHTML = dayPassed;
  });

//When is Your Next Birthday
document.getElementById("nextBirthday").addEventListener("click", function () {
  let dob = document.getElementById("input").value;
  if (!dob) {
    alert("Enter DOB");
  }

  let currentTime = new Date();
  let dobTime = new Date(dob);

  let age = currentTime - dobTime;
  let ageInDays = Math.floor(age / (1000 * 60 * 60 * 24));
  let ageInYears = Math.floor(ageInDays / 365);

  let daysPassed = ageInDays - ageInYears * 365;
  let daysLeft = 365 - daysPassed;

  document.getElementById("output").innerHTML =
    daysLeft + " Days In Your Next Birthday";
});

//Greet Users
document.getElementById("greetuser").addEventListener("click", function () {
  let output = document.getElementById("output");
  let currentHour = new Date().getHours();
  console.log(currentHour);

  if (currentHour >= 8 && currentHour < 12) {
    output.innerHTML = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    output.innerHTML = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    output.innerHTML = "Good Evening";
  } else {
    output.innerHTML = "Good Night";
  }
});

//Function Tell Time
function tellTime() {
  let output = document.getElementById("output");

  let date = new Date();
  let hours = date.getHours();
  console.log(hours);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  output.innerHTML = "You Clicked at " + hours + ":" + minutes + ":" + seconds;
}

//Tell Time 1
document.getElementById("telltimeone").addEventListener("click", function () {
  tellTime();
});

//Tell Time 2
document.getElementById("telltimetwo").addEventListener("click", function () {
  tellTime();
});

//Tell Time 3
document.getElementById("telltimethree").addEventListener("click", function () {
  tellTime();
});

//Calculate Tax
document.getElementById("tax").addEventListener("click", function () {
  let price = +prompt("Enter Price");
  let rate = 17;
  let tax = (price * rate) / 100;

  document.getElementById("output").innerHTML = tax;
});

//calculate Total
document.getElementById("total").addEventListener("click", function () {
  let price = +prompt("Enter Price");
  let rate = 17;
  let total = price + rate;

  document.getElementById("output").innerHTML = total;
});
