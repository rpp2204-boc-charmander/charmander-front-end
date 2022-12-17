import { ChartBarIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <>
      <div className="flex flex-row grow justify-between items-center h-[8rem] text-black font-bold">
        <div className=" flex items-center m-5">
          <ChartBarIcon className="h-20 w-20 mr-5 ml-10"/>
          <h1 className="text-[4rem]"> Overview </h1>
        </div>

        <div className="text-[2rem] mr-20"> CALENDAR </div>
      </div>
    </>
  )
}
