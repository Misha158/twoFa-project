import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  authData = {};
  isVerifyTwoFA = false;
  shouldVerifyTwoFA = false;

  setAuthData = ({ username, password, id, secret, url }) => {
    this.authData = { username, password, id, secret, url };
    this.shouldVerifyTwoFA = true;
  };

  setIsVerifyTwoFA = (isVerify) => {
    this.isVerifyTwoFA = isVerify;
    this.shouldVerifyTwoFA = isVerify;
  };
}

export default new store();
