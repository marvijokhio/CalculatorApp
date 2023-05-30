var operand2 = "";
var operation = "";
var operand1 = "";
var d = "";
var flag = false;
var result = "";

function allClear() {
    console.log('allClear');
    document.getElementById("display").value = "";
    operand2 = ""
    operation = ""
    operand1 = ""
    d = ""
    flag = false;
    result= "";
}

function invertSign(){
    var invertVal = Number(document.getElementById("display").value) * -1;
    document.getElementById("display").value = invertVal;
    flag = false;
}

function percent(){
    operand2 = document.getElementById("display").value/100;
    document.getElementById("display").value = operand2;
    flag = false;
}

function division(){
    setOperationOperands('division');       
}

function multiplication(){
    setOperationOperands('multiplication');    
}

function addition(){
    setOperationOperands('addition');    
}

function subtraction(){
    setOperationOperands('subtraction');
}

function theDot(){
    console.log('theDot');
    if(!document.getElementById("display").value.includes(".")){
        d = ".";
        d = document.getElementById("display").value + d;
        document.getElementById("display").value = d;
        flag = false;
    }
}

function getNumber(digit){
    d = d + digit.toString();
    document.getElementById("display").value = d;
    flag = false;
}

function setOperationOperands(opertn){
    if(operation==""){
        operation = opertn;
        operand1 = document.getElementById("display").value;
    }else if(operand2==""){
        operation = opertn;
        operand2 = document.getElementById("display").value;
    }else{
        operation = opertn;
        operand1 = operand2;
        operand2 = document.getElementById("display").value;  
    }
    d = "";
    if(operand1!="" && operand2!="" && flag==false){
        equals();
        flag = true;
    }
}

function equals(){
    console.log('equals');
    if (operand1!="" && operation!="" && operand2==""){
        operand2 = document.getElementById("display").value;
    }else if(operand1!="" && operation!="" && operand2!="" && flag==false){
        operand2 = document.getElementById("display").value;
        if(result!=""){
            operand1 = result;
        }
    }else if(operand1!="" && operation!="" && operand2!=""){
        operand1 = document.getElementById("display").value;
    }else{
        operand1 = document.getElementById("display").value;
    }

    if(operand1!="" || operation!=""){
        operand1 = Number(operand1)
        switch(operation) {
            case 'addition': result = operand1 + Number(operand2); document.getElementById("display").value = result ;  break;
            case 'subtraction': result = operand1 - Number(operand2); document.getElementById("display").value = result;  break;
            case 'multiplication': result = operand1 * Number(operand2); document.getElementById("display").value = result;  break;
            case 'division': result = operand1 / Number(operand2); document.getElementById("display").value = result;  break;
        }
    }else{
        console.log('Condition False');
    }
}
