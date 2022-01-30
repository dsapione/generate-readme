// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license) {
		renderLicenseLink()
	} else (license === )
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
![badge](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project has ${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have an questions feel free to contact me via [Email](${data.email})

[GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
