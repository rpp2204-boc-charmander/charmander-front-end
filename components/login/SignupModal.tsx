import { prependListener } from "process";
import { useState, useEffect, MouseEventHandler } from "react";
import { EnumDeclaration, setConstantValue } from "typescript";
import axios from 'axios';

export default function SignupModal() {
  // STATE VALUES
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState("");
  const [windowH, setWindowH] = useState(0);

  // Working Tailwind Styles
  const twModalStyle = `flex flex-col align-top items-start pt-[27px] pb-[27px] pr-[25px] pl-[25px] gap-[11px] relative w-[404px] h-auto bg-LoginGray rounded-3xl shadow-md`;
  const twSignUpStyle = "w-53 h-auto font-sans not-italic font-bold text-base leading-5 decoration-black flex-auto grow-0";
  const twInputStyle = "w-full h-10 boxShadow-wellShadow flex-none grow-0 rounded-xl indent-3";
  const twSubmitStyle = "w-53 h-auto font-sans not-italic font-bold text-base leading-5 decoration-black flex-auto grow-0 underline underline-offset-4 cursor-pointer";

  // Check if first name is valid.
  const firstNameCheck = () => {
    return (firstName.length > 1);
  }

  // Check if last name is valid.
  const lastNameCheck = () => {
    return (lastName.length > 1);
  }

  const emailCheck = async (email: String) => {
    try {
      const res = await axios.get(`http://localhost:4000/user/email/${email}`);
      console.log('RESULT: ', res.data.email);
      // setEmailExist(res.data.email.length > 0)
      setEmailExist(res.data.email === undefined ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  // Check if email is both valid and nonexistent in db.
  // const emailCheck = () => {
  //   const { data } = await axios.get(
  //     `${String(
  //       process.env.BACKEND_URL
  //     )}/exercise/custom/list?user_id=${user_id}`
  //   );
  //   return (email.indexOf('@') !== -1)
  // }

  // Check if passwords match.
  const passwordCheck = () => {
    return (password0 === password1);
  }

  // Check if both height and weight are numbers.
  const healthCheck = () => {
    return (typeof height === 'number' && typeof weight === 'number');
  }

  // Check if sex is valid.
  const sexCheck = () => {
    return (sex !== 'gender' && sex !== undefined && sex.length !== 0);
  }

  // Validity checks. POSTS to db. Redirects when successful.
  const handleSubmit = () => {
    console.log('window', window.innerHeight);
    emailCheck(email).then(() => {
      console.log('SUBMIT PRESSED');
      console.log('FIRST NAME VALID        :', firstNameCheck());
      console.log('LAST NAME VALID         :', lastNameCheck());
      console.log('EMAIL IS NOT BEING USED :', !emailExist);
      console.log('PASSWORDS MATCH         :', passwordCheck());
      console.log('HEALTH INFO VALID       :', healthCheck())
      console.log('GENDER                  :', sexCheck());
    })
  }

  return (
    <div className={twModalStyle}>
      <div className={twSignUpStyle}>signup</div>
      <label>personal information</label>
      <input className={twInputStyle} onChange={(e) => { setFirstName(e.target.value); }} placeholder="first name" ></input>
      <input className={twInputStyle} onChange={(e) => { setLastName(e.target.value); }} placeholder="last name" ></input>

      <label>account information</label>
      <input className={twInputStyle} onChange={(e) => { setEmail(e.target.value); }} placeholder="email name" ></input>
      <input className={twInputStyle} onChange={(e) => { setPassword0(e.target.value); }} placeholder="password" ></input>
      <input className={twInputStyle} onChange={(e) => { setPassword1(e.target.value); }} placeholder="confirm password" ></input>

      <label>health metrics</label>
      <input className={twInputStyle} onChange={(e) => { setHeight(Number(e.target.value)); }} placeholder="height (in.)" ></input>
      <input className={twInputStyle} onChange={(e) => { setWeight(Number(e.target.value)); }} placeholder="weight (lbs.)" ></input>
      <select className={twInputStyle} onChange={(e) => { console.log(e.target.value); setSex(e.target.value); }}>
        <option value="">gender</option>
        <option value="M">male</option>
        <option value="F">female</option>
        <option value="O">other</option>
        <option value="N">prefer not to say</option>
      </select>

      <a className={twSubmitStyle} onClick={handleSubmit}> submit </a>
    </div>
  );
}
