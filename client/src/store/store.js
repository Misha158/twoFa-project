import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  authData = {
    username: JSON.parse(localStorage.getItem("authData"))?.username,
    password: JSON.parse(localStorage.getItem("authData"))?.password,
    id: JSON.parse(localStorage.getItem("authData"))?.id,
    secret: JSON.parse(localStorage.getItem("authData"))?.secret,
    url: JSON.parse(localStorage.getItem("authData"))?.url,
  };

  isVerifyTwoFA = false;
  shouldVerifyTwoFA = JSON.parse(localStorage.getItem("authData"))
    ?.shouldVerifiedTwoFA;

  setAuthData = ({ username, password, id, secret, url }) => {
    this.authData = { username, password, id, secret, url };
    this.shouldVerifyTwoFA = true;

    localStorage.setItem(
      "authData",
      JSON.stringify({
        username,
        password,
        id,
        secret,
        url,
        shouldVerifiedTwoFA: true,
      })
    );
  };

  setIsVerifyTwoFA = ({ isVerifyTwoFA, shouldVerifyTwoFA }) => {
    this.isVerifyTwoFA = isVerifyTwoFA;
    this.shouldVerifyTwoFA = shouldVerifyTwoFA;

    localStorage.setItem(
      "authData",
      JSON.stringify({
        ...this.authData,
        shouldVerifiedTwoFA: shouldVerifyTwoFA,
        isVerifyTwoFA,
      })
    );
  };
}

export default new store();
