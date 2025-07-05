const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting DB:", err);
  } else {
    console.log("Connected to MySQL DB.");
  }
});

exports.addName = (req, res) => {
  const { name, gender, language } = req.body;
  db.query(
    "INSERT INTO names (name, gender, language) VALUES (?, ?, ?)",
    [name, gender, language],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "DB Error" });
      } else {
        res.json({ id: result.insertId });
      }
    }
  );
};

exports.getNames = (req, res) => {
  db.query("SELECT * FROM names", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "DB Error" });
    } else {
      res.json(results);
    }
  });
};

exports.deleteName = (req, res) => {
  const { id } = req.body;
  db.query("DELETE FROM names WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "DB Error" });
    } else {
      res.json({ success: true });
    }
  });
};

exports.updateName = (req, res) => {
  const { id, name, gender, language } = req.body;
  db.query(
    "UPDATE names SET name = ?, gender = ?, language = ? WHERE id = ?",
    [name, gender, language, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "DB Error" });
      } else {
        res.json({ success: true });
      }
    }
  );
};
