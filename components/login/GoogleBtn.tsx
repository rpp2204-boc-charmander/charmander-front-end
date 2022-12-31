import React, { useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import axios from "axios";
import styles from "../../styles/Login.module.css";

interface GoogleProps {
  init: boolean;
  setUserId: Function
}

export default function GoogleBtn({ init, setUserId }: GoogleProps) {
  const router = useRouter();

  async function handleResponse(response: any) {
    const token: any = await response.credential;
    const responsePayload: any = jwt_decode(token);

    await axios
      .get(`${process.env.FRONTEND_URL}/users/googleAuth?auth_id=${responsePayload.sub}`)

      .then(response => {
        if(response.data.length === 0) {

            const newUser: any = {
              'auth_id': responsePayload.sub,
              'firstname': responsePayload.given_name,
              'lastname': responsePayload.family_name,
              'email': responsePayload.email,
              'user_password': null,
              'weight_lbs': null,
              'height_inches': null,
              'sex': null,
              'profile_pic': responsePayload.picture
            }

          axios.post(`${process.env.FRONTEND_URL}/api/users/addUser`, newUser)
          .then(response => {
            if (response.data === 'Created') {
              axios
                .get(`${process.env.FRONTEND_URL}/api/users/googleAuth?auth_id=${responsePayload.sub}`)

                .then(response => {
                  setUserId(response.data.id)
                  router.push('/settings')
                })

            }
          })
          .catch(err => {
            console.log(err)
          })
        }

        if(response.data.length !== 0) {
          setUserId(response.data.id)
          router.push('/overview')
        }
      })
      .catch((err) => router.push("/Signup"));
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
        'shape': "pill",
        theme: "filled_white",
        size: "large",
        padding: 0
      });
    }

  return (
    <div className={styles.hhAclf}>
        <div className={styles.hhAclf} id="google_btn"/>
    </div>
  )
}
