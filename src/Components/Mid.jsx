import React from "react";
import "../index.css";
// import footer from '../Components/footer';

function Mid() {
  const countries = [
    "Canada",
    "America",
    "Austraila",
    "Span",
    "Franch",
    "Swideen",
    "italy",
  ];
  return (
    <>
      {/*one step..section*/}
      <div className="flex flex-row m-3 justify-center flex-wrap bg-fourth ">
      <div className="max-w-sm py-[2rem] px-10 h-[28rem]  bg-white rounded-3xl shadow-2xl  w-[100rem] m-3 sm:h-[23rem]">
          <div className="px-4 ">
            <img
              className=" my-3  text-gray-500   h-10  sm:h-[4rem]"
              src="https://themeim.com/demo/eduplan/assets/img/icon/idea.png"
              alt=""
            />

            <a a href="#">
              <h5 className="mb-5 text-2xl font-semibold ">
                One Stop Study Solution
              </h5>
            </a>
            <p className="mb-3 font-normal text-black ">
              Get a full view so you know where to save. Track spending, deta
              keep tab subscription lorem ipsum text
            </p>
            <a
              href="#"
              className="no-underline inline-flex items-center text-blue-600 hover:underline  text-primary "
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="max-w-sm py-[2rem] px-10 h-[28rem]  bg-white rounded-3xl shadow-2xl  w-[100rem] m-3 sm:h-[23rem]">
          <div className="px-4 ">
            <img
              className=" my-3  text-gray-500   h-10  sm:h-[4rem]"
              src="https://themeim.com/demo/eduplan/assets/img/icon/coversation.png"
              alt=""
            />

            <a a href="#">
              <h5 className="mb-5 text-2xl font-semibold ">
                One Stop Study Solution
              </h5>
            </a>
            <p className="mb-3 font-normal text-black ">
              Get a full view so you know where to save. Track spending, deta
              keep tab subscription lorem ipsum text
            </p>
            <a
              href="#"
              className="no-underline inline-flex items-center text-blue-600 hover:underline  text-primary "
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="max-w-sm py-[2rem] px-10 h-[28rem]  bg-white rounded-3xl shadow-2xl  w-[100rem] m-3 sm:h-[23rem]">
          <div className="px-4 ">
            <img
              className=" my-3  text-gray-500   h-10  sm:h-[4rem]"
              src="https://themeim.com/demo/eduplan/assets/img/icon/emergency.png"
              alt=""
            />

            <a a href="#">
              <h5 className="mb-5 text-2xl font-semibold ">
                One Stop Study Solution
              </h5>
            </a>
            <p className="mb-3 font-normal text-black ">
              Get a full view so you know where to save. Track spending, deta
              keep tab subscription lorem ipsum text
            </p>
            <a
              href="#"
              className="no-underline inline-flex items-center text-blue-600 hover:underline  text-primary "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* feedback...section */}
      <section className="m-3  ">

        <div className="flex flex-col mt-20  flex-wrap  sm:flex-nowrap md:flex-nowrap sm:justify-center sm:align-middle sm:mt-8">

          <div className=" uppercase  text-lg mb-4  flex justify-center text-primary font-bold">
            <span>FeedBacks</span>
          </div>
          <div className="mb-3 flex flex-nowrap flex-grow pl-10  justify-center text-5xl font-bold">
            <h1>Our Student shared their</h1>
          </div>
          <div className="flex flex-nowrap sm:justify-center pl-10   text-5xl font-bold">
            <h1>visa success stories</h1>
          </div>
        </div>

        <div className="mt-14 mb-20  justify-center md:justify-center sm:justify-start w-full h-full gap-3 flex flex-wrap sm:flex-row  ">

          <div className='flex flex-wrap justify-center max-w-[320px]   py-[2rem] h-[28rem] bg-white rounded-3xl shadow-8xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-01.png")] bg-cover bg-no-repeat '>
            <div className="flex flex-col justify-end align-middle">
              <div className=" flex flex-wrap justify-center font-bold text-xl">
                <span className="text-white ">Annette black</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>

          <div className=' flex flex-wrap justify-center max-w-[350px] py-[2rem] h-[28rem] bg-white rounded-3xl shadow-2xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-02.png")] bg-cover bg-no-repeat '>
            <div className="flex flex-col justify-end align-middle">
              <div className=" flex justify-center font-bold text-xl">
                <span className="text-white ">Robert Fox</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center max-w-[350px] py-[2rem] h-[28rem] bg-white rounded-3xl shadow-2xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-03.png")] bg-cover bg-no-repeat '>
            <div className="flex flex-col justify-end align-middle">
              <div className=" flex justify-center font-bold text-xl">
                <span className="text-white ">Leslie Alexander</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center max-w-[350px]  py-[2rem] h-[28rem] bg-white rounded-3xl shadow-2xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-04.png")] bg-cover bg-no-repeat '>
            <div className="flex flex-col justify-end align-middle">
              <div className=" flex justify-center font-bold text-xl">
                <span className="text-white ">Kristin Watson</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
        </div>

      </section >

      {/* destination..section */}
      < section className="" >
        <div className="  pt-28 pb-10">
          <span className="flex justify-center align-middle sm:text-5xl font-bold ">
            Top Destinations
          </span>

          <span className="flex flex-wrap p-3 justify-center  text-gray font-bold  font-sans align-middle sm:text-ls mt-3">
            We have quality partners in variety of destinations around the
            globe.
          </span>
        </div>
        <div className="flex flex-col bg-third justify-center ">
          <div className="flex flex-row   flex-wrap my-5 justify-center">
            {countries.map((counrty, item) => {
              return (
                <div
                  key={item}
                  className="flex m-2 mr-4  flex-col justify-center border-solid  border border-gray hover:bg-white rounded-xl w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]"
                >
                  <div className="self-center ">
                    <img
                      className="pt-3 pl-3 pr-3 h-36 w-40"
                      src="https://themeim.com/demo/eduplan/assets/img/sections/destination/canda.png"
                      alt=""
                    />
                  </div>

                  <div className="m-4 font-bold text-slate-800">
                    <h1 className=" text-xl text-center">{counrty}</h1>
                  </div>
                </div>
              );
            })}
            {/* 
            
            
            <div className="flex m-2 mr-4  flex-col justify-center   border-solid  border border-gray hover:bg-white rounded-xl w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className="self-center ">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40"
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/canda.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">Canada</h1>
              </div>
            </div> */}

            {/* <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/usa.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">America</h1>
              </div>
            </div>
            <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/australia.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">Austraila</h1>
              </div>
            </div>
            <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/span.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">Span</h1>
              </div>
            </div>
            <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/franch.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">Franch</h1>
              </div>
            </div>
            <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/swideen.png"
                  alt=""
                />
              </div>

              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">Swideen</h1>
              </div>
            </div>
            <div className="flex m-2 mr-4 flex-col justify-center   border-solid  border border-gray rounded-xl  hover:bg-white w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]">
              <div className=" self-center">
                <img
                  className="pt-3 pl-3 pr-3 h-36 w-40 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/destination/italy.png"
                  alt=""
                />
              </div>
              <div className="m-4 font-bold text-slate-800">
                <h1 className=" text-xl text-center">italy</h1>
              </div>
            </div>
          </div>
          */}
          </div>
          <div className="flex justify-center align-middle mb-24 mt-16">
            <div className="">
              <a
                href="#_"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-6 px-12   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
              >
                <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span className="relative  group-hover:text-white text-xl ">
                  Apply Online
                </span>
              </a>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Mid;
