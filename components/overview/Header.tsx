import { useState, useEffect } from "react";
import { MdOutlineSort, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { DateProps } from "../../pages/overview";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Header({ currentDate, setCurrentDate }: DateProps) {
  const [formattedDate, setFormattedDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFormattedDate(dateFormatter());
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    }
    return`${weekdays[currentDate?.getDay()]}, ${months[currentDate?.getMonth()]} ${currentDate?.getDate()}, ${currentDate?.getFullYear()}`;
  }

  const dateChanger = function(numberOfDays: number) {
    const msToChange = 86_400_000 * numberOfDays;
    const newDate = new Date(currentDate.getTime() + msToChange);
    setCurrentDate(newDate);
  }

  const onChange = (date: any) => {
    setCurrentDate(date);
    setIsOpen((prevState) => (!prevState));
  }

  const handleCalendarClick = function() {
    setIsOpen((prevState) => (!prevState));
  }

  return (
    <div className="bg-white flex flex-row grow justify-between items-center md:h-18 lg:h-24 text-black font-bold sticky top-0 bottom-0 z-50 shadow-lg w-full pl-12 pr-12">
      <div className="flex items-center w-full h-full">
        <MdOutlineSort className="sm:text-3xl lg:text-6xl mr-5"/>
        <h1 className="sm:text-3xl lg:text-5xl"> Overview </h1>
      </div>

      <div className="sm:text-base lg:text-xl flex flex-row h-full items-center">
        <div>
          <MdNavigateBefore onClick={() => {dateChanger(-1)}} className="h-14 w-14 hover:text-yellow-400 cursor-pointer"/>
        </div>

        <div className="flex flex-col justify-center">
          <div className="sm:w-52 lg:w-96 flex justify-center" onClick={handleCalendarClick}>
            {formattedDate}
          </div>

          {isOpen && (
            <div className="pt-48 flex justify-center">
              <Calendar onChange={onChange} />
            </div>
          )}
        </div>

        <div>
          <MdNavigateNext onClick={() => {dateChanger(1)}} className="h-14 w-14 hover:text-yellow-400 cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}
