var num1 = '';
var num2 = '';
var firstInput = true;
var acc;
var text;
document.getElementById('mainInput').value = '';
document.getElementById('subInput').value = '';

function isNumber(self){
    if(document.getElementById('mainInput').value == 0){
        document.getElementById('mainInput').value = '';
    }
    if(document.getElementById('subInput').value == 0){
        document.getElementById('subInput').value = '';
    }
    if(firstInput == true){
        num1 += self.id;
        console.log("num1 : %s", num1);   
    }
    else{
        num2 += self.id;
        console.log("num2 : %s", num2);   
    }       

    document.getElementById('mainInput').value += self.id;
    document.getElementById('subInput').value += self.id;
}

function gesan(sign){

    console.log("text: %d", text);

    if (sign != '-'&&document.getElementById('subInput').value != ''){
        acc = sign.id;
        firstInput = false;
    }

    document.getElementById('subInput').value += sign.id;
    document.getElementById('mainInput').value = '';

    console.log("acc : %s", acc);
    console.log("firstInput:", firstInput);
}

function result(){ 
    text = document.getElementById('subInput').value;

    text = text.substring(1, -1);
    console.log(text);

    if(text == '-'){
        num1 *= -1;
    }

    console.log("acc : ", acc);
    firstInput = true;   
    switch(acc){
        case '+':  
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num1 += num2;
        console.log("num1 : %d", num1);
            break;
        case '-':
            num1 -= num2;
            console.log("num1 : %d", num1);
            break;
        case '*':
            num1 *= num2;
            console.log("num1 : %d", num1);
            break;
        case '÷':
            num1 /= num2;
            console.log("num1 : %d", num1);
            break;
        case '':
            num1 = num1;
            console.log("num1 : %d", num1);
    }
    document.getElementById('mainInput').value = num1;
    document.getElementById('subInput').value = num1;
    num2 = '';
    minus = false;
}

function reset(){
    num1 = 0;
    num2 = '';
    document.getElementById('mainInput').value = 0;
    document.getElementById('subInput').value = 0;
} 

function del(){
    text = document.getElementById('subInput').value;

    text = text.substring(0, text.length-1);
    console.log("%s", text);
    
    if(firstInput == true){
        num1 = text;
        text = num1
        console.log("num1 : %s", num1);
    }   
    else if(text.length == '+'||'-'||'*'||'÷'){
        if(text.length != 0){
        console.log("acc : %s", acc);
        acc = '';
        firstInput = true;
        console.log("firstInput:",firstInput);
        }  
    }
    else{
        num2 = text.substring(num1.length, text.length-1);
        text = num1+acc+num2;
        console.log("num2 : %c", num2);
    }

    document.getElementById('mainInput').value = text;
    document.getElementById('subInput').value = text;
}