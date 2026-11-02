//npm install express --> نزلتها عالجهاز وصارت ب فولدر لحالو، لازم هلا تستدعيها على هاد الملف 
const express = require('express');   // جبتها عندك

const app= express();  // نتيجه شغلها الان اسمها app 

app.use(express.json()) // اعطيتي لها قدرة قراءه الملفات 

app.get('/health', (req, res) => res.json({ status: 'ok' })); // response --> ok

module.exports = app;