import styles from '../styles/Sidenav.module.css';
import Link from 'next/link';

import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { MdOutlineRestaurant } from "react-icons/md";
import { MdOutlineAssignment } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export default function Sidenav() {
  return (
      <div className="flex flex-col align-center bg-gray-400 h-screen w-[200px] fixed left-0 top-0 pt-20 text-center overflow-x-hidden">

        <div className="flex flex-col h-[250px] justify-evenly">
          <div className="bg-slate-50 w-[150px] h-[150px] rounded-full border-gray-300 border-4 self-center"> </div>
          <p className="text-slate-50 font-bold mt-5"> @username </p>
          <p className="text-slate-50"> FirstName LastName </p>
        </div>

        <div className="h-full mt-10">
          <ul className="text-slate-50 font-[600] flex flex-col h-full">
            <li className="flex justify-evenly items-center mb-3">
              <MdOutlineBarChart size={45}/>
              <Link href='/' className="text-xl text-left hover:text-black">Overview</Link>
            </li>
            <li className="flex justify-evenly items-center my-3">
              <MdOutlineFitnessCenter size={35}/>
              <Link href='/exercise' className="text-xl text-left hover:text-black">Exercise</Link>
            </li>
            <li className="flex justify-evenly items-center my-3">
              <MdOutlineRestaurant size={35}/>
              <Link href='/' className="text-xl text-left hover:text-black">Nutrition</Link>
            </li>
            <li className="flex justify-evenly items-center my-3">
              <MdOutlineAssignment size={35}/>
              <Link href='/' className="text-xl text-left hover:text-black">Report</Link>
            </li>
            <li className="flex justify-evenly items-center my-3">
              <MdOutlinePeopleAlt size={35}/>
              <Link href='/' className="text-xl text-left hover:text-black">Friends</Link>
            </li>
            <li className="flex justify-evenly items-center my-3">
              <MdSettings size={35}/>
              <Link href='/' className="text-xl text-left hover:text-black">Settings</Link>
            </li>
            <li className="flex justify-evenly items-center my-3 mt-48">
              <MdLogout size={35}/>
              <Link href='/' className="text-xl text-left hover:text-black">Logout</Link>
            </li>
          </ul>
        </div>
    </div>
  )
};