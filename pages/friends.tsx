import { ChildProps } from "../components/Layout";
import { useEffect } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function Friends({ setTitle, setIcon, setShowCalendar, setShowReportButtons }: ChildProps) {
  useEffect(() => {
    setTitle("Friends");
    setIcon(() => (MdOutlinePeopleAlt));
    setShowCalendar(false);
    setShowReportButtons(false);
  }, [setTitle, setShowCalendar]);

  return (
    <p className="text-[5rem] dark:text-white"> You have no friends :( </p>
  )
}