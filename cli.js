const inquirer = require("inquirer");

const questions = [
  {
    type: "password",
    name: "password",
    message: "Please enter your master password: ",
  },
  {
    type: "input",
    name: "name",
    message: "What password are you looking for?",
  },
];

inquirer.prompt(questions).then((answers) => {
  if (answers.password === "123") {
    console.log("The Master Password is correct");
    console.log(`Your ${answers.name} password is XXX`);
  } else {
    console.log("Incorrect Master Password");
    return;
  }
});
