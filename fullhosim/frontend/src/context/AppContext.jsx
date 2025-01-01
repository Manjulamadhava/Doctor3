import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios"

export const AppContext = createContext();

const AppContextProvider = (props) => {
    
    const currencySymbol="$"
    const [doctors,setDoctors]=useState([])
    const [token,setToken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):false)
    const [userData,setUserData]=useState(false)
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const getDoctorsData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/doctor/list')
            if(data.success){
                setDoctors(data.doctors)

            }else{
                toast.error(data.mesage)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        getDoctorsData()
    },[])
    const loadUserProfileData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/user/get-profile',{headers:{token}})
            if(data.success){
                setUserData(data.userData)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])
    const value = { doctors,currencySymbol ,token,setToken,backendUrl,userData,setUserData,getDoctorsData};
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AppContextProvider