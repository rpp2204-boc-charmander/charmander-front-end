import Script from 'next/script';
import GoogleBtn from './GoogleBtn';
import LoginForm from './LoginForm';
import StravaBtn from './StravaBtn';
import FitbitBtn from './FitbitBtn';

export interface LoginProps {
  setUserId: Function;
  setGoogle: Function;
  google: boolean,
  setCurrentUser: Function
}

export default function LoginCard({ setUserId, setGoogle, google, setCurrentUser }: LoginProps) {

  const loginCardLg =
    "text-black dark:text-white bg-LoginGray dark:bg-slate-600 flex flex-col items-center h-full p-2";
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
        <LoginForm
          setUserId={setUserId}/>
        <br></br>
        <a className={signUpBtnLg} href="/Signup">
          Sign up with email
        </a>
        <br></br>
        <StravaBtn
          setUserId={setUserId}
          setCurrentUser={setCurrentUser}/>
        <br></br>
        <FitbitBtn
          setUserId={setUserId}
          setCurrentUser={setCurrentUser}/>
        <br></br>
        <GoogleBtn
          init={google}
          setUserId={setUserId}
          setCurrentUser={setCurrentUser}/>
      </div>
    </div>
  );
}
