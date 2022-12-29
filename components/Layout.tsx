import React, { use } from "react";
import { useState, useEffect } from "react";
import Sidenav from "./Sidenav";
import Header from "./overview/Header";

export interface ChildProps {
  currentDate: Date;
  setTitle: Function;
  setIcon: Function;
  showCalendar: boolean;
  setShowCalendar: Function;
}

export default function Layout({ children }: any) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(0);
  const translate = ["-translate-x-full", ""];

  const month = currentDate.getUTCMonth() + 1; //months from 1-12
  const day = currentDate.getUTCDate();
  const year = currentDate.getUTCFullYear();

  const date_string_for_query = `${year}/${month}/${day}`;

  return (
    <div className="relative flex min-h-screen">
      <aside
        className={`absolute inset-y-0 left-0 z-50 transform ${translate[toggleSidebar]} flex-row transition duration-300 ease-in-out lg:relative lg:flex lg:translate-x-0`}
      >
        <Sidenav />
      </aside>

      <main className="flex-1">
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
            query_date: date_string_for_query,
            currentDate: currentDate,
            setTitle: setTitle,
            setIcon: setIcon,
            showCalendar: showCalendar,
            setShowCalendar: setShowCalendar,
          })}
        </div>
      </main>
    </div>
  );
}
