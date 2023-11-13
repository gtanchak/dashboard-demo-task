const Stepper = ({ steps, setSteps, activeStep, setActiveStep }: any) => {
  const handleNext = () => {
    setActiveStep((prevStep: any) => Math.min(prevStep + 1, steps.length - 1));

    const updatedData = steps.map((item: any) => {
      if (item.id === activeStep + 1) {
        return { ...item, isCompleted: true };
      }
      return item;
    });

    setSteps(updatedData);
  };

  const handlePrev = () => {
    setActiveStep((prevStep: any) => Math.max(prevStep - 1, 0));
    const updatedData = steps.map((item: any) => {
      if (item.id === activeStep) {
        return { ...item, isCompleted: false };
      }
      return item;
    });

    setSteps(updatedData);
  };

  return (
    <>
      <div>{steps[activeStep].component}</div>
      <div className="d-flex flex-stack pt-15 ">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="btn btn-lg btn-light-primary"
        >
          Previous
        </button>
        <button
          className="btn btn-lg btn-primary"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Stepper;
