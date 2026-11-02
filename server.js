const app = require('./app'); 

const PORT = process.env.PORT || 3000;  // port 3000 localhost OR port aws in feaure 

app.listen(PORT, () => console.log(`API running on port ${PORT}`));

// app.listen(3000, () => console.log('API running on port 3000'));  --> Simple way.