import React from "react";
import UserStore from "./user.store";
import LoginStore from "./login.store"
import { configure } from "mobx";

configure({
    enforceActions:"never"
})

class RootStore {
    configure(){
        this.UserStore=new UserStore()
        this.LoginStore=new LoginStore()
    }

}

const rootStore =new RootStore()
const context = React.createContext(rootStore)
const useStore =()=>React.useContext(context)
export {useStore}
