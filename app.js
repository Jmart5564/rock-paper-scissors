// import needed modules
import { getRandomItem, score } from './utils.js';

// state
let choice = ['rock', 'paper', 'scissors'];
let total = 0;
let wins = 0;
let draws = 0;
let thrown = '';
let computer = '';


function handleThrow(thrown) {

    thrown = getRandomItem(choice);
    const result = score(thrown, computer);


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
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const drawsDisplay = document.getElementById('draws-display');
const totalDisplay = document.getElementById('total-display');




function displayResults() {
    winsDisplay.textContent = wins;
    totalDisplay.textContent = total;
    drawsDisplay.textContent = draws;
    lossesDisplay.textContent = total - wins;
}


// page load actions


