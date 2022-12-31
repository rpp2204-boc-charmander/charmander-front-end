import React from 'react'
import axios from 'axios'
import base64url from 'base64url'
import { useAuthContext } from '../context/AuthProvider'

export function ThirdPartyUserId (id: string) {
  const authContext = useAuthContext()
  authContext.setThirdPartyId(id)
  console.log(authContext.thirdPartyId)
}

export default function Fitbit() {

  return (
      <div>
      </div>
    )
}