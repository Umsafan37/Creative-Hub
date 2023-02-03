import React from "react";
import Image from "next/image";
import CTAImg from "../public/img9.png";


type Props = {};

const CTASection = (props: Props) => {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-5">
        <p className="sm:text-5xl text-3xl mb-4 text-right font-normal text-gray-900 ml-20" >
          Odio morbi
        </p>
        <h1 className="sm:text-5xl text-3xl mb-4 text-right font-bold text-gray-900 ml-20">
          Urna aliquam tinc
          <br className="hidden lg:inline-block" />
          Aliquam pellentesque
        </h1>
        <div className="flex justify-end">
          <p className="mb-8 leading-relaxed w-2/3">
            Sed nunc nunc sagittis nulla varius. Vitae justo volutpat dolor ac.
            Elementum sed aliquet lorem sapien volutpat. In sed velit pretium
            sed. In quisque adipiscing congue faucibus. Enim orci feugiat mattis
            ultricies enim arcu cras mattis aliquet. Consequat amet amet mauris
            ac at est erat. Diam egestas volutpat purus accumsan nulla tellus
            faucibus. Viverra eleifend amet egestas tincidunt posuere
          </p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center"
          alt="hero"
          width={500}
          height={700}
          src={CTAImg}
        />
      </div>
      

    </div>
  );
};

export default CTASection;