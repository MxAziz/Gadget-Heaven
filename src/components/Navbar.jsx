import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navbarBg = location.pathname === "/" ? "bg-purple-600" : "bg-white";
  const textColor = location.pathname === "/" ? "text-white" : "text-black";

  return (
    <div className={`w-11/12 mx-auto mt-4 rounded-t-2xl  ${navbarBg}`}>
      <div className={`navbar p-4 ${textColor}`}>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>

        <div className="space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
              isActive ? "bg-black text-white" : ""
              }
              `
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <BsCart3 className="size-6" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaRegHeart className="size-6" />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
