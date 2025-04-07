const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const writeToFile = (path, res, fn) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading file" });

    let jsonArray = [];
    if (data) {
      try {
        jsonArray = JSON.parse(data);
      } catch (error) {
        return res.status(500).json({ message: "Invalid JSON format" });
      }
    }

    fn(jsonArray);

    fs.writeFile(path, JSON.stringify(jsonArray, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "Error saving file" });
    });
  });
};

app.post("/save", (req, res) => {
  const { problem, status } = req.body;

  writeToFile(`${status}.json`, res, (array) => {
    array.push(problem);
  });

  writeToFile('pending.json', res, (array) => {
    array.shift();
  });

  res.json({ message: "Data appended successfully!" });
});

app.post("/save-final", (req, res) => {
  const { problem, status } = req.body;

  writeToFile(`final.json`, res, (array) => {
    array.push(problem);
  });

  writeToFile('pending.json', res, (array) => {
    array.shift();
  });

  res.json({ message: "Data appended successfully!" });
});

app.post("/save-skip", (req, res) => {
  const { problem, status } = req.body;

  writeToFile(`skip.json`, res, (array) => {
    array.push(problem);
  });

  writeToFile('pending.json', res, (array) => {
    array.shift();
  });

  res.json({ message: "Data appended successfully!" });
});

app.get("/load", (req, res) => {
  fs.readFile('pending.json', "utf8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading file" });

    try {
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ message: "Invalid JSON format" });
    }
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
