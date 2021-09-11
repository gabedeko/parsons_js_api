const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', question1);
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', question2);
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', question3);
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', question4);
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', question5);
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', question6);

// 1. Conditions:
// Define a number variable (can be random) and then create a condition to check if that variable  is odd or even.  (This is the same exercise we worked during class. - I have added it here so everyone can complete and submit).


function question1() {
    let x = Math.floor(9999 * Math.random());

    if (x % 2) {
        console.log("the number " + x + " is odd");
    } else {
        console.log("the number " + x + " is even")
    }
}
 

// 2. Conditions/Random:
// Use the below rolling dice generator to create a random number between 1 and 6. Then write a condition to check that number and do something for each check eg. return the value back to console using console.log(...). Consider using the switch operator for it.

function question2() {
    let rolled = Math.ceil( Math.random() * 6 );

    switch (rolled) {
        case (1):
        console.log("You rolled a one(" + rolled +")");
        break;
        case (2):
        console.log("You rolled a two(" + rolled +")");
        break;
        case (3):
        console.log("You rolled a three(" + rolled +")");
        break;
        case (4):
        console.log("You rolled a four(" + rolled +")");
        break;
        case (5):
        console.log("You rolled a five(" + rolled +")");
        break;
        case (6):
        console.log("You rolled a six(" + rolled +")");
        break;
        default:
        console.log("You rolled a number outside the range of 1 and 6 with" + rolled);
    }
}

 

// 3. Loops:
// Use the same random dice generator as above to generate a number between 1 and 6. Now create a loop that keep rolling until the number generated is more than 3. As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number. Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!
function question3() {
    let rolled;
    let rolls = 1;

    while (rolled <= 3 || rolled == null) {
        rolled = Math.ceil( Math.random() * 6 );

        if (rolled > 3) {      
            console.log("You have successfully rolled higher than 3 with the number " + rolled);
            console.log("It took " + rolls + " attempts");
            rolls = 0;
            break;
        } else {
            console.log("You have rolled a " + rolled + " which is not higher than 3");
            rolls++;
        }
    }
}
 

// 4.  Loops:
// Find the factorial (Links to an external site.) of any number using loops. Start with a number (random or fixed) and find its factorial. A factorial is a number you get by multiplying all the numbers preceding it, starting with 1 eg. factorial of 5 is 1  * 2 * 3 * 4 * 5 = 1204.
function question4() {
    x = Math.ceil( Math.random() * 9 );

    console.log("Factorial of " + x);
    if(x==1){
        console.log(x);
    } else {
        for (let i = x - 1; i >= 1; i--){
            x = x * i;
             console.log(x);
         }
    }
}
 

// 5. Loops
// Using loops , create a triangular pattern (using console.log) like this:
// #
// ##
// ###
// ####
function question5() {
    let x ="#";
    let y = x;

    for (let i = 0; i <= 3; i++){
        console.log(x);
        x = x + y;
    }
}
 

// 6. Loops and Conditions:
// Using more loops and conditions, create a chess board using # and space ' '.  You could try using loops inside a loop to create the alternative pattern. A chess board  has  8 x 8 = 64 squares.
function question6() {
    let x = "#";
    let y = " ";
    
    for (let i = 0; i <= 7; i++){
        if(i % 2){
            console.log((x + y).repeat(4));
        } else {
            console.log((y + x).repeat(4));
        }
        
    }
}
