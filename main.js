
const inputField = document.querySelector('.inp');
const form = document.querySelector('.form');
const ul = document.querySelector('.list');
const clearBtn = document.querySelector('.clearBtn');
const taskTable = [];
let liTable = []; //table with new li with tasks
const elementsLi = document.getElementsByClassName('elementList');
const searchFieldUl = document.querySelector('.searchUl')

const addTask = () => {
    event.preventDefault();
    //console.log('dodano')
    // console.log(inputField.value);
    if (inputField.value == '') return;
    const newTask = inputField.value;

    const newLiElement = document.createElement('li');
    newLiElement.textContent = newTask;
    newLiElement.classList.add('elementList');

    ul.appendChild(newLiElement);
    liTable.push(newLiElement);

    newLiElement.addEventListener('click', deleteTask);
    inputField.value = '';
}


const deleteTask = () => {
    // console.log('deleted');
    ul.removeChild(event.target);
    liTable = [...elementsLi];

    //creates new list of available elements

}

const clearList = () => {
    ul.textContent = '';
    searchFieldUl.textContent = '';
    taskTable.length = 0;
    inputField.value = '';
    liTable.length = 0;
}


const check = () => {
    searchFieldUl.textContent = '';

    const searched = event.target.value;
    if (searched == '') return;
    const co = liTable.filter(any => any.textContent.toLowerCase().includes(searched));
    // console.log(co);

    co.forEach(element => searchFieldUl.appendChild(element.cloneNode(true)));

    // (!) appendChild moves node instead duplicate! Without clone node any given element dissapears from the first list
}

form.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearList);
inputField.addEventListener('input', check)