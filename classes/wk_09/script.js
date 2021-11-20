// simple example of pure/impure function:

function random(a, b) {
    if (b === undefined) {
      b = a, a = 1; // if no 2nd argument, lower limit is 1
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
  random(6);
  random(6, 20);
  
  //this is not pure - dependency on external variable
  let def = 6;
  function random(a, b) {
    if (b === undefined) {
      b = a, a = def; // if no 2nd argument, lower limit is def
    }
    return Math.floor((b-a+1) * Math.random()) + a;
  }
  
  
  // a good pure function application:
  
  function slugify(string) {
    string = string.toLowerCase();
    string = string.trim();
    let ar = string.split(" ");
    string = ar.join("-");
    return string;
  }
  
  // can be written as:
  function slugify(string) {
    string = string.toLowerCase().trim().split(" ").join("-");
    return string;
  }
  
  // or further compacted to:
  function slugify(string) {
    return string.toLowerCase().trim().split(" ").join("-");
  }
  
  // and finally to:
  const slugify = string => string.toLowerCase().trim().split(" ").join("-");
  
  
  // A promise example
  const dice = {
    sides: 6,
    roll() {
      return Math.floor(Math.random() * this.sides ) + 1;
    }
  }
  
  console.log('Before the roll');
  
  const promise = new Promise( (resolve,reject) => {
          const n = dice.roll();
          console.log('roll pending...');
          setTimeout(() => {
            (n > 3) ? resolve(n) : reject(n);
          }, 2000);
      })
      .then( result => console.log( `Yes! I rolled a ${result}`), //resolver function
              result => console.log( `Darn - I rolled a ${result}`) //rejector function
           )
      .catch( result => console.log(`Dammit! ... I rolled a ${result}`));
  
  console.log('After the roll');
  
  // an alternative with only one then and using catch for the reject callback function
  const promise = new Promise( (resolve,reject) => {
          const n = dice.roll();
          setTimeout(() => {
            (n > 3) ? resolve(n) : reject(n);
          }, 2000);
     })
      .then( result => console.log( `Yes! I rolled a ${result}`) ) //resolver function
      .catch( result => console.log(`Dammit! ... I rolled a ${result}`)); //rejector function
  
  
  // fetch is an ajax-specific wrapper for Promise
  //promises eg in ajax:
  const button = document.getElementById('find');
  button.addEventListener("click", getUserData);
  
  function getUserData() {
    let url = "https://reqres.in/api/users";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(resp) {
        document.getElementById("Output").innerHTML = JSON.stringify(resp.data);
      })
      .catch(function(resp) {
      document.getElementById("Output").innerHTML = "There was an error";
      });
    
  // IIFE scoping
    
  //block scope
  let list = [1,2,3];
  for (var i = 0, max = list.length ; i < max ; i++ ){
    console.log(list[i]);
  }
  console.log(i); //i is still outside
  
  let list = [1,2,3];
  (function(){
    for (var i = 0, max = list.length ; i < max ; i++ ){
      console.log(list[i]);
    }
  }());
  console.log(i); //i is inside, so this produces an error