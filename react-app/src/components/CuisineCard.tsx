import React from "react";

interface CuisineCardProps {
  title: string;
  img: string;
  description: string;
  ingredients: string[]; 
  

}

const CuisineCard: React.FC<CuisineCardProps> = ({
  title,
  img,
  description,
  ingredients,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 m-4 border-4 border-lime-300">
      <div className="text-lg xl:text-xl font-semibold mb-2">{title}</div>
      <div>
        <img src={img} />
      </div>
      <div>
        <article className="text-wrap">
        <h1 className="font-bold text-l mb-2">Ingredients</h1>
        <p className="mb-4">{ingredients.join(', ')}</p> 
          <h1 className="font-bold text-l mb-2">Recipe</h1>
          <p>{description}</p>
          
        </article>
      </div>
    </div>
  );
};

export default CuisineCard;
