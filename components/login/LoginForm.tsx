import { MdOutlinePassword, MdOutlineLogin, MdPassword, MdSentimentSatisfiedAlt } from 'react-icons/md';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState} from 'react';
import * as EmailValidator from 'email-validator';
import bcrypt from "bcryptjs";
import axios from "axios";

export interface LoginProps {
  email: any,
  password: string,
}

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('email')
  const [pswd, setPswd] = useState('password')
  const [pswdType, setPswdType] = useState('password')
  const [pswdErr, setPswdErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [pswdVisible, setPswdVisible] = useState(false)

  function handleChange (e:any, target:string) {
    let value = e.target.value

    if (target === 'email') {
      setEmail(value)
    } else {
      setPswd(value)
    }
  }

  function authenticate () {
    // if(pswd === 'tony') {
    //   setPswdErr(true)
    // } else {
    //   setPswdErr(false)
    // }

    // var salt = bcrypt.genSaltSync(10);
    // var hash = bcrypt.hashSync(pswd, salt);
    // console.log(hash)



    //Validate email
    const emailValid = EmailValidator.validate(email)

    if (!emailValid) {
      setEmailErr(true)
    }

    if(emailValid) {

      axios
      .get(`${process.env.AUTH}?email=${email}`)

      .then(res => {

        if (Object.keys(res.data).length === 0) {
          router.push('/Signup')
        } else{
          const hash = res.data

          if (bcrypt.compareSync(pswd, hash)) {
            router.push('/overview')
            setPswdErr(false)
          } else {
            setPswdErr(true)
          }
        }
      })
      .catch(err => alert (err))
    }
  }

  const emailInputLg = "bg-white shadow rounded w-full h-[2rem] px-3 leading-tight focus:outline-none focus:shadow-outline text-med text-black font-extralight"
  const pswdInputLg = "bg-white shadow rounded-l w-[90%] h-[2rem] px-3 leading-tight focus:outline-none focus:shadow-outline text-med; text-black font-extralight"


  return (
    <form className="w-full">
      <h2 className="text-xl pt-6">login</h2>
      <br></br>
      <div className="search w-full flex flex-col" >
        <input
          className={emailInputLg}
          type="email"
          placeholder="email"
          onChange={(e) => handleChange(e, 'email')}></input>
        <div>
          { !emailErr ? <div key="" className='h-6'></div> :  <p className="text-xs text-red-600 dark:text-purple-700 h-6">
            <span className="font-medium">Um...Hello?</span> That's not an email.</p>}
        </div>
      </div>
      <div className="search w-[100%] flex flex-row">
        <input className={pswdInputLg}
          type={pswdType}
          placeholder="password"
          onChange={(e) => handleChange(e, 'pswd')}></input>

        { pswdVisible ?
          <AiFillEyeInvisible
            key='hidePswd'
            className="sm:h-[2rem] sm:w-7 sm:pr-1 sm:pl-1 bg-white rounded-r text-gray-500"
            onClick={() => {
              setPswdVisible(false)
              setPswdType('password')
            }} />
          :
          <AiFillEye
            key='showPswd'
            className="sm:h-[2rem] sm:w-7 sm:pr-1 sm:pl-1 bg-white rounded-r text-gray-500"
            onClick={() => {
              setPswdVisible(true)
              setPswdType('text')
            }} />
        }
          {/* {pswdIcon} */}
      </div>
      <div>
        { !pswdErr ? <div key="" className='h-6'></div> : <p id="outlined_error_help" className="text-xs text-red-600 dark:text-purple-700 h-6">
          <span className="font-medium">Oh, snapp!</span> Wrong password.</p> }
        {/* {pswdErr} */}
      </div>
      <div className="flex flex-row w-[100%]">
        <button
          type="button"
          className="items-start  hover:text-purple-700 underline font-extralight"
          onClick={() => authenticate()}>enter</button>
        <button
          type='button'
          className="grow hover:text-purple-700 underline text-right font-extralight"
          onClick={() => console.log('hi')}>forgot password?</button>
      </div>
    </form>
  )
}