import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {

    const [activeLink, setActiveLink] = useState("");

    const handleNavClick = (link) => {
      setActiveLink(link);
    };

  return (
    <div
      className={`w-11/12 mx-auto ${
        activeLink === "/" ? "bg-blue-500" : "bg-transparent"
      }`}
    >
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>

        <div className="space-x-6">
          <NavLink
            to={"/"}
            onClick={() => handleNavClick("/")}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : "text-gray-800"
                }

                `
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/statistics"}
            onClick={() => handleNavClick("statistics")}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : "text-gray-800"
              }`
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to={"/dashboard"}
            onClick={() => handleNavClick("about")}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl ${
                isActive ? "bg-black text-white" : "text-gray-800"
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <BsCart3 className="size-6 " />
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
