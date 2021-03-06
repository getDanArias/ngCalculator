# ngCalculator

Calculator made with Angular 1.6. This is an exercise in component-based architecture. 

See it live: https://calculatorjs.com

Dedicated to my parents, in Heaven and Earth. With each line of code, we approach a better future for us! 

## Core components

### Basic Version

* Number buttons.
    * Digits from 0 to 9.
* Operation buttons.
    * Division, multiplication, subtraction, addition, compute operation, calculate percentage.
* Function buttons.
    * Clear board.
* Calculator board.
    * Display current operation and result digits.
* Symbol buttons.
    * +/- sign, decimal point. 

    

## Operations

Operations occur between integers and decimal numbers.

Operations will be handled as Angular services.

* Compute operation:
    * If there is only one number in the operation stack and the Result Button is pressed, there is no computation - the number is simply re-displayed.
    * If there is only one number in the operation stack and you press an operation button followed by the Result Button, the operation is carried against the number in the stack. For example: `2 + =` will result in `4`; 
     * If there is a number on the stack, you press an operation button, you enter another number to that is placed in the operation stack, and you press the result button, the operation will be carried between the two numbers on the stack: the older number being operated on by the second number. For example: `2 + 3 =` will result in `5`.


## Functions

* Clear board: the board is cleared and a zero is displayed. Any ongoing cumulative operation is canceled. 

## Symbols:

* Percentage: creates the percentage rate of the given number. For example: `10 %` will result in `0.1` being shown.
 
* +/- sign: assigns a negative or positive sign to the current number in the stack. The positive sign is not shown. 


## Set up:

After cloning the project, please run the following:

If you have `yarn` installed:

Note: This requires `yarn v0.16` or higher.

`yarn start`

If you prefer to use `npm`, please modify the `package.json` file `script` property:

From:

`"start": "yarn && bower install && gulp"`

to:

`"start": "npm install && bower install && gulp"`

and then run:

`npm start`

`start` is a script that will install the node and bower packages as well as start the Gulp automatic build workflow. Gulp will be running continuously in the background until you decide to stop it (CTRL + C in the Mac). A browser tab/window will open to display the application. Every time that you make a change to a non-library, non-node-module .css, .html or .js file, the browser will reload and display the changes automatically.

