/* gloabal google */
import Head from "next/head";
import LoginCard from "../components/login/LoginCard";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";
import { ChildProps } from "../components/Layout";
import { useEffect } from "react";
import logo from "public/38501.png";
import Image from "next/image";

const Login = ({ setTitle, setIcon, setShowCalendar, setShowReportButtons }: ChildProps) => {
  const titleLg = "fixed top-[45%] left-[20%] text-LoginGray flex flex-col items-center text-6xl";
  const foodIconLg = "test-xl";
  const exerciseIconLg = "test-7xl";

  useEffect(() => {
    setTitle("My Health Coach");
    setIcon("");
    setShowCalendar(false);
    setShowReportButtons(false);
  }, [setTitle, setShowCalendar]);

  return (
    <div className="flex justify-center items-center w-full h-full p-3">
      <Head>
        <title>My Health Coach</title>
        <meta
          name="login"
          content="My Health Coach Login, Fitness, Nutrition, Exercise"
        />
        <link rel="icon" href="/flavion.ico" />
      </Head>
      <main className="bg-LoginGreen flex w-[60rem] h-[30rem] justify-center items-center rounded-2xl shadow-xl">
        <div className="flex grow basis-[60%] h-full justify-center items-center">
          <Image src={logo} alt="Picture" className="object-contain"/>
        </div>
        <div className="bg-LoginGray dark:bg-slate-600 flex grow basis-[40%] h-full justify-center items-center rounded-tr-2xl rounded-br-2xl">
          <LoginCard/>
        </div>
      </main>
    </div>
  );
};

export default Login;
