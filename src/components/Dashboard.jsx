import React from 'react'

import { BiSearchAlt } from 'react-icons/bi'
import NewTranscript from './NewTranscript'
import Card from './Card'
import Recents from './Recents'

export default function Dashboard() {
    return (
        <div className='bg-gray-100 w-[100%] md:w-[90%] p-5 flex flex-col gap-6'>
            <h1 className='text-4xl mt-4 font-semibold text-[#433e3e]'>Dashboard</h1>

            {/* search bar */}
            <div className='flex items-center w-[60%] bg-white p-2 self-center rounded-[50px] gap-3 border-[#f15c16] border-[2px]'>
                <BiSearchAlt />
                <input type='text' placeholder='Search your transcripts' className='bg-transparent' />
            </div>

            <NewTranscript />
            <Card />
            <Recents/>
        </div>
    )
}
