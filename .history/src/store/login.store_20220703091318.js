import { makeAutoObservable } from "mobx/dist/internal";
import { http } from "../utils/http";
import { setToken,getToken,removeToken } from "../utils/localStorage";

class LoginStore {
    token =getToken()||''
    constructor(){
        makeAutoObservable(this)
    }
    getToken = async ({username,password})=>{
        const res =await http.post(
            'http://geek.itheima.net/v1_0/authorizations',{
                mobile:username,
                code:password
            }
        )
        this.token = res.data.token
        setToken(this.token)
    }

    LoginOut = ()=>{
        this.token=''
        removeToken()
    }
}

export default LoginStore