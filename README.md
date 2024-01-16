# Angular
- Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, 
- Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner. 

# Angular Setup
- Update NodeJS : Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.
- Update NPM : npm install -g npm
- Updating the CLI : 
    1. npm uninstall -g angular-cli @angular/cli
    2. npm cache verify
    3. npm install -g @angular/cli

# Creating new project
- ng new my-first-app
- ng serve (to run the project on browser, 'Ctrl + C' to stop)

# Steps to run a project after cloning
- In terminal type npm install to install all the dependencies that are there in package.json file, being used in the project

# Installing dependencies
- npm install --save bootstrap@3 (saves locally, for global use -g)
- to use, we need add reference of bootstap in angular.json file