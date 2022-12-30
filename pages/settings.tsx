import React from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import Header from '../components/overview/Header'

export default function Settings () {
 return (

  <div>
    <div>
      <div className='absolute w-[1066px] h-[278px] left-[284px] top-[208px] font-bold text-3xl'>
        <div className='absolute w-[1066px] h-[58px] bg-[#8A8A8A] shadow-lg rounded-t-2xl text-[#FFFFFF] pl-8'>
            user metrics
        </div>
      </div>
      <div className='absolute w-[1066px] h-[237px] left-[284px] top-[249px] bg-[#D9D9D9] shadow-lg rounded-b-2xl'></div>
    </div>

    <div>
      <div className='absolute w-[1066px] h-[172px] left-[284px] top-[522px] font-bold text-3xl'>
        <div className='absolute w-[1066px] h-[58px] bg-[#8A8A8A] shadow-lg rounded-t-2xl text-[#FFFFFF] pl-8'>
            user experience
        </div>
      </div>
      <div className='absolute w-[1066px] h-[172px] left-[284px] top-[563px] bg-[#D9D9D9] shadow-lg rounded-b-2xl'></div>
    </div>
  </div>
 )
}