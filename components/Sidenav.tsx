import { MdAccountCircle, MdOutlineSort, MdOutlineFitnessCenter, MdRestaurant, MdOutlineAssignment, MdOutlinePeopleAlt, MdOutlineSettings, MdLogout } from "react-icons/md";
import Link from 'next/link';

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
    </div>
  )
};