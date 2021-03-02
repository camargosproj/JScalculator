const numbers = document.getElementsByClassName("numbers");
const output = document.querySelector('.output');
const sum = document.querySelector('.sum');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
var result = 0;
var isSubtraction;
var isAdition;
var isMultiplication;
var isDivision;




for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click', () => {
        addEventListener('click', compute(numbers[index].innerText)); 
    }) 
    
}

sum.addEventListener('click', add);
subtraction.addEventListener('click', sub);
division.addEventListener('click', div);
multiplication.addEventListener('click', mult);
clear.addEventListener('click', clearFunction);
equal.addEventListener('click', equalFunction);




function compute(num){
    output.innerText += num;    
    
};

function add(){
    
    result += Number(output.innerText);

    output.innerText = "";
    console.log(output.innerText);
    

    console.log(result);

    isAdition = true;
};

function sub(){
    
    result += Number(output.innerText);

    output.innerText = "";
    console.log(output.innerText);
    

    console.log(result);

    isSubtraction = true;
};

function div(){
    
    result += Number(output.innerText);

    output.innerText = "";
    console.log(output.innerText);
    

    console.log(result);

    isDivision = true;
};

function mult(){
    
    result += Number(output.innerText);

    output.innerText = "";
    console.log(output.innerText);
    

    console.log(result);

    isMultiplication = true;
};

function equalFunction(){
    if(isAdition === true){
        result += Number(output.innerText);
        console.log(result);       
        output.innerText = result;
        isAdition = false;

    }else if(isSubtraction === true){
        result -= Number(output.innerText);
        console.log(result);       
        output.innerText = result;
        isSubtraction = false;

    }else if(isDivision === true){
        result /= Number(output.innerText);
        console.log(result);       
        output.innerText = result;
        isDivision = false;

    }else if(isMultiplication === true){
        result *= Number(output.innerText);
        console.log(result);       
        output.innerText = result;
        isMultiplication = false;

    }
   

    result = 0;
    


}

function clearFunction(){    
    output.innerText = "";   
    result = 0;

   
};




