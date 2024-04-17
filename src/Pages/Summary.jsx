import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ActivePageContext from "../Context/ActivePage";

function Summary() {
  const navigate = useNavigate();
  const { handleBack } = useContext(ActivePageContext);
  const handleBacks = () => {
    handleBack();
    navigate("/AddOns");
  };
  const handleNexts = () => {
    navigate("/ThankYou");
  };

  return (
    <div>
      <div className="flex flex-col p-5">
        <div className="flex-col flex gap-y-5 ">
          <div>
            <h1 className="font-bold mb-1 md:text-4xl text-3xl text-blue-950">
              Finishing up
            </h1>
            <p className="md:text-2xl text-xl text-gray-500">
              Double check everything looks ok before Confirming
            </p>
          </div>
          <div className="flex flex-col justify-between gap-y-4 mt-5 mb-5">
            <div className="flex p-5 flex-col gap-x-10 bg-gray-200 gap-y-3 rounded-xl">
              <div className="flex mb-3  flex-row items-center justify-between">
                <div>
                  <h1 className="md:text-2xl text-xl text-blue-950 font-bold ">
                    Arcade (Monthly)
                  </h1>
                  <p className="font-semibold text-blue-700 text-xl">change</p>
                </div>
                <div className="">
                  <h2 className="text-black text-lg font-bold">+$9/mo</h2>
                </div>
              </div>
              <div className="border-b-2 border-gray-300"></div>
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="md:text-2xl text-xl text-gray-400 font-bold">
                    Online Service
                  </h1>
                  <h2 className="text-gray-400  text-lg font-semibold">
                    +$1/mo
                  </h2>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h1 className="md:text-2xl text-xl text-gray-400 font-bold">
                    Online Service
                  </h1>
                  <h2 className="text-gray-400 text-lg font-semibold">
                    +$2/mo
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center md:w-[530px] gap-x-10 md:gap-x-0 justify-between">
                <h1 className="md:text-2xl text-xl text-gray-400 font-bold">
                  Total (per Month)
                </h1>
                <h2 className="text-blue-700 font-bold text-2xl md:text-3xl">
                  +$12/mo
                </h2>
              </div>
            </div>
          </div>
          <div className="flex mt-5 flex-row items-center justify-between">
            <div onClick={handleBacks}>
              <button className="text-2xl text-gray-400 font-semibold">
                Go Back
              </button>
            </div>
            <button
              onClick={handleNexts}
              className="py-2 text-center  px-7 bg-blue-700 text-white font-semibold text-lg rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
