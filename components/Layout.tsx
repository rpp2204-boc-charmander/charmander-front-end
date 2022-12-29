import React from "react";
import { useState, useEffect } from "react";
import Sidenav from './Sidenav';
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

  return (
    <div className="relative min-h-screen flex">
      <aside className="absolute inset-y-0 left-0 transform -translate-x-full lg:relative lg:flex flex-row lg:translate-x-0 transition duration-200 ease-in-out">
        <Sidenav />
      </aside>

      <main className='flex-1'>
        <Header
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          title={title}
          Icon={icon}
          showCalendar={showCalendar}
        />

        {React.cloneElement(children, {
          currentDate: currentDate,
          setTitle: setTitle,
          setIcon: setIcon,
          showCalendar: showCalendar,
          setShowCalendar: setShowCalendar
        })}
      </main>
    </div>
  )
};