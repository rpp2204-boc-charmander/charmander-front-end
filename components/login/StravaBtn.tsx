import React from 'react';
import { useRouter } from 'next/router';

export default function StravaBtn() {
  const router = useRouter()

  function handleLogin () {
    console.log('Strava')
  }

  return(
    <div>
      <button onClick={handleLogin}>Connect with Strava</button>
    </div>
  )
}