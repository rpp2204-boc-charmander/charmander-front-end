import { MdOutlinePassword, MdOutlineLogin, MdPassword, MdSentimentSatisfiedAlt } from 'react-icons/md';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState} from 'react';
import * as EmailValidator from 'email-validator';
import bcrypt from "bcryptjs";

export interface LoginProps {
  email: any,
  password: string,
}

export default function LoginForm() {

  const [email, setEmail] = useState('email')
  const [pswd, setPswd] = useState('password')
  const [pswdView, setPswdView] = useState(false)
  const [pswdType, setPswdType] = useState('password')
  const [pswdIcon, setPswdIcon] = useState([<div key=""></div>])

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
      setEmail(value)
    } else {
      setPswd(value)
    }
  }

  // function submit (password: string, email: string) {
    function submit () {

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(pswd, salt);
      console.log(hash)
      //check if the email is valid
      const emailValid = EmailValidator.validate(email)

      // if not
      if (!emailValid) {
        // alert the visitor they need to fix it
        alert ('Please enter a valid email')
      }
      // if it is
      if(emailValid) {
        // get the hash from the database using the email
        const URL = 'http://120.0.0.1:3000/overview'
        const OPTIONS = {method: 'GET', body: email}

        fetch(URL, OPTIONS)
        // if the user exists
        .then((hash: any) => {
          // check the hash vs password entered
          if (bcrypt.compareSync(pswd, hash)) {
            // if it does match
            const router = useRouter();
            router.push('/overview')
            // load their data
            /* DONT FORGET THIS */
        //if it does not match
        } else {
          // tell the visitor
          alert ('Incorrect Password')
        }
      })
      .catch(err => alert (err))
    }
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
          onClick={() => submit()}>enter</button>

        <button
          type='button'
          className="grow hover:text-yellow-400 underline text-right font-extralight"
          onClick={() => console.log('hi')}>forgot password?</button>
      </div>
    </form>
  )
}