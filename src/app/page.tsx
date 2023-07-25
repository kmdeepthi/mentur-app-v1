'use client';
import {useSession} from 'next-auth/react';

export default function Home() {
  const session = useSession();
  const name = session?.data?.user?.name;

  return (
    <>
      <div >Welcome {name }</div>
      <div >Let us know more about you.</div>
    </>
  )
}
