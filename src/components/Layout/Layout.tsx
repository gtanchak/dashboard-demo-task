import AffiliateProgramSVG from "../../assets/svg/AffiliateProgram";
import BillingSVG from "../../assets/svg/BillingSVG";
import FaqSVG from "../../assets/svg/FaqSVG";
import HomeSVG from "../../assets/svg/HomeSVG";
import ScrollSVG from "../../assets/svg/ScrollSVG";
import SettingsSVG from "../../assets/svg/SettingsSVG";
import SubmitViolationsSVG from "../../assets/svg/SubmitViolationsSVG";
import SupportSVG from "../../assets/svg/SupportSVG";
import "./layout.css";
import NavbarComponent from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";

const sidebarOptions = [
  {
    title: "Home",
    icon: <HomeSVG />,
    url: "/dashboard",
  },
  {
    title: "Submit Violations",
    icon: <SubmitViolationsSVG />,
    url: "/submit-violations",
  },
  {
    title: "Whitelist",
    icon: <ScrollSVG />,
    url: "/whitelist",
  },
  {
    title: "Billing",
    icon: <BillingSVG />,
    url: "/billing",
  },
  {
    title: "Affiliate Program",
    icon: <AffiliateProgramSVG />,
    url: "/affiliate-program",
  },
  {
    title: "Settings",
    icon: <SettingsSVG />,
    url: "/settings",
  },
  {
    title: "FAQ",
    icon: <FaqSVG />,
    url: "/faq",
  },
  {
    title: "Support",
    icon: <SupportSVG />,
    url: "/support",
  },
];

const Layout = () => {
  return (
    <div className="page">
      {/* <AsideDefault /> */}
      <NavbarComponent />
      <div className="d-flex main-container" id="kt_wrapper">
        <div className="sidebar-container border-end">
          {sidebarOptions.map((option) => {
            return (
              <NavLink
                to={option.url}
                className={({ isActive }) =>
                  `menu-item d-flex gap-2 ${isActive && "active"}`
                }
              >
                {option.icon}
                <p className="m-0">{option.title}</p>
              </NavLink>
            );
          })}
        </div>

        <div
          className="post d-flex flex-column-fluid layout-content"
          id="kt_post"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
