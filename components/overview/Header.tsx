import { useState, useEffect } from "react";
import { MdOutlineSort, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { DateProps } from "../../pages/overview";

export default function Header({ currentDate, setCurrentDate }: DateProps) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate((prevState: string) => {
      return dateFormatter();
    })
  }, [currentDate])

  const dateFormatter = function() {
    const weekdays: {[key: number]: string} = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    }
    const months: {[key: number]: string} = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",

    }
    //return`${weekdays[currentDate?.getDay()]} ${currentDate?.getMonth()}/${currentDate?.getDate()}/${currentDate?.getFullYear()}`;
    return`${weekdays[currentDate?.getDay()]}, ${months[currentDate?.getMonth()]} ${currentDate?.getDate()}, ${currentDate?.getFullYear()}`;
  }

  const dateChanger = function(numberOfDays: number) {
    const msToChange = 86_400_000 * numberOfDays;
    const newDate = new Date(currentDate.getTime() + msToChange);
    setCurrentDate((prevState: any) => {
      return newDate;
    });
  }

  return (
    <div className="bg-white flex flex-row grow justify-between items-center h-24 text-black font-bold sticky top-0 bottom-0 z-50 shadow-lg w-full pl-12 pr-12">
      <div className="flex items-center w-full h-full">
        <MdOutlineSort className="h-16 w-16 mr-5"/>
        <h1 className="text-5xl"> Overview </h1>
      </div>

      <div className="text-xl flex flex-row h-full items-center">
        <div>
          <MdNavigateBefore onClick={() => {dateChanger(-1)}} className="h-14 w-14 hover:text-yellow-400 cursor-pointer"/>
        </div>

        <div className="w-80 flex justify-center">
          {formattedDate}
        </div>

        <div>
          <MdNavigateNext onClick={() => {dateChanger(1)}} className="h-14 w-14 hover:text-yellow-400 cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}
