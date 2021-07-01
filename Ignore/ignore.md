/* Create a webpage with a 16x16 grid of square divs using JS
    1. Create "container" div in html *
    2. Create a div element inside the container & loop 16 times *
*/

/* Set up "Hover" so color changes when mouse goes over cells
    1. Change color of grid when you "click" on a cell *
    2. Change EL of 'click' to mouseenter *
*/

/* Add a button at the top that clears the grid & prompt user for new grid dimensions (64 = 64 x 64). New Grid should take up same space (ex. 960px wide). Max Limit should be 100 
    1. Add a button at the top of the grid *
    2. Prompt asking for new grid and store in a variable *
    3. Use EL for 'click' to utilize function * 
    4. EL should change grid template row + column in #container based to 20 x 20 *
        - & Change the loop result 20 x 20 = 400 *
    5. EL should change row/column to whatever the user enters in prompt *
        - & Change the loop to sum of multiplied dimensions *
    6. After entering prompt, the grid should clear *
        - Maybe should add something that removes divs in EL *
*/

// Individual Functions inside EL button click 

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

/* Questions 
1. I have the height and width to 500px max for the container so it shouldn't change wrap during resizing, but the cells won't fill the container when the dimensions are less than or greater than 16 rows/columns. 
    - For that case you also need to adjust your Javascript. At the moment you create 256 squares to fill the container. When you change your dimension to 15x15 or 17x17 you also need to change the amount of squares you create.
	- The loop needs to change with the dimensions  
2. I'm on the Etch-A-Sketch project and can't change the amount of divs created from the loop once the button is clicked. Once the prompt is entered (Ex. 4), I'm able to get the grid-template-column/row to change to 4x4 but I don't know how to change the loop so only 16 divs are created. I understand that it will need to go inside the event listner but it seems like I need to overwrite the loop that created 256 divs in the beginning without adding more divs. 
    - I would think about how you could make your loop that creates divs to be dynamic. 
    - Right now it's hard coded, but couldn't you make a function that calls the loop and have the number of iterations be dependent on a parameter that is passed in?
3. I'm currently trying to make my Event Listener remove all the previous divs everytime the button is pressed, but for some reason it only works once. The goal is after pressing the button a prompt will ask for a new grid dimension and clear the previous grid divs before creating calling the loop function to create another one. Also just found out after the new grid is created the Event listener to change the div background color during hover doesn't work after. 
    - Using selector inside functions, try not to rely on global variables because the original selector is referencing an old nodelist so everytime a new one is created it is not deleting that one
    - Also same problem with coloring function, referencing an old collection of cells 
    - Having a new selector inside here allows a new nodelist to be selected each time a button is clicked? 
*/