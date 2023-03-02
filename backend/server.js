const express = require("express");
const session = require('express-session')
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const userRoute = require("./routes/usersRoutes");
const app = express();
const cors = require("cors");
const uri = "mongodb+srv://Admin:yW6HvoQMIhE8INBk@cluster0.uq9n5ur.mongodb.net/test";

async function connect() {
  try {
    await mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoute);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});