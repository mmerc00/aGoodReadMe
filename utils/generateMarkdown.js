// function to generate a markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# Description
### ${data.description}

# Installation
### ${data.installation}

# Usage
### ${data.usage}

# License
### ${data.license.join(" ")}

# Contribution
### ${data.contribution}

# Tests
### ${data.tests}

# Questions
### ${data.question}
`;
}

module.exports = generateMarkdown;

//the more the ### the more it shrinks
//tik intraculations
