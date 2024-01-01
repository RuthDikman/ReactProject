import { observable, makeObservable, action } from "mobx";
class Store {
  isLogin = JSON.parse(localStorage.getItem("Admin"));
  isEdit = false;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      setIsLogin: action,
      isEdit: observable,
      setIsedit: action,
    });
  }
  setIsLogin = (val) => {
    this.isLogin = val;
  };
  setIsedit = (val) => {
    this.isEdit = val;
  };
}
export default new Store();
