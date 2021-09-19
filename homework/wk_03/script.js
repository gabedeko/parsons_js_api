/*
//Select an exercise from the previous assignent or the last class (or a new one if you like). For example generating a triangle/chessboard pattern. Now rewrite that code and refactor it using functions.
*/

//3.1 assignments and declarations
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function (abc) {
    usingFunctions1(Math.random());      
});

////////

function usingFunctions1(y) {
    let x = Math.floor ( 10 * y ) +1;
    console.log(" length of side", x);
    
    for (let i=1;i <= (x); i++){
        let offset = ((x-i)/2);
        //console.log(offset);
        if(Number.isInteger(offset) === true) {
            //console.log("a whole numer!");
            let show = " ".repeat(offset) + "#".repeat(i);
            console.log(show);
            //return(show)
        }
    }
}

/*
//Build your pattern generator with multiple functions, callbacks and parameters that makes your pattern (or conditions) creating method as flexible as possible. Then play around by tweaking the arguments so that by changing a few parameters, your function creates something unexpected and unique.
*/

//3.2 assignments and declarations
const btn2 = document.getElementById('btn2');
var mult = [10, 20, 30];
btn2.addEventListener('click', function (xyz) {
    usingFunctions2(Math.random());      
});

//Function Initialization
const usingFunctions2 = y => {
    generateNum(y);
}
//Generate number and declare length
const generateNum = y => {
    let x = Math.floor ( mult[(Math.random() * mult.length) | 0] * y ) +1;
    console.log(" length of pyramid", x);
    loopPattern(x);
}
//Loop through length and create offset
const loopPattern = (x) => {
    for (let i=1;i <= (x); i++){
        createOffset(x, i);
    }
    //Addon
    for (let i=x;i >= (1); i--){
        createOffset(x, i);
    }
}
//Check offset
const createOffset = (x, i) => {
    let offset = ((x-i)/2);
    //console.log(offset);
    checkOffset(offset, i);
}
//Generate row if offset is a whole number
const checkOffset = (offset, i) => {
    if(Number.isInteger(offset) === true) {
        //console.log("a whole numer!");
        generateRow(offset, i);
    }
}
//Create triangle or diamond
const generateRow = (offset, i) => {
    let show = " ".repeat(offset) + "#".repeat(i);
    displayRow(show);
}
//Console log created triangle or diamond
const displayRow  = show => {
    console.log(show);
    //return(show)
}