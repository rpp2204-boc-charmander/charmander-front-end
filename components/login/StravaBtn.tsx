import React from 'react';
import { useRouter } from 'next/router';
import strava from '/public/strava/strava_orange.svg'
import Image from 'next/image'

export default function StravaBtn() {
  const router = useRouter()

  const id = process.env.STRAVA_ID;
  const redirectUrl = "http://localhost:3000/strava";
  const scope = "read"

  const handleLogin = () => {
    console.log('strava click')
    // window.location =
    router.push(`http://www.strava.com/oauth/authorize?client_id=${id}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`);
};

  return (
    <div className="h-9 w-full bg-[#FC4C02] rounded-2xl text-black p-1 item-center " onClick={() => handleLogin()} >
      <Image
        className="h-12 pl-10 pb-4"
        src={strava}
        alt="Login with Strava"
        onClick={() => handleLogin()} />
    </div>
  )
}