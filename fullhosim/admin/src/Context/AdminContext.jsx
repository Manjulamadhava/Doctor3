import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext=createContext()

const AdminContextProvider=(props)=>{
    const [aToken,setAToken]=useState(localStorage.getItem("aToken")?localStorage.getItem("aToken"):"")
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [dashData,setdashData]=useState(false)
    const [doctors,setDoctors]=useState([])
    const [appointments,setAppointments]=useState([])
    const getAllDoctors=async ()=>{
        try {
            const {data}=await axios.post(backendUrl+"/api/admin/all-doctors",{},{
                headers:{aToken}
            })
            if (data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    const changeAvaliability=async (docId)=>{
        try {
            const {data}=await axios.post(backendUrl+"/api/admin/change-availability",{docId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
    }
    const getAllApointments=async()=>{
        try {
            const {data}=await axios.get(backendUrl+"/api/admin/appointments",{headers:{aToken}})
            if(data.success){
                setAppointments(data.appointments)
                console.log(data.appointments)
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
            const {data}=await axios.post(backendUrl+"/api/admin/cancel-appointment",{appointmentId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllApointments()
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
            const {data}=await axios.get(backendUrl+"/api/admin/dashboard",{headers:{aToken}})
            if(data.success){
                setdashData(data.dashData)
                console.log(data.dashData)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            
            console.log(error)
            toast.error(error.message)
        }
    }
    const value={
        aToken,setAToken,backendUrl,doctors,getAllDoctors,changeAvaliability,appointments,setAppointments,getAllApointments,cancelAppointment,dashData,getdashData

    }
    return(
        <AdminContext.Provider value={value}>
            {
                props.children
            }
        </AdminContext.Provider>
    )
}

 AdminContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}; 

export default AdminContextProvider;
