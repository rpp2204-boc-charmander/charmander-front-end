import React, { use } from "react";
import { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Header from "./Header";
import GoogleBtn from "./login/GoogleBtn";
import Script from "next/script";


export interface ChildProps {
  currentDate: Date;
  setTitle: Function;
  setIcon: Function;
  showCalendar: boolean;
  setShowCalendar: Function;
  setShowReportButtons: Function;
  timespan: String;
  setTimespan: Function;
  userId:  String;
  setUserId: Function
}

export default function Layout({ children }: any): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(0);
  const [showReportButtons, setShowReportButtons] = useState(false);
  const [timespan, setTimespan] = useState("week");
  const [userId,  setUserId] = useState("1")
  const translate = ["-translate-x-full", ""];
  const month = currentDate.getUTCMonth() + 1; // months from 1-12
  const day = currentDate.getUTCDate();
  const year = currentDate.getUTCFullYear();
  const date_string_for_query = `${year}/${month}/${day}`

  return (
    <div className="relative min-h-screen flex">
      <aside className={`z-50 absolute inset-y-0 left-0 transform ${translate[toggleSidebar]} lg:relative lg:flex flex-row lg:translate-x-0 transition duration-300 ease-in-out`}>
        <Sidebar />
      </aside>

      <main className="flex flex-col w-full">
        <Header
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          title={title}
          Icon={icon}
          showCalendar={showCalendar}
          setToggleSidebar={setToggleSidebar}
          showReportButtons={showReportButtons}
          timespan={timespan}
          setTimespan={setTimespan}
          setUserId={setUserId}
          userId={userId}
        />

        <div className="w-[100%] h-[100%] flex items-center justify-center">
          {React.cloneElement(children, {
            query_date: date_string_for_query,
            currentDate,
            setTitle,
            setIcon,
            showCalendar,
            setShowCalendar,
            showReportButtons,
            setShowReportButtons,
            timespan,
            setTimespan,
            setUserId,
            userId
          })}
        </div>
      </main>
    </div>
  );
}
