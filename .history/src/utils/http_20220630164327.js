import axios from "axios";
import {getToken,setToken,removeItem} from './localStorage'
const http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
  })
  http.interceptors.request.use((config)=>{

  })