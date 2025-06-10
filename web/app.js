const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "db-container",
  user: "root",
  password: "secret",
  database: "task_db"
});

db.query("CREATE DATABASE IF NOT EXISTS task_db");
db.query("USE task_db");
db.query("CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager Backend is running");
});

app.post("/tasks", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO tasks (name) VALUES (?)", [name], (err, results) => {
    if (err) return res.status(500).send(err);
    res.send({ id: results.insertId, name });
  });
});

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
