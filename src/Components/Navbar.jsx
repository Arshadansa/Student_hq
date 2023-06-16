import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav((prevToggleNav) => !prevToggleNav);
  };

  return (
    <>
      <div className="pt-20 gap-10 mr-10 ml-10 box-border lg:flex-nowrap flex-nowrap sm:pr-14  sm:pl-1 sm:pt-20 justify-center flex items-center md:pt-24 md:pl-10  md:pr-14 md:justify-between text-slate-50 h-16">
        <div className="flex  flex-nowrap items-center pb-8">
          <NavLink to="/" className="cursor-pointer">
            <img
              src="https://studenthq.in/images/studyHQ-lgo-png.png"
              className="flex-auto h-24"
              alt="studenthq logo"
            />
          </NavLink>
        </div>
        <button
          onClick={handleToggleNav}
          type="button"
          className="bg-primary text-black justify-end inline-flex items-center p-2 ml-3  rounded-lg md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="items-center flex-wrap hidden font-semibold text-lg lg:block md:w-fit mr-8 ml-48 w-full">
          <ul className="flex items-center space-x-6 md:flex-nowrap md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-50 md:dark:bg-gray-50 text-black dark:border-gray-700">
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
            <li className="relative">
              <button
                id="dropdownHoverButton"
                className={classNames(
                  "hover:text-primary font-semibold text-lg focus:outline-none duration-300 focus:ring-blue-300 rounded-lg px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  toggleNav ? "text-primary" : "text-black"
                )}
                type="button"
                onClick={handleToggleNav}
              >
                Our Services
                <svg
                  className={classNames(
                    "w-4 h-4 ml-1 transition-transform duration-300",
                    toggleNav ? "rotate-180" : "rotate-0"
                  )}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {toggleNav && (
                <div
                  id="dropdownHover"
                  className="absolute z-10 bg-fourth divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 duration-300"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <NavLink
                        to="/AssignmentWriting"
                        className="block px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Assignment Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/DeceratationWriting"
                        className="block px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Declaration Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/SynopsisWriting"
                        className="block px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Synopsis Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/PhdthesisWriting"
                        className="block px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Phd. Thesis Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Mbaproject"
                        className="block px-5 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        MBA Project Making
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <NavLink className="hover:text-primary" to="/Courses">
              Our Courses
            </NavLink>
          </ul>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <NavLink
            to="/ApplyOnline"
            className="relative bg-white inline-flex items-center justify-center overflow-hidden text-xl py-3 px-8 font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
          >
            <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
            <span className="relative flex-nowrap group-hover:text-white">
              Free Consultation
            </span>
          </NavLink>
        </div>
      </div>

      {toggleNav && (
        <div className="bg-fourth md:hidden text-start mt-3 drop-shadow-lg rounded-sm p-7">
          <ul className="flex flex-col gap-3 mt-4 text-2xl text-gray">
            <li className="hover:text-  ">
              <NavLink
                to="/AssignmentWriting"
                className="hover:text-primary hover:bg-stone-400"
              >
                Assignment Writing
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="/DeclarationWriting"
                className="hover:text-primary"
              >
                Declaration Writing
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink to="/SynopsisWriting" className="hover:text-primary">
                Synopsis Writing
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="/PhdThesisWriting"
                className="hover:text-primary"
              >
                Phd. Thesis Writing
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="/MbaProjectMaking"
                className="hover:text-primary"
              >
                MBA Project Making
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
