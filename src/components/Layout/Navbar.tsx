import { Navbar, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
    <Navbar
      bg="white"
      className="border-bottom"
      expand="lg"
      style={{ height: "84px" }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <Image
            src="/logo.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="d-flex flex-stack gap-4">
          <div
            className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div
            className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <FontAwesomeIcon icon={faBell} />
            <div className="badge badge-circle badge-danger position-absolute translate-middle bottom-0 ms-10 mt-10 h-15px w-15px fs-9 text-white">
              5
            </div>
          </div>
          <div
            className="cursor-pointer symbol symbol-30px symbol-md-35px"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <img
              className="symbol symbol-circle symbol-30px symbol-md-35px"
              src="/300-1.jpg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
