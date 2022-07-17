import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import speakeasy from "speakeasy";

import JsonDB from "node-json-db";
import Config from "node-json-db/dist/lib/JsonDBConfig.js";
import authRouter from "./router/authRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", authRouter);

export const db = new JsonDB.JsonDB(
  new Config.Config("myDataBase", true, true, "/")
);

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
