import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"
import { toast } from "react-toastify";

export const DoctorContext=createContext()

const DoctorContextProvider=(props)=>{
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [dToken,setDToken]=useState(localStorage.getItem("dToken")?localStorage.getItem("dToken"):"")
    const [appointments,setappointments]=useState([])
    const [dashData,setDashData]=useState(false)
    const [profileData,setProfileData]=useState(false)
    const getAppointments=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+"/api/doctor/appointments",{headers:{dToken}})
            if(data.success){
                setappointments(data.appointments)
                
                console.log(data.appointments)
                
            }else{
                toast.error(data.message)
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const completAppointment=async (appointmentId)=>{
        try {
            const {data}=await axios.post(backendUrl+"/api/doctor/complete-appointment",{appointmentId},{headers:{dToken}})
            if(data.success){
                toast.success(data.message)
                getAppointments()
                
            }else{
                toast.error(data.message)
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const cancelAppointment=async (appointmentId)=>{
        try {
            const {data}=await axios.post(backendUrl+"/api/doctor/cancel-appointment",{appointmentId},{headers:{dToken}})
            if(data.success){
                toast.success(data.message)
                getAppointments()
                
            }else{
                toast.error(data.message)
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const getdashData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+"/api/doctor/dashboard",{headers:{dToken}})
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData)
                
            }else{
                toast.error(data.message)
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const getProfileData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+"/api/doctor/profile",{headers:{dToken}})
            if(data.success){
                setProfileData(data.profileData)
                console.log(data.profileData)
                
            }else{
                toast.error(data.message)
                
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const value={
        dToken,setDToken,backendUrl,setappointments,getAppointments,appointments,completAppointment,cancelAppointment,getdashData,dashData,setDashData,profileData,setProfileData,getProfileData
    }
    return(
        <DoctorContext.Provider value={value}>
            {
                props.children
            }
        </DoctorContext.Provider>
    )
}

 DoctorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default DoctorContextProvider;