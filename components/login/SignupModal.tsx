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

  const signUpStyle = {
    "width": "53px",
    "height": "auto",
    "font-style": "normal",
    "font-weight": 900,
    "font-size": "16px",
    "line-height": "19px",
    "color": "#000000",
    "flex": "auto",

    "flex-grow": 0,
  }

  const inputStyle = {
    "width": "354px",
    "height": "38px",
    "box-shadow": "inset 0px 2px 2px rgba(0, 0, 0, 0.25)",
    "flex": "none",
    "flex-grow": 0,
    "border-radius" : "12px",
    "text-indent" : "10px"
  }

  const submitStyle = {
    "width": "53px",
    "height": "auto",
    "font-style": "normal",
    "font-weight": 900,
    "font-size": "16px",
    "line-height": "19px",
    "color": "#000000",
    "flex": "auto",
    "order": 0,
    "flex-grow": 0,
    "text-decoration-line" : "underline",
  }

  return (
    <div style={modalStyle}>
      <div style={signUpStyle}>signup</div>
      <input style={inputStyle} placeholder="first name"></input>
      <input style={inputStyle} placeholder="last name"></input>
      <input style={inputStyle} placeholder="email name"></input>
      <input style={inputStyle} placeholder="username"></input>
      <input style={inputStyle} placeholder="password"></input>
      <input style={inputStyle} placeholder="height (in.)"></input>
      <input style={inputStyle} placeholder="weight (lbs.)"></input>
      <input style={inputStyle} placeholder="sex"></input>
      <a style={submitStyle} href="/overview">submit</a>
    </div>)
}