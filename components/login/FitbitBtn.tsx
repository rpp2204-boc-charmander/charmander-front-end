import React, { useContext } from 'react';
import Image from 'next/image'
import fitbit from '/public/fitbit/fitbit_badge_light.png'
import { useFitbitContext } from  '../../context/FitbitProvider'

export default function FitbitBtn() {
  const fitbitContext = useFitbitContext()

  const handleLogin = async () => {

    if(fitbitContext) return fitbitContext.getFitbitCode()

    return
  }

  return (
    <div className="h-9 w-full bg-[rgb(74_170_184)] rounded-2xl text-white text-center" onClick={() => handleLogin()}>
       <Image
        className=" h-9 w-48 rounded-l-2xl"
        src={fitbit}
        alt="Login with Fitbit"
        />
    </div>
  )
}