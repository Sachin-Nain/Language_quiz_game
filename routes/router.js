const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const arrh = require("../data/hindi");
const arr = require("../data/english");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const router = express.Router();

dotenv.config();
const seceret = process.env.SECERET;

router.use(cors());

const modelLogin = require("../modal/userlogin");
const Login = modelLogin.Login;
const userdetail = require("../modal/userinfo");
const UserResult = userdetail.UserResult;

// For Getting data
router.get("/hindi", (req, res) => {
  res.send(arrh[Math.floor(Math.random() * arr.length)]);
});

router.get("/eng", (req, res) => {
  res.send(arr[Math.floor(Math.random() * arr.length)]);
});

router.get("/detail/:id1", async (req, res) => {
  let obj = await UserResult.find({ _id: req.params.id1 });
  res.send(obj);
});

router.get("/rank", async (req, res) => {
  let all = await UserResult.find({}).sort({ Score: -1 });
  res.send(all);
});

// For Posting data
router.post("/detail/:id1", async (req, res) => {
  const doc = await UserResult.findById(req.params.id1);
  doc.EnglishAns = 0;
  doc.HindiAns = 0;
  doc.Score = 0;
  doc.save();
  res.end();
});

router.post("/score/:id1", async (req, res) => {
  const doc = await UserResult.findById(req.params.id1);
  doc.Score = req.body.total;
  doc.save();
  res.end();
});

router.post("/login", (req, res) => {
  try {
    const result = jwt.verify(req.body.uid, seceret);
    if (result.name === req.body.name && result.id1 === req.body.id1) {
      res.send("ok");
    } else {
      res.send("no");
    }
  } catch (error) {
    res.send("no");
  }
});

router.post("/signup", (req, res) => {
  let myid = new mongoose.Types.ObjectId();
  let data = {
    ...req.body,
    _id: myid,
  };
  const login = new Login(data);
  const result = new UserResult();
  try {
    login.save();
    result.Name = req.body.userName;
    result.EnglishAns = 0;
    result.HindiAns = 0;
    result.Score = 0;
    result._id = myid;
    result.save();
    let payload = {
      name: req.body.userName,
      id1: myid,
    };

    const token = jwt.sign(payload, seceret);
    res.send({ uid: token, id1: myid });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/engans/:id1", async (req, res) => {
  const doc = await UserResult.findById(req.params.id1);
  console.log(doc.EnglishAns);
  doc.EnglishAns = doc.EnglishAns + 1;
  doc.save();
  console.log(doc);
  res.end();
});

router.patch("/hindians/:id1", async (req, res) => {
  const doc = await UserResult.findById(req.params.id1);
  console.log(doc.HindiAns);
  doc.HindiAns = doc.HindiAns + 1;
  doc.save();
  console.log(doc);
  res.end();
});

module.exports = router;
