import Head from "next/head";
import LoginCard from "../components/login/LoginCard";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";
import { ChildProps } from "../components/Layout";
import { useEffect } from "react";
import { FitbitProvider } from '../context/FitbitProvider'

const Login = ({ setTitle, setIcon, setShowCalendar, setShowReportButtons }: ChildProps) => {
  const titleLg =
    "fixed top-[45%] left-[20%] text-black flex flex-col items-center text-6xl";
  const IconLg = "text-black";

  useEffect(() => {
    setTitle("Welcome");
    setIcon("");
    setShowCalendar(false);
    setShowReportButtons(false);
  }, [setTitle, setShowCalendar]);

  return (
    <FitbitProvider>
      <div>
        <Head>
          <title>My Health Coach</title>
          <meta name='login' content="My Health Coach Login, Fitness, Nutrition, Exercise" />
          <link rel='icon' href="/flavion.ico" />
        </Head>
        <main>
        <div className={titleLg}>
          <h1>My Heath Coach</h1>
          <div className="flex flex-row w-full mt-3">
            <div className="grow"></div>
            <MdOutlineFastfood className={IconLg} />
            <div className="grow"></div>
            <IoIosFitness className={IconLg} />
            <div className="grow"></div>
          </div>
        </div >
          <LoginCard />
        </main>
      </div>
    </FitbitProvider>
  )
}

export default Login;
