import { makeAutoObservable } from "mobx";

const getLocalStorageItem = (name) => JSON.parse(localStorage.getItem(name));

class store {
  constructor() {
    makeAutoObservable(this);
  }

  authData = {
    username: getLocalStorageItem("authData")?.username,
    password: getLocalStorageItem("authData")?.password,
    id: getLocalStorageItem("authData")?.id,
    secret: getLocalStorageItem("authData")?.secret,
    url: getLocalStorageItem("authData")?.url,
    shouldVerifiedTwoFA: getLocalStorageItem("authData")?.shouldVerifiedTwoFA,
    shouldValidateTwoFA: getLocalStorageItem("authData")?.shouldValidateTwoFA,
    isVerifiedTwoFA: getLocalStorageItem("authData"),
    isAuth: getLocalStorageItem("authData")?.isAuth,
  };

  onRegistration = ({ username, password, id, secret, url }) => {
    this.authData = {
      username,
      password,
      id,
      secret,
      url,
      shouldVerifiedTwoFA: true,
      shouldValidateTwoFA: false,
      isVerifiedTwoFA: false,
      isAuth: false,
    };

    localStorage.setItem("authData", JSON.stringify(this.authData));
  };

  setIsVerifiedTwoFA = ({ isVerifiedTwoFA, shouldVerifiedTwoFA }) => {
    this.authData = {
      ...this.authData,
      shouldVerifiedTwoFA,
      isVerifiedTwoFA,
      isAuth: isVerifiedTwoFA,
    };

    localStorage.setItem("authData", JSON.stringify(this.authData));
  };

  setShouldValidateTwoFA = (shouldValidate) => {
    this.authData = {
      ...this.authData,
      shouldValidateTwoFA: shouldValidate,
    };
    localStorage.setItem("authData", JSON.stringify(this.authData));
  };
}

export default new store();
