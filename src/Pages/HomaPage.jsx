import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import bgpcture from "../Assets/images/bg-sidebar-desktop.svg";
import smpcture from "../Assets/images/bg-sidebar-mobile.svg";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ActivePageContext from "../Context/ActivePage";

function HomaPage() {
  const { activeStep } = useContext(ActivePageContext);
  const { handleActive } = useContext(ActivePageContext);
  const { steps } = useContext(ActivePageContext);

  return (
    <div className="flex flex-col md:items-center bg-gray-300 justify-center md:min-h-screen">
      <img
        src={smpcture}
        alt="picha"
        className="relative md:hidden flex w-full"
      />
      <div className="flex md:flex-row flex-col  h-[600px] justify-center p-3 rounded-xl bg-gray-100">
        <div
          style={{
            backgroundImage: `url("${bgpcture}")`,
          }}
          className="flex-col hidden md:flex p-5 w-[300px] h-full bg-no-repeat"
        >
          <Stepper connector activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step
                sx={{
                  borderColor: "white",
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "white", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "common.white", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "black", // circle's number (ACTIVE)
                    fontWeight: "bold",
                  },
                }}
                completed={false}
                key={step.label}
              >
                <StepLabel
                  StepIconProps={{
                    sx: {
                      fontSize: "2.3rem",
                      borderColor: "white",
                      borderWidth: "1px",
                      borderRadius: "50px",
                      color: "blue",
                    },
                  }}
                  error={false}
                >
                  <div
                    onClick={() => handleActive(index)}
                    className="flex text-white flex-col"
                  >
                    <NavLink to={step.navigate}>
                      <h2 className="text-md opacity-50">{step.label}</h2>
                      <h1 className="text-lg font-bold">{step.description}</h1>
                    </NavLink>
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {/* Small devices preview */}
        <div className="flex-col absolute top-20 right-0 bottom-0 left-0 leading-6 ri md:hidden flex p-5 items-center bg-no-repeat">
          <Stepper connector activeStep={activeStep} orientation="horizontal">
            {steps.map((step, index) => (
              <Step
                sx={{
                  borderColor: "white",
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "white", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "common.white", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "black", // circle's number (ACTIVE)
                    fontWeight: "bold",
                  },
                }}
                completed={false}
                key={step.label}
              >
                <StepLabel
                  StepIconProps={{
                    sx: {
                      fontSize: "2.3rem",
                      borderColor: "white",
                      borderWidth: "1px",
                      borderRadius: "50px",
                      color: "blue",
                    },
                  }}
                  error={false}
                >
                  <div
                    onClick={() => handleActive(index)}
                    className="flex text-white flex-col"
                  >
                    <NavLink to={step.navigate}></NavLink>
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {/* large displays */}
        <div className="md:px-10 hidden md:flex w-[650px]">
          <Outlet />
        </div>
      </div>
      {/* Small devices */}
      <div className="absolute top-44 md:hidden right-0 left-0 bottom-0  items-center justify-center">
        <div className="bg-gray-100 rounded-xl mx-auto container items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomaPage;
