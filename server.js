const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Names array for random selection
const names = ['Ada Lovelace', 'Grace Hopper', 'Linus Torvalds', 'Alan Turing', ...];

// Serve static files from the current directory
app.use(express.static('.'));

// Generate and return a random name
app.get('/name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    res.send(randomName);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
