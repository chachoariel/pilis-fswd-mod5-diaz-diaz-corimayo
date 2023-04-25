import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UserInfoScreen } from '../user/UserinfoScreen'
import { VerificationUser } from '../verificationUser/verificationUser'

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser
        ? (
          <UserInfoScreen />
          )
        : (
          <VerificationUser />
          )}
    </>

  )
}
