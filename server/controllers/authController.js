import { db } from "../index.js";
import { v4 as uuidv } from "uuid";
import speakeasy from "speakeasy";
import qrcode from "qrcode";

export const authController = {
  registration: async (req, res) => {
    try {
      const { username, password } = req.body;
      const id = uuidv();
      const path = `/user/${id}`;

      const temp_secret = speakeasy.generateSecret({
        name: username,
      });

      // Create user in the database
      db.push(path, { id, temp_secret, username, password, isVerified: false });
      // Send user id and base32 key to user
      await qrcode.toDataURL(temp_secret.otpauth_url, (err, data_url) => {
        res.json({ id, secret: temp_secret.base32, url: data_url });
      });
    } catch (e) {
      console.log(e);
      res.send(e.message);
    }
  },
  twoFAVerify: async (req, res) => {
    try {
      const { token, userId } = req.body;

      const path = `/user/${userId}`;
      const user = db.getData(path);

      const { base32: secret } = user.temp_secret;
      const verified = speakeasy.totp.verify({
        secret,
        encoding: "base32",
        token,
      });

      if (verified) {
        db.push(path, {
          username: user.username,
          password: user.password,
          id: userId,
          secret: user.temp_secret,
          isVerified: true,
        });

        res.json({ verified: true });
        return;
      }
      res.json({ verified: false });
    } catch (e) {
      console.log(e);
      res.json({ verified: false });
    }
  },
};
