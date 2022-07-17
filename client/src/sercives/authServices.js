import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

export const authService = {
  login: ({ username, lastName }) =>
    Axios.post("/login", {
      username,
      lastName,
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

  twoFAValidate: ({ username, lastName }) =>
    Axios.post("/registration", {
      username,
      lastName,
    }),
};
