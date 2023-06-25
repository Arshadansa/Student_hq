import React from "react";
import Narbar from "../Components/Navbar";

import Footer from "../Components/Footer";

import CourseCard from "../Components/CourseCard";

function Courses() {
  return (
    <>
      <nav>
        <Narbar />
      </nav>

      <div className="p-4 mt-10 select-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:m-10">
        <div className=" mb-10 ">
          <h1 className=" text-4xl  font-bold sm:text-6xl">
            We have 32 courses total
          </h1>
          <p className=" text-xl my-6">
            We have professional alliance's with leading Universities and
            Colleges around the world.
          </p>
        </div>

        <div className="select-none grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Courses;
