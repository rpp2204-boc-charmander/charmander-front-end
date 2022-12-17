import React from 'react';
import {TbClipboardList} from 'react-icons/tb';

export default function Header (props: any) {

  return (
    <div className='bg-gray-400 flex flex-row justify-between items-center h-[6rem] mb-[3rem]'>
      <div className='flex items-center'>
        <TbClipboardList className='inline h-36 w-1/6 mr-5'/>
        <h1 className='inline text-[4rem]'> Report </h1>
      </div>
      <div className='justify-between items-center inline-block w-1/3'>
        <button className='text-[20px] mr-[.5rem] border-solid border-2' name='week' onClick={props.click}>Week</button>
        <button className='text-[20px] m-[.5rem] border-solid border-2' name='month' onClick={props.click}>Month</button>
        <button className='text-[20px] ml-[.5rem] border-solid border-2' name='year' onClick={props.click}>Year</button>
      </div>
      <div className='text-[4rem]'>{props.day}</div>
    </div>
  );
};