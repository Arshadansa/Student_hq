import React, { useState } from "react";

function Section() {

  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <section class={`p-3 sm:py-[70px] duration-700  transition-all ease-in-out  select-none  ${!toggleNav ? "mt-8" : "mt-0"}`}
      >
        <div class="container items-center w-full mx-auto xl:px-5">
          <div class="flex flex-wrap flex-row  sm:pl-20 w-auto md:pl-3 items-start sm:-mx-3">
            <div class="w-fit md:w-1/2   lg:pt-36  md:pl-8 ">
              <div class="w-fit  lg:mx-24  space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Beautiful Pages to</span>
                  <span
                    class="block text-indigo-600 xl:inline"
                    data-primary="indigo-600"
                  >
                    Tell Your Story!
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                    data-primary="indigo-600"
                    data-rounded="rounded-md"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                    data-rounded="rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div class="w-fit sm:h-1/2 md:w-1/2 h-0 invisible  sm:visible md:visible lg:visible">

              <img
                src="https://themeim.com/demo/eduplan/assets/img/header/header-img.png"
                className="lg:mx-16 w-[600px] sm:visible md:visible "
              />

            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Section;
