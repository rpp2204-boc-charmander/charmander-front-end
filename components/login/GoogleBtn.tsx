import React from 'react';
import { useRouter } from 'next/router';
import jwt_decode from "jwt-decode";


interface GoogleProps {
  init: boolean,
  reset?: any
}

export default function GoogleBtn( { init, reset }: GoogleProps) {
  const router = useRouter()

  // handles responses from GI API login attempt
  async function handleResponse(response:any ) {

    const token:any = await response.credential
    const responsePayload:any = jwt_decode(token);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);
     console.log(responsePayload);

     handleUserData(responsePayload)

  }

  function handleUserData (userData:any) {
    console.log(userData)
    const URL: any = process.env.URL_ENDPOINT
    const DATA: any = {method: 'GET', body: userData}
    // check if the user id is in the database
    fetch(URL, DATA)
    .then((response) => {
      //if it is send them to the overview
    })
    .catch((err) => {
      // if the user is not in the database
        // send them to the sign up page
          // autofill user data (name, email, photo)
    })
  }

  // initializes connection to GI API and renders login button
  function initGoogle () {

    //keeps linter from throwing error
    // google object is only defined after
    // the google identity script runs
    const google = (window as any).google;

    google.accounts.id.initialize({
      client_id: process.env.CLIENT_ID,
      context: 'signin',
      ux_mode: 'popup',
      callback: handleResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('google_btn'),
      {
        shape: "pill",
        theme: 'filled_white', size: 'large',
      }
    );
  }

  if (init) {
    initGoogle()
  }

  return (
    <div id='google_btn' />
  )
}