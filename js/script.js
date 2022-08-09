'use strict'

const todos = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');
const holeBtn = document.getElementById('hole'); 
const todoTbl = document.getElementById('todo-tbl');
const tBody = document.getElementById('tbl-body-id');

btn.addEventListener('click', addTodo);
holeBtn.addEventListener('click', fillArrayFromLocalStorage);

/**
 * Push user input to array.
 * Clear input-field
 * Write todos array into localStorage
 */
function addTodo() {
    todos.push(input.value); // Push element into array
    input.value = ''; // Clear input-field
    
    localStorage.setItem("unserArray", todos); // Write array into localstorage

    // HAUSAUFGABE ZU MONTAG > WIE KANN DIE TBL BEFUELLEN OHNE DOPPELTE INFORMATIONEN? 
    populateTblBody(todos);
}

/**
 * Populate todos Array with information from localStorage
 */
function fillArrayFromLocalStorage() {
    let info = localStorage.getItem("unserArray"); // Get item
    
    const newArray = info.split(','); // Convert into array

    // Fill todos array
    newArray.forEach(element => {
        todos.push(element);
    })
}

/**
 * Populate tbl-Body with tr and td elements
 * @param {*} todosArray 
 */
function populateTblBody(todosArray){
    todosArray.forEach(element => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const cellTxt = document.createTextNode(element);
        
        td.appendChild(cellTxt);
        tr.appendChild(td);
        tBody.appendChild(tr);
    });
    
}
