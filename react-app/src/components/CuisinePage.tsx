import React from "react";
import { Caroussel, CuisineCard, Search, Filter } from "./";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

// Function to create an array of ingredients from a meal
const createIngredientsArray = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};


const CuisinePage = () => {
  const meals = useSelector((state: RootState) => state.meals.meals);
  return (
    <div className="bg-stone-300">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-lime-500">
        <Search />
        <h1 className="font-mono font-extrabold text-center text-4xl text-black mx-auto  my-8">
          World Cuisine Explorer
        </h1>

        <Caroussel />

        {meals && meals.length > 0 && (
          <div className="grid grid-cols-1 xl:grid-cols-2 bg-white">
            {meals.map((meal) => {
              const ingredients = createIngredientsArray(meal);

              return (
                <CuisineCard
                  key={meal.idMeal}
                  title={meal.strMeal}
                  img={meal.strMealThumb}
                  description={meal.strInstructions}
                  ingredients={ingredients}
                  country = {meal.strArea}
                  category = {meal.strCategory}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CuisinePage;


