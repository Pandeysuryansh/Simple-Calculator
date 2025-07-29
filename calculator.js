let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let result = document.getElementById("result");



console.log(input1);
console.log(input2);


function add(){
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  result.textContent = "Result:"+ (num1+num2);

}

function sub(){
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  result.textContent = "Result:"+ (num1-num2);

}

function mutiply(){
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  result.textContent = "Result:"+ (num1*num2);

}

function div(){
  let num1 = parseInt(input1.value);
  let num2 = parseInt(input2.value);
  if(num2===0){
    result.textContent = "Result:"+ 0;

  }
  else{
    result.textContent = "Result:"+ (num1/num2);
  }

}

document.getElementById("add-btn").addEventListener('click',add);
document.getElementById("sub-btn").addEventListener('click',sub);
document.getElementById("multiply-btn").addEventListener('click',mutiply);
document.getElementById("div-btn").addEventListener('click',div);
