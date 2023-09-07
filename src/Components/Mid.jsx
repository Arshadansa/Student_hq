import React, { useState } from "react";
import "../index.css";
// import footer from '../Components/footer';
import Modal from "react-modal";
import { MdPlayCircleOutline } from "react-icons/md";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";

function Mid() {

  const countries = [
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/canda.png',
      name: 'Canada',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/usa.png',
      name: 'America',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/australia.png',
      name: 'Australia',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/span.png',
      name: 'Spain',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/franch.png',
      name: 'French',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/swideen.png',
      name: 'Sweden',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/italy.png',
      name: 'Italy',
    }
  ];

  console.log(countries);



  return (
    <>
      <div id="targetComponent" className="  pt-10 flex flex-col  justify-center">
        <div className="flex flex-col justify-center text-center">
          <div className="p-3">
            <span className=" text-primary font-medium text-lg">STEPS</span>
          </div>
          <div className="p-6 pt-0">
            <span className=" text-black font-bold text-2xl  sm:text-5xl ">
              Steps To Get Your College
            </span>
          </div>
        </div>

        <div className="flex flex-row  lg:p-5 2xl:p-20  pt-1 flex-wrap justify-center">
          <div className=" flex flex-row mx-8 ">
            <div className=" flex flex-col justify-center  my-10">
              <div className="bg-white rounded-full h-fit w-fit p-10   self-center">
                <img
                  className=" "
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-01.png"
                  alt=""
                />
              </div>
              <div className=" w-48 text-center">
                <h2 className=" text-xl my-3">
                  Identify course country & College
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-row mx-8 ">
            <div className=" flex flex-col justify-center  my-10">
              <div className="bg-white rounded-full h-fit w-fit p-10  self-center">
                <img
                  className=" "
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-02.png"
                  alt=""
                />
              </div>
              <div className=" w-48 text-center">
                <h2 className=" text-xl my-3">
                  Prepare application materials
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-row mx-8 ">
            <div className=" flex flex-col justify-center  my-10">
              <div className="bg-white rounded-full h-fit w-fit p-10   self-center">
                <img
                  className=" "
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-03.png"
                  alt=""
                />
              </div>
              <div className=" w-48 text-center">
                <h2 className=" text-xl my-3">
                  Submit your application
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-row mx-8 ">
            <div className=" flex flex-col justify-center  my-10">
              <div className="bg-white rounded-full h-fit w-fit p-10   self-center">
                <img
                  className=" "
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-04.png"
                  alt=""
                />
              </div>
              <div className=" w-48 text-center">
                <h2 className=" text-xl my-3">
                  Secure funding
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-row mx-8 ">
            <div className=" flex flex-col justify-center  my-10">
              <div className="bg-white rounded-full h-fit w-fit p-10  self-center">
                <img
                  className=" "
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-05.png"
                  alt=""
                />
              </div>
              <div className="w-48 text-center">
                <h2 className=" text-xl my-3">
                  Prepare for departure
                </h2>
              </div>
            </div>
          </div>

          {/*
      <img className=' inline-block z-10 relative  bottom-9 '
        src="https://res.cloudinary.com/dzuv2ssvs/image/upload/v1681644943/arrow_gic2xf.svg" alt="" /> */}
        </div>
      </div>
      {/*one step..section*/}


      {/* about section... */}
      <div className="flex  justify-center align-middle w-full h-auto ">

        <div className="flex flex-wrap lg:flex-nowrap gap-5 p-5 lg:p-20   lg:justify-center align-middle w-full sm:h-fit">

          <div className="w-full md:justify-center md:align-middle flex flex-col lg:h-full">
            <div className="flex flex-col  lg:h-full ">

              <div className="text-primary md:mb-2 font-bold">
                <span>ABOUT US & EXPERIENCE</span>
              </div>
              <div className="text-3xl tracking-normal flex flex-col gap-2 lg:text-5xl leading-tight font-medium">
                <span>Moving beyond product</span>
                <span>innovation to gain a</span>
                <span>competitive advantage</span>
              </div>

              <div className="mt-16 text-left flex flex-col gap-3  font-medium w-11/12">
                <span>
                In today's fast-paced and ever-changing world, gaining a competitive advantage goes beyond just product innovation. In the realm of education, organizations like StudentHQ are pioneering new ways to assist students in their journey towards admissions and successful study experiences. Let's explore how StudentHQ goes the extra mile to support students on their educational path.
                  <div className="mt-2">
                  One key aspect of gaining a competitive advantage is providing comprehensive guidance throughout the admissions process. StudentHQ understands that the journey from application to acceptance can be overwhelming for students. Hence, they offer a range of resources to equip students with the knowledge and skills needed to navigate the admissions landscape successfully. From personalized counseling sessions to workshops on writing effective college essays, StudentHQ ensures that students have the necessary tools to showcase their strengths and stand out from the competition.
                  </div>
                </span>


                <div className=" font-bold text-xl text-gray tracking-wider lg:mb-8  md:mt-8">
                  <span>CORE STRENGTH</span>
                </div>
              </div>
              <div className="hidden lg:flex  ">
                <div className=" bg-six flex flex-col justify-center items-center mr-20  h-32 w-44 border-l-4 border-primary rounded-md ">
                  <span className="text-5xl font-bold text-primary">15</span>
                  <div className="mt-4 text-lg">Years Experience</div>
                </div>
                <div className=" flex flex-col justify-center items-center mr-20  h-32 w-44 border-l-4 rounded-md border-seven bg-eight">
                  <span className="text-5xl text-seven font-bold">875</span>
                  <div className="mt-4 text-lg">VISA Approved</div>
                </div>
                <div className=" flex flex-col justify-center items-center mr-20  h-32 w-44 border-l-4 rounded-md border-rose-400 bg-rose-50">
                  <span className="text-5xl font-bold text-red-600">96%</span>
                  <div className="mt-4">Admission success</div>
                </div>
              </div>

              <div className="mt-12 hidden lg:flex">
                <Link
                  to="/ApplyOnline"
                  className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                  <span className="relative  group-hover:text-white text-xl ">
                    Get Free Consulation
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="sm:w-4/5 h-auto md:pr-10">
            <div class="w-fit h-auto ">
              <img src="/image/student-in-library.png"
                class=" h-full"
              />
            </div>
          </div>
        </div>
      </div>


      {/* destination..section */}
      <section className="mb-20">
        <div className="  lg:pt-10 pb-10">
          <span className="flex justify-center align-middle sm:text-5xl font-bold ">
            Top Destinations
          </span>

          <span className="flex flex-wrap lg:p-3 justify-center ml-2 md:mt-3 lg:mt-1 md:text-lg text-gray-500 lg:text-gray md:font-bold  sm:text-ls ">
            We have quality partners in variety of <span className="">destinations around the globe.</span>
          </span>
        </div>
        <div className="flex flex-col cursor-pointer justify-center ">
          <div className="flex flex-row cursor-pointer  flex-wrap my-5 justify-center">
            {countries.map((country, item) => {
              return (
                <div
                  key={item}
                  className="flex m-2 mr-4  flex-col justify-center border border-gray-300  hover:bg-white rounded-xl w-[9rem]  sm:w-[11rem] sm:h-56 h-[12rem]"
                >
                  <div className="self-center ">
                    <img
                      className="pt-3   pl-3 pr-3 h-36 w-40"
                      src={country.link}
                      alt=""
                    />
                  </div>

                  <div className="m-4 font-bold text-slate-800">
                    <h1 className=" text-xl text-center">{country.name}</h1>
                  </div>
                </div>
              );
            })}

          </div>
          <div className="lg:flex justify-center text-center h-24 align-middle mb-14 mt-5 lg:mt-16">
            <div className="lg:w-[65%] mb-5  lg:text-right ">
              <Link
                to="/ApplyOnline"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-6 px-12   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
              >
                <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span className="relative  group-hover:text-white text-xl ">
                  Apply Online
                </span>
              </Link>
            </div>
            <div className="flex   justify-end   lg:w-[50%] ">
              <div className="relative left-[65%]  z-10 bottom-5 w-32 ">
                <img className="h-20 w-42" src="https://themeim.com/demo/eduplan/assets/img/shapes/plane.png" alt="" />
              </div>
              <div className=" relative  w-[80%] z-0  ">
                <img className="h-28  float-right lg:w-[90%] w-[100%]" src="https://themeim.com/demo/eduplan/assets/img/shapes/mountant.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mid;
