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

start();
