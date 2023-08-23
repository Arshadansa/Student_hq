import React from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <>
      <section className="m-4 sm:py-[70px] select-none">
        <div className="container items-center w-full mx-auto xl:px-5">
          <div className="flex flex-wrap flex-row sm:pl-20 w-auto md:pl-3 items-start sm:-mx-3">
            <div className="w-fit md:w-1/2 pt-12 lg:pt-36 md:pl-8">
              <div className="w-fit lg:mx-24 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Simplify College Admissions</span>
                  <span className="block text-indigo-600 xl:inline" data-primary="indigo-600">
                    Your Path to Success!
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Discover a seamless way to navigate the college admissions process and achieve your dreams.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/ApplyOnline"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                    data-primary="indigo-600"
                    data-rounded="rounded-md"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                    data-rounded="rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-fit sm:h-1/2 md:w-1/2 h-fit ">
              <img
                src="https://themeim.com/demo/eduplan/assets/img/header/header-img.png"
                className="lg:mx-16 w-[550px] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
