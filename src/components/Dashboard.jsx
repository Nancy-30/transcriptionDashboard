import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import NewTranscript from './NewTranscript'
import Card from './Card'
import Recents from './Recents'
import ToggledMenu from './ToggledMenu'

export default function Dashboard() {

        const[isMenuOpen , setIsMenuOpen] = useState(false);

        const handleToggleMenu =()=>{
            setIsMenuOpen(!isMenuOpen);
        }
    

    return (
        <div className='bg-gray-100 w-[100%] md:w-[90%] p-5 flex flex-col gap-6'>
            <div className='flex justify-between'>
            <h1 className='text-4xl mt-4 font-semibold text-[#433e3e]'>Dashboard</h1>
            <AiOutlineMenu onClick= {handleToggleMenu} 
            className='cursor-pointer block md:hidden'/>

            {
                isMenuOpen && 
                     <ToggledMenu /> 
                 
            }
            </div>
            
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
