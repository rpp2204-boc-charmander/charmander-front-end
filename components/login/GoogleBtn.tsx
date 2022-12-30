import React, { useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";

interface GoogleProps {
  init: boolean;
  reset?: any;
}

export default function GoogleBtn({ init, reset }: GoogleProps) {
  const router = useRouter();

  // handles responses from GI API login attempt
  async function handleResponse(response: any) {
    const token: any = await response.credential;
    const responsePayload: any = jwt_decode(token);

    console.log(responsePayload)
    axios
      .get(`${process.env.BACKEND_URL}/user/${responsePayload.sub}`)
      .then((res) => {
        if (Object.keys(res.data).length === 0) {
          //store the first and last name in the database in the database
          //get the id from the database
            //store the first name, last name and id in the AuthContext user
          router.push("/settings");
        } else {
          //store the user db data in the AuthContext user
          router.push("/overview");
        }
      })
      .catch((err) => router.push("/Signup"));
  }

  // initializes connection to GI API and renders login button
  function initGoogle() {
    //keeps linter from throwing error
    // google object is only defined after
    // the google identity script runs
    const google = (window as any).google;

    google.accounts.id.initialize({
      client_id: process.env.CLIENT_ID,
      context: "signin",
      ux_mode: "popup",
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google_btn"), {
      'shape': "pill",
      theme: "filled_white",
      size: "large",
    });
  }

  if (init) {
    initGoogle();
  }

  return (
    <div className='p-0' id="google_btn"/>
  )
}
