import React, { useState } from 'react'
import './login.css'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import {useHistory}



const Login = () => {
    const navi = useNavigate()
    // const hist = useHistory()
    localStorage.clear()

    const[name,setname]=useState("")
    const[pass,setpass]=useState("")
    const getdetails=(e)=>{
        // e.preventDefault()
        if(name=='griet'){
            if(pass=='griet'){
                localStorage.setItem("name",name)
                navi('/home')
            }
            else{
                window.alert("Wrong Password")
            }
        }
        else{
            window.alert("Wrong username or Password")
        }
        
    }
  return (
    <div className='login'>
        <h1 className='hey1' style={{color:'whitesmoke'}}>Login</h1>
        <br></br>
    <form className='form1'>
        <input className='input1' type='text' placeholder='Enter Your name' onChange={(e)=>setname(e.target.value)} ></input>
        <br></br>
        <br></br>
        <input className='input1' type='password' placeholder='Enter Your password' onChange={(e)=>setpass(e.target.value)} ></input>
        <br></br>
        <br></br>
        <button className='button1' onClick={getdetails}>Login</button>
    </form>
    </div>
  )
}

export default Login