import axios from 'axios'
import React, { useEffect, useRef, useContext } from 'react'
import users from '../../mocks/logindata.json'
import { useRouter } from 'next/router'

export default function Strava ({ code }){
  const router = useRouter()
  const validated = useRef(false)

  console.log('code:', code)

  // const OPTIONS = {
  //   client_id: 98673,
  //   client_secret: '3848cccfe7d6217c5d75ae0aeb0d6c7f4e72c4c5',
  //   code: code,
  //   grant_type: 'authorization_code'
  // }

  // if (code) {
  //   axios
  //   .post('https://www.strava.com/oauth/token', OPTIONS)
  //   .then(res => {
  //     users.users.forEach(user => {
  //       if (user.thirdParty_id === res.data.athlete.id) {
  //           return validated.current = true
  //         }
  //       })
  //     })
  //     .catch((err: object) => console.log(err))
  // }

  // if (validated) {
  //   router.push('/overview')
  // }

  return (<div>code</div>)
}

Strava.getInitialProps = async ({ query }) => {
  console.log('query', query.code)
  const { code } = query
  return { code }
}

