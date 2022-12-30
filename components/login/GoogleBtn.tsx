import React from "react";
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
    axios
      .get(`${process.env.AUTH}?email=${responsePayload.email}`)
      .then((res) => {
        if (Object.keys(res.data).length === 0) {
          console.log("No Account");
          router.push("/Signup");
        } else {
          router.push("/overview");
        }
      })
      .catch((err) => router.push("/signup"));
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
      shape: "pill",
      theme: "filled_black",
      size: "large",
      padding: 0
    });
  }

  if (init) {
    initGoogle();
  }

  return <div id="google_btn" />;
}
