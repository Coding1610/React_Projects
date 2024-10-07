import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-screen bg-slate-500 text-white justify-evenly p-4 text-xl outline-none">
        <div className="sm:flex justify-evenly hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "outline-none" : "outline-none text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            is
            to="book/order"
            className={({ isActive }) =>
              isActive
                ? "outline-none sm:block hidden"
                : "outline-none text-black sm:block hidden"
            }
          >
            {" "}
            Orders{" "}
          </NavLink>

          <NavLink
            is
            to="/booklists"
            className={({ isActive }) =>
              isActive
                ? "outline-none sm:block hidden"
                : "text-black outline-none sm:block hidden"
            }
          >
            Book Listing
          </NavLink>

          <NavLink
            is
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "outline-none sm:block hidden"
                : "text-black outline-none sm:block hidden"
            }
          >
            Register
          </NavLink>
        </div>

        <div className="sm:hidden flex justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-black"
            }
          >
            Home
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        <div
          className={`sm:hidden flex flex-col space-y-4 mt-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="book/order"
            className={({ isActive }) =>
              isActive ? "outline-none" : "text-black outline-none"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/booklists"
            className={({ isActive }) =>
              isActive ? "outline-none" : "text-black outline-none"
            }
          >
            Book Listing
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "outline-none" : "text-black outline-none"
            }
          >
            Register
          </NavLink>
        </div>
      </nav>
    </>
  );
}