const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the frontend static files
app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

// Simple API endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from backend', time: new Date().toISOString() });
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
