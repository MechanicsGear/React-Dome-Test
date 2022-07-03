import React from "react";
import UserStore from "./user.store";
import LoginStore from "./login.store"
import { configure } from "mobx";

configure({
    enforceActions:"never"
})

class RootStore {
    configure(){
        this.userStore=new UserStore();
        this.loginStore=new LoginStore();
    }

}

const rootStore =new RootStore()
const context = React.createContext(rootStore)
const LayoutStore =()=>React.useContext(context)
export {LayoutStore}
