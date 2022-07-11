const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;
const uuid = require("uuid");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = new JsonDB(new Config("myDataBase", true, false, "/"));

// function test2() {
//   const verified = speakeasy.totp.verify({
//     secret: secret.ascii,
//     encoding: "ascii",
//     token: "261978",
//   });
//
//   console.log(verified);
// }
//
// test2();

app.get("/get-twofa-qrcode", async (req, res) => {
  console.log("test");
  try {
    const secret = speakeasy.generateSecret({
      name: "toma",
    });

    await qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
      // return data_url;
      res.send(data_url);
    });

    // res.send(code);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/api/register", async (req, res) => {
  const id = uuid.v4();

  try {
    const path = `/user/${id}`;
    // Create temporary secret until it it verified
    const temp_secret = speakeasy.generateSecret({
      name: "misha",
    });
    // Create user in the database
    db.push(path, { id, temp_secret });
    // Send user id and base32 key to user
    await qrcode.toDataURL(temp_secret.otpauth_url, (err, data_url) => {
      res.json({ id, secret: temp_secret.base32, url: data_url });
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Error generating secret key" });
  }
});

app.post("/api/verify", (req, res) => {
  const { userId, token } = req.body;
  try {
    // Retrieve user from database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    console.log({ user });
    const { base32: secret } = user.temp_secret;
    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
    });
    if (verified) {
      // Update user data
      db.push(path, { id: userId, secret: user.temp_secret });
      res.json({ verified: true });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

app.post("/api/validate", (req, res) => {
  const { userId, token } = req.body;
  try {
    // Retrieve user from database
    const path = `/user/${userId}`;
    const user = db.getData(path);
    console.log({ user });
    const { base32: secret } = user.secret;
    // Returns true if the token matches
    const tokenValidates = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      // window: 1,
    });
    if (tokenValidates) {
      res.json({ validated: true });
    } else {
      res.json({ validated: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
});

start();
