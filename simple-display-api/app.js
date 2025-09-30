// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /display?text=Hello
app.get('/display', (req, res) => {
  const text = req.query.text ?? 'Không có nội dung';
  res.send(text);
});

// POST /display    Body JSON: { "text": "Hello" }
app.post('/display', (req, res) => {
  const text = (req.body && req.body.text) || 'API siêu đơn giản'
  res.send(text);
});

app.get('/', (req, res) => {
  res.send('API hoạt động. Dùng /display?text=... hoặc POST /display');
});

app.listen(PORT, () => {
  console.log(`Server chạy trên http://localhost:${PORT}`);
});