const numbers = document.getElementsByClassName("numbers");
const output = document.querySelector('.output');


for (let index = 0; index < numbers.length; index++) {
    numbers[index].addEventListener('click', () => {
        output.innerText = numbers[index].innerText;

    }) 
    
}



