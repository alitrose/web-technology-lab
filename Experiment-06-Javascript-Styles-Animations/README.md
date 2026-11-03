# Experiment 6: Javascript- Styles and Animations

- **Course Code:** 23CS2049 – Web Technology Laboratory
- **Student Name:** ALIT ROSE M M
- **Register Number:** URK24CS9042
- **Practical Date:** 21st August 2026

---

## Aim
To create interactive web applications implementing JavaScript timing events (setTimeout, setInterval, clearInterval), JavaScript Date objects, dynamic CSS style manipulation, object-oriented programming (classes), and array processing.

---

## Description
JavaScript provides built-in timing methods on the window object that enable asynchronous execution of functions at designated intervals. setTimeout() schedules a function to execute once after a specified delay, while setInterval() repeatedly executes a function at regular time intervals until stopped by clearInterval(). The JavaScript Date object offers methods to manipulate and display current calendar dates and times. Furthermore, JavaScript allows dynamic DOM style manipulation, CSS animation, class declarations with constructors, and structured array-of-objects iteration.

---

## Procedure
1. Developed a live Digital Clock by querying system time via Date() and updating the display every second with setInterval(display, 1000).
2. Created an automated Dynamic Background Color Changer generating randomized RGB values (Math.random() * 255) periodically every 30 seconds using setInterval().
3. Implemented interactive font size enlargement (28px) and reduction (16px) using mouseover and mouseout event handlers on a target paragraph.
4. Programmed a continuous car movement animation using setTimeout() to iteratively increment the left position of an image, along with a Stop button invoking clearTimeout().
5. Defined an array of student objects with properties (name, regno, dob) and iterated through the collection, dynamically categorizing students born before vs. after 2000 using getFullYear().
6. Verified proper timing intervals, animation responsiveness, and DOM style updates across all exercises.

---

## Source Code Files

- [`ex6_1_digital_clock.html`](./ex6_1_digital_clock.html) - Exercise 1: Digital Clock
- [`ex6_2_dynamic_background.html`](./ex6_2_dynamic_background.html) - Exercise 2: Dynamic Background Color
- [`ex6_3_hover_font_size.html`](./ex6_3_hover_font_size.html) - Exercise 3: Change Font Size on Hover
- [`ex6_4_move_stop_car.html`](./ex6_4_move_stop_car.html) - Exercise 4: Move and Stop Car Animation
- [`ex6_5_student_objects.html`](./ex6_5_student_objects.html) - Exercise 5: Student Objects Array & Categorization
- [`car.jpg.png`](./car.jpg.png) - Car Image Asset

---

## Result
The JavaScript web applications utilizing timer functions, dynamic style modifications, animation routines, and array object processing were successfully developed and executed with accurate results.
