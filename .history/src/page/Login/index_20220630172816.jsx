import React,{Component} from 'react'
import { useNavigate } from 'react-router-dom'
export default  function Login(){
    const navigate =useNavigate()
    const login =()=>{
        navigate('/',{replace:true})
    }
    return(
        <div>
            <div>Login</div>
            <button onClick={login}>登录</button>
        </div>
    )
}