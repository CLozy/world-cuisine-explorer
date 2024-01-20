import React from "react";
import { Caroussel, CuisineCard, Search, Filter } from "./";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const CuisinePage = () => {
  const meals = useSelector((state: RootState) => state.meals.meals);
  return (
    <div className="bg-stone-300">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-lime-500">
        <Search />
        <h1 className="font-mono font-extrabold text-center text-4xl text-black mx-auto  my-8">
          World Cusine Explorer
        </h1>

        <Caroussel />

        <div className="grid grid-cols-1 xl:grid-cols-2 bg-white">
          {meals?.map((meal) => {
            return (
              <CuisineCard
                key={meal.idMeal}
                title={meal.strMeal}
                img={meal.strMealThumb}
                description={meal.strInstructions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;

// https://www.themealdb.com/images/category/beef.png
