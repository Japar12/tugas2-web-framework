// Import modul HTTP bawaan Node.js
const http = require("http");

// Membuat server
const server = http.createServer((req, res) => {
  // Mengatur status respons menjadi 200 (OK)
  res.statusCode = 200;

  // Mengatur header Content-Type menjadi teks biasa
  res.setHeader("Content-Type", "text/plain");

  // Mengirim respons "Hello, World!"
  res.end("Hello, World!\n");
});

// Menjalankan server pada port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
