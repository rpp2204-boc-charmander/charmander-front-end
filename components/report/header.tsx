import React from "react";
import { TbClipboardList } from "react-icons/tb";

export default function Header(props: any) {
  return (
    <div className="mb-[3rem] flex h-[6rem] flex-row items-center justify-between bg-gray-400">
      <div className="flex items-center">
        <TbClipboardList className="mr-5 inline h-36 w-1/6" />
        <h1 className="inline text-[4rem]"> Report </h1>
      </div>
      <div className="inline-block w-1/3 items-center justify-between">
        <button
          className="mr-[.5rem] border-2 border-solid text-[20px]"
          name="week"
          onClick={props.click}
        >
          Week
        </button>
        <button
          className="m-[.5rem] border-2 border-solid text-[20px]"
          name="month"
          onClick={props.click}
        >
          Month
        </button>
        <button
          className="ml-[.5rem] border-2 border-solid text-[20px]"
          name="year"
          onClick={props.click}
        >
          Year
        </button>
      </div>
      <div className="text-[4rem]">{props.day}</div>
    </div>
  );
}
