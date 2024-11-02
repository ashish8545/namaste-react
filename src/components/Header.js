import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg m-2 mb-2">
      <div className="w-32">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8">
          <li className="px-4">{loggedInUser}</li>
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
