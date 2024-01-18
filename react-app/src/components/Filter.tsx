import React, { useState } from "react";
import { getCountry } from "../redux/slices/CountrySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string>("country");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    dispatch(getCountry());
  };
  const dispatch = useDispatch();
  const country = useSelector((state: RootState) => state.country.country);
  //   dispatch(getCountry());
  console.log("Get", country);

  const renderOptions = () => {
    if (selectedOption === "country") {
      // Render country options

      return (
        <select>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          {/* Add more countries as needed */}
        </select>
      );
    } else if (selectedOption === "ingredient") {
      // Render ingredient options
      return (
        <select>
          <option value="tomato">Tomato</option>
          <option value="onion">Onion</option>
          {/* Add more ingredients as needed */}
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
