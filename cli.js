const inquirer = require("inquirer");
const fs = require("fs").promises;

const questions = [
  {
    type: "password",
    name: "password",
    message: "Please enter your master password: ",
  },
  {
    type: "input",
    name: "key",
    message: "What password are you looking for?",
  },
];

inquirer.prompt(questions).then(async (answers) => {
  if (answers.password === "123") {
    console.log("Master Password is correct!");
    try {
      const passwordsJSON = await fs.readFile("./passwords.json", "utf-8");
      const passwords = JSON.parse(passwordsJSON);
      console.log(`Your ${answers.key} password is ${passwords[answers.key]}`);
    } catch (error) {
      console.error("Something went wrong 😑");
    }
  } else {
    console.log("Incorrect Master Password");
  }
});
