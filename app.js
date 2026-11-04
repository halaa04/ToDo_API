//npm install express --> نزلتها عالجهاز وصارت ب فولدر لحالو، لازم هلا تستدعيها على هاد الملف 
const express = require('express');   // جبتها عندك

const app= express();  // نتيجه شغلها الان اسمها app 

app.use(express.json()) // اعطيتي لها قدرة قراءه الملفات 

let tasks = [];
let nextId = 1;

//Get method 
app.get('/health', (req, res) => res.json({ status: 'ok' })); // response --> ok

//Get method => (read a tasks)
app.get('/tasks', (req, res) => res.json(tasks)); // no tasks so far --> []

// Post Method => (add task)
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'title is required' });
    const task = { id: nextId++, title, done: false };
    tasks.push(task);
    res.status(201).json(task);
    });

// Put Method => (edit task)
    app.put('/tasks/:id', (req,res) => {
    const task = tasks.find( t => t.id === Number(req.params.id));
    if (!task) return res.status(404).json({ error: 'task not found' });
    if (req.body.title !== undefined) task.title = req.body.title;
    if (req.body.done !== undefined) task.done = req.body.done;
    res.json(task);
    });

// Delete method => (delete task)
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
  });

module.exports = app;