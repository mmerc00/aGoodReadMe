//dependencies
const generateMarkdown = require("./utils/generateMarkdown");
//fs
var fs = require("fs");
//inquierer
var inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "write desciprtion of project",
    name: "description",
  },
  // {
  //   type: "input",
  //   message: "what are the table of contents",
  //   name: "TC",
  // },
  {
    type: "input",
    message: "what type of installation",
    name: "installation",
  },
  {
    type: "input",
    message: "how to use project",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "what license did you use?",
    choices: ["ISC", "MIT", "idk"],
    name: "license",
  },
  {
    type: "input",
    message: "who contributed",
    name: "contribution",
  },
  {
    type: "input",
    message: "did you run any tests",
    name: "tests",
  },
  ,
  {
    type: "input",
    message: "what is your Github username",
    name: "github",
  },
  ,
  {
    type: "input",
    message: "and lastly, what is your email",
    name: "email",
  },
];

// function to append README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to init program
function init() {
  inquierer.prompt(questions).then(function (response) {
    let markdownData = generateMarkdown(response);
    wrtieToFile("readme.md", markdownData);
  });
}

// function to init program
init();
