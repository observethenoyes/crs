const express = require('express');
const app = express();
const port = 3000;

// Serve JSON data
app.get('/api/random', (req, res) => {
    const data = require('./crs.json');
    const randomPhrase = data[Math.floor(Math.random() * data.length)];
    res.json(randomPhrase);
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});