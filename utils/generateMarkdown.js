// function to generate a markdown for README
//license and table of contents contributed by Mike
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})
  
  ### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  # Description
  ### ${data.description}

  # Installation
  ### ${data.installation}

  # Usage 
  ### ${data.usage}

  # License
  ### ${data.license}

  # Contribution
  ### ${data.contribution}

  # Tests
  ### ${data.tests}

  # Questions
  ###${data.questions}

  # links
  ###(https://github.com/${data.github})
  ##${data.email}
  `;
}

module.exports = generateMarkdown;

//the more the ### the more it shrinks
//tik intraculations

//make output folder
