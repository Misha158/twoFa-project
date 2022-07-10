const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

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

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
