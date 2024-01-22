import React, { useState, useEffect } from "react";
import { getCountry } from "../redux/slices/CountrySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { getIngredients } from "../redux/slices/IngredientSlice";
import { getCountryMeals } from "../redux/slices/CountryFilterSlice";
import { getIngredientsMeals } from "../redux/slices/IngredientFilterSlice";



const Filter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("country");
  const dispatch = useDispatch();

  const country = useSelector((state: RootState) => state.country.meals);
  const ingredients = useSelector(
    (state: RootState) => state.ingredients.meals
  );
  const countryfilter  = useSelector((state: RootState) => state.CountryFilterSlice.meals);
  const ingredientsfilter  = useSelector((state: RootState) => state.IngredientFilterSlice.meals);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
      
  };

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
