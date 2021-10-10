
/* This is my first code
 * this is what it does
 */

const list = document.getElementById('testList');

list.addEventListener("click",function(e){
    console.log("click",e);
    e.target.classList.toggle("highlight");
})

let sizeUp = document.getElementsByTagName('p')[0];
sizeUp.classList.add("sizeUp")

let last_p = document.getElementsByTagName('p')[1];

const new_para = document.createElement('p');

new_para.textContent = 'This is the end.';

last_p.appendChild(new_para);
