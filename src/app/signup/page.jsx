"use client";
import {useState} from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const {push} = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('https://dev-be-startups.ialabs.co.in/api/auth/local/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData && responseData.user) {
         setSuccess("Registration Successful")
         setError('');
         push('/auth/login');
      } else {
         {
          setError('Registration failed. Please try again later.');
          setSuccess("")
        }
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
      setSuccess("")
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {success && <p className={styles.success__message}>{success}</p>}
      {error && <p className={styles.error__message}>{error}</p>}
        <input className={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      <br />
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};

export default Signup;