import React from "react";
import UserStore from "./user.store";
import LoginStore from "./login.store"
import { configure } from "mobx"
configure({
  enforceActions: "never",
})


class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    // ...
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
