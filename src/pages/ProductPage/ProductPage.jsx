import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import FunctionBtn from "../../shared/FunctionBtn";

const ProductPage = () => {
  return (
    <div>
      {/* Link Tab */}
      <div className="my-16 flex items-center gap-1">
        <p className="text-[16px]">Home</p>
        <MdKeyboardArrowRight className="text-xl" />
        <p className="text-[16px] text-gray-600">MANUFACTURER</p>
        <MdKeyboardArrowRight className="text-xl" />
        <p className="text-[16px] font-bold">
          ZANUSSI DISHWASHER SUCTION PIPE MANIFOLD
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="border border-gray-600 p-11 rounded-2xl flex justify-center">
          <img
            src="https://i.ibb.co/hRzFKvnD/60e0638a76288d19f154fb8f9b723f09e1918dad.png"
            alt="Items"
          />
        </div>
        {/* Card */}
        <div className="border border-red-600 rounded-2xl">
          {/* Card Content */}
          <div className="pt-[18px] px-7">
            <h1 className="font-medium text-4xl">
              ZANUSSI DISHWASHER SUCTION PIPE MANIFOLD
            </h1>
            <p className="flex items-center gap-2 mt-4">
              <RiCheckboxCircleLine className="text-2xl text-green-600" />
              <span className="font-bold text-2xl text-green-600">
                In Stock
              </span>
            </p>
            <p className="border-b font-medium text-[14px] inline-block my-4">
              Answered Questions
            </p>
            <p className="font-bold text-2xl mb-4">$56.96</p>
            <p className="font-bold text-[16px] mb-4">Quantity</p>
            <FunctionBtn />
          </div>
          {/* Card Bottom */}
          <div className="px-7">
            <input
              type="text"
              placeholder="Select your shipping country to see your delivery price
"
              className="border border-orange-500 focus:border-orange-500  focus:outline-none py-4 px-3 w-full rounded-[8px] font-medium text-[14px] text-black placeholder:font-medium placeholder:text-black placeholder-text-[14px] my-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
