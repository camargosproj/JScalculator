const numbers = document.getElementsByClassName("numbers");
const output = document.querySelector('.output');
const adition = document.querySelector('.adition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const percentage = document.querySelector('.percentage');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
var result = 0;
var isSubtraction;
var isAdition;
var isMultiplication;
var isDivision;
var isPercentage;
var prevNumber;



// All the events listener
for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click', () => {
        addEventListener('click', compute(numbers[index].innerText)); 
    }) 
    
}

adition.addEventListener('click', add);
subtraction.addEventListener('click', sub);
division.addEventListener('click', div);
multiplication.addEventListener('click', mult);
percentage.addEventListener('click', percentageFuntion);
clear.addEventListener('click', clearFunction);
equal.addEventListener('click', equalFunction);

function compute(num){
    output.innerText += num;       

};

function add(){    
    result += Number(output.innerText);
    output.innerText = ""; 
    isAdition = true;
};

function sub(){    
    result += Number(output.innerText);
    output.innerText = "";  
    isSubtraction = true;
};

function div(){    
    result += Number(output.innerText);
    output.innerText = "";   
    isDivision = true;
};

function mult(){    
    result += Number(output.innerText);
    output.innerText = "";
    isMultiplication = true;
};

function percentageFuntion(){    
    prevNumber = Number(output.innerText);
    result += Number(output.innerText);
    output.innerText = "";
    isPercentage = true;
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
    else if(isPercentage === true){
        result *= (parseFloat(output.innerText) / 100);
        console.log("sdd", result);   
        console.log(output.innerText);    
        output.innerText = `${prevNumber}% de ${output.innerText} = ${result}`;
        isPercentage = false;
    }
    result = 0;
}

function clearFunction(){    
    output.innerText = "";   
    result = 0;   
};




