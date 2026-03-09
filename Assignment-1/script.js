/*This Fucntion is used to generate a Alert */

document.getElementById("btn").onclick = function() {
    alert("Alert Button!");

    document.getElementById("statement").innerHTML = "Alert Button!";

    document.getElementById("output").innerHTML = "This is used to Create an Alert!";
}

/*This Fucntion is used to generate a Random number */

let randomNumber = Math.floor(Math.random()*100) + 1;

document.getElementById("num").onclick = function() {
    alert("Alert Number!");

    document.getElementById("statement").innerHTML = "Alert Number!";

    document.getElementById("output").innerHTML = randomNumber;
}

/*This Fucntion is used to show variable Naming conventions */

document.getElementById("variable").onclick = function() {
    alert("Variables Naming Convention");

    document.getElementById("statement").innerHTML = "Variables Naming convention!";

    document.getElementById("output").innerHTML = "<ul> <li>Variable names must start with a letter, underscore (_) or dollar sign ($) and cannot start with a number.</li> <li>Numbers can be used in variable names but only after the first character.</li> <li>Spaces are not allowed in variable names.</li>  <li>Special characters such as @ # % & * ! are not allowed in variable names. </li> <li>JavaScript reserved keywords like if, else, function and return cannot be used as variable names.</li> <li>Variable names are case-sensitive so userName and username are considered different.</li> <li>Variable names should be meaningful and readable so the code does not look painful later.</li> <li>CamelCase naming convention is commonly used for variables in JavaScript.</li></ul>";
}

/*This Function is used to show simple camelCase Examples  */

document.getElementById("camelcase").onclick = function (){
    alert("CamelCase Examples!")

    document.getElementById("statement").innerHTML = "CamelCase Exmaples!"

    document.getElementById("output").innerHTML = "<ul><li>userName</li> <li>totalPrice</li> <li>isUserLoggedIn</li> <li>fetchUserData</li> </ul>"

}

/* This Code take 2 random numbers and add them, function is wriiten below*/
let randomSumNumber1 = Math.floor(Math.random()*100) + 1;
let randomSumNumber2 = Math.floor(Math.random()*100) + 1;
let sumResult = randomSumNumber1 + randomSumNumber2;

document.getElementById("sum").onclick = function (){
    alert("Two random numbers Added")

    document.getElementById("statement").innerHTML = randomSumNumber1 + "+" + randomSumNumber2;
    document.getElementById("output").innerHTML = sumResult;
}

/* This code take 2 random numbers and subtract it, funtion is written down */

let randomSubNumber1 = Math.floor(Math.random()*100) + 1;
let randomSubNumber2 = Math.floor(Math.random()*100) + 1;
let subResult = randomSubNumber1 - randomSubNumber2;


document.getElementById("substract").onclick = function (){
    alert("Two random Numbers Subtracted")

    document.getElementById("statement").innerHTML = randomSubNumber1 + "-" + randomSubNumber2 ;
    document.getElementById("output").innerHTML = subResult;
}

/* This code take 2 random Numbers and Multiply them */

let randomMulNumber1 = Math.floor(Math.random()*100) + 1;
let randomMulNumber2 = Math.floor(Math.random()*100) + 1;
let mulResult = randomMulNumber1 * randomMulNumber2;


document.getElementById("multiply").onclick = function (){
    alert("Two random Numbers Multiplied")

    document.getElementById("statement").innerHTML = randomMulNumber1 + "*" + randomMulNumber2 ;
    document.getElementById("output").innerHTML = mulResult;
}


/* This code take 2 random Numbers and Divide them */

let randomDivNumber1 = Math.floor(Math.random()*100) + 1;
let randomDivNumber2 = Math.floor(Math.random()*100) + 1;
let divResult = randomDivNumber1 / randomDivNumber2;


document.getElementById("divide").onclick = function (){
    alert("Two random Numbers Divided")

    document.getElementById("statement").innerHTML = randomDivNumber1 + "/" + randomDivNumber2 ;
    document.getElementById("output").innerHTML = divResult;
}


/* This function take some random numbers to solve a BODMAS expression */

let randomSomeNumber = (randomSumNumber1 + randomSumNumber2) * randomMulNumber1 - randomSubNumber1 / randomDivNumber1 ;

document.getElementById("someNumber").onclick = function (){
    alert("Random number with same BODMAS Expression");

    document.getElementById("statement").innerHTML = "(" + randomSumNumber1 + " + " + randomSumNumber2 + ")" + " × " + randomMulNumber1 + " - " + randomSubNumber1 + " ÷ " + randomDivNumber1 ;

    document.getElementById("output").innerHTML = randomSomeNumber;
}

/* This function clears and refresh the page for new random numbers */

document.getElementById("clear").onclick = function (){
    window.location.reload()
}

document.getElementById("clearOutput").onclick = function (){
    window.location.reload()
}