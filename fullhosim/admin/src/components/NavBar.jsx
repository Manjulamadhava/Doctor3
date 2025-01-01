import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../Context/DoctorContext'

const NavBar = () => {
    const {aToken,setAToken}=useContext(AdminContext)
    const {dToken,setDToken}=useContext(DoctorContext)
    const navigate=useNavigate()
    const logout=()=>{
        navigate("/")
        aToken && setAToken("")
        aToken && localStorage.removeItem("aToken")
        dToken && setDToken("")
        dToken && localStorage.removeItem("dToken")
    }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border bg-white">
      <div className='flex items-center gap-2 text-xs '>
        <img src={assets.admin_logo} alt="admin" className="w-36 sm:w-40 cursor-pointer " />
        <p className="border px-2.5 py-0.5 rounded-full border border-gray-500 text-gray-600">{aToken ? 'Admin' :'Doctor'}</p>
      </div>
      <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounde-full">Logout</button>
    </div>
  )
}

export default NavBar