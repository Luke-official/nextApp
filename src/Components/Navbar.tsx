import { ReactComponent as NotifyIcon } from "../media/icons/notifications_white_24dp.svg";
import { ReactComponent as Logo } from "../media/icons/polymer_white_24dp.svg";
import { ReactComponent as DashboardLogo } from "../media/icons/dashboard_white_24dp.svg";
import { ReactComponent as BookLogo } from "../media/icons/book_white_24dp.svg";
import { ReactComponent as MovieLogo } from "../media/icons/movie_white_24dp.svg";
import { ReactComponent as GameLogo } from "../media/icons/sports_esports_white_24dp.svg";
import { ReactComponent as FriendsLogo } from "../media/icons/people_white_24dp.svg";
import { ReactComponent as ExploreLogo } from "../media/icons/travel_explore_white_24dp.svg";
import { ReactComponent as SettingsIcon } from "../media/icons/settings_white_24dp.svg";
import { ReactComponent as MenuIcon } from "../media/icons/menu_white_24dp.svg";
import { ReactComponent as CloseMenuIcon } from "../media/icons/close_white_24dp.svg";

import { RootState } from "../Redux/store";
import { SearchBar } from "./SearchBar";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { setNotification } from "../Redux/Action/Notification/notificationActions";

const Navbar: React.FC = () => {

  //Offcanvas controller
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Add notification
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const btnClickHandler = (type: "success" | "danger" | "warning") => {
    dispatch(setNotification({ message: `Notification ${counter}`, type }));
    setCounter((prevCounter) => prevCounter + 1);
  };

  //Show notification
  const { message, type } = useSelector(
    (state: RootState) => state.notification
  );

  return (
    <>
      <header className="p-2">
        <div className="container-fluid d-grid gap-3 align-items-center">
          <div className="d-flex align-items-center justify-content-start">
            <SearchBar />
            <div className="dropdown dropdown-notification d-flex justify-content-center align-items-center">
              <button
                className="btn dropdown-toggle bg-transparent"
                id="notificationsDropdown"
                data-bs-auto-close="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <NotifyIcon />
              </button>
              <ul
                className="dropdown-menu shadow dropdown-menu-lg-end p-4"
                aria-labelledby="notificationsDropdown"
              >
                {}
                <li className="">
                  {message}
                  <Notification message={message} type={type} />
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-user d-flex justify-content-center align-items-center">
              <button
                id="userDropdown"
                className="d-flex flex-column justify-content-center align-items-center dropdown-toggle p-3"
                data-bs-auto-close="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="User pic"
                  className="rounded-circle"
                  width="24"
                  height="24"
                />
              </button>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="userDropdown"
              >
                <li>
                  <a className="dropdown-item" href="##">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="##">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item btn-danger btn">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
            <button className="btn bg-transparent d-block d-sm-none" onClick={handleShow}>
              <MenuIcon/>
            </button>
          </div>
        </div>
      </header>


      <Offcanvas className='w-100' show={show} onHide={handleClose}>
        <Offcanvas.Header>
            <Logo />
            <button className="btn bg-transparent" onClick={handleClose}>
              <CloseMenuIcon/>
            </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column flex-shrink-0 h-100">
            <ul className="nav nav-pills nav-flush flex-column">
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Home"
                  className="nav-link py-3"
                  activeClassName="active"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home">
                  <DashboardLogo />
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Books"
                  className="nav-link py-3"
                  activeClassName="active"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Dashboard"
                >
                  <BookLogo />
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Movies"
                  className="nav-link py-3"
                  activeClassName="active"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <MovieLogo />
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Games"
                  className="nav-link py-3"
                  activeClassName="active"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <GameLogo />
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Friends"
                  className="nav-link py-3"
                  activeClassName="active"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <FriendsLogo />
                </NavLink>
              </li>
              <li className="nav-item" onClick={handleClose}>
                <NavLink
                  to="/Explore"
                  className="nav-link py-3"
                  activeClassName="active"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <ExploreLogo />
                </NavLink>
              </li>
            </ul>
            <div className="dropdown dropdown-user d-flex align-items-center">
              <button
                id="userDropdown"
                className="d-flex justify-content-center align-items-center dropdown-toggle p-3"
                data-bs-auto-close="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <SettingsIcon />
                Settings
                {/* <img
              src="https://github.com/mdo.png"
              alt="User pic"
              className="rounded-circle"
              width="24"
              height="24"
            /> */}
              </button>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="userDropdown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => btnClickHandler("success")}
                  >
                    Add success notification
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => btnClickHandler("warning")}
                  >
                    Add warning notification
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => btnClickHandler("danger")}
                  >
                    Add danger notification
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item">Sign out</button>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
