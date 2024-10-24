import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Rech.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Accueil
          </NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a
            href="/#Formation"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Formation
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a
            href="/#Cible"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Cible
          </a>
        </li>
        <li className="p-4">
          <a
            href="/#Intervenant"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
           Intervenant 
          </a>
        </li>
      </ul>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Rech.</h1>
        <li className="p-4 ">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Accueil
          </NavLink>
        </li>
        <li className="p-4 ">
          <a
            href="/#Formation"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Formation
          </a>
        </li>
        <li className="p-4 ">
          <a
            href="/#Cible"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
            Cible
          </a>
        </li>
        <li className="p-4">
          <a
            href="/#Intervenant"
            className={(nav) => (nav.isActive ? "nav-active" : "nav-link")}
          >
           Intervenant 
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
