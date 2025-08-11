import React from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const Home = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Recipe Haven!</h1>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className={styles.logo}
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Create Account
          </a>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.secondary}
          >
            Get A Taste
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://github.com/CharliePine22/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
          Github
        </a>
        <a
          href='https://charlespine.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <CgWebsite />
          Portfolio
        </a>
      </footer>
    </div>
  );
};

export default Home;
