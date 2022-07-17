import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

export const authService = {
  login: ({ username, password }) =>
    Axios.post("/login", {
      username,
      password,
    }),

  registration: ({ username, password }) =>
    Axios.post("/registration", {
      username,
      password,
    }),

  twoFAVerify: ({ token, userId }) =>
    Axios.post("/twofa-verify", {
      token,
      userId,
    }),

  twoFAValidate: ({ token, userId }) =>
    Axios.post("/twofa-validate", {
      userId,
      token,
    }),
};
