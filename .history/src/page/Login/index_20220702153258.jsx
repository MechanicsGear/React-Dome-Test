import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../utils/localStorage' 
import './index.scss'
export default  function Login(){
    const navigate =useNavigate()
    const login =()=>{
        setToken('asdasda')
        navigate('/',{replace:true})
    }
    return(
        <div className='login-div'>
            <div className='login-form'>
                <p>React-Dome-Test</p>
            </div>
        </div>
    )
}