import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
            <img src={assets.logo} alt="" className="mb-5 w-40" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Loreum Ipsum is simply dummy text od the printing and type setting industry has been reviewd and it is causing die to the helth of the patence and we care about you so musch and that what make us different in this field</p>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li className="">
                    Home
                </li>
                <li className="">
                    About us
                </li>
                <li className="">
                    Contact Us
                </li>
                <li className="">
                    Privacy Policy
                </li>
            </ul>
        </div>
        <div className="">
            <p className="text-xl font-medium mb-5">GET In Touch</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+12-334452344345</li>
                <li>madhavmanjula6@gmail.com and vpraveen1505@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">CopyRight 2024@ homify All Right Resevered</p>
      </div>
    </div>
  )
}

export default Footer
