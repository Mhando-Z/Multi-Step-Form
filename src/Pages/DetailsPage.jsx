import React from "react";
import countries from "../Assets/Data/data.json";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function DetailsPage() {
  const data = countries;
  const { id } = useParams();
  const datax = data.find((dt) => dt.name === id);

  //Obtaining border countries Logic
  const border = datax.borders?.map((pol) => {
    return data.find((dt) => dt.alpha3Code === pol);
  });

  return (
    <div className="container mx-auto items-center lg:h-screen justify-center">
      <div className="container mx-auto mb-16">
        <Link
          to={"/"}
          className="text-xl shadow-md text-center ring-2 ring-gray-500 rounded-lg py-2 px-4"
        >
          <ArrowBackIcon sx={{ mb: "2px", mr: "2px" }} fontSize="medium" />
          Back
        </Link>
      </div>
      <div className="flex container mx-auto justify-center flex-col lg:flex-row p-2 md:p-10 gap-x-20">
        <img src={datax.flag} alt="flag" className="w-[556px] h-[447px] " />
        <div className="flex flex-col gap-y-10 mt-5">
          <h1 className="text-3xl font-bold">{datax.name}</h1>
          <div className="flex flex-col max-w-xl sm:flex-row justify-between gap-x-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold">
                Native name:
                <span className="font-normal ml-2">{datax.nativeName}</span>
              </h1>
              <h1 className="text-xl font-bold">
                Population:
                <span className="font-normal ml-2">
                  {datax.population.toLocaleString()}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Region: <span className="font-normal ml-2">{datax.region}</span>
              </h1>
              <h1 className="text-xl font-bold">
                Sub-Region:
                <span className="font-normal ml-2">{datax.subregion}</span>
              </h1>
              <h1 className="text-xl font-bold">
                Capital:
                <span className="font-normal ml-2">{datax.capital}</span>
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">
                Top level Domain:
                <span className="font-normal ml-2">{datax.topLevelDomain}</span>
              </h1>
              <h1 className="text-xl font-bold">
                Currencies:
                <span className="font-normal ml-2">
                  {datax.currencies[0].code}
                </span>
              </h1>
              <h1 className="text-xl font-bold">
                Language:
                <span className="font-normal ml-2">
                  {datax.languages[0].name}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap max-w-lg items-center gap-x-5 gap-y-3">
            <h1 className="text-xl font-bold">Border Countries</h1>
            {border?.map((dt, index) => {
              return (
                <div className="flex">
                  <h1 className="text-lg ring-2 ring-gray-400 rounded-md shadow-md p-2 ">
                    {dt.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
