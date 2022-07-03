import React from "react";
import UserStore from "./user.store";
import { configure } from "mobx";

configure({
    enforceActions:"never"
})

class RootStore {
    configure(){
        this.UserStore=new UserStore()
    }

}

const rootStore =new RootStore()
const context = React.createContext(rootStore)
