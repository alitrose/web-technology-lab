# Experiment 5: Javascript- DOM Elements And Events

- **Course Code:** 23CS2049 – Web Technology Laboratory
- **Student Name:** ALIT ROSE M M
- **Register Number:** URK24CS9042
- **Practical Date:** 07th August 2026

---

## Aim
To create interactive web pages demonstrating the applications of the Document Object Model (DOM), DOM element selection methods, and event handling mechanisms in JavaScript.

---

## Description
The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an HTML document as a tree structure wherein each node is an object representing a part of the document. JavaScript interacts with HTML by accessing and manipulating DOM elements using methods such as getElementById(), getElementsByTagName(), getElementsByClassName(), and querySelector(). JavaScript event handlers (e.g., onclick, onchange, onmouseover, onsubmit) listen for user interactions and dynamically modify document contents, styles, and attributes in real time.

Key DOM Methods:
• Finding HTML Element by Id: document.getElementById('id')
• Finding HTML Elements by Tag Name: document.getElementsByTagName('tag')
• Finding HTML Elements by Class Name: document.getElementsByClassName('class')
• Finding HTML Elements by CSS Selectors: document.querySelectorAll('selector')
• Attach Event Handler: element.addEventListener('event', function)

---

## Procedure
1. Implemented a string analysis function to find the shortest and longest words in a given sentence using split() and length.
2. Built a Body Mass Index (BMI) calculator taking weight and height inputs, computing BMI = weight / (height * height), and categorizing body type into Underweight, Normal, Overweight, or Obese.
3. Constructed a Fruit Farm grid layout generator taking row and column dimensions and dynamically appending randomized fruit images (apple.jpg and orange.jpg) using Math.random().
4. Developed a Currency Converter calculating conversions between INR and USD with bidirectional exchange rates (0.015 and 67.12) based on dropdown selections.
5. Programmed a Coin Flip probability simulator randomly alternating between heads.jpg and tails.jpg on button clicks, tracking cumulative flip counts.
6. Created an interactive Birthday Cake Order Form price calculator calculating subtotal based on cake weights (1/2kg, 1kg, 2kg), applying 9% tax, and adding user-selected tip percentages (10%, 15%, 20%).
7. Bound JavaScript functions to HTML buttons and form elements via unobtrusive event listeners and inline event attributes.
8. Tested input validation, calculation accuracy, and DOM rendering across all six applications in the browser.

---

## Source Code Files

- [`ex5_1_shortest_longest_word.html`](./ex5_1_shortest_longest_word.html) - Exercise 1: Find Shortest and Longest Word
- [`ex5_2_bmi_calculator.html`](./ex5_2_bmi_calculator.html) - Exercise 2: BMI Calculator
- [`ex5_3_fruit_farm.html`](./ex5_3_fruit_farm.html) - Exercise 3: Fruit Farm Grid Generator
- [`ex5_4_currency_converter.html`](./ex5_4_currency_converter.html) - Exercise 4: Currency Converter
- [`ex5_5_coin_flip.html`](./ex5_5_coin_flip.html) - Exercise 5: Coin Flip Simulator
- [`ex5_6_birthday_cake.html`](./ex5_6_birthday_cake.html) - Exercise 6: Birthday Cake Order Form Calculator
- [`apple.jpg.png`](./apple.jpg.png) - Apple Image Asset
- [`orange.jpg.png`](./orange.jpg.png) - Orange Image Asset

---

## Result
The JavaScript programs demonstrating DOM tree traversal, dynamic element manipulation, mathematical calculations, and event-driven interactivity were successfully implemented and verified.
