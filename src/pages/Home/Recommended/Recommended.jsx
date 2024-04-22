/* eslint-disable no-unused-vars */
import React from "react";
import img from "../../../assets/Images/Festival/travel-concept-with-landmarks.jpg"
const Recommended = () => {
  return (
    <div>
      <div className="card lg:card-side my-4 ">
        <div className=" flex flex-col justify-center items-center w-1/2">
            <p className=" text-red-500 uppercase text-start">Why chose Book-Swiftly</p>
          <h2 className="card-title lg:text-5xl text-2xl font-mono">We Recommend Beautiful<br/> Destination Every Month</h2>
          <p className=" text-start px-24">Explore culinary experiences such as cooking classes, food tours, and dining experiences hosted by local chefs or food enthusiasts.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
        <figure className=" w-1/2 ">
          <img
            className=" rounded-tl-[300px] rounded-br-[300px]"
            src={img}
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
};

export default Recommended;
