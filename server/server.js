const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const employees = require('./employees.js');
const employers = require('./employers.js');


app.use(express.static('public'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/api/employees', (req, res) => {
	res.send(employees);
});

app.get('/api/employers', (req, res) => {
	res.send(employers);
});

app.listen(PORT, () => console.log(`Employ{err} app server listening on port ${PORT}`));
