import React,{Component} from 'react'
import { useNavigate } from 'react-router-dom'
export default  function Login(){
    const navigate =useNavigate()
    return(
        <div>
            <div>Login</div>
            <button>登录</button>
        </div>
    )
}