# Experiment 9: Form Validation and Routing using AngularJS

- **Course Code:** 23CS2049 – Web Technology Laboratory
- **Student Name:** ALIT ROSE M M
- **Register Number:** URK24CS9042
- **Practical Date:** 12th September 2026

---

## Aim
To design and implement client-side form validation and Single Page Application (SPA) routing using AngularJS ngRoute module and built-in validation directives.

---

## Description
AngularJS offers robust client-side form validation mechanisms by tracking the state of forms and input fields. It provides properties such as $touched, $untouched, $valid, $invalid, $pristine, and $dirty, as well as validation directives like required and ng-pattern with regular expressions. Additionally, AngularJS supports Single Page Applications (SPAs) through the ngRoute module. The $routeProvider service configures client-side routing, enabling seamless navigation between multiple views (e.g., Home, About, Services, Contact) without requiring a full browser page refresh.

---

## Procedure
1. Designed a User Registration Form implementing strict validation criteria:
   • Name: letters and spaces only via ng-pattern="/^[A-Za-z ]+$/"
   • Password: min 8 characters with uppercase, lowercase, and number via ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/"
   • Age: constrained between 18 and 30 using min and max attributes
   • Mobile: exactly 10 digits via ng-pattern="/^[0-9]{10}$/"
   • Email: valid email format via input type="email"
   • Gender and State: mandatory selections
   • Submit button: dynamically disabled using ng-disabled="registrationForm.$invalid".
2. Configured contextual error message display using ng-show triggered by field .$touched and .$error conditions.
3. Included the angular-route.js library script and injected 'ngRoute' as a dependency in the AngularJS application module.
4. Configured $routeProvider with .when() route mappings for '/', '/about', '/services', '/contact', and an .otherwise() redirect to default view.
5. Created individual template views (main.htm, about.htm, services.htm, contact.htm) rendered inside a single ng-view container.
6. Verified form validation responsiveness and client-side route navigation without page reload.

---

## Source Code Files

- [`ex9_1_form_validation.html`](./ex9_1_form_validation.html) - Exercise 1: User Registration Form with AngularJS Validation (EX9.1)
- [`index.html`](./index.html) - Exercise 2: AngularJS Routing - index.html
- [`main.htm`](./main.htm) - Exercise 2: main.htm
- [`about.htm`](./about.htm) - Exercise 2: about.htm
- [`services.htm`](./services.htm) - Exercise 2: services.htm
- [`contact.htm`](./contact.htm) - Exercise 2: contact.htm

---

## Result
Client-side form validation with real-time error feedback and Single Page Application routing using AngularJS ngRoute were successfully implemented and executed.
