import React from 'react'
import Profile from './Profile'
import { BiSolidHome, BiCalendar, BiFolder, BiTrash, BiInfoCircle } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
export default function Sidebar() {
  return (
    <div className="lg:w-[19%] w-[14rem] hidden md:block h-[60rem] ">

      <div className='p-4 flex flex-col gap-10 h-[100%] fixed bg-slate-950 xl:w-[17rem] w-[12rem]' >

        <Profile />

        <ul className=' '>
          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white bg-[#f15c16] mt-2'>
            <BiSolidHome />
            <h1>Dashboard</h1>
          </li>

          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white mt-2'>
            <BiCalendar />
            <h1>Calender</h1>
          </li>


          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white mt-2'>
            <BiFolder />
            <h1>Folders</h1>
          </li>

          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white mt-2'>
            <BiTrash />
            <h1>Trash</h1>
          </li>
        </ul>

        <ul className='mt-48'>

          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white mt-2'>
            <AiOutlineSetting />
            <h1>Settings</h1>
          </li>

          <li className='flex cursor-pointer items-center gap-3 text-xl justify-start p-2 rounded-md text-white mt-2'>
            <BiInfoCircle />
            <h1>Help & Support</h1>
          </li>

        </ul>

      </div>

      
    </div>
  )
}
