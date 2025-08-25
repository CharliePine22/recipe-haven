'use client';

import React, { use, useEffect, useState } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdFoodBank } from 'react-icons/md';
import useLoadImages from '../../hooks/useLoadImages';

const Hero = ({}) => {
  const sourceLoaded = useLoadImages('/images/wallpapers/home-page-wp.jpg');

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.heroBackgroundImg}
        style={{
          backgroundImage: `url(${sourceLoaded})`,
        }}
      />
      {sourceLoaded && (
        <main className={styles.contentContainer}>
          <Image
            className={styles.logo}
            src='/images/wallpapers/logo.png'
            alt='Vercel logomark'
            width={50}
            height={50}
          />
          {/* Project Title and Description */}
          <div className={styles.heroTitleContainer}>
            <h1 className={styles.title}>Recipe Nest</h1>
            <p className={styles.description}>
              No more endless scrolling to find that dish you saved. Recipe Nest
              gathers every recipe you’ve saved from your favorite social media
              into one simple, searchable place.
            </p>
            <div className={styles.ctas}>
              <Link className={styles.primary} href='/authenticate'>
                <MdFoodBank size={30} />
                CREATE ACCOUNT
              </Link>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              className={styles.heroImage}
              src='/images/stock/iphone4l.png'
              alt='Iphone displaying instagram social media'
              width={600}
              height={600}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Hero;
