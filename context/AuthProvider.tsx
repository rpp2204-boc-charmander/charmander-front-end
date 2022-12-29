import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

interface Props {
  children: React.ReactNode
}

interface AuthContextType {
  user: {
    id: string,
    firstname: string,
    lastname: string,
    height: string,
    weight: string,
    sex: string,
    profile: string,
  },
  checkDatabase: Function,
  setUser: React.Dispatch<React.SetStateAction<{
    id: string;
    firstname: string;
    lastname: string;
    height: string;
    weight: string;
    sex: string;
    profile: string;
  }>>,
  thirdPartyId: string
  setThirdPartyId: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = React.createContext<AuthContextType>({
  user: {
    id: '',
    firstname: '',
    lastname: '',
    height: '',
    weight: '',
    sex: '',
    profile: '',
  },
  checkDatabase: () => {},
  setUser: () => {},
  thirdPartyId: '',
  setThirdPartyId: () => {}
})

export default function AuthProvider({ children }: Props) {
  const router = useRouter()
  const dbEndpoint = process.env.DB_ENDPOINT

  const [thirdPartyId, setThirdPartyId] = useState('')
  const [user, setUser] = useState({
    id: '',
    firstname: '',
    lastname: '',
    height: '',
    weight: '',
    sex: '',
    profile: ''
  })

  function checkDatabase(user_id: string) {
    axios
      .get(`${dbEndpoint}/${user_id}`)
      .then(userData => {

          // If user exists in database
          if (typeof userData.data === 'object') {
            setUser(userData.data)
            router.push('/overview')
          }

          // If user does not exist in database
          if (typeof userData.data === 'string') {
            return false
          }
      })
      .catch(err => {
        throw new Error('Error fetching user from database', err)
      })
  }

  return (
    <AuthContext.Provider value={{ user, setUser, checkDatabase, thirdPartyId, setThirdPartyId }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if(!authContext) throw new Error ('AuthContext Provider Error')

  return authContext
}

