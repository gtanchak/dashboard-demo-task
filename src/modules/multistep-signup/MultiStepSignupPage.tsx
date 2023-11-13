import { FC } from "react";
import InfoSidebar from "./components/InfoSidebar";
import InfoView from "./components/InfoView";

const MultiStepSignupPage: FC = () => {
  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div
        className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep"
        id="kt_create_account_stepper"
      >
        <InfoSidebar />
        <InfoView />
      </div>
    </div>
  );
};

export default MultiStepSignupPage;
