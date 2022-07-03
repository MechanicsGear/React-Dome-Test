import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../utils/localStorage' 
export default  function Login(){
    const navigate =useNavigate()
    const login =()=>{
        setToken('asdasda')
        navigate('/',{replace:true})
    }
    return(
        <div>
            <div>Login</div>
            <button onClick={login}>登录</button>
        </div>
    )
}