import Image from "next/image";
import React from "react";

type Props = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  views: string;
};

const Card = ({ imgSrc, imgAlt, title, views }: Props) => {
  return (
    <div>
      <div className="group relative">
        <div className="w-auto overflow-hidden flex bg-whiterounded-none group-hover:opacity-75 h-80">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            
            className="object-contain object-top h-full w-auto"
            
          />
        </div>
      </div>
      <div className="mt-5 gap-5 flex flex-row justify-between">
        <div>
          <h3 className="text-sm font-normal text-gray-700  ">{title}</h3>
        </div>
        <p className="text-lg font-bold text-gray-900">{views}</p>
      </div>
    </div>
  );
};

export default Card;