// This is for experiment six
function add(){
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    if(val1 === "" || val2 === ""){
        document.getElementById("result").innerHTML = "Please Enter Both Number";
        return;
    }   
    let result = Number(val1) + Number(val2);
    document.getElementById("result").innerHTML = result;
}

// This is for Exeperiment Seven

function EvenOdd(){
   let number =  document.getElementById("even_odd").value;
   if(number === ""){
    document.getElementById("even-odd").innerHTML = "Please Enter a Number";
    return;
   }    
   if (Number(number) %2 === 0){
    document.getElementById("even-odd").innerHTML = "Even Number";
   }else{
    document.getElementById("even-odd").innerHTML = "Odd Number";
   }
}

// Lagest in two numbers

function findLargest(){
    let largest1 = document.getElementById("largest1").value;
    let largest2 = document.getElementById("largest2").value;
    if(largest1 === "" || largest2 === ""){
        document.getElementById("largest-result").innerHTML = "Please Enter Both Number";
        return;
    }
   else if(largest1 >largest2){
        document.getElementById("largest-result").innerHTML = `First Number is large : ${largest1}`;
    }else{
        document.getElementById("largest-result").innerHTML = `Second Number is large : ${largest2}`;

    }
}

// Function of find factorial

function findFactorial(){
    let number = document.getElementById("factorial").value;
    let result = 1;
    if(number === ""){
        document.getElementById("factorial-result").innerHTML = "Please Enter a Number";
        return;
    }
    for(let i=1; i<= Number(number); i++){
        result *=i
    }
    document.getElementById("factorial-result").innerHTML = `Factorial : ${result}`;

}


// Sum of N natural Numbers

function sumNatural(){
    let num = document.getElementById("sum_natural").value;
    if(num === ""){ 
        document.getElementById("sum-result").innerHTML = "Please Enter a Number";
        return;
    }
    let result = (Number(num) * (Number(num) +1))/2;
    document.getElementById("sum-result").innerHTML = result;
}


// Checking NUmber is Palindrome or Not

function checkPalindrome(){
    let num = Number(document.getElementById("palindrome").value);
    let orginal = num;
    let digit = "";
    if(num === 0){
        document.getElementById("palindrome-result").innerHTML = "Please Enter a Number";
        return ;
    }
    while(num > 0){
    digit += num % 10;
    num = Math.floor(num / 10);
}
if(orginal === Number(digit)){

    document.getElementById("palindrome-result").innerHTML = "Palindrome Number";
}else{
    document.getElementById("palindrome-result").innerHTML = "Not Palindrome Number";
}

}