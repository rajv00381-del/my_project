function Result(){
    let data1 = document.getElementById("first").value;
    let data2 = document.getElementById("second").value;

    let result = Number(data1) + Number(data2);
    document.getElementById("result").innerHTML = result;
    document.getElementById("first").value ="";
    document.getElementById("second").value ="";
}

let inputs = document.getElementById("calculator-inputs");
let results = document.getElementById("calculator-results");
let keys = document.querySelectorAll("#calculator-container .keys table button");
let previous = [];

keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        let buttonValue = key.innerText;
        if(buttonValue === "AC"){
            inputs.value = "";
        }
        else if(buttonValue === "DEL"){
            inputs.value = inputs.value.slice(0, -1);
        }
        else if(buttonValue === "PRE"){
            inputs.value = previous;
        }
        else if(buttonValue === "="){
            try{
               previous.push(inputs.value);
                results.value = eval(inputs.value);
            }
            catch(error){
                inputs.value = "Error";
            }   
        }
        else{
            inputs.value += buttonValue;
        }
    });
});


