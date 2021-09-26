const my_array = ["blue","red","green"];
const new_array = [];

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
    weekFour0();
});

const weekFour0 = () => {
    // SIMPLE VERSION
    // for (let i = 0;i<my_array.length;i++){
    //     new_array.push(my_array[i].toUpperCase())
    // }
    // console.log(new_array);

    // SOPHISTICATED VERSION
    const new_array = my_array.map( item => item.toUpperCase());
    console.log(new_array);
}

////////
////////Date Method Objects
////////

/*
Below is a very simple way to get the day of the week using the date ethod with an array
*/
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    weekFour1();
});

const weekFour1 = () => {
    let d = new Date();
    let d_of_w = d.getDay();
    let days_list = ["sun","mon","tues","wed","thur","fri","sat","sun"];
    console.log("today is " + days_list[d_of_w]);
}

////////
////////Custom Objects
////////

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
    weekFour2();
});

//let a = [323,2323,3];

//let person = new Object(); - same as below
//let person = { firstName: "Lionel", lastName: "Messi"};
const weekFour2 = () => {
    const Person = {
        firstName: "John",
        lastName: "Parsons",
        citiesLived: ["New York", "Boston", "Vien"],
        sayHello: function() {
            console.log("Hello my name is " + this.firstName + " " + this.lastName);
        }
    };
}

////////
////////
////////

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
    weekFour3();
});


const weekFour3 = () => {
    const person = {
        firstName: "John",
        lastName: "Parsons",
        citiesLived: ["New York", "Boston", "Vien"],
        sayHello: function() {
            console.log("Hello my name is " + this.firstName + " " + this.lastName);
        }
    };

    for (let key_prop in person) {
        console.log("item at propert " + key_prop + " is " + person[key_prop]);
    }
    for (let item of Object.entries(person)) {
        console.log(item); 
    }
    for (let [key,value] of Object.entries(person)) {
        console.log(key); 
        console.log(value); 
    }
}

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function () {
    weekFour4();
});

const weekFour4 = () => {
    function Car(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.greet = function() {
            console.log("I am a - " + this.make + " and I was built in " + this.year );
        }
    }
    
    const car1 = new Car("Nissan","300ZX",1992);
    const car2 = new Car("Mazda","Miata",2002);
    
    console.log(car1.greet());
    console.log(car2.greet());
}

