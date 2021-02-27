const numbers = document.getElementsByClassName("numbers");
const output = document.querySelector('.output');
const sum = document.querySelector('.sum');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
var result = 0;


for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click', () => {
        addEventListener('click', compute(numbers[index].innerText)); 
    }) 
    
}

sum.addEventListener('click', add);
clear.addEventListener('click', clearFunction);
equal.addEventListener('click', equalFunction);




function compute(num){
    output.innerText += num;

    
};

function add(){
    result += Number(output.innerText);

    output.innerText = "";

    console.log(result);

    return true;
};

function equalFunction(){
    if (add() === true){
        result += Number(output.innerText);  
        output.innerText = result;
        console.log(result);
    }
    result = 0;

}

function clearFunction(){    
    output.innerText = "";   
    result = 0;

   
};




