import { makeAutoObservable } from "mobx";

class store {
  constructor() {
    makeAutoObservable(this);
  }

  authData = {};

  setAuthData = (data) => {
    this.authData = data;
  };
}

export default new store();
