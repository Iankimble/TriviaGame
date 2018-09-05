var game = "trivia Game is Linked";
console.log(game);

var score = 0;
console.log("your score is " + score);

var numberOfQuestions = 4;
console.log("number of questions = " + numberOfQuestions);

var clock = 5;

var nbaQuestions = [
    {
        question1: "What team has won the most NBA championships?",
        options: ["76ers", "Chicago Bulls", "Boston Celtics", "Los Angeles Lakers"],
        answer: "Boston Celtics",
    },
    {
        question2: "In what year did Allen Iverson win the NBA MVP award?",
        options: ["1993", "1995", "2001", "2003"],
        answer: "2001",
    },
    {
        question3: "How many NBA championships have the Philadelphia 76ers won?",
        options: ["2", "3", "5", "0"],
        answer: "3",
    },
    {
        question4: "How many NBA championships has LeBron James Won?",
        options: ["2", "0", "10", "3"],
        answer: "3",
    },

    {
        question5: "How many all star appearances has Tim Duncan Had?",
        otions: ["3", "20", "13", "15"],
        answer: "15",
    },

    {
        question6: "Which player has won the most NBA finals MVP award?",
        options: ["Michael Jordan", "Shaquille O'Neil", "Karem Abdul- Jabbar", "Bill Russell"],
        answer: "Michael Jordan",
    },

    {
        question7: "Which player has the most NBA All Star appearances as of 2017-2018 season?",
        options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Karem Abdul- Jabbar"],
        answer: "Karem Abdul- Jabbar",
    },

    {
        question8: "Who was the NBA rookie of The Year for the 2013-2014 season?",
        options: ["Damian Lillard", "Michael Carter- Williams", "Tyreke Evans", "Brandon Roy"],
        answer: "Michael Carter- Williams",
    },

    {
        question9: "As of 2018, what is the name of the Philadelphia 76ers Developmental team?",
        options: ["Delaware 87ers", "Utah Flash", "Delaware Blue Coats", "Scraton spirit"],
        answer: "Delaware Blue Coats"
    },

    {
        question10: "Which WNBA Team has won the most titles as of 2018?",
        options: ["Houston Comets", "Minnesota Lynx", "New York Liberty", "Los Angeles Sparks"],
        answer: "Houston Comets"
    }


];
console.log(nbaQuestions);


function answer() {
    score++;
    console.log("You are correct!");
}
function wrong() {
    console.log("Sorry, wrong answer");
}

function results() {


    console.log("Your score is " + score + " _out of 10");

};

/*
function timeCounter() {
   setInterval(function(){
    alert("timeCounter");   
    clock--; 
    $('#clock').append("You have " + clock + "seconds left");
    }, clock * 1000); 

}

function timer(){
    timeCounter(); 

    if (clock === 0) 
    {
        results()
    }

}
timer();
*/


































