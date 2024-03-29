import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { setQuery, fetchDataSuccess } from "../redux/Actions";
import { RootState } from "../redux/Store";

import { searchMeals } from "../redux/slices/MealsSlice";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state: RootState) => state.meals.meals);

  console.log("SEARCH", meals);

  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          //   value={query.value}
          onChange={(e) => dispatch(searchMeals(e.target.value))}
          className=" block w-full p-4 ps-10 text-sm   rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Search for dishes by name..."
          required
        />
        <button
          type="submit"
          //   onClick={handleSearch}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
