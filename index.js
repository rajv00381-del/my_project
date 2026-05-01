let button = document.createElement("button");
let button1 = document.createElement("button");
button.onclick  = add;
button.innerHTML = "AddNumbers";
document.body.appendChild(button);
button1.innerHTML = "Add Input Box";
button1.onclick  = inputBox;
document.body.appendChild(button1);


function add(){
//  let num1 =  document.getElementById("num1").value;
//  let num2 =  document.getElementById("num2").value;
let yes = confirm("Should You Add 2 Numbers:");
if(yes){
let num1 = prompt("enter First Number:");
let num2 = prompt("enter Second Number:");
 let result = Number(num1) + Number(num2);
 let data = document.createElement("h3");
 data.innerHTML = result;
 document.body.appendChild(data);
}else{
    alert("You Are Not Adding Numbers")
}
}

let random_data = ["suchain ","randba", "hai","jo","mara", "lata hai","number","mobile","ma","l","hai"]
    let content =0;
function inputBox(){
let input = document.createElement("input");
input.style.background = "darkblue";
input.style.color = "white";
input.style.padding = "20px";
if(content == 11){
    content = 0
}
input.placeholder = random_data[content];
 document.body.appendChild(input);
 content +=1

}
