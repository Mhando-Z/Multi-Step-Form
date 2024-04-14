import React, { useEffect, useState } from "react";
import countries from "../Assets/Data/data.json";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const data = countries;
  const [Visisble, setVisible] = useState(8);
  const [Continents, setContinents] = useState([]);
  const [Continent, setContinent] = useState("");
  const [showContent1, setContent1] = useState(true);
  const [showContent2, setContent2] = useState(false);
  const [Query, setQuery] = useState("");
  const navigate = useNavigate();

  //Grouping data logic
  async function getContinents() {
    const group = Object.groupBy(data, (datagroup) => {
      return datagroup.region;
    });
    setContinents(group);
  }
  useEffect(() => {
    getContinents();
  }, []);

  const handleChange = (event) => {
    setContinent(event.target.value);
    if (showContent1 === true) {
      setContent1(false);
      setContent2(true);
    }
  };
  //input function
  const handleInput = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSearch = (e) => {
    if (e.code === "Enter") {
      navigate(`Results/${Query}`);
    }
  };
  ///increse coutries list
  const handleIncrease = () => {
    setVisible(Visisble + 4);
  };
  const handleDecrease = () => {
    setVisible(Visisble - 4);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-slate-50">
      <div className="container mx-auto flex gap-y-5 flex-col md:flex-row items-center gap-x-10 justify-between">
        {/* Selection portion */}
        <div className="relative flex flex-col gap-y-4 md:flex-row gap-x-5">
          <input
            type="search"
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleSearch(e)}
            className="py-2 w-full  dark:ring-slate-800 dark:bg-slate-700 ring-2 ring-pink-600 px-28 outline-none relative placeholder:text-center"
            placeholder="Search for a country"
          />
          <div className="absolute left-3 top-2">
            <SearchIcon />
          </div>
          <Link
            to={`Results/${Query}`}
            className="text-xl md:py-2 py-1 dark:bg-slate-700 dark:ring-slate-800 text-center px-8 ring-2 ring-pink-600 shadow-md"
          >
            Search
          </Link>
        </div>
        <select
          value={Continent}
          onChange={handleChange}
          className="bg-gray-200 px-10 bg-opacity-85 border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={"Africa"}>Africa</option>
          <option value={"Americas"}>Americas</option>
          <option value={"Antarctic"}>Antarctic</option>
          <option value={"Antarctic Ocean"}>Antarctic ocean</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Oceania"}>Oceania</option>
          <option value={"Polar"}>Polar</option>
        </select>
      </div>
      {showContent1 && (
        <div className="mt-10 lg:h-screen container mx-auto grid gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
          {data.slice(0, Visisble).map((info) => {
            return (
              <div>
                <div
                  key={info.alpha3Code}
                  className="flex-1 h-full shadow-lg dark:bg-gray-700 dark:text-slate-50 flex-col items-start bg-gray-100"
                >
                  <Link to={`Details/${info.name}`}>
                    <img
                      src={info.flag}
                      alt="flag"
                      className="max-w-screen h-auto rounded-t-md"
                    />
                    <div className="flex-1 flex-col p-5">
                      <h1 className="text-xl mb-3 mt-2 font-bold">
                        {info.name}
                      </h1>
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
      )}
      {showContent2 && (
        <div className="mt-10 lg:h-screen container mx-auto grid gap-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center">
          {Continents[Continent].slice(0, Visisble).map((info) => {
            return (
              <div>
                <div
                  key={info.alpha3Code}
                  className="flex h-full dark:bg-gray-700 dark:text-slate-50  shadow-lg flex-col items-start bg-gray-100"
                >
                  <Link to={`Details/${info.name}`}>
                    <img
                      src={info.flag}
                      alt="flag"
                      className="max-w-screen h-auto rounded-t-md"
                    />
                    <div className="flex-1 flex-col p-5">
                      <h1 className="text-xl mb-3 mt-2 font-bold">
                        {info.name}
                      </h1>
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
      )}
      <div className="flex justify-center mt-10 items-center">
        <div className="flex flex-row items-center justify-center gap-x-10">
          <button
            onClick={handleIncrease}
            className="ring-2 text-lg text-center ring-pink-600 dark:ring-slate-700 py-1 px-10"
          >
            Load More
          </button>
          <button
            onClick={handleDecrease}
            className="ring-2 text-lg text-center ring-pink-600  dark:ring-slate-700 py-1 px-10"
          >
            Load Less
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
