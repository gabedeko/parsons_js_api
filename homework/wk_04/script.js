/*
Essentially, all AI assistants are a question and answer database querying program. You make a list of all possible questions and their answers. More complex ones will learn, add to the questions list, search for patterns and eventually be able to make connections between answers and generate more subtle interpretations.

For the purposes of this exercise, let's keep this simple. Create a list of questions and their answers. Then create a method (or methods) that checks a question (or word or phrase) you provide as an argument to it and then performs a lookup to find the closest matching question to the one asked and return its answer. Think of it like your own Messenger helper/Slackbot/AI Assistant etc.

Start by building an object that contains all the properties of the AI in it. As a simple example, here's code that uses only arrays and functions (but you need to rebuild it using the object format as shown in class yesterday):

To find the closest matching answer to the one asked, you can do some basic checks like String.match(), String.indexOf() etc. - use whatever works for you from the numerous String methods available to you and try making it as smart as you feel comfortable doing. There's no need to dig too deep into pattern matching and phrase recognition (the more adventurous can try javascript regex expressions) - we are not aiming to replace Google or Alexa in this exercise.

If feeling more adventurous, integrate it into an html markup rather than using just console.log to enter and display responses. Also make sure you look out for errors or empty results  or case differences and trap them as well as respond appropriately and cleverly to the user. Also , if you are into it, find smarter ways to find  better answer/question matches.
*/

/*
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
    simpleBot();
});
*/

const simpleBot = (inquiry0) => {
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
            today,
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
                    element[0].appendChild(tag1_);
                    element[0].appendChild(tag1); 
                    element[0].appendChild(tag2_);
                    element[0].appendChild(tag2);

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
                    let text2 = document.createTextNode(this.Unknown[(Math.random() * this.Unknown.length) | 0]); 
                    tag2.appendChild(text2);

                    // Adds created elements to .conversation-section
                    let element = document.getElementsByClassName("conversation-section");
                    element[0].appendChild(tag1_);
                    element[0].appendChild(tag1); 
                    element[0].appendChild(tag2_);
                    element[0].appendChild(tag2);

                    break;
                }
            }
        }
    };
    
    const response0 = new chatBot(inquiry0);
    
    console.log(response0.sayHello(inquiry0));
}