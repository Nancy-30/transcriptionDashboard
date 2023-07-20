import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { AiOutlineDown } from 'react-icons/ai'

import RecentsList from './RecentsList'

export default function Recents() {
    return (
        <div className='w-[98%] md:w-[88%] text-[#433e3e] text-[10px] md:text-[15px]'>
            <div className='flex justify-between items-end '>
                <h2 className='text-3xl font-semibold  mt-4'>Recents</h2>

                <span className='flex items-center font-sans cursor-pointer'>
                    <CiFilter />
                    Filter
                </span>
            </div>

            <div className='flex justify-between p-3 font-medium'>
                <div className='md:w-[15%] justify-center flex'>File Name</div>
                <ul className='flex justify-evenly md:w-[50%] w-[70%]'>
                    <li>Duration</li>
                    <li>Created by</li>
                    <li>Created on</li>
                </ul>
            </div>

            <div className='gap-2 flex flex-col'>
                <RecentsList/>
                <RecentsList/>
                <RecentsList/>
                <RecentsList/>
            </div>

            <div className='flex items-center justify-center m-5 text-[#f15c16] cursor-pointer'>
                view more 
                <AiOutlineDown className='m-1'/>
            </div>
        </div>
    )
}
