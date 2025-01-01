import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="">

          ABOUT <span className='text-gray-700 font-medium '>US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img src={assets.about_image} alt="aboutimage" className="w-full md:max-w-[360px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
              Welcome To Homify ,Your Trusted partner in managinging the health care, leads covivently and effenciently ad d Hosify To understand the challenges inviduivals force when it comes to scheduling the doctor appointment and managing their health records
          </p>
          <p className="">hosify is commited to excellence in heaith care technology and contiunes strive to ennhance our platform integrity the latest advancements to improve user experience and delevery superoor service whether you are booking your first appointment are managing ongoing care homify is here to support every step of the way</p>
          <b className='text-gray-800'>Our Vision</b>
          <p className="">Our Vision at hosify is to create a seamless health care experience for every user aim to bridge the gap betwwen patience and health care providers and making it easir to care ypu need wnen you need it</p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="">Why <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer">
          <b className="">Effenciency:</b>
          <p className="">Streamlined appointment scheduling the fits into your bussy life style</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer">
          <b className="">convenice:</b>
          <p className="">Acess to network Trusted Health Care professionals in your area</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration:300 text-gray-600 cursor-pointer">
          <b className="">pernationlization:</b>
          <p className="">Traliored recommendation to help you stay an top of a Health</p>
        </div>
      </div>
    </div>
  )
}

export default About
