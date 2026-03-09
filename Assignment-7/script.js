function showOutput(output) {
  document.getElementById("output").innerHTML = output;
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

let now = new Date();
let today = now.getDay();

//if else
function ifEsleStatment() {
  if (today === 0) {
    showOutput("Its Sunday");
  } else if (today === 1) {
    showOutput("Its Monday");
  } else if (today === 2) {
    showOutput("Its Tuesday");
  } else if (today === 3) {
    showOutput("Its Wednesday");
  } else if (today === 4) {
    showOutput("Its Thursday");
  } else if (today === 5) {
    showOutput("Its Friday");
  } else if (today === 6) {
    showOutput("Its Saturday");
  }
}

document.getElementById("ifelseif").addEventListener("click", function () {
  ifEsleStatment();
});

//Switch statments

function swicthStatment() {
  switch (today) {
    case 0:
      showOutput("Its Sunday with switch");
      break;
    case 1:
      showOutput("Its Monday with switch");
      break;
    case 2:
      showOutput("Its Tuesday with switch");
      break;
    case 3:
      showOutput("Its Wednesday with switch");
      break;
    case 4:
      showOutput("Its Thirsday with switch");
      break;
    case 5:
      showOutput("Its Friday with switch");
      break;
    case 6:
      showOutput("Its Saturday with switch");
      break;

    default:
      showOutput("Not a day bro!");
      break;
  }
}

document.getElementById("switch").addEventListener("click", function () {
  swicthStatment();
});


//Keep Asking the name 

function keepAskingName(){
    do {
        let name = prompt("Enter Your Name");
    } while (name === null || name.length < 3);
    showOutput(name);
}

document.getElementById("askname").addEventListener("click", function(){
    keepAskingName()
})