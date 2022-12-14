// Declare variables to use inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Function to get the license badge based on what licnese the user chose
const getLicenseBadge = (license)=> {
  if (license == "MIT") {
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (license == "APACHE 2.0") {
    return `![License](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`;
  } else if (license == "GPL 3.0") {
    return `![License](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`;
  } else if (license == "BSD 3") {
    return `![License](https://img.shields.io/badge/license-BSD%203.0-blue.svg)`;
  } else if (license == "N/A") {
    return ``;
  };
};

// Function to get the license based on what the user chose and what to display on the README
const getLicense = (license)=> {
  if (license == "N/A") {
    return `This project is not under any license.`;
  }else {
    return `This project is licensed under the ${license} license.`;
  }
};

// Function to generate README and populate it with the users input
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

  ${getLicenseBadge(license)}
          
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
  Github: ${github}
  Email: ${email}
    
 ## License
  ${getLicense(license)}`;
 
// Using inquirer to give the user a prompt for each part of the README
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
      choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','N/A'],
    },
  ])
  .then((answers) => {
    const readMeInfo = generateREADME(answers);
    //  Creates README file with the users input or gives error if something goes wrong
    fs.writeFile('README.md', readMeInfo, (err) =>
      err
        ? console.log(err)
        : console.log('Successfully created your new README!')
    );
  });
