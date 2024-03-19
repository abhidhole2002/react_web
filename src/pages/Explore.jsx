import React from "react";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <div>
      <div className="mt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">EXPLORE</h1>
          <h1 className="text-lg ">
            Explore New place, food, culture around the world and many more
          </h1>
        </div>

        <div className="grid grid-rows-2 grid-cols-3  items-center justify-around w-5/6 mx-auto gap-1">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
