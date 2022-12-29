import Script from 'next/script';
import GoogleBtn from './GoogleBtn';
import LoginForm from './LoginForm';
import { useState } from 'react'
import StravaBtn from './StravaBtn';
import FitbitBtn from './FitbitBtn';

export interface GoogleProps {
  init: boolean;
  reset?: any;
}

export default function LoginCard() {
  const [google, setGoogle] = useState(false);

  const loginCardLg =
    "fixed top-[30%] left-[65%]  text-black  bg-LoginGray flex flex-col items-center h-max rounded-3xl px-6 pb-6";
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
          sign up with email
        </a>
        <br></br>
        <GoogleBtn init={google} reset={setGoogle} />
        <br></br>
        <StravaBtn />
        <br></br>
        <FitbitBtn />
      </div>
    </div>
  );
}
