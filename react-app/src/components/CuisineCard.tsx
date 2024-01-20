import React from "react";

interface CuisineCardProps {
  title: string;
  img: string;
  description: string;
}

const CuisineCard: React.FC<CuisineCardProps> = ({
  title,
  img,
  description,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 m-4 border-4 border-lime-300">
      <div className="text-lg xl:text-xl font-semibold mb-2">{title}</div>
      <div>
        <img src={img} />
      </div>
      <div>
        <article className="text-wrap">
          <p>{description}</p>
        </article>
      </div>
    </div>
  );
};

export default CuisineCard;
