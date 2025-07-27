import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import FunctionBtn from "../../shared/FunctionBtn";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ProductPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-3">
      {/* Link Tab */}
      <div className="my-16 flex items-center gap-1">
        <p className="text-[16px]">Home</p>
        <MdKeyboardArrowRight className="text-xl" />
        <p className="text-[16px] text-gray-600">MANUFACTURER</p>
        <MdKeyboardArrowRight className="text-xl" />
        <p className="text-[14px] md:text-[16px] font-bold">
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
        <div className="border border-red-600 bg-[#FFF6F6] rounded-2xl">
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
          {/* Card Buttons */}
          <div className="px-7">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 bottom-6 flex items-center pl-3">
                <FiMapPin className="text-black text-lg" />
              </span>
              <input
                type="text"
                placeholder="Select your shipping country to see your delivery price"
                className="border border-orange-500 focus:border-orange-500  focus:outline-none py-4 pl-10 pr-3 w-full rounded-[8px] font-medium text-[14px] text-black placeholder:font-medium placeholder:text-black placeholder-text-[14px] mt-4 mb-10"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <button className="border border-red-600 rounded-full py-3 font-bold text-[16px] cursor-pointer">
                Add to Cart
              </button>
              <button className="bg-red-600 rounded-full text-white font-bold text-[16px] cursor-pointer">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Info's */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex items-center">
            <h5 className="bg-red-600 p-4 rounded-l-full font-bold md:text-2xl text-white">
              Product Details
            </h5>
            <h5 className="border border-red-600 p-3.5 rounded-r-full md:text-2xl font-bold">
              Additional information
            </h5>
          </div>
          <p className="md:w-[570px] mt-10 text-gray-600">
            FOR ZANUSSI ELECTROLUX HOOD DYPE DISHWASHER NHT8 , KHT8 , EHT8 ,
            ZHT8I , AHT8I , EHT8I , ZHT8TI , EHT8TI ZANUSSI TUBO DE SUCÇÃO PARA
            MÁQUINA DE LAVAR LOUÇA
          </p>
        </div>
        <div className="pt-7 lg:pt-0">
          <button className="flex items-center justify-center gap-2 w-full border border-red-600 py-3 font-bold text-[16px] rounded-full cursor-pointer mb-3.5">
            <FaWhatsapp className="text-green-500 text-[16px]" /> Send message
            on What's app
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-red-600 py-3 font-bold text-[16px] rounded-full cursor-pointer">
            <SiGmail className="text-orange-400 text-[16px]" /> Send message on
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
