var readlineSync = require("readline-sync")

var userName=readlinesync.question("enter your quetions");

  var myQuestions = [
    {question:"inside which HTML element do we put the JavaScript?",
    answers: {
      a: "javascript",
      b:"java",
      c:"script"

    },
    correctAnswer:"c"
  },
  {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }[
      {
        question: 'Who invented JavaScript?',
        answers: {
          a: 'Douglas Crockford', 
          b: 'Sheryl Sandberg', 
          c: 'Brendan Eich' },
        correctAnswer: 'c'
      },
      {
        question: 'Which one of these is a JavaScript package manager?',
        answers: { a: 'Node.js', b: 'TypeScript', c: 'npm' },
        correctAnswer: 'c'
      },
      {
        question: 'Which tool can you use to ensure code quality?',
        answers: { a: 'Angular', b: 'jQuery', c: 'RequireJS', d: 'ESLint' },
        correctAnswer: 'd'
      },
      {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: { a: 'Both the <head> section and the <body> section are correct', b: 'The <body> section', c: 'The <head> section' },
        correctAnswer: 'a'
      }, 
      {
        question: 'How do you create a function in JavaScript?',
        answers: { a: 'function = myFunction()', b: 'function:myFunction()', c: 'function myFunction()' },
        correctAnswer: 'c'
      },
      {
        question: 'How do you call a function named "myFunction"?',
        answers: { a: 'myFunction()', b: 'call myFunction()', c: 'call function myFunction()' },
        correctAnswer: 'a'
      },
      { 
        question: 'How to write an IF statement in JavaScript?',
        answers: { a: 'if (i == 5)', b: 'if i = 5 then', c: 'if i == 5 then' },
        correctAnswer: 'a'
      },
      {
        question : 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      answers: { a: 'if (i != 5)', b: 'if i <> 5', c: 'if (i <> 5)' },
      correctAnswer: 'a'
      }
    
    ]
  ] 
console.log(myQuestions)