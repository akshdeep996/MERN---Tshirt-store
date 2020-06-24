import React,{Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import { createHashHistory } from 'history'
const history = createHashHistory()

const currentTab = (history, path) => {
  if (history === path) {
    return { color: "#FAC42F" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/")}
          className="nav-link"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {
        isAuthenticated() && isAuthenticated().user.role === 0 && (
          <>
          <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
          User Dashboard
        </Link>
      </li>
      </>
        )
      }
      {
        isAuthenticated() && isAuthenticated().user.role === 1 && (
          <>
          <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          Admin Dashboard
        </Link>
      </li>
      </>
        )
      }
      
      {isAuthenticated() ? (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )
      : (
        <>
        <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/signup")}
          className="nav-link"
          to="/signup"
        >
          Sign up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(window.location.pathname, "/signin")}
          className="nav-link"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
      </>
      )
      }
      
    </ul>
  </div>
);

export default withRouter(Menu);
