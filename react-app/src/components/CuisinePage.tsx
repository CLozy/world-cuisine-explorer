import React from "react";
import { Caroussel, CuisineCard, Search } from "./";
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

        {/* {meals?.map((meal) => {
          return (
            
            <CuisineCard
              key={meal.idMeal}
              title={meal.strMeal}
              img={meal.strMealThumb}
              description={
                "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
              }
            />
           
          );
        })} */}

        <Caroussel />

        <div className="grid grid-cols-2 xl:grid-cols-3 bg-white">
          {meals?.map((meal) => {
            return (
              <CuisineCard
                key={meal.idMeal}
                title={meal.strMeal}
                img={meal.strMealThumb}
                description={""}
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
