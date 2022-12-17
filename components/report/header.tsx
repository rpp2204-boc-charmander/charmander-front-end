import React from 'react';
import {TbClipboardList} from 'react-icons/tb';

interface data {
  day: string;
};

export default function Header (props:data) {
  return (
    <div className='bg-gray-400 flex flex-row justify-between items-center h-[6rem] mb-[3rem]'>
      <div className='flex items-center'>
        <TbClipboardList className='inline h-36 w-1/6 mr-5'/>
        <h1 className='inline text-[4rem]'> Report </h1>
      </div>
      <div className='justify-between items-center inline-block w-1/3'>
        <button className='text-[20px] mr-[.5rem] border-solid border-2'>Week</button>
        <button className='text-[20px] m-[.5rem] border-solid border-2'>Month</button>
        <button className='text-[20px] ml-[.5rem] border-solid border-2'>Year</button>
      </div>
      <div className='text-[4rem]'>{props.day}</div>
    </div>
  );
};