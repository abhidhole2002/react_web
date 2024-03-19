import React from "react";
import WorkCard from "./WorkCard";
import { GrRestaurant } from "react-icons/gr";

const Work = () => {
  return (
    <>
      <div className="mt-56  ">
        <div className=" text-center">
          <h1 className="text-2xl font-bold mb-5">HOW IT WORKS</h1>
          <h1 className="mb-8 text-lg ">Learn More about how our website works</h1>
        </div>

        <div className="flex  justify-around w-5/6 mx-auto">
          <WorkCard
            title="demo"
            icon={GrRestaurant}
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          laudantium culpa, facilis aperiam iure explicabo."
          />
          <WorkCard
            title="demo"
            icon={GrRestaurant}
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          laudantium culpa, facilis aperiam iure explicabo."
          />
          <WorkCard
            title="demo"
            icon={GrRestaurant}
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        laudantium culpa, facilis aperiam iure explicabo."
          />
        </div>
      </div>
    </>
  );
};

export default Work;
