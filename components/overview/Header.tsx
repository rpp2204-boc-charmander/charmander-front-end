import { useState, useEffect } from "react";
import { MdNavigateBefore, MdNavigateNext, MdMenu } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export interface HeaderProps {
  currentDate: Date;
  setCurrentDate: Function;
  title: string;
  Icon: any;
  showCalendar: boolean;
  setToggleSidebar: Function;
}

export default function Header({
  currentDate,
  setCurrentDate,
  title,
  Icon,
  showCalendar,
  setToggleSidebar,
}: HeaderProps) {
  const [formattedDate, setFormattedDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setFormattedDate(dateFormatter());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  useEffect(() => {
    document.addEventListener("click", (event: any) => {
      if (event.target.id !== "calendar") {
        setIsOpen(false);
      }
    });
  });

  const dateFormatter = function () {
    const weekdays: { [key: number]: string } = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    const months: { [key: number]: string } = {
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
    };
    return `${weekdays[currentDate?.getDay()]}, ${
      months[currentDate?.getMonth()]
    } ${currentDate?.getDate()}, ${currentDate?.getFullYear()}`;
  };

  const dateChanger = function (numberOfDays: number) {
    const msToChange = 86_400_000 * numberOfDays;
    const newDate = new Date(currentDate.getTime() + msToChange);
    setCurrentDate(newDate);
  };

  const onChange = (date: any) => {
    setCurrentDate(date);
    setIsOpen((prevState) => !prevState);
  };

  const handleCalendarClick = function () {
    setIsOpen((prevState) => !prevState);
  };

  const handleMenuClick = function () {
    setToggleSidebar((prevState: number) => {
      if (prevState === 1) {
        return 0;
      } else {
        return 1;
      }
    });
  };

  return (
    <div className="sticky flex h-16 w-full grow flex-row items-center justify-between bg-white pl-5 pr-5 font-bold text-black shadow-lg lg:h-24 lg:pl-12 lg:pr-12">
      <div className="flex h-full w-full items-center">
        {Icon && <Icon className="mr-5 text-3xl lg:text-6xl" />}
        <h1 className="text-3xl lg:text-5xl"> {title} </h1>
      </div>

      {showCalendar && (
        <div className="hidden flex-row items-center text-xl lg:flex">
          <div>
            <MdNavigateBefore
              onClick={() => {
                dateChanger(-1);
              }}
              className="h-14 w-14 cursor-pointer hover:text-yellow-400"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div
              className="flex justify-center sm:w-52 lg:w-96"
              id="calendar"
              onClick={handleCalendarClick}
            >
              {formattedDate}
            </div>

            {isOpen && (
              <div className="justify-center pt-48 lg:flex" id="calendar">
                <Calendar onChange={onChange} />
              </div>
            )}
          </div>

          <div>
            <MdNavigateNext
              onClick={() => {
                dateChanger(1);
              }}
              className="h-14 w-14 cursor-pointer hover:text-yellow-400"
            />
          </div>
        </div>
      )}

      <div className="flex items-center text-3xl lg:hidden">
        <MdMenu onClick={handleMenuClick} />
      </div>
    </div>
  );
}
