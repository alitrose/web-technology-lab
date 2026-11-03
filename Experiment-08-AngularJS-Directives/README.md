# Experiment 8: Working with AngularJS Directives

- **Course Code:** 23CS2049 – Web Technology Laboratory
- **Student Name:** ALIT ROSE M M
- **Register Number:** URK24CS9042
- **Practical Date:** 11th September 2026

---

## Aim
To design and develop web applications using the AngularJS framework, implementing MVC (Model-View-Controller) architecture, built-in directives (ng-app, ng-controller, ng-model, ng-repeat, ng-submit, ng-click), two-way data binding, and scope management.

---

## Description
AngularJS is a structural JavaScript framework for dynamic web apps maintained by Google. It extends HTML vocabulary with custom attributes called directives. AngularJS adheres to the Model-View-Controller (MVC) software design pattern:
• Model represents the application data and state.
• View represents the HTML presentation layer displayed to the user.
• Controller contains the business logic, function definitions, and binds model data to the view via the $scope object.
AngularJS provides two-way data binding, where any changes in the view immediately reflect in the model and vice-versa, without explicit DOM manipulation.

---

## Procedure
1. Imported the AngularJS library script (1.8.2) in each HTML document.
2. Initialized the Angular application scope on the <html> or <body> element using the ng-app directive.
3. Attached custom controllers to views using ng-controller to isolate application state and business logic.
4. Built a Comment Box application utilizing ng-model for text area binding, ng-submit for form dispatch, ng-repeat to iterate and render comments, and $scope.splice() for comment removal.
5. Developed a Simple Calculator applying two-way data binding on numeric inputs and an operator select dropdown, evaluating arithmetic results reactively via an expression function.
6. Constructed a Dynamic To-Do List application managing task items in an array, displaying counts, allowing item deletion, and conditionally showing an empty state message via ng-if.
7. Tested data synchronization, event dispatching, and directive responsiveness in the browser.

---

## Source Code Files

- [`ex8_1_comment_box.html`](./ex8_1_comment_box.html) - Exercise 1: Simple Comment Box
- [`ex8_2_calculator.html`](./ex8_2_calculator.html) - Exercise 2: Simple Calculator
- [`ex8_3_todo_list.html`](./ex8_3_todo_list.html) - Exercise 3: Simple To-Do List

---

## Result
The AngularJS applications implementing MVC architecture, two-way data binding, built-in directives, and scope controller functions were successfully built and verified.
