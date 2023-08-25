import React from "react";

import "../pages/style.css";
// import footer from '../Components/footer';

function Main() {

  return (
    <div class="container  flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl tails-selected-element">
      <div className=" bg-hotpink p-20 flex flex-col  justify-center">
        <div className="flex flex-col justify-center text-center">
          <div>
            <h4 className=" text-primary font-bold text-xl">STEPS</h4>
          </div>
          <div>
            <h1 className=" text-black font-bold text-2xl sm:text-4xl">
              Steps To Get Your Destination
            </h1>
          </div>
        </div>

        <div className="flex flex-row  flex-wrap justify-center">
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
              <div className=" w-48 text-center">
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
    </div>
  );
}

export default Main;
