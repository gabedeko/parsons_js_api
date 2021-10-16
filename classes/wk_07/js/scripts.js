function sleep(milliseconds) {
    let start = Date.now();
    while ((Date.now() - start) < milliseconds);
}

// console.log('start');
// sleep(5000);
// console.log('continue');

//basic stringify example
var person = {
    first_name: "John",
    last_name: "Smith",
    Schools: ["Parsons", "NYU"]
};
console.log(person);
let jsoned_strong = JSON.stringify(person);
console.log(jsoned_strong);



//basic setTimeout Example
function sleepAsync(milliseconds) {
    setTimeout(function() {
        console.log('it is now 3 seconds later');
    }, milliseconds);
}

console.log('start async');
sleepAsync(5000);
console.log('continue async');


//AJAX Method GET
let button_0 = document.getElementById('GetUsers');

button_0.addEventListener("click", getUserData);

function getUserData() {
    console.log("start ajax...");
    var url = "https://reqres.in/api/users";
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200){
            document.getElementById("Output").innerHTML=xhr.responseText;

            const resp = JSON.parse(xhr.responseText);
            console.log(resp.data[0].email);
        } else {
            document.getElementById("Output").innerHTML = "There was an error";
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
    console.log('end ajax...');
}


//AJAX Method POST

const form = document.getElementById('createUser');

form.addEventListener("submit",saveUserData);

function saveUserData(e) {
    e.preventDefault();

    let user = {}; //create an empty object
    user.name = form.first_name.value + ' ' + form.last_name.value;

    var url = "https://reqres.in/api/users";

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 201) {
            document.getElementById("Output").innerHTML = xhr.responseText;
        } else {
            document.getElementById("Output").innerHTML = "There was an error..."
        }
    }
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(user)); //dataa needs to be exact format expected, name-value pairs
}

//AJAX Form Data Call - Generate list of user data
let button_1 = document.getElementById('GetUsersData');

button_1.addEventListener("click", listUsers);

function listUsers() {
    console.log('start ajax...');

    var url = "https://reqres.in/api/users";

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("Output").innerHTML = xhr.responseText;

            const resp = JSON.parse(xhr.responseText);
            console.log(resp.data[0].email);
            console.log(resp);

            let ul = document.getElementById('userList');

            for (let key in resp.data) {
                let li = document.createElement('li'); //create the element we need
                let img = document.createElement('img');
                let span = document.createElement('span');

                let user = resp.data[key];
                img.src = user.avatar;
                span.innerHTML = user.first_name + ' ' + user.loast_name;
                li.appendChild(img);
                li.appendChild(span);

                //document.body.appendChild(li);
                ul.appendChild(li);
            }
        } else {
            document.getElementById("Output").innerHTML = "There was an error..."
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
    console.log('end ajax...');
}


//Promise API
/*
PROMISE LOGIC
-------------
const p = new Promise( function_name )

function function_name(resolver, rjector) {
    // logic of request

    // if complete
    if (condition) {
        resolver(something);
    } else {
        rejector(something);
    }
}

p.then( function(){
    //resolver function
})

p.catch( function() {
    //rejector function
})
-----------
*/

const xhr1 = new Promise( function(resolve, reject) {
    const url = 'http://api.open-notify.org/iss-now.json';
    const hrml = new XMLHttpRequest();
    xhr.open( 'GET', url, true );
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
        } else {
            const error = xhr.statusText ||'The reason is mysterious. Call Yoda!';
            reject(error);
        }
    }
});

const xhr2 = new Promise( function(resolve, reject) {
    const url = 'http://api.open-notify.org/iss-now.json';
    const hrml = new XMLHttpRequest();
    xhr.open( 'GET', url, true );
    xhr.send();
    xhr.onload = function () {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
            
            resolve(response);
        } else {
            const error = xhr.statusText ||'The reason is mysterious. Call Yoda!';
            reject(error);
        }
    }
});