/*
 *Class 6: Quiz
 * this is what it does
 */

/*
Excercise 1: create a function that reverses the contents of a sentence or a word or a phrase
e.g. "hello there" becomes "ereht olleh"
*/
/*
function reverse_string(str){
    let vvs = str.split("");
    vvs = vvs.reverse();
    vvs = vvs.join("");
    return vvs;
}
reverse_string("hello there");
*/

/*
Excercise 2: A function that will take a year (or a date) and let you know if it's a leap year
*/

/*
function checkIfLeap(year){
    if (year % 4 == 0 && year % 100 !==0){
        alert(year + " is a leap year");
    } else {
        if (year % 400 == 0){
            alert(year + " is a leap year");
        } else {
            alert(year + "  is not a leap year");
        }
        
    }
}
checkIfLeap(2000);
*/

/*
Excercise 3: Create a function that checks if a string or sentence is a palindrome!
*/

function isPalindrome(str){
    
    let rev_str = str.split('').reverse().join('');

    return (rev_str == str) ? true : false;

    //OR

    str == str.toLowerCase().split('').reverse().join('') ?  true :  false;
    return str;
}
isPalindrome("tenet");


/*
EXERCISE 4
Create a script that on a button click, can select and insert an image from a URL (e.g. https://source.unsplash.com/random) and insert into the html
*/

/*
EXERCISE 5
Use a form and DOM and orm event listener to update the AI/charbot object created in class 4 assignment. Use basic validation to make sure a question is actually asked
*/

