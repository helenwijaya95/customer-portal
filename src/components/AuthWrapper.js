'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/userSlice'

const AuthWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();
  const { data: session, status } = useSession({
    required: true,
  });
  useEffect(() => {
    if (session) {
      setIsSignedIn(true)
      // save user data
      dispatch(setUser({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image
      }))
    }
  }, [session])
  useEffect(() => {
    if (session) {
      setIsSignedIn(true)
    }
  }, [])

  if (status === "loading") {
    return (
      <Loader />
    )
  }
  if (!session && status !== "loading") {
    return <p>Access Denied</p>
  }
  return (
    isSignedIn && <>{children}</>
  )
}

export default AuthWrapper;