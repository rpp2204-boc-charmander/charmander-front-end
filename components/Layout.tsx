import React, { use } from "react";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Header from "./overview/Header";

export interface ChildProps {
  currentDate: Date,
  setTitle: Function,
  setIcon: Function,
  showCalendar: boolean,
  setShowCalendar: Function
}

export default function Layout({ children }: any) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(0)
  const translate = ["-translate-x-full", ""];

  return (
    <div className="relative min-h-screen flex">
      <aside className={`z-50 absolute inset-y-0 left-0 transform ${translate[toggleSidebar]} lg:relative lg:flex flex-row lg:translate-x-0 transition duration-300 ease-in-out`}>
        <Sidebar />
      </aside>

      <main className='flex-1'>
        <Header
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          title={title}
          Icon={icon}
          showCalendar={showCalendar}
          setToggleSidebar={setToggleSidebar}
        />

        <div>
          {React.cloneElement(children, {
            currentDate: currentDate,
            setTitle: setTitle,
            setIcon: setIcon,
            showCalendar: showCalendar,
            setShowCalendar: setShowCalendar
          })}
        </div>
      </main>
    </div>
  )
};