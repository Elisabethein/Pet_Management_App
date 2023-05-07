# PetManagementApp

This is the front-end part of the project, which works in conjunction with the back-end server. I encourage you to visit the main repository which contains all the files and information about the project:

https://github.com/Elisabethein/Pet_Management_App.git

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

To start the development server, you can run `ng serve` in the command line. Please note that this operation requires Node. Once the server is running, you can navigate to http://localhost:4200/ to access the application. The application will automatically reload if you change any of the source files.

## Technologies used

The following technologies were used in this prject:

Visual Studio Code - to write and edit code

Bootstrap

## Main Files

pets.ts: this file defines the structure of pet objects

petservice.ts: this file provides a service that communicates with the back-end server

app.module.ts: this file is the main module for the application

app.component.ts: this file contains the logic for the application and communicates with the server using petService

app.component.html: this file contains the HTML code for the application

index.html: this file is the main HTML file that uses app.component.html in its body

styles.css: this file defines the appearance of the table

## User

User will be provided with a list of pets (starting with the 3 that were show as an example). The user can add, edit, and delete pets. When deleting a pet, the user needs to confirm their intention to do so. When adding a pet, the user needs to provide all necessary fields before submitting the form. When editing a pet, the user can choose which fields to change, as all information about the pet is displayed in the form.

## More infromation
This part of the project took almost the same amount of time as the back-end part, as the technologies used were quite new to me and I wanted to gain a deep understanding of the topic. I got a lot of help from the following project:

https://github.com/getarrays/employeemanagerapp

I struggled the most with Bootstrap, as I had difficulty understanding how to fix problems that arose with my HTML file. As a result, I used slightly older versions of CSS, JS, and popper, which can be found in index.html.

Additional information and thought on this project are available in the back-end repository README.



# Additional information from Angular:

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
