/* gloabal google */
import Head from "next/head";
import LoginCard from "../components/login/LoginCard";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";
import { ChildProps } from "../components/Layout";
import { useEffect } from "react";

const Login = ({ currentDate, setTitle, setIcon, setShowCalendar }: ChildProps) => {
  const titleLg =
    "fixed top-[45%] left-[20%] text-LoginGray flex flex-col items-center text-6xl";
  const foodIconLg = "test-xl";
  const exerciseIconLg = "test-7xl";

  useEffect(() => {
    setTitle("Welcome");
    setIcon("");
    setShowCalendar(false);
  }, [setTitle, setShowCalendar]);

  return (
    <div>
      <Head>
        <title>My Health Coach</title>
        <meta
          name="login"
          content="My Health Coach Login, Fitness, Nutrition, Exercise"
        />
        <link rel="icon" href="/flavion.ico" />
      </Head>
      <main>
        <div className={titleLg}>
          <h1>My Heath Coach</h1>
          <div className="mt-3 flex w-full flex-row">
            <div className="grow"></div>
            <MdOutlineFastfood className={foodIconLg} />
            <div className="grow"></div>
            <IoIosFitness className={foodIconLg} />
            <div className="grow"></div>
          </div>
        </div>
        <LoginCard />
      </main>
    </div>
  );
};

export default Login;
