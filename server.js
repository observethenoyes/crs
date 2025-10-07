const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve JSON data
app.get('/api/random', (req, res) => {
    const data = require('./crs.json');
    const randomPhrase = data[Math.floor(Math.random() * data.length)];
    res.json(randomPhrase);
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'Cockney Rhyming Slang API',
        endpoints: {
            '/api/random': 'Get a random CRS phrase'
        }
    });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});

module.exports = app;