/* global google */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
    // check if the user id is in the database
      //if it is send them to the overview
    // if the user is not in the database
      // send them to the sign up page
        // autofill user data (name, email, photo)
  }

  // initializes connection to GI API and renders login button
  function initGoogle () {

    const client = "256921641374-b9cl93p3rhfshgo14oo628tnj7bf3ng0.apps.googleusercontent.com"

    google.accounts.id.initialize({
      client_id: client,
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

  if(init) {
    initGoogle();
}


  return (
    <div id='google_btn' />
  )
}