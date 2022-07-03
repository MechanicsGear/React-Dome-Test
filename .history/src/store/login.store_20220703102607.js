import { makeAutoObservable } from "mobx";
import { http } from "../utils/http";
import { setToken, getToken, removeToken } from "../utils/localStorage";

class LoginStore {
  token = getToken() || "";
  constructor() {
    // 响应式
    makeAutoObservable(this);
  }

  getToken = async ({ username, password }) => {
    const data = {
      mobile: username,
      code: password,
    };
    const res = await http.post(
      "http://geek.itheima.net/v1_0/authorizations",
      data
    );
    this.token = res.data.token;
    setToken(this.token);
  };

  logout = () => {
    this.token = "";
    removeToken();
  };
}

export default LoginStore;
