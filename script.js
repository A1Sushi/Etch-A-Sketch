// Function to create a new grid dimension by creating square 'divs'
function createGrid(gridChange) {
    // Adding container selector to variable 
    const container = document.querySelector('#container');
    // loop to create multiple divs 
    for (let i = 1; i <= gridChange * gridChange; i++) {
        const content = document.createElement('div');
        // Add class name to each div based on # 
        content.classList = "cell " + i;
        // Adding new 'divs' to the DOM under container div 
        container.appendChild(content); 
    }
    // Add color function after grid is created 
    hover();
}
// Default Grid of 16x16 
createGrid(16);

// Function for color change 
function hover() {
    // Selector to contain all cells in a nodelist 
    const cells = document.querySelectorAll('.cell');
    // Use forEach method to iterate through each cell
    cells.forEach((cell) => {
        // and for each one we add a Event Listener  
        cell.addEventListener('mouseenter', (e) => {
            // e references event and .target property returns element that triggered event
            // Adding style to whatever element is returned from EL 
            e.target.style.backgroundColor = 'grey'
        })
    })
}

// Select change grid button and place in variable 
const changeGrid = document.querySelector('#changeGrid');
// EL to change grid size when button is clicked
changeGrid.addEventListener('click', () => {
    // Prompt function to ask for new grid change dimensions
    
    // Reset the grid & recreat new grid & add hover feature 
    gridReset() 
    
})

// Can probably make extra functions and call them inside EL
// Add whatever resets the grid and adds color function + new dimensions
function gridReset() {
    // Use forEach to iterate and remove all previous div cells 
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
    // Change Column + Row dimensions using result of prompt 
    container.style.gridTemplateColumns = `repeat(${newGridValue }, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newGridValue }, 1fr)`;
    // Add new loop to create new square divs & add hover function
    createGrid(gridChange); 
    hover();
}

// Prompt Function
    // while loop is true run the following conditions *
    // Convert value entered into prompt as number since it is stored as a string *
    // if (...) *
        // user enters a number that is less than 0 or greater than 100 * 
        // user enters something that is NaN (non-numbers, empty-strings = NaN) *
        // continue loop by re-prompting until conditions are false *
    // else if (gridValue is user cancels - should return null) *
        // Do nothing *
    // else (values between 0-100) *  
        // return the grid value *

function promptNewGrid() {  
    while (true) {
        let gridValue = prompt("Enter new Grid Dimension!"); 
        // If input is less than 0 or greater than 100 or empty or NaN; re-prompt 
        if (gridValue < 0 || gridValue > 100 || gridValue === "" || isNaN(gridValue)) {
        // Continue the Loop by Re-Prompting 
            continue;
        // cancelling should return nothing 
        } else if (gridValue === null) {
            return;
        } return newGridValue = parseInt(gridValue, 10);
    }
}

/* Current
    - Time to refractor the code a bit to clean up and move on 
    - Add prompt function to EL 
*/

