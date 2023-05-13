var num1 = 0;
var num2 = "";
var oper = "";
const inputScreen = document.getElementById("inputScreen");

function operator(op){
    num1 = num1 + Number(inputScreen.value);
    if(num2 !== ""){
        switch(oper){
            case '+':
                num2 = Number(num2) + num1;
                num1 = 0
                break;
            case '-':
                num2 = Number(num2) - num1;
                num1 = 0
                break;
            case 'x':
                num2 = Number(num2) * num1;
                num1 = 0
                break;
            case '÷':
                num2 = Number(num2) / num1;
                num1 = 0
                break;        
        }
    }
    else{
        num2 = num1
        num1 = 0
    }
    
    oper = op.value
    inputScreen.value = ""
    console.log(num2)
    console.log(oper)
    
}

function btnValue(e){
        calculator.inputScreen.value += e.value;
}

function btnClear(){
    calculator.inputScreen.value = null;
    num1 = 0;
    num2 = 0;
    oper = "";
}

function btnEqual(){
    num1 = num1 + Number(inputScreen.value);
    if(num2 !== ""){
        switch(oper){
            case '+':
                num2 = Number(num2) + num1;
                num1 = 0
                break;
            case '-':
                num2 = Number(num2) - num1;
                num1 = 0
                break;
            case 'x':
                num2 = Number(num2) * num1;
                num1 = 0
                break;
            case '÷':
                num2 = Number(num2) / num1;
                num1 = 0
                break;        
        }
    }
    else{
        num2 = num1
        num1 = 0
    }
    inputScreen.value = num2 
    num1 = 0;
    num2 = 0;
    oper = "";
}

function toggler(e){
    const list = document.getElementById("toggleBtn").classList;
    list.toggle("slide");
    if(list[1]=="slide"){
        document.getElementById("container").style.backgroundColor = "#333";
    }
    else{
        document.getElementById("container").style.backgroundColor = "#CCC"
    }
}


