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

// Future Color Selections 
// Function for color change (Rainbow)
function randomRGB() {
    // Use math.floor to generate random value btween 1-255
    return Math.floor(Math.random() * 255)
}

// Function for 10% Black Increments 
// Figure out how to get 0.1 to increase each time it is used 
    // Maybe with a loop
function blackShade() {
    // 10% black, add 0.1 each time to increase by 10%
        // 'rgba(0, 0, 0, 0.1)' 
    for (i = 0.1; i <= 1.0; i+= 0.1) {
        // return rgba(0, 0, 0, i); 
        console.log (i)
        // console.log(i);
    }
}
console.log(blackShade())

// Testing using red for now 
// Try simplyifing the if else statement to something easier to test 
// Split up 2 cells.forEach and make a conditional inside hover function 
function hover() {
    // Selector to contain all cells in a nodelist 
    const cells = document.querySelectorAll('.cell');
    // Add e.target to a variable 
    // Use forEach method to iterate through each cell
    cells.forEach((cell) => {
        // and for each one we add a Event Listener  
        cell.addEventListener('mouseenter', (e) => {
            // e references event and .target property returns element that triggered event
            // if cell is white, add RGB color to the background
            if (e.target.style.backgroundColor === "") {
                // console.log(e.target.style.backgroundColor)
                e.target.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
                // console.log(e.target.style.backgroundColor)
            // else add 10% black to the color 
            } else {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)' 
                // console.log(e.target.style.backgroundColor)
            }
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
        // cancelling should return previous grid dimensions 
        if (gridValue === null) {
            return newGridValue = 16;
        // If input is less than 0 or greater than 50 or empty (if there is only spaces trim it) or NaN; re-prompt 
        } else if (gridValue < 0 || gridValue > 50 || gridValue.trim() === "" || isNaN(gridValue)) {
            // Continue the Loop by Re-Prompting 
            continue;
        // else return the value of 0-50 as a number 
        } else 
        return newGridValue = parseInt(gridValue, 10);
    }
}

/* 
Current
- Step 5: Try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
- Working on hover function 

Question
- 
*/

