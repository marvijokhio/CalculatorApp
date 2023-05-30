var operand1 = "";
var operand2 = "";
var operation = "";
var operand = "";

function performOperation(operand1,operand2,operation){
    var result = "";
    switch (operation){
        case "add": result   = operand1 + operand2; break;
        case "sub": result = operand1 - operand2; break;
        case "multi" : result = operand1 * operand2; break;
        case "div":  result = operand1 / operand2; break;
        default : result = operand;
    } 
    return result; 
}

function GetInput(input){
    operand = document.getElementById("display").value;
    if(operand1){
        operand2 = operand;
    }else if(!operand1 && !operand2){
        operand1 = operand;
        operand2 = operand1;
    }
    switch (input){
        case "ac": 
            document.getElementById("display").value = ""; operand1 = 0; operand2 = 0; operation = ""; break;
        case "add": operation = "add"; break;
        case "sub": operation = "sub"; break;
        case "multi": operation = "multi"; break;
        case "div": operation = "div"; break;
        case ".": 
            if(operand.includes(".")){
                document.getElementById("display").value = operand;
            }else{
                operand = operand + ".";
                document.getElementById("display").value = operand;
            }
            break;
        case "%": document.getElementById("display").value = operand/100; break;
        case "-": document.getElementById("display").value = operand*-1; break;
        case "=": 
        document.getElementById("display").value = performOperation(operand1,operand2,operation); break;
    }
}

function numberValue(n){
    console.log(n);
    operand += Number(n);
    if(operand1=="" && operand2=="" && operation == ""){
        operand1 = operand;
        operand2 = operand1;
    }
    if(operand1){ 
        operand2 = operand; 
    }
    document.getElementById("display").value = operand;
    console.log("operand", operand);
    console.log("operand1", operand1);
    console.log("operand2", operand2);
}