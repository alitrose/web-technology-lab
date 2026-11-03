// server.js - Node.js Server Application with MongoDB Integration
const http = require('http');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const PORT = 6000;
const MONGO_URL = "mongodb://localhost:27017/";
const DB_NAME = "mydb";
const COLLECTION_NAME = "users";

const server = http.createServer((req, res) => {
    // 1. Serve Registration Form on GET '/'
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./home.html').pipe(res);
    }
    // 2. Handle Form Submission on POST '/server'
    else if (req.url === '/server' && req.method === 'POST') {
        let rawData = '';
        req.on('data', chunk => {
            rawData += chunk;
        });

        req.on('end', () => {
            const params = new URLSearchParams(rawData);
            
            // Extract all form values
            const name = params.get('name') || '';
            const password = params.get('password') || '';
            const age = params.get('age') || '';
            const mobile = params.get('mobile') || '';
            const email = params.get('email') || '';
            const gender = params.get('gender') || '';
            const state = params.get('state') || '';
            const skills = params.getAll('skills').join(', ');

            const userDoc = {
                name,
                password,
                age,
                mobile,
                email,
                gender,
                state,
                skills,
                submittedAt: new Date()
            };

            // Connect to MongoDB and insert the document
            MongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h3>Database Connection Error: ' + err.message + '</h3>');
                    return;
                }

                const db = client.db(DB_NAME);
                db.collection(COLLECTION_NAME).insertOne(userDoc, (insertErr, result) => {
                    if (insertErr) {
                        res.writeHead(500, { 'Content-Type': 'text/html' });
                        res.end('<h3>Data Insertion Error: ' + insertErr.message + '</h3>');
                        client.close();
                        return;
                    }

                    console.log('1 document inserted successfully into MongoDB.');

                    // Retrieve the newly inserted user and display in table format
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>User Submitted Details</title>
                            <style>
                                body { font-family: Arial, sans-serif; padding: 40px; text-align: center; }
                                h2 { color: #2b49d6; }
                                table { width: 500px; margin: 20px auto; border-collapse: collapse; text-align: left; }
                                th, td { border: 1px solid #7799cc; padding: 10px 14px; font-size: 14px; }
                                td:first-child { font-weight: bold; width: 40%; color: #333; }
                                td:last-child { color: #222; }
                            </style>
                        </head>
                        <body>
                            <h2>User Submitted Details</h2>
                            <table>
                                <tr><td>Name</td><td>${userDoc.name}</td></tr>
                                <tr><td>Password</td><td>${userDoc.password}</td></tr>
                                <tr><td>Age</td><td>${userDoc.age}</td></tr>
                                <tr><td>Mobile Number</td><td>${userDoc.mobile}</td></tr>
                                <tr><td>Email</td><td>${userDoc.email}</td></tr>
                                <tr><td>Gender</td><td>${userDoc.gender}</td></tr>
                                <tr><td>State</td><td>${userDoc.state}</td></tr>
                                <tr><td>Skills</td><td>${userDoc.skills}</td></tr>
                            </table>
                        </body>
                        </html>
                    `);
                    res.end();
                    client.close();
                });
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
