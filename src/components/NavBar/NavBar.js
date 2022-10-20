import React from "react";
import logo from "../Images/valo2.png";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center bg-red-700 p-2 ">
      <div className="flex items-center h-16 w-16">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
      </div>
      <div
        id="menu"
        className="w-full lg:text-right text-left block flex-grow lg:flex lg:items-center lg:w-auto mr-0 "
      >
        <div className="text-sm m-auto mt-0 pb-4">
          <Link
            to="/"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5 "
          >
            HOME
          </Link>
          <Link
            to="/contact"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5"
          >
            CONTACTO
          </Link>
          <Link
            to="/category/figuras"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5"
          >
            FIGURAS
          </Link>
          <Link
            to="/category/ropa"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5"
          >
            ROPA
          </Link>
          <Link
            to="/category/posters"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5"
          >
            POSTERS
          </Link>
          <Link
            to="/category/accesorios"
            href="#responsive-header"
            className="font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-black mr-5"
          >
            ACCESORIOS
          </Link>
          <a
            href="#responsive-header"
            className=" text-xl block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-black"
          >
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
