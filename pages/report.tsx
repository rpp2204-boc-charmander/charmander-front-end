import { useEffect } from "react";
import { ChildProps } from "../components/Layout";
import { MdOutlineAssignment } from "react-icons/md";
import Charts from "../components/report/charts";

export default function Report({
  currentDate,
  setTitle,
  setIcon,
  setShowCalendar,
  setShowReportButtons,
  timespan,
  setTimespan
}: ChildProps) {

  useEffect(() => {
    setTitle("Report");
    setIcon(() => MdOutlineAssignment);
    setShowCalendar(false);
    setShowReportButtons(true)
  }, [setTitle, setIcon, setShowCalendar, setShowReportButtons]);

  return (
    <div>
      <div className="h-screen">
        <Charts timespan={timespan} />
      </div>
    </div>
  );
}
