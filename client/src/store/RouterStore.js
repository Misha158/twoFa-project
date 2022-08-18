import { makeAutoObservable, toJS } from "mobx";

class RouterStore {
  constructor() {
    makeAutoObservable(this);
  }

  routes = [];
  prevPage = null;
  isWasGoBack = false;

  changeRoutes({ route }) {
    if (this.isWasGoBack) {
      this.isWasGoBack = false;
    } else {
      this.routes.push(route);
      // console.log(toJS(this.routes));
      /*      console.log(this.routes.length);
      console.log(
        toJS(
          this.routes.length > 1
            ? this.routes[this.routes.length - 2]
            : this.routes[this.routes.length - 1]
        )
      );*/
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
