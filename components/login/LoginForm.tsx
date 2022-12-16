import { MdOutlinePassword, MdOutlineLogin, MdPassword } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export interface LoginProps {
  email: string,
  password: string,
}

export default function LoginForm() {
  const router = useRouter();

  const email = useRef(Array<LoginProps>)
  const password = useRef(Array<LoginProps>)

  function handleChange (e:any, target:string) {
    let value = e.target.value

    if (target === 'email') {
      email.current = (value)
    } else {
      password.current = (value)
    }
    console.log(email, password)
  }

  function submit () {
    //send the user name and password to the database
    // if the user is in the database
      // direct them to the overview
    // if the user is not in the database
      // direct them to signup
  }

  return (
    <form className="w-full">
      <h2 className="text-xl pt-6">login</h2>
      <br></br>
      <div className="search w-full flex flex-row pb-6" >
        <input
          className="bg-white shadow rounded w-full h-[2rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-med text-black font-extralight"
          id="search"
          type="email"
          placeholder="email"
          onChange={(e) => handleChange(e, 'email')}></input>
      </div>
      <div className="search w-[100%] flex flex-row pb-6">
        <input className="bg-white shadow rounded w-full h-[2rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-med; text-black font-extralight"
          id="search"
          type="text"
          placeholder="password"
          onChange={(e) => handleChange(e, 'pswd')}></input>
      </div>
      <div className="flex flex-row w-[100%]">
        <button
          type="button"
          className="items-start  hover:text-yellow-400 underline font-extralight"
          onClick={() => router.push('/overview')}>enter</button>



        <button
          type='button'
          className="grow hover:text-yellow-400 underline text-right font-extralight"
          onClick={() => console.log("Recover Password")}>forgot password?</button>
      </div>
    </form>
  )
}