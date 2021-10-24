// 1. The standard Object literal

const john_object = {};
john_object.firstName = "John"; 
john_object.lastName = "Doe";

john_object.greet = function() {
alert("My name is " + this.firstName + " " + this.lastName);
};

john_object.greet();


// 2. Use object builder function to build custom multiple Objects

function createPerson(first_name, last_name) {
const obj = {
first_name: first_name,
last_name: last_name, 
getFullName: function() {
return this.first_name + " " + this.last_name 
},
greet: function(person) {
alert("Hello, " + person.getFullName() + ". I'm " + this.getFullName());
  		} 
};
return obj;
}

const john_doe = createPerson("John", "Doe"); 
const jane_doe = createPerson("Jane", "Doe");
john_doe.greet(jane_doe);


// 3. a cleaner way to use the template - through Constructor function

function Person(first, last, age, gender, interests) {
  this.name      = {
    'first': first,
    'last' : last
  };
  this.age       = age;
  this.gender    = gender;
  this.interests = interests;
  this.bio       = function() {
    alert( this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.' );
  };
  this.greeting  = function() {
    alert( `Hi! I'm ${this.name.first}.` );
  };
}

// these 2 objects now share the same constuctor
const person1 = new Person( 'Bob', 'Dylan', 99, 'Male', 'Songwriter' );
const person2 = new Person( 'Joan', 'Baez', 49, 'Female', 'Folk Singer' );


// 4. prototype methods - are inherited in live

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.sayHi = function() {
    return alert("Hi, " + this.getFullName());
  };
}

// 5. example of non-inheritance

Person.getshortName = function() {
  return (this.first_name + this.last_name.charAt(0)).toLowerCase() ;
};

Person.prototype.getFullName = function() {
return this.first_name + " " + this.last_name ;
};
Person.prototype.greet = function(person) {
alert("Hello, " + this.getFullName() + ". I'm " + this.getFullName());
      };

const john_doe = new Person("John", "Doe");
const jane_doe = new Person("Jane", "Doe");

//this will throw error
john_doe.getshortName()

//this will work
john_doe.getFullName()
john_doe.greet(jane_doe)


// 6. Inheritance - create sub-objects

Student = function(status, first_name, last_name) {
    Person.call(this, first_name, last_name)
    this.status = status;
    this.st = function() {
      console.log(status);
    }
}

Student.prototype.getState = function() {
  alert ( this.status + " " + this.first_name );
};

const student1 = new Student('happy', 'Dale', 'Doe');
student1.getState(); //good
jane_doe.getState() // not inherited

student1.getshortName(); //should give error
jane_doe.getshortName(); //should give error
Person.getshortName(); //should work
student1.greet(); //error since call doesnt inherit prototype

// add this and try again:
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

student1.greet(); // ok after create prototype
jane_doe.greet(); // should work normally


// 7. ES6 syntactic sugar take on constructors and extending:

class Person {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;

    }
    greet() {
        return "Hi, my name is " + this.getName();
    }
    getName () {
        return `My name is: ${this.first_name} ${this.last_name}.
        And my age is XX.`;
    }
}

const john_doe = new Person("John", "Doe");
const jane_doe = new Person("Jane", "Doe");


class XPerson extends Person {
    constructor(xname, first_name, last_name, power ) {
      super(first_name, last_name);
      this.xname = xname;
      this.power = power;
    }
    getSound() {
      console.log ( "woosh " + this.first_name );
    }
}

const storm_doe = new XPerson("Storm", "Ororo", "Munroe", "lightning");


// 8. Refactoring the Ajax exercise

const button = document.getElementById('GetUsers');
button.addEventListener("click", getUserData);

function getUserData() {
  let url = "https://randomuser.me/api/?results=10";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(resp) {
      document.getElementById("Output").innerHTML = JSON.stringify(resp.results);
      buildUserData( resp.results );
    })
    .catch(function(error) {
      document.getElementById("Output").innerHTML = "There was an error "+error;
    });
}

function buildUserData(data) {

    for( item of data ) {
      //console.log(item);
      const p_el = document.createElement('p');
      const person = new Person(item);
      p_el.innerHTML = person.render();
      document.body.appendChild(p_el);
    }

}

Person = function(item) {
  this.first_name = item.name.first;
  this.last_name = item.name.last;
  this.image = item.picture.thumbnail;
  this.getName = function() {
    return this.first_name + " " + this.last_name;
  }
  this.getPicture = function() {
    return this.image;
  }
  this.render = function() {
    return `<a href=""><img src="${this.getPicture()}" /><br>${this.getName()}</a><br>`;
  }
}