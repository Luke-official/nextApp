import { NavLink} from "react-router-dom";
import { ReactComponent as Logo } from "../media/icons/polymer_white_24dp.svg";
import { ReactComponent as DashboardLogo } from "../media/icons/dashboard_white_24dp.svg";
import { ReactComponent as BookLogo } from "../media/icons/book_white_24dp.svg";
import { ReactComponent as MovieLogo } from "../media/icons/movie_white_24dp.svg";
import { ReactComponent as GameLogo } from "../media/icons/sports_esports_white_24dp.svg";
import { ReactComponent as FriendsLogo } from "../media/icons/people_white_24dp.svg";
import { ReactComponent as ExploreLogo } from "../media/icons/travel_explore_white_24dp.svg";
import { ReactComponent as SettingsIcon } from "../media/icons/settings_white_24dp.svg";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { setNotification } from "../Redux/Action/Notification/notificationActions";

const Sidebar: React.FC = () => {

  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const btnClickHandler = (type: 'success' | 'danger' | 'warning') => {
    dispatch(setNotification({ message: `Notification ${counter}`, type }));
    setCounter(prevCounter => prevCounter + 1);
  }

  return (
    <aside className="sidebar">
      <div className="d-flex flex-column flex-shrink-0 h-100">
        <a
          href="/"
          className="d-flex p-3 justify-content-center mb-5"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <Logo />
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <NavLink
              to="/Home"
              className="nav-link py-3"
              activeClassName="active"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <DashboardLogo />
            </NavLink>
          </li>
          <li className="nav-item">
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
          <li className="nav-item">
            <NavLink
              to="/Movies"
              className="nav-link py-3 d-flex justify-content-center align-items-center"
              activeClassName="active"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              <MovieLogo />
            </NavLink>
          </li>
          <li className="nav-item">
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
          <li className="nav-item">
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
          <li className="nav-item">
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
        <div className="dropdown dropdown-user d-flex justify-content-center align-items-center">
          <button
            id="userDropdown"
            className="d-flex flex-column justify-content-center align-items-center dropdown-toggle p-3"
            data-bs-auto-close="true"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <SettingsIcon/>
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
            aria-labelledby="userDropdown">
            <li>
              <button className="dropdown-item" onClick={() => btnClickHandler('success')}>Add success notification</button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => btnClickHandler('warning')}>Add warning notification</button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => btnClickHandler('danger')}>Add danger notification</button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
