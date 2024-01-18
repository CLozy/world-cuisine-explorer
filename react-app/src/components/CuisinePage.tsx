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

        {meals?.map((meal) => {
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
        })}

        <Caroussel />

        <div className="grid grid-cols-2 xl:grid-cols-3 bg-white">
          <CuisineCard
            title={"Beef"}
            img={"https://www.themealdb.com/images/category/beef.png"}
            description={
              "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
            }
          />
          <CuisineCard
            title={"Chicken"}
            img={"https://www.themealdb.com/images/category/chicken.png"}
            description={
              "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
            }
          />
          <CuisineCard
            title={"Dessert"}
            img={"https://www.themealdb.com/images/category/dessert.png"}
            description={
              "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CuisinePage;

// https://www.themealdb.com/images/category/beef.png
