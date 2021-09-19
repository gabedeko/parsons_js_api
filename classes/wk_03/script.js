// Pop Quiz: Loops and Conditions:
/* 
Using loops, create a triangular pattern (using console.log) like this but center it in console, lik this
   *
  ***
 *****
*******
*/

const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', pop_quiz);


function pop_quiz() {
    let x = Math.floor ( 10 * Math.random() ) +1;
    console.log(" length of side", x);
    
    for (let i=1;i <= (x); i++){
        let offset = ((x-i)/2);
        //console.log(offset);
        if(Number.isInteger(offset) === true) {
            //console.log("a whole numer!");
            let show = " ".repeat(offset) + "#".repeat(i);
            console.log(show);
        }
    }
}

//////////////
//Use function to convert number to celcius
////////////////

function convertToCelsius( deg_fah ) {
if ( deg_fah === undefined ) {
deg_fah = 32;
}
let converted_deg = ( deg_fah-32 ) * 5/9;
return( converted_deg );
}
console.log( convertToCelsius() );