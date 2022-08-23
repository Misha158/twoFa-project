import { makeAutoObservable, toJS } from "mobx";

class RouterStore {
  constructor() {
    makeAutoObservable(this);
  }

  routes = [];
  prevPage = null;
  isWasGoBack = false;
  idx = null;

  changeRoutes({ route }) {
    if (window.history.state.idx < this.idx && !this.isWasGoBack) {
      this.idx = window.history.state.idx;
      this.routes = this.routes.slice(0, this.routes.length - 1);
      this.prevPage = this.routes[this.routes.length - 2];
      return;
    }

    this.idx = window.history.state.idx;
    if (this.isWasGoBack) {
      this.isWasGoBack = false;
    } else {
      this.routes.push(route);

      this.prevPage =
        this.routes.length > 1
          ? this.routes[this.routes.length - 2]
          : this.routes[this.routes.length - 1];
    }
  }

  goBack() {
    this.isWasGoBack = true;
    this.routes = this.routes.slice(0, this.routes.length - 1);
    this.prevPage = this.routes[this.routes.length - 2];
  }
}

export default new RouterStore();
