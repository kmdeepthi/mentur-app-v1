'use client';
import {signIn, signOut} from 'next-auth/react';
import Button from '@mui/material/Button'

export default function Logout() {
  return (
    <Button onClick={() => signOut()}>Logout</Button>
  )
}
