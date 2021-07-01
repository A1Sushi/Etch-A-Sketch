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
    // while loop and set to true *
    // Use if statement to re-prompt if certain conditions are met *
    // use else statment for >0 && <100 *
    // Change value to number *
    // Don't use Number() on prompt because it will convert null to 0 *

function promptNewGrid() {  
    while (true) {
        let gridValue = prompt("Enter new Grid Dimension!", "0-100"); 
        // If num is less than 0 or greater than 100 or null or empty; re-prompt 
        if (gridValue < 0 || gridValue > 100 || gridValue === NaN || gridValue === "") {
        // Continue the Loop by Re-Prompting 
            continue;
        // else prompt and return number
        } else {
            return newGridValue = parseInt(gridValue, 10);
        }
    }
}

// Prompt Function 2
    // Use if statement to accept limit for max of 100 x 100 
    // use else statment for anything negative or over 100
    // Change value to number
    // Issue is after reprompt it doesn't return the value, maybe use a loop
    // Can either use loops or recursions (calling function inside function)

// function promptNewGrid() {
//     while (true) prompt:
//     { let gridChange = Number(prompt("Enter new Grid Dimension!"));
//         // If num is from 0-100 return value 
//         if (gridChange >= 0 && gridChange <= 100) {
//             console.log(typeof gridChange);
//             return gridChange;
//         // If canceled just end function 
//         } else if (gridChange === null) {
//             return; 
//         // else go to prompt label and re-prompt until condition is satisfied 
//         } else {
//             break prompt;   
//         }
//     }
// }

console.log(promptNewGrid())

/* Current
    - Time to refractor the code a bit to clean up and move on 
    - Trying to get re-prompt to return a value once right condition is met
*/

