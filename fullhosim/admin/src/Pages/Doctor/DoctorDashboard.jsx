import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../Context/DoctorContext'

import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'



const DoctorDashboard = () => {
  const {dToken,getdashData,dashData,setDashData,cancelAppointment,completAppointment}=useContext(DoctorContext)
  const {slotDateFormat}=useContext(AppContext)
  useEffect(()=>{
    if(dToken){
      getdashData()
    }
  },[dToken])
  return dashData && (
    <div className='mb-3'>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img src={assets.earning_icon} alt="docIcon" className="w-14" />
        <div className="">
          <p className="text-xl font-semibold text-gray-600">Not Specified</p>
          <p className="text-gray-400">Earnings</p>
        </div>
        
      </div>
      <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img src={assets.appointments_icon} alt="docIcon" className="w-14" />
        <div className="">
          <p className="text-xl font-semibold text-gray-600">{dashData.appointments}</p>
          <p className="text-gray-400">Appointments</p>
        </div>
        
      </div>
      <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img src={assets.patients_icon} alt="docIcon" className="w-14" />
        <div className="">
          <p className="text-xl font-semibold text-gray-600">{dashData.patients}</p>
          <p className="text-gray-400">Patients</p>
        </div>
        
      </div>
      </div>
      <div className="bg-white">
        <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border">
          <img src={assets.list_icon} alt="listicom" className="" />
          <p className="font-semibold">
            Latesh Bookings
          </p>
        </div>
        <div className="pt-4 border border-t-0">
            {dashData.latestAppointments.map((item,index)=>(
              <div className=" flex item-center px-6 py-3 gap-3 hover:bg-gray-100" key={index}>
                <img src={item.userData.image} alt="DocImage" className="rounded-full w-10" />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800">{item.userData.name}</p>
                  <p className="text-gray-800">{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled?<p className="text-red-400 text-xs font-medium">Cancelled</p>:item.isCompleted?<p className="text-green-500 text-xs font-medium">Completed</p>:
                    <div className=" flex">
                      <img src={assets.cancel_icon} onClick={()=>cancelAppointment(item._id)} alt="" className="w-10 cursor-pointer" />
                      <img src={assets.tick_icon} onClick={()=>completAppointment(item._id)} alt="" className="w-10 cursor-pointer" />
                    </div>
                }
          
              </div>
            
            ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
