import React from "react";
import { useParams } from "react-router-dom";
import Countries from "../Assets/Data/data.json";

function Search() {
  const data = Countries;
  const { id } = useParams();

  const Results = data.filter((dt) => {
    return dt.name.toLowerCase().includes(id);
  });

  console.log(Results);
  console.log("Naima");

  return (
    <div>
      <div>
        {Results.map((fx) => {
          return <div>{fx.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Search;
