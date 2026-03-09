

document.getElementById("round").onclick = function(){
    let val = document.getElementById("input").value;

    if(val === "" || isNaN(val) ){
        alert("Enter A number please!")
    }
    
    let roundVal =  Math.round(val);

    document.getElementById("original").innerHTML = val;
    document.getElementById("output").innerHTML = roundVal;
    
}


document.getElementById("ceil").onclick = function(){
    let val = document.getElementById("input").value;

    if(val === "" || isNaN(val) ){
        alert("Enter A number please!")
    }
    
    let ceilVal =  Math.ceil(val);

    document.getElementById("original").innerHTML = val;
    document.getElementById("output").innerHTML = ceilVal;
    
}


document.getElementById("floor").onclick = function(){
    let val = document.getElementById("input").value;

    if(val === "" || isNaN(val) ){
        alert("Enter A number please!")
    }
    
    let floorVal =  Math.floor(val);

    document.getElementById("original").innerHTML = val;
    document.getElementById("output").innerHTML = floorVal;
    
}


document.getElementById("random").onclick = function(){
    
    let randomVal =  Math.random();

    document.getElementById("output").innerHTML = randomVal;
    
}


document.getElementById("dice").onclick = function(){
    
    let randomVal =  Math.floor(Math.random()*6)+1;

    document.getElementById("output").innerHTML = randomVal;
    
}



document.getElementById("strongPassword").onclick = function(){
    let codeLength = document.getElementById("input").value;

    if(codeLength === "" || isNaN(codeLength) ){
        alert("Enter A number please!")
        return;
    }

    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetters = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let symbols = "@#$%^&*()?!"
    let allCharacters = capitalLetters + smallLetters + numbers + symbols;
    let allCharactersLength = allCharacters.length;

    let password = "";

    for(let i=0; i<codeLength; i++){

       let indexNumber = Math.floor(Math.random()*allCharactersLength);
       password += allCharacters.charAt(indexNumber);


    }
    

    document.getElementById("original").innerHTML = codeLength;
    document.getElementById("output").innerHTML = password;
    
}

