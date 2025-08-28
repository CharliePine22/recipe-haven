'use client';

import { FormEvent, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './authenticate.module.css';
import useLoadImages from '@/hooks/useLoadImages';
import { UserContext } from '../../providers/UserContext';

const Authenticate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);
  const sourceLoaded = useLoadImages('/images/stock/cozy-kitchen.jpg');
  const { user, setUser } = useContext(UserContext);

  const fakeDB = [
    {
      name: 'Charlie',
      email: 'irush1130@yahoo.com',
      password: 'knights21',
    },
    {
      name: 'Jess',
      email: 'jessicachilek@gmail.com',
      password: 'meraidmeraid8',
    },
  ];
  const router = useRouter();

  const authenticateUser = (data) => {
    const { email, password } = data;
    const foundUser = fakeDB.find((user) => email == user.email);

    if (foundUser && foundUser.password == password) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    } else {
      setHasError(true);
      setError('Incorrect email or password.');
      console.log('WRONG');
      return false;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = authenticateUser({ email, password });

    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });

    if (response) {
      router.push('/dashboard');
    } else {
      // Handle errors
    }
    setIsLoading(false);
  }

  return (
    <main
      className={styles.wrapper}
      style={{ backgroundImage: `url(${sourceLoaded})` }}
    >
      <div className={styles.displayContainer}>
        {!isLoading ? (
          <>
            <div className={styles.titleContainer}>
              <h2>Recipe Nest</h2>
              <h5>Log into your account below.</h5>
            </div>
            <div className={styles.formContainer}>
              <span className={styles.error}>{error}</span>
              <form onSubmit={handleSubmit}>
                <input
                  style={{
                    borderColor: hasError ? 'red' : 'rgb(164, 164, 164)',
                  }}
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                />
                <input
                  style={{
                    borderColor: hasError ? 'red' : 'rgb(164, 164, 164)',
                  }}
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
                <button type='submit'>Login</button>
              </form>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Authenticate;
