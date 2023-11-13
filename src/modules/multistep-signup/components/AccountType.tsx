const AccountType = () => {
  return (
    <div className="current" data-kt-stepper-element="content">
      <div className="w-100">
        <div className="pb-10 pb-lg-15">
          <h2 className="fw-bold d-flex align-items-center text-gray-900">
            Choose Account Type
            <span
              className="ms-1"
              data-bs-toggle="tooltip"
              title="Billing is issued based on your selected account typ"
            >
              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
              </i>
            </span>
          </h2>

          <div className="text-muted fw-semibold fs-6">
            If you need more info, please check out
            <a href="#" className="link-primary fw-bold">
              Help Page
            </a>
            .
          </div>
        </div>

        <div className="fv-row">
          <div className="row">
            <div className="col-lg-6">
              <input
                type="radio"
                className="btn-check"
                name="account_type"
                value="personal"
                id="kt_create_account_form_account_type_personal"
              />
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10">
                <i className="ki-duotone ki-badge fs-3x me-5">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                </i>

                <span className="d-block fw-semibold text-start">
                  <span className="text-gray-900 fw-bold d-block fs-4 mb-2">
                    Personal Account
                  </span>
                  <span className="text-muted fw-semibold fs-6">
                    If you need more info, please check it out
                  </span>
                </span>
              </label>
            </div>

            <div className="col-lg-6">
              <input
                type="radio"
                className="btn-check"
                name="account_type"
                value="corporate"
                id="kt_create_account_form_account_type_corporate"
              />
              <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center">
                <i className="ki-duotone ki-briefcase fs-3x me-5">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>

                <span className="d-block fw-semibold text-start">
                  <span className="text-gray-900 fw-bold d-block fs-4 mb-2">
                    Corporate Account
                  </span>
                  <span className="text-muted fw-semibold fs-6">
                    Create corporate account to mane users
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
