import Script from 'next/script';
import GoogleBtn from './GoogleBtn';
import LoginForm from './LoginForm';
import { useState } from 'react'

export interface GoogleProps {
  init: boolean,
  reset?: any
}


export default function LoginCard() {

  const [google, setGoogle] = useState(false);



  return (
    <div>
      <Script src="https://accounts.google.com/gsi/client" async defer onLoad={() => {
        setGoogle(true)
      }}/>


      <div className="fixed top-[50%] left-[75%] translate-x-[-50%] translate-y-[-50%] text-white  bg-gray-500 z-50
        flex flex-col items-center s:w-[20%] h-[45%] rounded-3xl pl-6 pr-6">
        <LoginForm />
        <br></br>
        <a className="h-9 w-full bg-white rounded-2xl text-black p-1 text-center font-light" href="/Signup">sign up with email</a>
        <br></br>
        <GoogleBtn
          init={google}
          reset={setGoogle}/>
      </div>
    </div>
  )
}