// dom maniplation on user interaction
const btn = document.getElementById('button');

const rainbow = ['red','orange','yellow','green','blue','purple','violet'];

// function to randomly change page backgroudn color
function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}

// basic variable and usage
var GreetingContainer;

// assign greeting to variable
GreetingContainer = "Hello";

console.log(GreetingContainer);

document.write('<p>' + GreetingContainer + '</p>');

btn.addEventListener('click', change);
/////////////////////////////////////////////////////////////
const ul = document.createElement('ul');
const url = 'https://randomuser.me/api/?results=10';
const xhr = new XMLHttpRequest();
xhr.onerror = function() { // only triggers on error
alert(`Oops - we cannot not do this!`);
};
xhr.onload = function() {
    if (xhr.status == 200) {
        let authors = JSON.parse(xhr.responseText); // Get Results
        
        for (key in authors.results) { // loop through the Results
        
        let author = authors.results[key]; //assign current row

        let li = document.createElement('li'), // Create the

        img = document.createElement('img'),
        span = document.createElement('span');
        img.src = author.picture.medium; // Add the source of

        span.innerHTML = author.name.first + ' ' +
        author.name.last; // Make the HTML of our span to be the first

        li.appendChild(img); // Append img element back to

        li.appendChild(span); // Append span element back to

        ul.appendChild(li); // Append li element back to

        document.body.append(ul); //Append the new ul to body
        }
    }
}
xhr.open('GET', url, true);
xhr.send(null);