import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/report/header";
import Charts from "../components/report/charts";
import { MdOutlineAssignment } from "react-icons/md";
import { ChildProps } from "../components/Layout";

export default function Report({
  currentDate,
  setTitle,
  setIcon,
  setShowCalendar,
}: ChildProps) {
  const [timespan, setTimespan]: any = useState("week");

  function handleclick(e: any) {
    e.preventDefault();
    setTimespan(e.target.name);
  }

  useEffect(() => {
    setTitle("Report");
    setIcon((prevState: any) => MdOutlineAssignment);
    setShowCalendar(false);
  }, [setTitle, setIcon, setShowCalendar]);

  return (
    <div>
      <Head>
        <title> My Health Coach </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Header day={"Today"} click={handleclick} />
        <Charts timespan={timespan} />
      </div>
    </div>
  );
}
