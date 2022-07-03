import axios from "axios";
import {getToken,setToken,removeItem} from './localStorage'
import { history } from "./history";
const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
  })
  http.interceptors.request.use((config)=>{
    const token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },(error)=>{
    console.log(error)
  })

  http.interceptors.response.use((response)=>{
    return response.data
  },(error)=>{
    if(error.code == 401){
        history.push('/login')
    }
  })