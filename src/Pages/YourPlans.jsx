import React, { useContext, useState } from "react";
import ActivePageContext from "../Context/ActivePage";
import one from "../Assets/images/icon-arcade.svg";
import two from "../Assets/images/icon-advanced.svg";
import three from "../Assets/images/icon-pro.svg";
import Switch from "react-switch";

import { NavLink, useNavigate } from "react-router-dom";

function YourPlans() {
  const { handleNext } = useContext(ActivePageContext);
  const { handleBack } = useContext(ActivePageContext);
  const [isActive, setActive] = useState(false);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleBacks = () => {
    handleBack();
    navigate("/Personalinfo");
  };
  //
  const handleNexts = () => {
    navigate("/AddOns");
    handleNext();
  };

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  const handleActive = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
  };
  const handleActive1 = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
  };
  const handleActive2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col p-5">
        <div className="flex-col flex gap-y-5 ">
          <div>
            <h1 className="font-bold mb-1 md:text-4xl text-3xl text-blue-950">
              Select Your plan
            </h1>
            <p className="md:text-2xl text-xl text-gray-500">
              You have the option of monthly or yearly biling
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-x-6 gap-y-5 md:gap-x-10 mt-5 mb-5">
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
                className="flex p-5 w-full flex-col items-start justify-between md:w-[150px] ring-1 ring-blue-950 gap-y-5 hover:ring-2 hover:ring-blue-950  rounded-xl"
              >
                <img src={one} alt="one" />
                <div onClick={handleActive} className="">
                  <h1
                    onClick={handleActive}
                    className="md:text-2xl text-xl text-blue-950 font-bold"
                  >
                    Arcade
                  </h1>
                  <p
                    onClick={handleActive}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    $9/mon
                  </p>
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
                className="flex p-5 flex-col w-full items-start justify-between md:w-[150px] gap-y-5 ring-1 ring-blue-950 hover:ring-2 hover:ring-blue-950 rounded-xl"
              >
                <img src={two} alt="one" />
                <div className="">
                  <h1
                    onClick={handleActive1}
                    className="md:text-2xl text-xl text-blue-950 font-bold"
                  >
                    Advance
                  </h1>
                  <p
                    onClick={handleActive1}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    $12/mon
                  </p>
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
                className="flex p-5 flex-col w-full items-start justify-between md:w-[150px] gap-y-5 ring-1 ring-blue-950 hover:ring-2 hover:ring-blue-950 rounded-xl"
              >
                <img src={three} alt="one" />
                <div className="">
                  <h1
                    onClick={handleActive2}
                    className="md:text-2xl text-xl text-blue-950 font-bold"
                  >
                    Pro
                  </h1>
                  <p
                    onClick={handleActive2}
                    className="font-semibold text-gray-400 text-lg"
                  >
                    $15/mon
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="bg-gray-200 py-3 rounded-xl flex flex-row justify-evenly">
            <h1 className="text-xl ">Monthly</h1>
            <Switch
              checked={checked}
              onChange={handleChange}
              onColor="#000000"
              onHandleColor="#ffffff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={30}
              width={48}
              className="react-switch rotate-180"
              id="material-switch"
            />
            <h1 className="text-xl ">Yearly</h1>
          </div>
          <div className="flex mt-5 flex-row items-center justify-between">
            <div onClick={handleBacks}>
              <button className="text-2xl text-gray-400 font-semibold">
                Go Back
              </button>
            </div>
            <button
              onClick={handleNexts}
              className="py-2 text-center  px-7 bg-slate-800 text-white font-semibold text-lg rounded-md"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourPlans;
