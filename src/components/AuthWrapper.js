'use client'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/userSlice'

const AuthWrapper = ({ children }) => {
  const { push } = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push('/api/auth/signin')
      return <p>Access Denied</p>
    }
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
    console.log()
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