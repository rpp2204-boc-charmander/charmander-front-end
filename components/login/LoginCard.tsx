import Script from "next/script";
import GoogleBtn from "./GoogleBtn";
import LoginForm from "./LoginForm";
import { useState } from "react";
import StravaBtn from "./StravaBtn";

export interface GoogleProps {
  init: boolean;
  reset?: any;
}

export default function LoginCard() {
  const [google, setGoogle] = useState(false);

  const loginCardLg =
    "text-black dark:text-white bg-LoginGray dark:bg-slate-600 flex flex-col items-center h-max p-3";
  const signUpBtnLg =
    "h-9 w-full bg-white rounded-2xl text-black p-1 text-center font-light";

  return (
    <div>
      <Script
        src="https://accounts.google.com/gsi/client"
        async
        defer
        onLoad={() => {
          setGoogle(true);
        }}
      />

      <div className={loginCardLg}>
        <LoginForm />
        <br></br>
        <a className={signUpBtnLg} href="/Signup">
          Sign up with email
        </a>
        <br></br>
        <GoogleBtn init={google} reset={setGoogle} />
        <br></br>
        <StravaBtn />
      </div>
    </div>
  );
}
