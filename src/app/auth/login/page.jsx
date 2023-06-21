"use client";
import {useState} from 'react';
import styles from './page.module.css';
import { signIn } from "next-auth/react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin= async(event)=>{
    event.preventDefault();
      try{
        const result = await signIn("credentials", {
          username,
          password,
          redirect: true,
          callbackUrl: "/",
        })
      }catch(e){
        setError("Unable to Login.")
      }
  }
  return (
    <form onSubmit={handleLogin} className={styles.container}>
      {error && <p className={styles.error__message}>{error}</p>}
        <input className={styles.input}
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      <br />
      <button type="submit" className={styles.button}>Login</button>
    </form>
  )
}

export default Login;