// server.js
const http = require('http');

const PORT = 3000;

// Tạo server
const server = http.createServer((req, res) => {
  // thiết lập header HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Hiển thị câu Hello World
  res.end('Hello World');
});

// Lắng nghe cổng
server.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
