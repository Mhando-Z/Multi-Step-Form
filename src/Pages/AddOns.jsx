import React, { useContext, useState } from "react";
import ActivePageContext from "../Context/ActivePage";
import Checkbox from "@mui/material/Checkbox";
import { NavLink, useNavigate } from "react-router-dom";

function AddOns() {
  const { handleNext } = useContext(ActivePageContext);
  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const { handleBack } = useContext(ActivePageContext);
  const navigate = useNavigate();

  const handleBacks = () => {
    handleBack();
    navigate("/Yourplans");
  };

  //
  const handleNexts = () => {
    navigate("/Summary");
    handleNext();
  };

  const handleActive = () => {
    setActive(!isActive);
  };
  const handleActive1 = () => {
    setActive1(!isActive1);
  };
  const handleActive2 = () => {
    setActive2(!isActive2);
  };

  return (
    <div>
      <div className="flex flex-col p-5">
        <div className="flex-col flex gap-y-5 ">
          <div>
            <h1 className="font-bold mb-1 text-3xl md:text-4xl text-blue-950">
              Pick add-ons
            </h1>
            <p className="text-2xl mb-1 text-gray-500">
              Add-ons helps enhance your gaming experience
            </p>
          </div>
          <div className="flex flex-col justify-between gap-y-4 mt-2 mb-5">
            <NavLink
              className={({ isPending }) =>
                isActive
                  ? "ring-2 rounded-xl ring-blue-950"
                  : isPending
                    ? "ring-2 ring-blue-950"
                    : ""
              }
            >
              <div
                onClick={handleActive}
                className="flex p-5 flex-row  items-center gap-x-10 n ring-1 ring-blue-950 hover:ring-2 hover:ring-blue-950 rounded-xl"
              >
                <Checkbox checked={isActive} />
                <div onClick={handleActive}>
                  <h1
                    onClick={handleActive}
                    className="md:text-2xl text-xl text-blue-950 font-bold "
                  >
                    Online Service
                  </h1>
                  <p
                    onClick={handleActive}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    Access to multiplayer games
                  </p>
                </div>
                <div className="ml-auto">
                  <h2 className="text-blue-700">+$1/mo</h2>
                </div>
              </div>
            </NavLink>
            <NavLink
              className={({ isPending }) =>
                isActive1
                  ? "ring-2 rounded-xl ring-blue-950"
                  : isPending
                    ? ""
                    : ""
              }
            >
              <div
                onClick={handleActive1}
                className="flex p-5 flex-row items-center gap-x-10  ring-1 ring-blue-950 hover:ring-2 hover:ring-blue-950 rounded-xl"
              >
                <Checkbox checked={isActive1} />
                <div onClick={handleActive1} className="">
                  <h1
                    onClick={handleActive1}
                    className="md:text-2xl text-xl text-blue-950 font-bold"
                  >
                    Larger Storage
                  </h1>
                  <p
                    onClick={handleActive1}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    Extra 1TB of cloud storage
                  </p>
                </div>
                <div className="ml-auto">
                  <h2 className="text-blue-800 font-semibold">+$2/mo</h2>
                </div>
              </div>
            </NavLink>
            <NavLink
              className={({ isPending }) =>
                isActive2
                  ? "ring-2 rounded-xl ring-blue-950"
                  : isPending
                    ? ""
                    : ""
              }
            >
              <div
                onClick={handleActive2}
                className="flex p-5 flex-row items-center gap-x-10 ring-1 ring-blue-950 hover:ring-2 hover:ring-blue-950 rounded-xl"
              >
                <Checkbox checked={isActive2} />
                <div onClick={handleActive2} className="">
                  <h1
                    onClick={handleActive2}
                    className="md:text-2xl text-xl text-blue-950 font-bold"
                  >
                    Customizable profile
                  </h1>
                  <p
                    onClick={handleActive2}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    Custome theme on your profile
                  </p>
                </div>
                <div className="ml-auto">
                  <h2 className="text-blue-800 font-semibold">+$2/mo</h2>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="flex mt-3 flex-row items-center justify-between">
            <div onClick={handleBacks}>
              <button className="text-2xl text-gray-400 font-semibold">
                Go Back
              </button>
            </div>
            <button
              onClick={handleNexts}
              className="py-2 text-center px-7 bg-slate-800 text-white font-semibold text-lg rounded-md"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOns;
