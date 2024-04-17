import { createContext, useState } from "react";

const ActivePageContext = createContext();

const steps = [
  {
    label: "STEP 1",
    description: `YOUR INFO`,
    navigate: "Personalinfo",
  },
  {
    label: "STEP 2",
    description: "SELECT PLAN",
    navigate: "Yourplans",
  },
  {
    label: "STEP 3",
    description: `ADD-ONS`,
    navigate: "AddOns",
  },
  {
    label: "STEP 4",
    description: `SUMMARY`,
    navigate: "Summary",
  },
];

export function ActivePageProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleActive = (value) => {
    setActiveStep(value);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      setActiveStep(1);
    }
    if (activeStep === 1) {
      setActiveStep(2);
    }
    if (activeStep === 2) {
      setActiveStep(3);
    }
    if (activeStep === 3) {
      setActiveStep(4);
    }
    if (activeStep === 4) {
      setActiveStep(0);
    }
  };
  const handleReset = () => {
    setActiveStep(5);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(0);
    }
    if (activeStep === 1) {
      setActiveStep(0);
    }
    if (activeStep === 2) {
      setActiveStep(1);
    }
    if (activeStep === 3) {
      setActiveStep(2);
    }
    if (activeStep === 4) {
      setActiveStep(3);
    }
  };
  return (
    <ActivePageContext.Provider
      value={{
        activeStep: activeStep,
        handleActive,
        handleNext,
        handleBack,
        handleReset,
        steps,
      }}
    >
      {children}
    </ActivePageContext.Provider>
  );
}
export default ActivePageContext;
