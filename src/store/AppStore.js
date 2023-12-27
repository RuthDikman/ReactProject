import { observable, makeObservable, action } from 'mobx';

class AppStore {
    isLogin = false;
    isEdit=false;
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            isEdit:observable,
            setIsedit: action,
        })
    }
    setIsLogin = (val) => {
        this.isLogin = val;
    }
    setIsedit = (val) => {
        this.isEdit = val;
    }

}

export default new AppStore();