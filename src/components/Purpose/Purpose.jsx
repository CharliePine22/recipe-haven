import React from 'react';
import styles from './purpose.module.css';
import { FaJournalWhills, FaSearch, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const Purpose = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.mainContainer}>
        <Image
          src='/images/stock/ig-recipe-post.png'
          alt='Taking picture of food'
          width={500}
          height={500}
          className={styles.purposeImage}
        />
        {/* ICON: JOUNRAL, Gather your recipes from all your favorite social media collections. No more endless scrolling to find that one dish you swore you’d try.  */}
        {/* ICON: SEARCH, Search for a recipe by name, cuisine, or ingredient. Use the filters to figure out which meal to pull out for breakfast, lunch, dinner, or your late night dessert.*/}
        {/* ICON: CHECK, Each recipe will display its ingredients, instructions, and a link to the original source. Even the nutrition facts!*/}
        <div className={styles.purposeContainer}>
          <h3 className={styles.title}>What is Recipe Nest?</h3>
          <ul className={styles.purposeList}>
            <li>
              <h6>Gather All Your Recipes</h6>
              <p>
                <FaJournalWhills size={25} />
                Collect recipes from all your socials, no more endless scrolling
                to find that one dish you swore you’d try.
              </p>
            </li>
            <li>
              <h6>Tailor Your Meals</h6>
              <p>
                <FaSearch size={25} />
                Search by name, cuisine, or ingredient, and filter by mealtime.
              </p>
            </li>
            <li>
              <h6>Fully Informed</h6>
              <p>
                <FaCheck size={25} />
                Each recipe will display its ingredients, instructions, and a
                link to the original source. Even the nutrition facts!
              </p>
            </li>
          </ul>
          {/* <p>
            Welcome to Recipe Nest — the one spot where all your saved recipes
            finally live together. Whether you’ve bookmarked them on Instagram,
            saved them on Pinterest, or stumbled upon them anywhere else online,
            Recipe Nest gathers them all in one simple, searchable space. No
            more endless scrolling to find that one dish you swore you’d try.
            Just open your Nest, and let the cooking inspiration come to you.
          </p> */}
        </div>
      </main>
    </div>
  );
};

export default Purpose;
