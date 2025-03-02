import  { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../Context/AdminContext'
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {
    const [docImg,setdocImg]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [experience,setExperience]=useState('1 Year')
    const [fees,setFees]=useState('')
    const [about,setAbout]=useState('')
    const [speciality,setSpeciality]=useState('General physician')
    const [degree,setDegree]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')

    const {backendUrl,aToken}=useContext(AdminContext)


const onSubmitHandler=async(event)=>{
    event.preventDefault()
    try{ if (!docImg){
        return toast.error('Image Not Selected')
    }
    const formData=new FormData()
    formData.append('image',docImg)
     formData.append('name',name)
     formData.append('email',email)
     formData.append('password',password)
     formData.append('experience',experience)
     formData.append('fees',Number(fees))
     formData.append('about',about)
     formData.append('speciality',speciality)
     formData.append('degree',degree)
     formData.append('address',JSON.stringify({line1:address1,line2:address2}))
     
     formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);

     })

     const {data}=await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{aToken}})

     if (data.success){
        toast.success(data.message)
        setdocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')

     }
     else{
        toast.error(data.message)
     }
    }catch(error){
        console.log(error.message)
        toast.error(error.message)
    }
}




  return (
    <form action="" className="m-5 w-full " onSubmit={onSubmitHandler}>
        <p className=" mb-3 text-lg font-medium">
            ADD Doctor
        </p>
        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
            <div className="flex items-center gap-4 mb-8 text-gray-500">
                <label htmlFor="doc-img" className="">
                    <img src={docImg?URL.createObjectURL(docImg):assets.upload_area} alt="upload" className="w-16 bg-gray-100 rounded-full cursor-pointer" />
                </label>
                <input type="file" className="" id="doc-img" hidden onChange={(e)=>setdocImg(e.target.files[0])}/>
                <p className="">
                    UpLoad Doctor Picture <br />
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
                <div className="w-full lg:flex-1 flex flex-col gap-4">
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="">Doctor Name</p>
                        <input type="text" className="border rounded px-3 py-2" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' required/>
                    </div>
                    <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Doctor Email</p>
                        <input type="email" className="border rounded px-3 py-2" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>
                    <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Doctor PassWord</p>
                        <input type="password" className="border rounded px-3 py-2"  placeholder='password' required onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <p className="">Experience</p>
                        <select className="border rounded px-3 py-2" onChange={(e)=>setExperience(e.target.value)} value={experience} >
                            <option value="1 Year">1  Year</option>
                            <option value="2 Year">2  Year</option>
                            <option value="3 Year">3  Year</option>
                            <option value="4 Year">4  Year</option>
                            <option value="5 Year">5  Year</option>
                            <option value="6 Year">6  Year</option>
                            <option value="7 Year">7  Year</option>
                            <option value="8 Year">8  Year</option>
                            <option value="9 Year">9 Year</option>
                            <option value="10 Year">10  Year</option>
                        </select>
                    </div>
                    <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Fees</p>
                        <input type="number" className="border rounded px-3 py-2"  placeholder='Fees' required 
                         onChange={(e)=>setFees(e.target.value)} value={fees} />
                    </div>
                </div>
                <div className="w-full lg:flex-1 flex flex-col gap-4">
                    <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Speciality</p>
                        <select name="" id="" className="border rounded px-3 py-2"  onChange={(e)=>setSpeciality(e.target.value)} value={speciality} >
                            <option value="General Physician">General Physician</option>
                            <option value="Gynecologist">Gynecologist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Pediatricians">Pediatricians</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Gastrogenterologist">Gastrogenterologist</option>
                        </select>
                    </div>
                     <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Education</p>
                        <input type="text" className="border rounded px-3 py-2"  placeholder='Education' required 
                         onChange={(e)=>setDegree(e.target.value)} value={degree} />
                    </div>
                    <div  className="flex-1 flex flex-col gap-1">
                        <p className="">Address</p>
                        <input   onChange={(e)=>setAddress1(e.target.value)} value={address1} type="text" className="border rounded px-3 py-2"  placeholder='Address 1' required/>
                        <input  onChange={(e)=>setAddress2(e.target.value)} value={address2}  type="text" className="border rounded px-3 py-2"  placeholder='Address 2' required/>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="mt-4 mb-2">About Doctor</p>
                <textarea type="text"   onChange={(e)=>setAbout(e.target.value)} value={about} className="w-full px-4 pt-2 border rounded"  placeholder='write about doctor' rows={5} required/>
                
            </div>
            <button  type="submit" className='bg-primary px-10 py-3 mb-4 text-white rounded-full'>
                Add Doctor
            </button>
        </div>
    </form>
  )
}

export default AddDoctor
