import { prependListener } from "process";
import { useState, useEffect, MouseEventHandler } from "react";
import { EnumDeclaration, setConstantValue } from "typescript";

export default function SignupModal() {
  // STATES VALUES
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState('');

  // Old Inline-Style
  const modalStyle = {
    "display": "flex",
    "flex-direction": "column",
    "align-items" : "flex-start",
    "padding" : "27px 25px",
    "gap" : "11px",
    //"position" : "relative",
    "width" : "404px",
    "height" : "auto",
    "background" : "#D9D9D9",
    "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "border-radius": "20px"
  };

  // Non-working Style
  const twModalStyle = "flex flex-col items-start pt-27 pr-25 gap-11 relative w-404 h-auto bg-LoginGray rounded-3xl shadow-md";

  // Working Tailwind Styles
  const twSignUpStyle = "w-53 h-auto font-sans not-italic font-bold text-base leading-5 decoration-black flex-auto grow-0";
  const twInputStyle = "w-full h-10 boxShadow-wellShadow flex-none grow-0 rounded-xl indent-3";
  const twSubmitStyle = "w-53 h-auto font-sans not-italic font-bold text-base leading-5 decoration-black flex-auto grow-0 underline underline-offset-4";


  return (
    <div style={modalStyle}>
      <div className={twSignUpStyle}>signup</div>
      <input className={twInputStyle} onChange={(e) => {setFirstName(e.target.value)}} placeholder="first name"></input>
      <input className={twInputStyle} onChange={(e) => {setLastName(e.target.value)}} placeholder="last name"></input>
      <input className={twInputStyle} onChange={(e) => {setEmail(e.target.value)}} placeholder="email name"></input>
      <input className={twInputStyle} onChange={(e) => {setUsername(e.target.value)}} placeholder="username"></input>
      <input className={twInputStyle} onChange={(e) => {setPassword(e.target.value)}} placeholder="password"></input>
      <input className={twInputStyle} onChange={(e) => {setHeight(Number(e.target.value))}} placeholder="height (in.)"></input>
      <input className={twInputStyle} onChange={(e) => {setWeight(Number(e.target.value))}} placeholder="weight (lbs.)"></input>
      <input className={twInputStyle} onChange={(e) => {setSex(e.target.value)}} placeholder="sex"></input>
      <a className={twSubmitStyle} href="/overview">submit</a>
    </div>)
}