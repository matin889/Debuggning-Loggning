const express = require("express");
const app = express();
const morgan = require("morgan");

// app.use(morgan("tiny"));
app.use(
  morgan(":method :url (:status)", {
    skip: (req, res) => {
      return res.statusCode >= 400;
    },
  })
);

app.use(
  morgan("dev", {
    skip: (req, res) => {
      return res.statusCode < 400;
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello my app");
});

app.post("/", (req, res) => {
  const r = Math.floor(Math.random() * 10 + 1);

  if (r >= 5) {
    res.status(400).send("Invalis app");
  } else {
    res.status(201).send("creatted my app");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000/");
});
