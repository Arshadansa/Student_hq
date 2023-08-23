import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/dropmenu.css"
import logo from "../image/logo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {


  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const handleMouseEnter = () => {
    setToggleNav(true);
  };

  const handleMouseLeave = () => {
    setToggleNav(false);
  }

  return (
    <>
      <div className="pt-20 gap-14 justify-between  select-none  box-border lg:flex-nowrap flex-nowrap pr-3  pl-3 sm:pt-20  flex items-center md:pt-24 md:pl-10  md:pr-14 md:justify-between text-slate-50 h-16">
        <div className="flex  justify-start flex-nowrap outline-none  items-center pb-8">
          <NavLink to="/" className="cursor-pointer outline-none ">
            <img
              src={logo}
              className="flex-auto h-[175px] outline-none mt-5 lg:w-[300px] lg:h-52"
              alt="studenthq logo"
            />
          </NavLink>
        </div>
        <button
          onClick={handleToggleNav}
          type="button"
          className="bg-primary justify-end inline-flex items-center p-2 mb-2 pl-4 pr-4   rounded-md md:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-[30px] text-white"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="items-center  select-none flex-wrap hidden lg:font-semibold lg:block md:w-fit mr-6 ml-44 w-full">
          <ul className="flex items-center space-x-6 xl:text-xs md:text-xs 2xl:text-lg md:flex-nowrap md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-50 md:dark:bg-gray-50 text-black dark:border-gray-700">

            <NavLink
              to="/StudyInIndia"
              className="hover:text-primary cursor-pointer"
            >
              Study in India
            </NavLink>

            <li className="hover:text-primary cursor-pointer">
              <NavLink
                to="/StudyInAbroad"
                className="hover:text-primary cursor-pointer"
              >
                Study in Abroad
              </NavLink>
            </li>

            <li className="hover:text-primary cursor-pointer">
              <NavLink
                to="/Blog"
                className="hover:text-primary cursor-pointer"
              >
                Blog
              </NavLink>
            </li>
            <li className="relative duration-700 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                id="dropdownHoverButton"
                className={`hover:text-primary font-semibold xl:text-xs md:text-xs 2xl:text-lg focus:outline-none duration-300 focus:ring-blue-300 rounded-lg px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${toggleNav ? "text-primary" : "text-darkgray"
                  }`}
                type="button"
                onClick={handleToggleNav}
              >
                Our Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${toggleNav ? "rotate-180" : "rotate-0"
                    }`}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu */}
              {toggleNav && (
                <div
                  id="dropdownHover"
                  className="absolute z-10 divide-y divide-gray-100 bg-white rounded-lg shadow w-60 dark:bg-gray-700 transition-all duration-700"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2 text-lg dropdown_menu  dropdown_menu--animated dropdown_menu-6">
                    <li className="hover:text-primary">
                      <NavLink
                        to="/AssignmentWriting"
                        className="px-[38px] py-1 hover:bg-white dark:hover:bg-gray-600 hover:text-primary"
                      >
                        Assignment Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/DeceratationWriting"
                        className="block px-[38px] py-1 hover:bg-white dark:hover:bg-gray-600 hover:text-primary"
                      >
                        Declaration Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/SynopsisWriting"
                        className="block px-[38px] py-1 hover:bg-white dark:hover:bg-gray-600 hover:text-primary"
                      >
                        Synopsis Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/PhdthesisWriting"
                        className="block px-[38px] py-1 hover:bg-white dark:hover:bg-gray-600 hover:text-primary"
                      >
                        Phd. Thesis Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/MbaProject"
                        className="block px-[35px] py-1 hover:bg-white dark:hover:bg-gray-600 hover:text-primary"
                      >
                        MBA Project Making
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <NavLink className="hover:text-primary xl:text-xs md:text-xs 2xl:text-lg" to="/Courses">
              Our Courses
            </NavLink>
          </ul>
        </div>


        <div className="hidden select-none w-full md:block md:w-auto">
          <NavLink
            to="/ApplyOnline"
            className="relative bg-white inline-flex items-center justify-center overflow-hidden text-xl py-3 px-8 font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
          >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
            <span className="relative flex-nowrap md:text-xs xl:text-xs 2xl:text-xl group-hover:text-white">
              Free Consultation
            </span>
          </NavLink>
        </div>
      </div>

      {toggleNav && (
        <div className={`md:hidden  dropdown_menu-6 border border-gray-200 shadow-lg rounded-lg p-2 m-3  text-start  drop-shadow-lg  mt-12   transition-all  duration-700 ease-in-out`}>
          <ul className="flex   flex-col gap-3 mt-2 text-2xl text-darkgray ">
            <li>
              <NavLink
                to="/blog"
                className="block px-[30px] cursor-pointer    font-semibold text-darkgray  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Our Blog
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/AssignmentWriting"
                className="hover:text-primary font-semibold text-darkgray  px-[30px] cursor-pointer "
              >
                Assignment Writing
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/DeceratationWriting"
                className="hover:text-primary text-darkgray  px-[30px] cursor-pointer font-semibold "
              >
                Declaration Writing
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/SynopsisWriting" className="hover:text-primary text-darkgray  px-[30px] cursor-pointer font-semibold ">
                Synopsis Writing
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/PhdThesisWriting"
                className="hover:text-primary text-darkgray  px-[30px] cursor-pointer font-semibold "
              >
                Phd. Thesis Writing
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/MbaProject"
                className="hover:text-primary text-darkgray  px-[30px] cursor-pointer font-semibold "
              >
                MBA Project Making
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/StudyInIndia"
                className="block px-[30px] cursor-pointer font-semibold text-darkgray  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Study in India
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/StudyInAbroad"
                className="block px-[30px] cursor-pointer    font-semibold text-darkgray hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Study in Abroad
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/ApplyOnline"
                className="block px-[30px] text-[20px]  font-medium cursor-pointer  bg-primary p-2 mb-2 ml-[28px] text-white rounded-md w-fit    hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Apply Online
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
