const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const empModel = require("./models/employee");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    res.json(err);
  });

app.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    const match = await empModel.findOne({ email });
    if (match) {
      return res.status(400).json({ error: "email already in use" });
    } else {
      const newUser = await empModel.create(req.body);
      return res.json(newUser).catch((err) => res.json(err));
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  empModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        console.log(user);
        if (user.password === password) {
          res.json({ status: true, user });
        } else {
          res.json({ status: false, message: "Credentials incorrect" });
        }
      } else {
        res.json("Incorrect Email and password");
      }
    })
    .catch((error) => {
      error.status;
    });
});

app.listen(9000, () => {
  console.log("server is running");
});
