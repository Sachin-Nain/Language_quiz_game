const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/router");

const PORT = process.env.PORT || 8000;

dotenv.config();
const monogUrl = process.env.MONGO_URL;

app.use(express.json());
app.use(express.static(path.join(__dirname + "/build")));
app.use("/",userRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(monogUrl);
  console.log("db connected");
}

app.listen(PORT, () => {
  console.log("running");
});