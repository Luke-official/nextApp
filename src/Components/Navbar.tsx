import { ReactComponent as NotifyIcon } from "../media/icons/notifications_white_24dp.svg";
import { RootState } from "../Redux/store";
import { SearchBar } from "./SearchBar"
import Notification from "./Notification";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {

  const { message, type } = useSelector((state: RootState) => state.notification);

  return (
    <header className="p-2">
      <div className="container-fluid d-grid gap-3 align-items-center">
        <div className="d-flex align-items-center justify-content-start">
         <SearchBar/>
         <div className="dropdown dropdown-user d-flex justify-content-center align-items-center">
            <button className="btn bg-transparent" id="notificationsDropdown" data-bs-auto-close="true"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <NotifyIcon/>
              
            </button>
            <ul className="dropdown-menu shadow" aria-labelledby="notificationsDropdown">
              {}
              <li className="">
                  {message}
                  <Notification message={message} type={type}/>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-user d-flex justify-content-center align-items-center">
            <button id="userDropdown" className="d-flex flex-column justify-content-center align-items-center dropdown-toggle p-3"
              data-bs-auto-close="true"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="User pic" className="rounded-circle" width="24" height="24"/>
            </button>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="userDropdown">
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
                <button className="dropdown-item btn-danger btn">Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
