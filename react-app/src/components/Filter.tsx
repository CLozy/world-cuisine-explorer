import React, { useState, useEffect } from "react";
import { getCountry } from "../redux/slices/CountrySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { getIngredients } from "../redux/slices/IngredientSlice";

// interface FilterProps {}

const Filter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("country");
  const dispatch = useDispatch();

  const country = useSelector((state: RootState) => state.country.meals);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.meals
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

//   console.log("Get", country);
//   console.log("Get", ingredients);
  //   console.log(country.meals);

  useEffect(() => {
    if (selectedOption === "country") {
      dispatch(getCountry());
    } else if (selectedOption === "ingredient") {
      dispatch(getIngredients());
    }
  }, [dispatch, selectedOption]);

  const renderOptions = () => {
    if (selectedOption === "country") {
            // Render country options
      return (
        <select>
          {country?.map((meal) => (
            <option key={meal.strArea} value={meal.strArea}>
              {meal.strArea}
            </option>
          ))}
        </select>
      );
    } else if (selectedOption === "ingredient") {
           // Render ingredient options
           return (
            <select>
              {ingredients?.map((meal) => (
                <option key={meal.strIngredient} value={meal.strIngredient}>
                  {meal.strIngredient}
                </option>
              ))}
            </select>
          );
    }

    return null;
  };

  return (
    <div>
      <label>
        Filter by:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="country">Country</option>
          <option value="ingredient">Ingredient</option>
        </select>
      </label>

      {renderOptions()}
    </div>
  );
};

export default Filter;
