"use client";
import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const {data:session} =useSession();
  console.log(session)
  return (
    <div className={styles.container}>
      <Link href='/signup' className={styles.signup}>SIGNUP</Link>
      <div className={styles.links}>
      { session?.user ?(
        <button onClick={()=>signOut()} className={styles.logout}>LOGOUT</button>
        ):(
        <button onClick={() => signIn()} className={styles.logout}>LOGIN</button>
        )
      }  
      </div>
    </div>
  )
}

export default Navbar