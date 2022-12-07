import React from 'react';
import {TbClipboardList} from 'react-icons/tb';

export default function Header () {
  return (
    <div className='bg-indigo-500 flex flex-row justify-between items-center h-[6rem] mb-[3rem]'>
      <div className='flex items-center m-10'>
        <TbClipboardList className='inline h-36 w-1/6 mr-5'/>
        <h1 className='inline text-[4rem]'> Report </h1>
      </div>
      <div className='text-[4rem] m-10'>Calendar</div>
    </div>
  );
};