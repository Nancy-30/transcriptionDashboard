import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

export default function NewTranscript() {
    return (
        <div className='w-[88%] bg-white shadow-md shadow-gray-300 p-4 pl-8 rounded-xl'>
            <h1 className='text-2xl font-semibold'>Start New Transcription</h1>

            <form className='flex flex-col items-center' >
                <AiOutlineCloudUpload className='text-6xl' />
                <input type='file' className='m-3 p-2' name = "uploadedFile" />
                <button type='submit' className='bg-[#f15c16] p-2 rounded-md text-white' >Upload video/audio file</button>
                <div className='text-[10px] m-1 cursor-pointer'>or insert video/audio link</div>
            </form>

            <div className='flex flex-col gap-2'>
                <label className='text-gray-500'>Select Transcription Language</label>
                <select className='w-[15%] rounded-sm border-[0.5px] border-gray-500 text-gray-500 p-1'>
                    <option>English(U.K)</option>
                    <option>French</option>
                </select>
            </div>
        </div>
    )
}
