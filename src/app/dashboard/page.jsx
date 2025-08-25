"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import DashNav from "@/components/DashNav/DashNav";
import styles from "./dashboard.module.css";
import { savedRecipes } from "@/app/dashboard/seed";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [featuredRecipes, setFeaturedRecipes] = useState(savedRecipes);

  console.log(user);
  return (
    <main className={styles.wrapper}>
      <DashNav />
      <div className={styles.dashContainer}>
        <div className={styles.dashHeader}>
          <h2>Welcome back {user.name}!</h2>
          <h4>Ready to get cookin?</h4>
        </div>

        <div className={styles.dashBody}>
          <p>Here are some dishes you've yet to try!</p>
          <p>Any of these look good?</p>
          <div className={styles.recipeContainer}>
            {featuredRecipes.map((recipe) => {
              return (
                <div className={styles.featuredRecipe} key={recipe.id}>
                  <div
                    className={styles.recipeImageContainer}
                    style={{ backgroundImage: `url(${recipe.image})` }}
                  />
                  <p>{recipe.title}</p>
                </div>
              );
            })}
            {/* <div className={styles.featuredRecipe}>
              <div className={styles.recipeImageContainer}></div>
              <p>Recipe 2</p>
            </div>
            <div className={styles.featuredRecipe}>
              <div className={styles.recipeImageContainer}></div>
              <p>Recipe 2</p>
            </div>
            <div className={styles.featuredRecipe}>
              <div className={styles.recipeImageContainer}></div>
              <p>Recipe 3</p>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
