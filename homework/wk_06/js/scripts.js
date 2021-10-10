/*
 *Class 6: Homework
 * this is what it does
 */



/*
//
Excercise 1: create a function that reverses the contents of a sentence or a word or a phrase
e.g. "hello there" becomes "ereht olleh"
//
*/
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function (abc) {
    Ex1("hello there");      
});

function Ex1(str) { //Reverse String
    let vvs = str.split("");
    vvs = vvs.reverse();
    vvs = vvs.join("");
    //return vvs;
    alert(vvs);
}

/*
//
Excercise 2: A function that will take a year (or a date) and let you know if it's a leap year
//
*/
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function () {
    Ex2(2000);      
});

function Ex2(year) { //Check If Leap Year
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

/*
//
Excercise 3: Create a function that checks if a string or sentence is a palindrome!
//
*/
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function () {
    Ex3("tenet");      
});

function Ex3(str){
    
    let rev_str = str.split('').reverse().join('');

    //return (rev_str == str) ? true : false;
    alert((rev_str == str) ? true : false);

    //OR
    //str == str.toLowerCase().split('').reverse().join('') ?  true :  false;
    //return str;
}



/*
//
EXERCISE 4
Create a script that on a button click, can select and insert an image from a URL (e.g. https://source.unsplash.com/random) and insert into the html
//
*/
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', function () {
    Ex4();      
});

function Ex4() {
    var img = document.createElement('img'); 
    img.src = 'https://source.unsplash.com/random'; 
	document.getElementById('placehere').appendChild(img);
}

/*
EXERCISE 5
Use a form and DOM and form event listener to update the AI/chatbot object created in class 4 assignment. Use basic validation to make sure a question is actually asked
*/


// const btn5 = document.getElementById('btn5');

// btn5.addEventListener('click', function () {
//     Ex5();      
// });

const form = document.forms.search;

form.addEventListener('submit',function(ev) {
    console.log("submitting form", this.name);
    ev.preventDefault();

    const inp_search_box = form.elements.question_field.value;

    console.log(inp_search_box);

    if(inp_search_box === ''){
        alert('your search box needs a value!');
    } else {
        Ex5(inp_search_box);
    }


});

const Ex5 = (inquiry0) => {
    //set variables for dates
    let today = new Date();
    let creation_date = new Date(2021, 8, 26);
    let one_day = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    let days_difference = Math.round(Math.abs((creation_date - today) / one_day));

    console.log(inquiry0);

    function chatBot(inquiry0) {
        this.Name = "Question Bot",

        this.Questions = [
            "who are you",
            "how are you",
            "what is your name",
            "why are you here",
            "tell me about yourself",
            "how old are you",
            "what day is it today",
            "who made you",
            "where do you live",
            "do you know a joke",
            "what do you do",
            "what languages do you know",
            "how do you work",
            "what are you",
            "do you want anything",
            "what will happen in the future",
        ],
        this.Answers = [
            "I am simpleBot 1000",
            "i'm feeling very well",
            "I am simpleBot 1000 but you can call be friend",
            "i was created",
            "i like to talk and get to know people",
            "i am " + days_difference + " day(s) old",
            "today is " + today.toString(),
            "gabriel made me",
            "I live in a computer",
            "look in the mirror",
            "i try to answer questions",
            "currently just binary and english",
            "magic",
            "i am the answer to a homework assignment",
            "i want world peace",
            "the future is unknown",
        ],
        this.Unknown = [
            "Sorry i don't understand",
            "could you please try reframing question",
            "huh?",
            "maybe try asking google",
            "thinking...",
            "i'm really not sure ",
            "this information is not in my database",
            "i'll have the answer in my next version",
            "you tell me",
            "yo no se",
            "is that a question?"
        ],
        this.sayHello = function() {
            let z = 0;

            let replaceThis = "John";
            let re = new RegExp(`\\b${replaceThis}\\b`, 'gi');

            console.log(this.Questions.length);

            for (let o of this.Questions) {

                //old if - if (o == inquiry0) { 
                if (inquiry0.match(new RegExp(`\\b${o}\?\\b`, 'gi'))) { 
                    // if the first index (the question) matches the argument, then return the 2nd index (answer)
                    //return this.Answers[this.z];
                    console.log(this.Answers[z]);
                    
                    //Below sets up conversation UI/UX
                    let tag1_ = document.createElement("p"); // Creates <p></p>
                    tag1_.className = "gen-question"; //Adds class to generated <p> tag
                    let text1_ = document.createTextNode("You:"); //Text inside <p> tag
                    tag1_.appendChild(text1_); // appends <p>

                    let tag1 = document.createElement("p"); 
                    tag1.className = "gen-question";
                    let text1 = document.createTextNode(inquiry0); 
                    tag1.appendChild(text1); 

                    let tag2_ = document.createElement("p");
                    tag2_.className = "gen-answer";
                    let text2_ = document.createTextNode("Chatbot:"); 
                    tag2_.appendChild(text2_);

                    let tag2 = document.createElement("p");
                    tag2.className = "gen-answer";
                    let text2 = document.createTextNode(this.Answers[z]); 
                    tag2.appendChild(text2);

                    // Adds created elements to .conversation-section
                    let element = document.getElementsByClassName("conversation-section");
                    /*
                    element[0].appendChild(tag1_);
                    element[0].appendChild(tag1); 
                    element[0].appendChild(tag2_);
                    element[0].appendChild(tag2);
                    */

                    element[0].innerHTML = '<div>' +
                                            '<p>You:</p>' +
                                            '<p>' + inquiry0 + '</p>' + 
                                            '</div>' +
                                            '<div>' +
                                            '<p>Chatbot:</p>' +
                                            '<p>' + this.Answers[z] + '</p>' + 
                                            '</div>';

                    break;
                } 
                z++;
                if (z >= this.Questions.length) {
                    //Question is not found in DB

                    //Below sets up conversation UI/UX
                    let tag1_ = document.createElement("p"); // Creates <p></p>
                    tag1_.className = "gen-question"; //Adds class to generated <p> tag
                    let text1_ = document.createTextNode("You:"); //Text inside <p> tag
                    tag1_.appendChild(text1_); // appends <p>

                    let tag1 = document.createElement("p"); 
                    tag1.className = "gen-question";
                    let text1 = document.createTextNode(inquiry0); 
                    tag1.appendChild(text1); 

                    let tag2_ = document.createElement("p");
                    tag2_.className = "gen-answer";
                    let text2_ = document.createTextNode("Chatbot:"); 
                    tag2_.appendChild(text2_);

                    let tag2 = document.createElement("p");
                    tag2.className = "gen-answer";
                    //Get random unknown answer from array
                    random_unknown = this.Unknown[(Math.random() * this.Unknown.length) | 0];
                    let text2 = document.createTextNode(random_unknown); 
                    tag2.appendChild(text2);

                    // Adds created elements to .conversation-section
                    let element = document.getElementsByClassName("conversation-section");

                    /*
                    element[0].appendChild(tag1_);
                    element[0].appendChild(tag1); 
                    element[0].appendChild(tag2_);
                    element[0].appendChild(tag2);
                    */

                    element[0].innerHTML = '<div>' +
                                            '<p>You:</p>' +
                                            '<p>' + inquiry0 + '</p>' + 
                                            '</div>' +
                                            '<div>' +
                                            '<p>Chatbot:</p>' +
                                            '<p>' + random_unknown + '</p>' + 
                                            '</div>';

                    break;
                }
            }
        }
    };
    
    const response0 = new chatBot(inquiry0);
    
    console.log(response0.sayHello(inquiry0));
}

