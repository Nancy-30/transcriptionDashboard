import React from 'react'
import Gcalender from '/images/googleCalender.png'
import GMeet from '/images/googleMeet.png'
import { AiFillPlusCircle } from 'react-icons/ai'

export default function Card() {
    return (
        <div className='flex flex-col lg:flex-row gap-4'>

            <div className='lg:w-[28%] w-[70%] bg-white shadow-md  shadow-gray-400 p-4 rounded-xl'>
                <h1 className='text-xl font-medium '>Connect your Google calender</h1>
                <p>Sync your google calendar for seamless event transcriptions.</p>

                <div className='flex justify-between items-end'>
                    <img src={Gcalender} alt="google Calender icon" className='h-24' />
                    <AiFillPlusCircle className='text-[#ff5100] text-xl' />
                </div>
            </div>

            
            <div className='lg:w-[28%] w-[70%] bg-white shadow-md  shadow-gray-400 p-4 rounded-xl'>
                <h1 className='text-xl font-medium '>Connect your G-Meet</h1>
                <p>Connect your meeting platform for seamless meetings transcription.</p>

                <div className='flex justify-between items-end'>
                    <img src={GMeet} alt="google Calender icon" className='h-20 m-2'  />
                    <AiFillPlusCircle className='text-[#ff5100] text-xl' />
                </div>
            </div>

            
        </div>
    )
}
