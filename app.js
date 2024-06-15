// Import dependencies
const express = require("express");
const mysql = require("mysql");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan username MySQL Anda
  password: "root", // Ganti dengan password MySQL Anda
  database: "db_kampus", // Ganti dengan nama database Anda
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

// Create Express app
const app = express();

// Create route to fetch data
app.get("/", (req, res) => {
  // Query to get data from tb_mhs
  let sql = "SELECT * FROM tb_mhs";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results); // Return JSON response
  });
});

// Run server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
