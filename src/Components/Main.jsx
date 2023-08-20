import React from "react";

import "../pages/style.css";
// import footer from '../Components/footer';

function Main() {

  return (
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl tails-selected-element">
    <div className="bg-hotpink p-20 flex flex-col justify-center">
      <div className="flex flex-col justify-center text-center">
        <div>
          <h4 className="text-primary font-bold text-xl">STEPS</h4>
        </div>
        <div>
          <h1 className="text-black font-bold text-2xl sm:text-4xl">
            Steps To Get Your Destination
          </h1>
        </div>
      </div>
  
      <div className="flex flex-row flex-wrap justify-center">
        <!-- Step 1 -->
        <div className="flex flex-row mx-8">
          <div className="flex flex-col justify-center my-10">
            <div class="bg-white rounded-full h-fit w-fit p-10 self-center">
              <img
                class=""
                src="https://themeim.com/demo/eduplan/assets/img/icon/step-01.png"
                alt=""
              />
            </div>
            <div class="w-48 text-center">
              <h2 class="text-xl my-3">
                Identify course, country & college
              </h2>
              <p>
                Research and select the course you want to pursue, the country you want to study in, and the college or university that offers it.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Step 2 -->
        <div className="flex flex-row mx-8">
          <div className="flex flex-col justify-center my-10">
            <div class="bg-white rounded-full h-fit w-fit p-10 self-center">
              <img
                class=""
                src="https://themeim.com/demo/eduplan/assets/img/icon/step-02.png"
                alt=""
              />
            </div>
            <div class="w-48 text-center">
              <h2 class="text-xl my-3">
                Prepare application materials
              </h2>
              <p>
                Gather all the necessary documents for your application, including transcripts, letters of recommendation, and a well-written personal statement.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Step 3 -->
        <div className="flex flex-row mx-8">
          <div className="flex flex-col justify-center my-10">
            <div class="bg-white rounded-full h-fit w-fit p-10 self-center">
              <img
                class=""
                src="https://themeim.com/demo/eduplan/assets/img/icon/step-03.png"
                alt=""
              />
            </div>
            <div class="w-48 text-center">
              <h2 class="text-xl my-3">
                Submit your application
              </h2>
              <p>
                Complete and submit your application to the selected college or university by the deadline.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Step 4 -->
        <div className="flex flex-row mx-8">
          <div className="flex flex-col justify-center my-10">
            <div class="bg-white rounded-full h-fit w-fit p-10 self-center">
              <img
                class=""
                src="https://themeim.com/demo/eduplan/assets/img/icon/step-04.png"
                alt=""
              />
            </div>
            <div class="w-48 text-center">
              <h2 class="text-xl my-3">
                Secure funding
              </h2>
              <p>
                Explore scholarship options, financial aid, and part-time work opportunities to support your education.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Step 5 -->
        <div className="flex flex-row mx-8">
          <div className="flex flex-col justify-center my-10">
            <div class="bg-white rounded-full h-fit w-fit p-10 self-center">
              <img
                class=""
                src="https://themeim.com/demo/eduplan/assets/img/icon/step-05.png"
                alt=""
              />
            </div>
            <div class="w-48 text-center">
              <h2 class="text-xl my-3">
                Prepare for departure
              </h2>
              <p>
                Get ready for your journey by arranging travel, accommodation, and familiarizing yourself with the new environment.
              </p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
  );
}

export default Main;
