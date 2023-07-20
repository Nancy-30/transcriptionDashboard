import React from 'react'
import ProfileImg from '/images/profile.jpg';
import { AiOutlineDoubleRight} from 'react-icons/ai'

export default function Profile() {
  return (
    <div className='flex mt-4 gap-4 items-center'>
    <img src = {ProfileImg} alt = "profile photo" className='h-11 w-13'/>
    <div>
        <h1 className='text-white'>Shekhar Kushwaha</h1>
        <h1 className='text-[#ff5100]'>Upgrade to pro</h1>
      </div>

      <AiOutlineDoubleRight className='text-white cursor-pointer '/>
    </div>
  )
}
