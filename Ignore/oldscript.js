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

// Function for color change (Rainbow)
function randomRGB() {
    // Use math.floor to generate random value btween 1-255
    return Math.floor(Math.random() * 255)
}

// Function for 10% Black Increments 
// Figure out how to get 0.1 to increase each time it is used 
// Maybe with a loop
// function blackShade() {
//     // 10% black, add 0.1 each time to increase by 10%
//         // 'rgba(0, 0, 0, 0.1)' 
//     // Maybe use if statement to determine when to add 1 
//     for (value = 1; value <= 10; value++) {
//             console.log(value++); 
//         }
//         console.log(value)
// }
// console.log(blackShade())

// Try simplyifing the if else statement to something easier to test 
// maybe doing the reverse so that it evaluates the 0.10 first and etc.
    // This works just do it for shades with e.target === RGB value being last
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
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`
                // else if (square is 100% black)
                } else if (e.target.style.backgroundColor === 'rgb(0, 0, 0)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgb(0, 0, 0, 1)';
                // else if (div has 90% black) add 100% black
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.9)') { 
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)'
                // else if (square is 80% black) add 90% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.8)') { 
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
                // else if (square is 70% black) add 80% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
                // else if (square is 60% black) add 70% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.6)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                // else if (square is 50% black) add 60% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.5)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
                // else if (square is 40% black) add 50% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.4)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                // else if (square is 30% black) add 40% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.3)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
                // else if (square is 20% black) add 30% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.2)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
                // else if (square is 10% black) add 20% black 
                } else if (e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.1)') {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
                // else (square is colored) add 10% black 
                }  else {
                    console.log(e.target.style.backgroundColor)
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
                }
                console.log(e.target.style.backgroundColor)
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

// Original Function 
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
            if (e.target.style.backgroundColor === 'white') {
                e.target.style.backgroundColor = 'red'
                console.log(e.target.style.backgroundColor);
            } else {
                e.target.style.background = 'rgba(0, 0, 0, 0.1)'
                console.log(e.target.style.backgroundColor)
            }
        })
    })
}

/* 
Current
- Step 5: Try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
- Working on hover function, going to be repeitive but you can simplifiy after its working 
- Also try and write pseudocode as much as you can to keep yourself moving
- What you are doing is a harder version, if you want to try go ahead, but also make separte buttons after! 

Help
- My main suggestion is to break this down into steps. Like: first, we need to get the current color of the cell. Next we need to figure out what the next shade is. And so on. Then try to translate that into code.
- Hey, I'm currently still struggling on the Etch-a-sketch final part where we add 10% shade of black each mouse hover. So currently my function adds a random RGB value to a div if the value has no colour. My goal is to add 10% shade if the the background colour of the div is a random RGB value, then add a black shade of 20% black if the current div is 10% black, etc. So far with some help, the problem was broken down where I need to figure out a way to return the value of the current colour of the cell before I add the next shade, but I'm still struggling to get past that. 
*/