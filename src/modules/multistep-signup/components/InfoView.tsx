import Stepper from "../../../components/Stepper";
import AccountDetails from "./AccountDetails";
import AccountType from "./AccountType";

const steps = [<AccountType />, <AccountDetails />];

const InfoView = () => {
  return (
    <div className="d-flex flex-column flex-lg-row-fluid py-10">
      <div className="d-flex flex-center flex-column flex-column-fluid">
        <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
          <Stepper steps={steps} />
          <form className="my-auto pb-5" id="kt_create_account_form">
            <div className="" data-kt-stepper-element="content">
              <div className="w-100">
                <div className="pb-10 pb-lg-15">
                  <h2 className="fw-bold text-gray-900">Account Info</h2>

                  <div className="text-muted fw-semibold fs-6">
                    If you need more info, please check out
                    <a href="#" className="link-primary fw-bold">
                      Help Page
                    </a>
                    .
                  </div>
                </div>

                <div className="mb-10 fv-row">
                  <label className="d-flex align-items-center form-label mb-3">
                    Specify Team Size
                    <span
                      className="ms-1"
                      data-bs-toggle="tooltip"
                      title="Provide your team size to help us setup your billing"
                    >
                      <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                    </span>
                  </label>

                  <div className="row mb-2" data-kt-buttons="true">
                    <div className="col">
                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                        <input
                          type="radio"
                          className="btn-check"
                          name="account_team_size"
                          value="1-1"
                        />
                        <span className="fw-bold fs-3">1-1</span>
                      </label>
                    </div>

                    <div className="col">
                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 active">
                        <input
                          type="radio"
                          className="btn-check"
                          name="account_team_size"
                          value="2-10"
                        />
                        <span className="fw-bold fs-3">2-10</span>
                      </label>
                    </div>

                    <div className="col">
                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                        <input
                          type="radio"
                          className="btn-check"
                          name="account_team_size"
                          value="10-50"
                        />
                        <span className="fw-bold fs-3">10-50</span>
                      </label>
                    </div>

                    <div className="col">
                      <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                        <input
                          type="radio"
                          className="btn-check"
                          name="account_team_size"
                          value="50+"
                        />
                        <span className="fw-bold fs-3">50+</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-text">
                    Customers will see this shortened version of your statement
                    descriptor
                  </div>
                </div>

                <div className="mb-10 fv-row">
                  <label className="form-label mb-3">Team Account Name</label>

                  <input
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    name="account_name"
                    placeholder=""
                    value=""
                  />
                </div>

                <div className="mb-0 fv-row">
                  <label className="d-flex align-items-center form-label mb-5">
                    Select Account Plan
                    <span
                      className="ms-1"
                      data-bs-toggle="tooltip"
                      title="Monthly billing will be based on your account plan"
                    >
                      <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                    </span>
                  </label>

                  <div className="mb-0">
                    <label className="d-flex flex-stack mb-5 cursor-pointer">
                      <span className="d-flex align-items-center me-2">
                        <span className="symbol symbol-50px me-6">
                          <span className="symbol-label">
                            <i className="ki-duotone ki-bank fs-1 text-gray-600">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </span>
                        </span>

                        <span className="d-flex flex-column">
                          <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                            Company Account
                          </span>
                          <span className="fs-6 fw-semibold text-muted">
                            Use images to enhance your post flow
                          </span>
                        </span>
                      </span>

                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="account_plan"
                          value="1"
                        />
                      </span>
                    </label>

                    <label className="d-flex flex-stack mb-5 cursor-pointer">
                      <span className="d-flex align-items-center me-2">
                        <span className="symbol symbol-50px me-6">
                          <span className="symbol-label">
                            <i className="ki-duotone ki-chart fs-1 text-gray-600">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </span>
                        </span>

                        <span className="d-flex flex-column">
                          <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                            Developer Account
                          </span>
                          <span className="fs-6 fw-semibold text-muted">
                            Use images to your post time
                          </span>
                        </span>
                      </span>

                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="account_plan"
                          value="2"
                        />
                      </span>
                    </label>

                    <label className="d-flex flex-stack mb-0 cursor-pointer">
                      <span className="d-flex align-items-center me-2">
                        <span className="symbol symbol-50px me-6">
                          <span className="symbol-label">
                            <i className="ki-duotone ki-chart-pie-4 fs-1 text-gray-600">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </span>
                        </span>

                        <span className="d-flex flex-column">
                          <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                            Testing Account
                          </span>
                          <span className="fs-6 fw-semibold text-muted">
                            Use images to enhance time travel rivers
                          </span>
                        </span>
                      </span>

                      <span className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="account_plan"
                          value="3"
                        />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="" data-kt-stepper-element="content">
              <div className="w-100">
                <div className="pb-10 pb-lg-12">
                  <h2 className="fw-bold text-gray-900">Business Details</h2>

                  <div className="text-muted fw-semibold fs-6">
                    If you need more info, please check out
                    <a href="#" className="link-primary fw-bold">
                      Help Page
                    </a>
                    .
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">Business Name</label>

                  <input
                    name="business_name"
                    className="form-control form-control-lg form-control-solid"
                    value="Keenthemes Inc."
                  />
                </div>

                <div className="fv-row mb-10">
                  <label className="d-flex align-items-center form-label">
                    <span className="required">Shortened Descriptor</span>
                    <span
                      className="lh-1 ms-1"
                      data-bs-toggle="popover"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-duotone ki-bank fs-3 me-3"&gt;&lt;span className="path1"&gt;&lt;/span&gt;&lt;span className="path2"&gt;&lt;/span&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
                    >
                      <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                    </span>
                  </label>

                  <input
                    name="business_descriptor"
                    className="form-control form-control-lg form-control-solid"
                    value="KEENTHEMES"
                  />

                  <div className="form-text">
                    Customers will see this shortened version of your statement
                    descriptor
                  </div>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label required">
                    Corporation Type
                  </label>

                  <select
                    name="business_type"
                    className="form-select form-select-lg form-select-solid"
                    data-control="select2"
                    data-placeholder="Select..."
                    data-allow-clear="true"
                    data-hide-search="true"
                  >
                    <option></option>
                    <option value="1">S Corporation</option>
                    <option value="1">C Corporation</option>
                    <option value="2">Sole Proprietorship</option>
                    <option value="3">Non-profit</option>
                    <option value="4">Limited Liability</option>
                    <option value="5">General Partnership</option>
                  </select>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label">Business Description</label>

                  <textarea
                    name="business_description"
                    className="form-control form-control-lg form-control-solid"
                    rows={3}
                  ></textarea>
                </div>

                <div className="fv-row mb-0">
                  <label className="fs-6 fw-semibold form-label required">
                    Contact Email
                  </label>

                  <input
                    name="business_email"
                    className="form-control form-control-lg form-control-solid"
                    value="corp@support.com"
                  />
                </div>
              </div>
            </div>

            <div className="" data-kt-stepper-element="content">
              <div className="w-100">
                <div className="pb-10 pb-lg-15">
                  <h2 className="fw-bold text-gray-900">Billing Details</h2>

                  <div className="text-muted fw-semibold fs-6">
                    If you need more info, please check out
                    <a href="#" className="text-primary fw-bold">
                      Help Page
                    </a>
                    .
                  </div>
                </div>

                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                    <span className="required">Name On Card</span>
                    <span
                      className="ms-1"
                      data-bs-toggle="tooltip"
                      title="Specify a card holder's name"
                    >
                      <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </i>
                    </span>
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-solid"
                    placeholder=""
                    name="card_name"
                    value="Max Doe"
                  />
                </div>

                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="required fs-6 fw-semibold form-label mb-2">
                    Card Number
                  </label>

                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      placeholder="Enter card number"
                      name="card_number"
                      value="4111 1111 1111 1111"
                    />

                    <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                      <img
                        src="assets/media/svg/card-logos/visa.svg"
                        alt=""
                        className="h-25px"
                      />
                      <img
                        src="assets/media/svg/card-logos/mastercard.svg"
                        alt=""
                        className="h-25px"
                      />
                      <img
                        src="assets/media/svg/card-logos/american-express.svg"
                        alt=""
                        className="h-25px"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-10">
                  <div className="col-md-8 fv-row">
                    <label className="required fs-6 fw-semibold form-label mb-2">
                      Expiration Date
                    </label>

                    <div className="row fv-row">
                      <div className="col-6">
                        <select
                          name="card_expiry_month"
                          className="form-select form-select-solid"
                          data-control="select2"
                          data-hide-search="true"
                          data-placeholder="Month"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>

                      <div className="col-6">
                        <select
                          name="card_expiry_year"
                          className="form-select form-select-solid"
                          data-control="select2"
                          data-hide-search="true"
                          data-placeholder="Year"
                        >
                          <option></option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                          <option value="2031">2031</option>
                          <option value="2032">2032</option>
                          <option value="2033">2033</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 fv-row">
                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                      <span className="required">CVV</span>
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Enter a card CVV code"
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                      </span>
                    </label>

                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control form-control-solid"
                        minLength={3}
                        maxLength={4}
                        placeholder="CVV"
                        name="card_cvv"
                      />

                      <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                        <i className="ki-duotone ki-credit-cart fs-2hx">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-stack">
                  <div className="me-5">
                    <label className="fs-6 fw-semibold form-label">
                      Save Card for further billing?
                    </label>
                    <div className="fs-7 fw-semibold text-muted">
                      If you need more info, please check budget planning
                    </div>
                  </div>

                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      checked
                    />
                    <span className="form-check-label fw-semibold text-muted">
                      Save Card
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="" data-kt-stepper-element="content">
              <div className="w-100">
                <div className="pb-8 pb-lg-10">
                  <h2 className="fw-bold text-gray-900">Your Are Done!</h2>

                  <div className="text-muted fw-semibold fs-6">
                    If you need more info, please
                    <a
                      href="authentication/layouts/corporate/sign-in.html"
                      className="link-primary fw-bold"
                    >
                      Sign In
                    </a>
                    .
                  </div>
                </div>

                <div className="mb-0">
                  <div className="fs-6 text-gray-600 mb-5">
                    Writing headlines for blog posts is as much an art as it is
                    a science and probably warrants its own post, but for all
                    advise is with what works for your great & amazing audience.
                  </div>

                  <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                    <i className="ki-duotone ki-information fs-2tx text-warning me-4">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>

                    <div className="d-flex flex-stack flex-grow-1">
                      <div className="fw-semibold">
                        <h4 className="text-gray-900 fw-bold">
                          We need your attention!
                        </h4>
                        <div className="fs-6 text-gray-700">
                          To start using great tools, please,
                          <a
                            href="utilities/wizards/vertical.html"
                            className="fw-bold"
                          >
                            Create Team Platform
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-stack pt-15">
              <div className="mr-2">
                <button
                  type="button"
                  className="btn btn-lg btn-light-primary me-3"
                  data-kt-stepper-action="previous"
                >
                  <i className="ki-duotone ki-arrow-left fs-4 me-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  Previous
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="submit"
                >
                  <span className="indicator-label">
                    Submit
                    <i className="ki-duotone ki-arrow-right fs-4 ms-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                >
                  Continue
                  <i className="ki-duotone ki-arrow-right fs-4 ms-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
