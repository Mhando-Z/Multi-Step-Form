import React from "react";
import phone from "../Assets/iphone 12.png";
import { Link } from "react-router-dom";

function Product({ data }) {
  return (
    <div className="flex max-w-sm flex-colitems-center justify-center  lg:hover:scale-105 duration-700">
      <div className="mt-5 flex flex-col p-5 gap-5 rounded-xl items-center bg-gray-300 shadow-xl">
        <Link to={`/Products/${data.id}`}>
          <img
            src={phone}
            alt="poster"
            className="max-w-screen bg-gray-200 rounded-xl h-auto shadow-md"
          />
          <div className="flex flex-col items-center mt-5 justify-center gap-1">
            <h1 className="xl:text-2xl text-xl text-center font-sans font-semibold">
              {data.product_name}
            </h1>
            <h1 className="xl:text-xl text-lg text-center font-sans ">
              {data.price} Tsh
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
