import React from 'react';
import styles from './dashNav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DashNav = () => {
  const router = useRouter();
  const signOutHandler = () => {
    localStorage.removeItem('user');
    router.push('/');
  };
  return (
    <main className={styles.wrapper}>
      <div className={styles.navListContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href='/dashboard'>Home</Link>
          </li>
          <li>
            <Link href='/dashboard/add'>Add Recipe Source</Link>
          </li>
          <li>
            <Link href='/dashboard/recipes'>View All Recipes</Link>
          </li>
          <li onClick={signOutHandler}>Sign Out</li>
        </ul>
      </div>
    </main>
  );
};

export default DashNav;
