import { useState } from "react";

const Stepper = ({ steps, initialStep = 0 }: any) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = () => {
    setCurrentStep((prevStep: any) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep: any) => Math.max(prevStep - 1, 0));
  };

  return (
    <>
      <div>{steps[currentStep]}</div>
      <div>
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="btn btn-lg btn-light-primary"
        >
          Previous
        </button>
        <button
          className="btn btn-lg btn-primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Stepper;
