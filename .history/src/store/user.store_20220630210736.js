import  {makeAutoObservable} from 'Mobx'
import { http } from '../utils/http'
class UserStore{
    constructor(){
        makeAutoObservable(this)
    }
    userinfo={}
    getUserinfo= async ( )=>{
        const res= await  http.get('/user/profile')
        this.userinfo=res.data
    }
}