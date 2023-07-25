'use client';
import {signIn, signOut} from 'next-auth/react';
import Button from '@mui/material/Button'

export default function Login() {
  return (
      <Button onClick={() => signIn('google')}>
        Login
      </Button>
  )
}
