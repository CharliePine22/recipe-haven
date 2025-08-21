'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './authenticate.module.css';

const Authenticate = () => {
  const fakeDB = [
    {
      email: 'irush1130@yahoo.com',
      password: 'knights21',
    },
  ];
  const router = useRouter();

  const authenticateUser = (data) => {
    const { email, password } = data;
    if (email === fakeDB[0].email && password === fakeDB[0].password) {
      console.log('HELLO');
      return true;
    } else {
      console.log('WRONG');
      return false;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = authenticateUser({ email, password });

    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });

    if (response.ok) {
      router.push('/profile');
    } else {
      // Handle errors
    }
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.displayContainer}>
        <div className={styles.titleContainer}>
          <h2>Recipe Nest</h2>
          <h5>Log into your account below.</h5>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email' required />
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
            />
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Authenticate;
