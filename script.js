

document.getElementById("btnCalc").onclick = function(){
    let dogAge = document.getElementById("txtDogAge").value;
    let humanAge = 0;
    let dogSize = document.getElementById("radLarge");
    if(dogAge >= 1){
        humanAge += 15;
    }
    if(dogAge >=2){
        humanAge += 9;
    }
    if (dogAge >= 3){
        if(dogSize.checked){
        humanAge += (dogAge - 2) * 5;
        }
        
        else{
            humanAge += (dogAge - 2) * 4;
        }
    }
    document.getElementById("result").innerHTML = "Your dog is " + humanAge;
}