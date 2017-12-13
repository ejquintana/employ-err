const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/api', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
