import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Countries from "../Assets/Data/data.json";
import { Outlet } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SearchResults() {
  const data = Countries;
  const [Visisble, setVisible] = useState(8);
  const { id } = useParams();

  ///increse coutries list
  const handleIncrease = () => {
    setVisible(Visisble + 4);
  };
  const handleDecrease = () => {
    setVisible(Visisble - 4);
  };

  const Results = data.filter((dt) => {
    return dt.name.toLowerCase().includes(id);
  });

  return (
    <div className="container mx-auto justify-center items-center lg:h-screen">
      <div className="">
        <div className="container mx-auto mb-16">
          <Link
            to={"/"}
            className="text-xl shadow-md text-center ring-2 ring-gray-500 rounded-lg py-2 px-4"
          >
            <ArrowBackIcon sx={{ mb: "2px", mr: "2px" }} fontSize="medium" />
            Back
          </Link>
        </div>{" "}
        <h1 className="md:text-2xl text-xl font-bold">
          Search Results for...."{id}"
        </h1>
      </div>
      <div className="mt-10 container mx-auto grid gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
        {Results.slice(0, Visisble).map((info, index) => {
          return (
            <div>
              <div
                key={index}
                className="flex h-full dark:bg-gray-700 dark:text-slate-50  flex-col items-start bg-gray-100"
              >
                <Link to={`/Details/${info.name}`}>
                  <img
                    src={info.flag}
                    alt="flag"
                    className="max-w-screen h-auto rounded-t-md"
                  />
                  <div className="flex-1 flex-col p-5">
                    <h1 className="text-xl mb-3 mt-2 font-bold">{info.name}</h1>
                    <h1 className="text-lg font-bold">
                      Population:
                      <span className="font-normal ml-2">
                        {info.population.toLocaleString()}
                      </span>
                    </h1>
                    <h1 className="text-lg font-bold">
                      Region:
                      <span className="font-normal ml-2">{info.region}</span>
                    </h1>
                    <h1 className="text-lg font-bold">
                      Capital:
                      <span className="font-normal ml-2">{info.capital}</span>
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10 items-center">
        <div className="flex flex-row items-center justify-center gap-x-10">
          <button
            onClick={handleIncrease}
            className="ring-2 ring-pink-600  dark:ring-slate-700 py-1 px-10"
          >
            Load More
          </button>
          <button
            onClick={handleDecrease}
            className="ring-2 ring-pink-600 dark:ring-slate-700 py-1 px-10"
          >
            Load Less
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SearchResults;
