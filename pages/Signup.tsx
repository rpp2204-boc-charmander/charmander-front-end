/* eslint-disable */
// @ts-nocheck

import Head from "next/head";
import SignupModal from "../components/login/SignupModal";

const modalStyle = {
  display: "table",
  top: "50%",
  margin: "auto",
  msTransform: "translateY(50%)",
  transform: "translateY(50%)"
};

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
  );
}
