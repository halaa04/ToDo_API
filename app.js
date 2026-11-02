//npm install express --> نزلتها عالجهاز وصارت ب فولدر لحالو، لازم هلا تستدعيها على هاد الملف 
const express = require('express');   // جبتها عندك

const app= express();  // نتيجه شغلها الان اسمها app 

app.use(express.json()) // اعطيتي لها قدرة قراءه الملفات 

let tasks = [];
let nextId = 1;

app.get('/health', (req, res) => res.json({ status: 'ok' })); // response --> ok
app.get('/tasks', (req, res) => res.json(tasks));


app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'title is required' });
    const task = { id: nextId++, title, done: false };
    tasks.push(task);
    res.status(201).json(task);
    });

module.exports = app;