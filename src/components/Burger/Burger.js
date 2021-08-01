import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(
      // gives an array of the keys
      (igKey) => {
        //... Ojo con "..." cuando modifiquemos los ingredientes
        return [...Array(props.ingredients[igKey])] // create an array with the length of the value (Js)
          .map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />;
          });
      }
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Pleaase start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
