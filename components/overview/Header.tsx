import { ChartBarIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      <div className="bg-indigo-500 flex flex-grow justify-between items-center">
        <div className="flex m-5">
          <ChartBarIcon className="h-24 w-24 mr-5"/>
          <h1 className="text-[5rem]"> Overview </h1>
        </div>

        <div className="text-[5rem] m-5"> CALENDAR </div>
      </div>
    </div>
  )
}
