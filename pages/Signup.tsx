import { useState, useEffect } from "react";
import Head from "next/head";
import SignupModal from "../components/login/SignupModal";

import { MdOutlineSort } from "react-icons/md";

const modalStyle = {
  "display" : "table",
  "top" : "50%",
  "margin" : "auto",
  "-ms-transform": "translateY(50%)",
  "transform": "translateY(50%)"
}


export default function Signup() {

  return (
    <div>
      <Head>
        <title> My Health Coach - Signup </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={modalStyle}>
        <SignupModal />
      </div>
    </div>
  )
}