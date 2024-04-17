import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ActivePageContext from "../Context/ActivePage";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const { handleNext } = useContext(ActivePageContext);
  const navigate = useNavigate();
  const handleNexts = () => {
    navigate("/Yourplans");
    handleNext();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="flex flex-col p-5">
        <div className="flex-col flex gap-y-5 ">
          <div>
            <h1 className="font-bold text-4xl text-blue-950">Personal Info</h1>
            <p className="text-lg text-gray-500">
              Please provide your, name, email Adress and phonenumber
            </p>
          </div>
          <div className="flex flex-col gap-y-2 mt-5 mb-5">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="flex flex-row items-center justify-between">
                <h2 className="font-semibold">Name</h2>
                {errors.firstName && (
                  <p className="text-red-700 font-semibold">
                    firstname is required.
                  </p>
                )}
              </div>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="rounded-lg mb-5 py-3 w-full"
              />
              <div className="flex flex-row items-center justify-between">
                <h2 className="font-semibold">Email address</h2>
                {errors.Email && (
                  <p className="text-red-700 font-semibold">
                    Email is required.
                  </p>
                )}
              </div>
              <input
                type="text"
                {...register("Email", { required: true })}
                className="rounded-lg mb-5 py-3 w-full"
              />
              <div className="flex flex-row items-center justify-between">
                <h2 className="font-semibold">Phone Number</h2>
                {errors.phoneNumber && (
                  <p className="text-red-700 font-semibold">
                    Phonenumber is required.
                  </p>
                )}
              </div>
              <input
                type="number"
                className="rounded-lg mb-5 py-3 w-full"
                placeholder="eg +255"
                {...register("phoneNumber", { required: true })}
              />
              <input type="submit" className="py-2 px-5 ring-1 ring-gray-700" />
            </form>
          </div>
          <div className="flex mt-5 flex-row items-center justify-between">
            <div></div>
            <button
              type="submit"
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

export default PersonalInfo;
