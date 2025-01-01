import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './Context/AppContext';
import { AdminContext } from './Context/AdminContext';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/Admin/DashBoard';
import AllApointments from './Pages/Admin/AllApointments';
import AddDoctor from './Pages/Admin/AddDoctor';
import DoctorsList from './Pages/Admin/DoctorsList';
import { DoctorContext } from './Context/DoctorContext';
import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
import DoctorAppointment from './Pages/Doctor/DoctorAppointment';
import DoctorProfile from './Pages/Doctor/DoctorProfile';
const App = () => {
  const {aToken}=useContext(AdminContext)
  const {dToken}=useContext(DoctorContext)
  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]' >
      <ToastContainer />
      <NavBar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<DashBoard />} />
          <Route path="/all-appointments" element={<AllApointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />
          {/*Doctor Route*/}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointment />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ): (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
