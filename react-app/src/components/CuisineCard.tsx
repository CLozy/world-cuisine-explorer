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
      <div className="h-[200px] mb-4">
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
{
  /* <div className="h-[420px] bg-white rounded-md shadow-md p-4 m-4 flex flex-col">
      <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">{title}</div>
      <div className="h-[300px] m-4">
        <img src={img} />
      </div>
      <article className="text-wrap">
        <p>{description}</p>
      </article>
    </div> */
}
