import { MdOutlinePassword, MdOutlineLogin, MdPassword } from 'react-icons/md';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState} from 'react';

export interface LoginProps {
  email: string,
  password: string,
}

export default function LoginForm() {
  const router = useRouter();

  const email = useRef(Array<LoginProps>)
  const password = useRef(Array<LoginProps>)
  const [pswdView, setPswdView] = useState(false)
  const [pswdType, setPswdType] = useState('password')
  const [pswdIcon, setPswdIcon] = useState([<></>])

  const openEye = [
    <AiFillEye
      key='showPswd'
      className="text-med h-[2rem] w-7 pr-1 float-left pl-2 bg-white rounded-r z-1 text-gray-500"
      onClick={() => handlePswdView('show')} />
  ]

  const closeEye = [
    <AiFillEyeInvisible
      key='hidePswd'
      className="ext-med h-[2rem] w-7 pr-1 float-left pl-2 bg-white rounded-r z-1 text-gray-500"
      onClick={() => handlePswdView('hide')} />
  ]

  function handlePswdView (status: string) {
    console.log(pswdView)
    if (status === 'show') {
      setPswdView(true)
      setPswdType('text')
      setPswdIcon(closeEye)
    } else {
      setPswdView(false)
      setPswdType('password')
      setPswdIcon(openEye)
    }
  }

  useEffect(() => {
    handlePswdView('')
  }, [])



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
          type="email"
          placeholder="email"
          onChange={(e) => handleChange(e, 'email')}></input>
      </div>
      <div className="search w-[100%] flex flex-row pb-6">
        <input className="bg-white shadow rounded-l w-[90%] h-[2rem] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-med; text-black font-extralight"
          type={pswdType}
          placeholder="password"
          onChange={(e) => handleChange(e, 'pswd')}></input>

        {pswdIcon}

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