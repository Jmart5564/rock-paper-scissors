// import needed modules
import { getRandomItem, score } from './utils.js';

// state
let choice = ['rock', 'paper', 'scissors'];
let total = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let computer = '';


function handleThrow(thrown) {

    
    computer = getRandomItem(choice);
    const result = score(thrown, computer);

    if (result === 1) {
        wins++;
    }
    if (result === 0) {
        draws++;
    }
    if (result === -1) {
        losses++;
    }
    total++;

    displayResults();
    
}


// components
    // component
    // define and grab DOM elements

    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
const rockButton = document.getElementById('rock-button');
rockButton.addEventListener('click', () => {
    handleThrow('rock');
});

const paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', () => {
    handleThrow('paper');
});

const scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', () => {
    handleThrow('scissors');
});




const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const totalDisplay = document.getElementById('total-display');




function displayResults() {
    winsDisplay.textContent = wins;
    totalDisplay.textContent = total;
    drawsDisplay.textContent = draws;
    lossesDisplay.textContent = losses;
}


// page load actions
displayResults();

