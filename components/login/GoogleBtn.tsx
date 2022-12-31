import React, { useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";
import styles from "../../styles/Login.module.css";
import { BsFullscreen } from "react-icons/bs";

interface GoogleProps {
  init: boolean;
  setUserId: Function
}

export default function GoogleBtn({ init, setUserId }: GoogleProps) {
  const router = useRouter();

  async function handleResponse(googleResponse: any) {
    const token: any = await googleResponse.credential;
    const payload: any = jwt_decode(token);

    axios
      .get(`${process.env.LOCAL}/api/users/googleAuth?auth_id=${payload.sub}`)

      .then(response => {
        console.log(response)
        if (response.data === '') {

            const newUser: any = {
              'auth_id': payload.sub,
              'firstname': payload.given_name,
              'lastname': payload.family_name,
              'email': payload.email,
              'user_password': null,
              'weight_lbs': null,
              'height_inches': null,
              'sex': null,
              'profile_pic': payload.picture
            }

          axios.post(`${process.env.LOCAL}/api/users/addUser`, newUser)
          .then(response => {
            if (response.data[0].id.length !== 0) {
                console.log(response.data.id)
                setUserId(response.data.id)
                router.push('/overview')
            }
          })
        }
        if (response.data.id) {
          setUserId(response.data.id)
          router.push('/overview')
        }
      })
      .catch((err) => console.log(err));
  }

    if(init) {
      const google = (window as any).google;

      google.accounts.id.initialize({
        client_id: process.env.CLIENT_ID,
        context: "signin",
        ux_mode: "popup",
        callback: handleResponse,
      });

      google.accounts.id.renderButton(document.getElementById("google_btn"), {
        shape: "pill",
        width: "full",
        /* size: "large", */
        padding: 0,
        margin: 0,
        scope: 'profile email',
        dark: false
      });
    }

  return (
    <div className="p-0 m-0">
        <div id="google_btn"/>
    </div>
  )
}
