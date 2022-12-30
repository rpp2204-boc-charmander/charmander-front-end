import Head from "next/head";
import SignupModal from "../components/login/SignupModal";
import { ChildProps } from "../components/Layout";
import { useEffect } from "react";

const modalStyle = {
  display: "table",
  top: "50%",
  margin: "auto",
  msTransform: "translateY(50%)",
  transform: "translateY(50%)",
};

export default function Signup({ setTitle, setIcon, setShowCalendar, setShowReportButtons }: ChildProps) {
  useEffect(() => {
    setTitle("Welcome");
    setIcon("");
    setShowCalendar(false);
    setShowReportButtons(false);
  }, [setTitle, setShowCalendar]);

  return (
    <div className="w-full h-full">
      <Head>
        <title> My Health Coach - Signup </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={modalStyle}>
        <SignupModal />
      </div>
    </div>
  );
}
