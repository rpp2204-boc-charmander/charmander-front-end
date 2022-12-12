import { ChartBarIcon } from "@heroicons/react/outline";
import { MdOutlineSort } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-white flex flex-row grow justify-between items-center h-24 text-black font-bold sticky top-0 bottom-0 z-50 shadow-lg w-full">
      <div className="flex items-center m-5 w-full">
        <MdOutlineSort className="h-16 w-16 mr-5 ml-10"/>
        <h1 className="text-5xl"> Overview </h1>
      </div>

      <div className="text-[2rem] mr-20"> CALENDAR </div>
    </div>
  )
}
