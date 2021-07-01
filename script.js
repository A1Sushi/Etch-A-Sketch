// Function to create a new grid dimension by creating square 'divs'
function createGrid(gridValue) {
    // Adding container selector to variable 
    const container = document.querySelector('#container');
    // loop to create multiple divs 
    for (let i = 1; i <= gridValue * gridValue; i++) {
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
            e.target.style.backgroundColor = 'red'
        })
    })
}

// Select change grid button and place in variable 
const changeGrid = document.querySelector('#changeGrid');
// EL to change grid size when button is clicked
changeGrid.addEventListener('click', () => {
    // Prompt function to ask for new grid change dimensions
    promptNewGrid()
    // Use Reset Function to clear previous grid & recreate new grid with add hover function
    gridReset() 
})

function gridReset() {
    // Use forEach to iterate and remove all previous div cells 
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
    // Change Column + Row dimensions using result of prompt 
    container.style.gridTemplateColumns = `repeat(${newGridValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newGridValue}, 1fr)`;
    // Add new loop to create new square divs & add hover function
    createGrid(newGridValue); 
}

function promptNewGrid() {  
    while (true) {
        let gridValue = prompt("Enter new Grid Dimension!", "Between 0-50"); 
        // cancelling should return nothing 
        if (gridValue === null) {
        // Continue the Loop by Re-Prompting 
            return null
        // If input is less than 0 or greater than 50 or empty (if there is only spaces trim it) or NaN; re-prompt 
        } else if (gridValue < 0 || gridValue > 50 || gridValue.trim() === "" || isNaN(gridValue)) {
            continue;
        // else return the value of 0-50 as a number 
        } else 
        return newGridValue = parseInt(gridValue, 10);
    }
}

/* Current
    - Attempting Step 5 
*/

