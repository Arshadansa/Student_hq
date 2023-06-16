import React from "react";
import Faq from "./Faq";

function Bottom() {
  const category = [
    "Agriculture & Foresty",
    "science & professional",
    "Art, Design & Culture",
    "Business & Management",
    "Computer Science & IT",
    "Education & Training",
    "Engeneering & Technology",
    "Hopitality & Sports",
    "Journalism & Media",
    "Medicine & Health",
    "Law",
    "Social Science",
    "Humanities",
    "Enviromental Studies",
  ];
  return (
    <>
      {/* about us...section */}
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
                  Ouya Education, which is based in Victoria, British Columbia,
                  Canada, frequently deals with issues of employment
                  (recruitment and retention) for temporary foreign workers
                  (TFW), as well as temporary and permanent residency
                  applications and other general immigration matters with
                  Canadian federal departments (IRCC and CBSA).
                  <div className="mt-2">
                    Education also provides educational consulting services for
                    student- clients who want to study in Canada, and require
                    help with the application process.
                  </div>
                </span>


                <div className=" font-bold text-xl text-gray tracking-wider text-five lg:mb-8  md:mt-8">
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
                <a
                  href="#_"
                  className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                  <span className="relative  group-hover:text-white text-xl ">
                    Get Free Consulation
                  </span>
                </a>
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



      {/* category...section */}
      <div className="flex flex-col p-2 sm:p-10  sm:m-10 m-4  flex-wrap">
        <div className="lg:ml-1">
          <p className="font-bold text-primary">CATEGORIES</p>
        </div>
        <div>
          <h1 className=" mt-3 lg:ml-2  font-bold text-2xl sm:text-5xl text-black">
            Popular Discipline & Courses
          </h1>
        </div>

        <div className="flex flex-row flex-wrap my-10 justify-center">
          {category.map((categories, item) => {
            return (
              <div
                key={item}
                className="flex m-2  flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]"
              >
                <div className=" self-center">
                  <img
                    className="h-20 w-20 "
                    src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                    alt=""
                  />
                </div>

                <div className="m-4">
                  <h1 className=" text-xl text-center">{categories}</h1>
                </div>
              </div>
            );
          })}
          {/* 
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>

            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div>
            <div className="flex m-2 flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]">
              <div className=" self-center">
                <img
                  className="h-20 w-20 "
                  src="https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png"
                  alt=""
                />
              </div>

              <div className="m-4">
                <h1 className=" text-xl text-center">Agriculture &Foresty</h1>
              </div>
            </div> */}
        </div>
      </div>
      {/* //stpes to get your destionation section*/}
      <div className=" bg-hotpink pt-32 pt flex flex-col  justify-center">
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

        <div className="flex flex-row  p-20 pt-1 flex-wrap justify-center">
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
                  Identify course country & College
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
                  Identify course country & College
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
                  src="https://themeim.com/demo/eduplan/assets/img/icon/step-05.png"
                  alt=""
                />
              </div>
              <div className="w-48 text-center">
                <h2 className=" text-xl my-3">
                  Identify course country & College
                </h2>
              </div>
            </div>
          </div>

          {/*
      <img className=' inline-block z-10 relative  bottom-9 '
        src="https://res.cloudinary.com/dzuv2ssvs/image/upload/v1681644943/arrow_gic2xf.svg" alt="" /> */}
        </div>
      </div>


      <section className="bg-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-purple-600 mb-8">Accommodation </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
        <img src="https://shorturl.at/fsNX3" alt="Standard Room" className="w-full object-cover h-48" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Standard Room</h3>
          <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestiae ut quos ipsam
            aliquid error consequatur dolore ex officia possimus.</p>
          <button className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
        <img src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/312235/xspknzflk57dbbiger2x" alt="Deluxe Room" className="w-full object-cover h-48" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Deluxe Room</h3>
          <p className="mb-4 text-gray-700">Indulge in luxury and sophistication in our deluxe rooms. Featuring elegant decor, a spacious layout, and premium amenities, these rooms provide a truly memorable experience.</p>
          <button className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
        <img src="https://shorturl.at/muEHP" alt="Suite" className="w-full object-cover h-48" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">Suite</h3>
          <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestiae ut quos ipsam
            aliquid error consequatur dolore ex officia possimus.</p>
          <button className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* {education...section} */}
      <div className="">
        <div className="flex pt-20  flex-col justify-center text-center">

          <div>
            <div className="">
              <span className=" text-primary font-bold text-md">
                EDUPLAN UPDATES
              </span>
            </div>
            <div className="pt-4">
              <span className=" text-black font-bold text-2xl  sm:text-5xl ">
                Eduplan Latest Blog
              </span>
            </div>

          </div>


          <div className="flex-wrap flex md:flex-row lg:flex-nowrap m-3 justify-center sm:justify-start lg:pr-24 lg:pl-24 lg:pt-4  lg:pb-20">

            <div className="md:pt-16 md:pb-20 md:p-3  md:w-1/2 rounded-lg">
              <div color="blue-gray" className="  rounded-lg h-56 ">
                <img
                  className="rounded-r-3xl rounded-l-3xl  h-56 w-full"
                  src="https://themeim.com/demo/eduplan/assets/img/h-blog/01.png"
                  alt="img-blur-shadow"
                />
              </div>

              <div className="mt-5 mb-3 text-left">
                <div
                  variant="h5"
                  color="blue-gray"
                  className="mt-2 font-semibold "
                >
                  19th Jan 2022 12 Noon To 4 Pm
                </div>
                <div className="text-2xl font-semibold">
                  Overseas Education Fair Amravati <br />
                  2023
                </div>
              </div>
              <div className=" text-primary text-left">
                <button type="button">Read More</button>
              </div>
            </div>

            <div className="md:pt-16 md:pb-20 md:p-3 md:w-1/2  rounded-lg">
              <div color="blue-gray" className="relative  rounded-lg h-56 ">
                <img
                  className="rounded-r-3xl rounded-l-3xl h-56 w-full"
                  src="https://themeim.com/demo/eduplan/assets/img/h-blog/02.png"
                  alt="img-blur-shadow"
                />
              </div>

              <div className="mt-5 mb-3 text-left">
                <div
                  variant="h5"
                  color="blue-gray"
                  className="mt-2 font-semibold "
                >
                  19th Jan 2022 12 Noon To 4 Pm
                </div>
                <div className="text-2xl font-semibold">
                  Overseas Education Fair Amravati <br />
                  2023
                </div>
              </div>
              <div className=" text-primary text-left">
                <button type="button">Read More</button>
              </div>
            </div>

            <div className="lg:pt-16  lg:pb-20 md:p-3 md:w-1/2  rounded-lg">
              <div color="blue-gray" className="relative  rounded-lg h-56 ">
                <img
                  className="rounded-r-3xl rounded-l-3xl h-56 w-full"
                  src="https://themeim.com/demo/eduplan/assets/img/h-blog/03.png"
                  alt="img-blur-shadow"
                />
              </div>
              <div className="mt-5 mb-3 text-left">
                <div
                  variant="h5"
                  color="blue-gray"
                  className="mt-2 font-semibold "
                >
                  19th Jan 2022 12 Noon To 4 Pm
                </div>
                <div className="text-2xl font-semibold">
                  Overseas Education Fair Amravati <br />
                  2023
                </div>
              </div>
              <div className=" text-primary text-left">
                <button type="button">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* faq...section */}
      <div className="flex justify-center bg-fourth bg-background   align-middle w-full h-full">
        <Faq />
      </div>
    </>
  );
}

export default Bottom;
