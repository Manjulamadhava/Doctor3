import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { assets } from '../../assets/assets.js'
import { AppContext } from '../../Context/AppContext.jsx'


const DashBoard = () => {
  const {aToken,dashData,getdashData,cancelAppointment}=useContext(AdminContext)
  const {slotDateFormat}=useContext(AppContext)
  useEffect(()=>{
    if(aToken){
      getdashData()
    }
  },[aToken])
  return dashData && (
    <div className='m-5'>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
          <img src={assets.doctor_icon} alt="docIcon" className="w-14" />
        <div className="">
          <p className="text-xl font-semibold text-gray-600">{dashData.doctors}</p>
          <p className="text-gray-400">Doctors</p>
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
            {dashData.lateshAppointments.map((item,index)=>(
              <div className=" flex item-center px-6 py-3 gap-3 hover:bg-gray-100" key={index}>
                <img src={item.docData.image} alt="DocImage" className="rounded-full w-10" />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800">{item.docData.name}</p>
                  <p className="text-gray-800">{slotDateFormat(item.slotDate)}</p>
                </div>
                {item.cancelled ? <p className="text-red-400 text-xs font-medium">Cancelled</p>:item.isCompleted?<p className="text-green-500 text-xs font-medium">completed</p>:<img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt="" className="w-10 cursor-pointer" />
                           }
              </div>
            
            ))}
        </div>
      </div>
    </div>
  )
}

export default DashBoard