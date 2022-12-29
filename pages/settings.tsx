import React from 'react'
import { MdOutlineSettings } from 'react-icons/md'

export default function Settings () {
 return (
  <div>

    <div className="bg-white flex flex-row grow justify-between items-center md:h-18 lg:h-24 text-black font-bold sticky top-0 bottom-0 z-50 shadow-lg w-full pl-12 pr-12">
      <div className="flex items-center w-full h-full">
        <MdOutlineSettings className="sm:text-3xl lg:text-6xl mr-5"/>
        <h1 className="sm:text-3xl lg:text-5xl"> settings </h1>
      </div>
    </div>

    <div className='absolute w-[1066px] h-[278px] left-[284px] top-[208px] font-bold text-3xl'>
      <div className='absolute w-[1066px] h-[58px] bg-[#8A8A8A] shadow-lg rounded-t-2xl text-[#FFFFFF] pl-8'>
          user metrics
      </div>
    </div>

    <div className='absolute w-[1066px] h-[237px] left-[284px] top-[249px] bg-[#D9D9D9] shadow-lg rounded-b-2xl'>
      {/* <div className='absolute w-[438px] h-[38px] bg-[#FFFFFF] shadow-lg rounded-xl pl-12'></div>
      <div className='absolute w-[438px] h-[38px] bg-[#FFFFFF] shadow-lg rounded-xl top-[29.3%]'></div> */}
      <div className='absolute w-[438px] h-[38px] bg-[#FFFFFF] shadow-lg rounded-xl top-[35.55%] right-[45.35%] bottom-[60.74%] left-[24.24%]'></div>
      <div className='absolute w-[438px] h-[38px] bg-[#FFFFFF] shadow-lg rounded-xl top-[35.55%] right-[10.76%] bottom-[60.74%] left-[58.24%]'></div>
    </div>


  // </div>
  // <div id='settings-page' className='relative w-screen h-screen'>
  //   <div className="bg-white flex flex-row grow justify-between items-center md:h-18 lg:h-24 text-black font-bold sticky top-0 bottom-0 z-50 shadow-lg w-full pl-12 pr-12">
  //     <div className="flex items-center w-full h-full">
  //       <MdOutlineSettings className="sm:text-3xl lg:text-6xl mr-5"/>
  //       <h1 className="sm:text-3xl lg:text-5xl"> settings </h1>
  //     </div>
  //   </div>

  //   <div id='user-metrics' className='absolute w-[1066px] h-[278px] left-[284px] top-[208px]'>


  //   </div>
  // </div>
 )
}