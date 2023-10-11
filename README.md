# Calculator Project

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
- add
- subtract
- multiply
- divide

2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.

3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
- Do not worry about wiring up the JS just yet.
- There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
- Add a “clear” button.

5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

6. Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
- You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
- This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.