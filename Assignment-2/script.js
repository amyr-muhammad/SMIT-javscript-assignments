/* This Function is used to concatenate some strings */

document.getElementById("concatenate").onclick = function () {
  alert("String is Concatenated with + sign");

  let str1 = prompt();
  let str2 = prompt();

  document.getElementById("original").innerHTML = str1 + "+" + str2;
  document.getElementById("output").innerHTML = str1 + " " + str2;
};

/* This Function is used to Ask Name from user */

document.getElementById("name").onclick = function () {
  alert("Can You Tell me your Name!");

  let userName = prompt();
  let nameStr = "Your name is: ";

  document.getElementById("original").innerHTML = userName;
  document.getElementById("output").innerHTML = nameStr + userName;
};

/* This function is used to Show comparison operators */

document.getElementById("operators").onclick = function () {
  alert("Operators are shown below!");

  document.getElementById("original").innerHTML = "==, ===, <, >=, <=, !=, !==";
  document.getElementById("output").innerHTML =
    " == Check only values <br />=== values and data types <br /> > greater then <br /> < less then <br /> >= greater and equal <br /><= less and eaqual <br />!= not equal checks only value <br /> !== not equal, data type and value";
};

/* This functions execute a simple if else statement */

document.getElementById("ifElseIf").onclick = function () {
  alert("Lets Execute a simple if else if Statement.");

  let marks = prompt();

  if (marks >= 90) {
    alert("Your grade is A+");
    document.getElementById("original").innerHTML = "Marks = " + marks;
    document.getElementById("output").innerHTML = "Your grade is A+";
  } else if (marks >= 80) {
    alert("Your grade is A");
    document.getElementById("original").innerHTML = "Marks = " + marks;
    document.getElementById("output").innerHTML = "Your grade is A";
  } else if (marks >= 70) {
    alert("Your grade is B");
    document.getElementById("original").innerHTML = "Marks = " + marks;
    document.getElementById("output").innerHTML = "Your grade is B";
  } else {
    alert("Your grade is F");
    document.getElementById("original").innerHTML = "Marks = " + marks;
    document.getElementById("output").innerHTML = "Your grade is F";
  }
};

/* This Function is used to check Age and Weight (without nesting) */

document.getElementById("testingSets").onclick = function () {
  alert("Lets Chech You're Fat or Not!");

  let age = prompt("Enter your age");
  let weight = prompt("Enter your weight");

  if (age >= 18 && weight >= 70) {
    alert("Your are fat");
    document.getElementById("original").innerHTML =
      "Your age is " + age + " Your weight is " + weight;
    document.getElementById("output").innerHTML = "Your are FAT!";
  } else if (age >= 18 && weight <= 70) {
    alert("Your are Smart");
    document.getElementById("original").innerHTML =
      "Your age is " + age + " Your weight is " + weight;
    document.getElementById("output").innerHTML = "Your are Smart!";
  } else {
    alert("You are baby");
    document.getElementById("original").innerHTML =
      "Your age is " + age + " Your weight is " + weight;
    document.getElementById("output").innerHTML = "Your are baby!";
  }
};

/* This Function is used to check Age and Weight (with nesting) */

document.getElementById("nested").onclick = function () {
  alert("Lets Check You're Fat or Not!");

  let age = prompt("Enter your age");

  if (age >= 18) {
    let weight = prompt("Enter your weight");
    if (weight >= 70) {
      alert("Your are fat");
      document.getElementById("original").innerHTML =
        "Your age is " + age + " Your weight is " + weight;
      document.getElementById("output").innerHTML = "Your are FAT!";
    } else {
      alert("Your are Smart");
      document.getElementById("original").innerHTML =
        "Your age is " + age + " Your weight is " + weight;
      document.getElementById("output").innerHTML = "Your are Smart!";
    }
  } else {
    alert("Your are Baby");
    document.getElementById("original").innerHTML = "Your age is " + age;
    document.getElementById("output").innerHTML = "Your are Baby!";
  }
};

/* This Function is used to make a fake login */

document.getElementById("login").onclick = function () {
  let userName = prompt("Enter User Name");
  let password = prompt("Enter Password");

  if (userName === "Ameer" && password === "123") {
    alert("You are logged In");
  }
  else{
    alert("wrong password or username");
  }
};

/* These functions are use to clear statements and output/results */

document.getElementById("clearStatement").onclick = function (){
    document.getElementById("original").innerHTML=""
}

document.getElementById("clearOutput").onclick = function (){
    document.getElementById("output").innerHTML=""
}
