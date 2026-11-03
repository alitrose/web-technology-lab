# Experiment 10: HTML Form Request Handling using NodeJS and MongoDB

- **Course Code:** 23CS2049 – Web Technology Laboratory
- **Student Name:** ALIT ROSE M M
- **Register Number:** URK24CS9042
- **Practical Date:** 16th October 2026

---

## Aim
To design and develop a server-side application using Node.js and MongoDB to handle HTML form requests, process submitted user registration data, store the records into a MongoDB database, and dynamically retrieve and display the registered records in a tabular format.

---

## Description
Node.js is an open-source, cross-platform, single-threaded JavaScript runtime environment built on Google Chrome's V8 JavaScript engine that allows developers to execute JavaScript on the server side. It employs an event-driven, non-blocking I/O model that makes it lightweight and efficient for data-intensive real-time applications. MongoDB is a leading NoSQL document-oriented database that stores data in flexible, JSON-like BSON documents. When combined, Node.js uses the native 'http' module to listen for incoming client HTTP requests, stream static HTML forms, parse POST request payloads using URLSearchParams, and use the official 'mongodb' driver (MongoClient) to perform CRUD operations on database collections.

---

## Procedure
1. Installed Node.js runtime and initialized the application environment.
2. Installed the official MongoDB driver using npm: npm install mongodb.
3. Created the client-side user registration form home.html containing all required input fields: Name, Password, Age, Mobile Number, Email, Gender (radio buttons), State (select dropdown), and Skills (checkboxes) with predefined HTML5 validation attributes.
4. Configured the form action to point to /server using HTTP POST method.
5. Developed the server-side script server.js using Node.js http and fs modules.
6. Configured the HTTP server to listen on port 6000.
7. Handled HTTP GET requests to the root path ('/') by reading and streaming home.html to the client response.
8. Handled HTTP POST requests to '/server' by collecting streamed data chunks in the 'data' event and assembling the full payload in the 'end' event.
9. Parsed the raw payload using URLSearchParams to extract user inputs into a structured JavaScript object.
10. Connected to the local MongoDB database instance (mongodb://localhost:27017/) via MongoClient.connect().
11. Selected the target database mydb and collection users, then inserted the user document using collection.insertOne().
12. Retrieved the stored document from the database and constructed an HTML response displaying the user-submitted details in a neat table format.
13. Verified end-to-end functionality by launching node server.js, navigating to http://localhost:6000, submitting registration details, and observing the database insertion and tabular response at http://localhost:6000/server.

---

## Source Code Files

- [`home.html`](./home.html) - home.html (User Registration Form)
- [`server.js`](./server.js) - server.js (Node.js Server & MongoDB Integration)
- [`package.json`](./package.json) - Node.js Package Manifest

---

## Result
The Node.js server application for handling HTML form requests and integrating with MongoDB was successfully developed and executed. User registration details were received via HTTP POST, persisted into the MongoDB database, and retrieved to render a structured tabular output as required.
