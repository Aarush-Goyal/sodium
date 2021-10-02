import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useAuthState } from '../hooks/useAuthState'

const AuthProvider = ({children} : {children : any}) => {
  return (
    <AuthContext.Provider value={useAuthState()}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
