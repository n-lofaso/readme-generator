// Declare variables to use inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate README with users input
const generateREADME = ({
  title,
  description,
  installation,
  usage,
  contribution,
  testing,
  github,
  email,
  license,
}) =>
  `# ${title}
        
        ## Description
        ${description}

        ## Table of Contents
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contribution](#contribution)
        - [Testing](#Testing)
        - [Questions](#Questions)
        - [License](#license)

        ## Installation 
        ${installation}
    
        ## Usage
        ${usage}
    
        ## Contribution
        ${contribution}
    
        ## Testing
        ${testing}
  
        ## Questions
        If you have anyfurther questions reach me on
        Github:${github}
        Email:${email}
  
        ## License
        ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
        ${license}
    `;

// Prompt user for info to put into the README file
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects title name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please tell us how to install your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter how to contribute to your project:',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please enter info about testing:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github Url:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email adress:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select one license:',
      choices: [
        'MIT License',
        'Apache License 2.0',
        'GNU General Public License v3.0',
      ],
    },
  ])
  .then((answers) => {
    const readMeInfo = generateREADME(answers);
    //  Creates README file with the users input or gives error if somethings wrong
    fs.writeFile('README.md', readMeInfo, (err) =>
      err
        ? console.log(err)
        : console.log('Successfully created your new README!')
    );
  });
