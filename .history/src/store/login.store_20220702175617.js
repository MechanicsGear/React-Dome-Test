import { makeAutoObservable } from "mobx/dist/internal";
import { http } from "../utils/http";
import { setToken,getToken } from "../utils/localStorage";

class LoginStore {
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
    }
}