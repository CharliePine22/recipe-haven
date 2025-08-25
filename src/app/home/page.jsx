import React from 'react';
import styles from './home.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdFoodBank } from 'react-icons/md';
import Hero from '../../components/Hero/Hero';
import Purpose from '@/components/Purpose/Purpose';

const Home = () => {
  return (
    <div className={styles.page}>
      {/* Home Page Banner */}
      <Hero />
      <Purpose />

      {/* Footer with links
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
      </footer> */}
    </div>
  );
};

export default Home;
