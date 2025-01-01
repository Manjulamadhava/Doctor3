import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const {backendUrl,token,setToken}=useContext(AppContext)
const navigate=useNavigate()
const [state,setState]=useState('Sign UP')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setName]=useState('')

const onSubmit=async(event)=>{
  event.preventDefault()
  try {
    if (state==="Sign UP"){
      const {data}=await axios.post(backendUrl+"/api/user/register",{name,email,password})
      console.log(data)
      if(data.success){
        toast.success("Accounted created successfully ")
        setEmail("")
        setPassword("")
        setName("")
      }else{
        toast.error(data.message)
      }
    }else{
      const {data}=await axios.post(backendUrl+"/api/user/login",{email,password})
      if(data.success){
        localStorage.setItem('token',data.token)
        setToken(data.token)
      }else{
        toast.error(data.message)
      }
    }
  } catch (error) {
    toast.error(error.message)
      
  }
}
useEffect(()=>{
  if(token){
    navigate('/')
  }
},[token])

  return (
    <form onSubmit={onSubmit} className="min-h-[80vh] flex items-center">

      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm-shadow-log">
        <p className="text-2xl font-semi-bold">{state==='Sign UP'?"Create Account":'Login'}</p>
        <p className="">Please {state==='Sign UP'?"Sign Up":'Log in'} to book appointment</p>
        {state==="Sign UP"&&<div className="w-full">
          <p className="">Full Name</p>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="border border-zinc-300 rounded w-full p-2 mt-1 " />
        </div>}
      
         <div className="w-full">
          <p className="">Email</p>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="border border-zinc-300 rounded w-full p-2 mt-1 " />
        </div>
         <div className="w-full">
          <p className="">Password</p>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="border border-zinc-300 rounded w-full p-2 mt-1 " />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base " type="submit" >{state==='Sign UP'?"Create Account":'Login'}</button>
        {state==='Sign UP'?<p>Already have an account? <span onClick={()=>setState('Login')} className="text-primary underline cursor-pointer">Login here</span></p>:<p>Create an new account? <span onClick={()=>setState('Sign UP')} className="text-primary underline cursor-pointer">Click here</span></p>}
      </div>







    </form>
  )
}

export default Login
