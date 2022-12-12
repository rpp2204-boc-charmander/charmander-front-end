import { MdAccountCircle, MdOutlineSort, MdOutlineFitnessCenter, MdRestaurant, MdOutlineAssignment, MdOutlinePeopleAlt, MdOutlineSettings, MdLogout } from "react-icons/md";
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
    <div className="flex flex-col grow bg-gray-500 h-[100vh] w-48 fixed top-0 left-0 overflow-x-hidden items-center text-xl justify-between pt-2 text-white">
      <div className="flex flex-col items-center">
        <div>
          <MdAccountCircle className="h-32 w-32" />
        </div>

        <div className='username text-xl pb-1'> username </div>

        <div className='names text-sm italic'>
          FirstName LastName </div>
      </div>

      <ul className="w-32 flex flex-col grow max-h-[35rem] justify-between pt-10 pb-[12rem] font-bold">
        <li>
        <Link className="flex flex-row items-center hover:text-yellow-400" href='/overview'>
            <MdOutlineSort className="h-5 w-5 mr-2" />
            Overview
          </Link>
        </li>

        <li>
          <Link className="flex flex-row items-center hover:text-yellow-400" href='/exercise'>
            <MdOutlineFitnessCenter className="h-5 w-5 mr-2" />
            Exercise
          </Link>
        </li>

        <li>
          <Link className="flex flex-row items-center hover:text-yellow-400" href='/nutrition'>
            <MdRestaurant className="h-5 w-5 mr-2" />
            Nutrition
          </Link>
        </li>

        <li>
          <Link className="flex flex-row items-center hover:text-yellow-400" href='/report'>
            <MdOutlineAssignment className="h-5 w-5 mr-2" />
            Report
          </Link>
        </li>

        <li>
          <Link className="flex flex-row items-center hover:text-yellow-400" href='/friends'>
            <MdOutlinePeopleAlt className="h-5 w-5 mr-2" />
            Friends
          </Link>
        </li>

        <li>
          <Link className="flex flex-row items-cente hover:text-yellow-400" href='/settings'>
            <MdOutlineSettings className="h-5 w-5 mr-2" />
            Settings
          </Link>
        </li>
      </ul>


      <div className="w-32 flex pb-10 font-bold hover:text-yellow-400">
        <Link className="flex flex-row items-center" href='/login'>
          <MdLogout className="h-5 w-5 mr-2"/>
          Logout
        </Link>
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