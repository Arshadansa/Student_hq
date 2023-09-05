import React from "react";
import Narbar from "../Components/Navbar";

import Footer from "../Components/Footer";

import CourseCard from "../Components/CourseCard";




function Courses() {

  const Courses = [
    {
      shortform: "BCA",
      fullform: "BACHELOR OF COMPUTER APPLICATIONS",
      description: "We have professional alliances with leading Universities and Colleges around the world.",
      img: "https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BBA",
      fullform: "BACHELOR OF BUSINESS ADMINISTRATION",
      description: "Learn the fundamentals of business management and develop essential leadership skills.",
      img: "https://www.jnncollege.edu.in/wp-content/uploads/2018/12/2.jpg",
    },
    {
      shortform: "BSc",
      fullform: "BACHELOR OF SCIENCE",
      description: "Explore various scientific disciplines and conduct hands-on experiments.",
      img: "https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BA",
      fullform: "BACHELOR OF ARTS",
      description: "Deepen your understanding of humanities, social sciences, and creative arts.",
      img: "https://images.ctfassets.net/pdf29us7flmy/3uRSbnOKWfAfUv32rhRfPB/1527cb9d682afc0e82bac512f72ec97d/GettyImages-478161521.jpg?w=720&q=100&fm=jpg",
    },
    {
      shortform: "MBBS",
      fullform: "BACHELOR OF MEDICINE, BACHELOR OF SURGERY",
      description: "Pursue a career in medical sciences and provide healthcare services.",
      img: "https://images.pexels.com/photos/4543164/pexels-photo-4543164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "LLB",
      fullform: "BACHELOR OF LAWS",
      description: "Study the legal system and gain skills in legal analysis and argumentation.",
      img: "https://images.phttps://images.news18.com/ibnkhabar/uploads/2022/10/mbbs-1-16659370153x2.jpgexels.com/photos/3701798/pexels-photo-3701798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BEng",
      fullform: "BACHELOR OF ENGINEERING",
      description: "Get hands-on experience in various engineering fields and design innovative solutions.",
      img: "https://images.pexels.com/photos/3785701/pexels-photo-3785701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BArch",
      fullform: "BACHELOR OF ARCHITECTURE",
      description: "Learn architectural design principles and create sustainable building solutions.",
      img: "https://images.pexels.com/photos/1001963/pexels-photo-1001963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BEd",
      fullform: "BACHELOR OF EDUCATION",
      description: "Prepare to become a teacher and contribute to shaping future generations.",
      img: "https://images.pexels.com/photos/1089558/pexels-photo-1089558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BPharm",
      fullform: "BACHELOR OF PHARMACY",
      description: "Study pharmaceutical sciences and contribute to improving public health.",
      img: "https://images.pexels.com/photos/6046960/pexels-photo-6046960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BScN",
      fullform: "BACHELOR OF SCIENCE IN NURSING",
      description: "Become a skilled nurse and provide compassionate care to patients.",
      img: "https://images.pexels.com/photos/5325453/pexels-photo-5325453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BPT",
      fullform: "BACHELOR OF PHYSIOTHERAPY",
      description: "Learn therapeutic exercises and techniques to rehabilitate patients.",
      img: "https://images.pexels.com/photos/3931381/pexels-photo-3931381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BScCS",
      fullform: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
      description: "Gain in-depth knowledge of computer science and develop software solutions.",
      img: "https://images.pexels.com/photos/5474043/pexels-photo-5474043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BCom",
      fullform: "BACHELOR OF COMMERCE",
      description: "Explore various aspects of commerce, accounting, and finance.",
      img: "https://images.pexels.com/photos/256522/pexels-photo-256522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BScIT",
      fullform: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
      description: "Acquire skills in IT systems, networking, and software development.",
      img: "https://images.pexels.com/photos/7163967/pexels-photo-7163967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BAMS",
      fullform: "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY",
      description: "Study Ayurveda and provide holistic healthcare using natural remedies.",
      img: "https://images.pexels.com/photos/3872097/pexels-photo-3872097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BScChem",
      fullform: "BACHELOR OF SCIENCE IN CHEMISTRY",
      description: "Explore the world of chemistry and conduct experiments to analyze substances.",
      img: "https://images.pexels.com/photos/247831/pexels-photo-247831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BFA",
      fullform: "BACHELOR OF FINE ARTS",
      description: "Develop your artistic skills and express yourself through various art forms.",
      img: "https://images.pexels.com/photos/2100220/pexels-photo-2100220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BScBio",
      fullform: "BACHELOR OF SCIENCE IN BIOLOGY",
      description: "Study the diverse world of living organisms and their interactions.",
      img: "https://images.pexels.com/photos/267037/pexels-photo-267037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BHM",
      fullform: "BACHELOR OF HOTEL MANAGEMENT",
      description: "Enter the exciting world of hospitality and learn about hotel operations.",
      img: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      shortform: "BDS",
      fullform: "BACHELOR OF DENTAL SURGERY",
      description: "Become a dentist and provide oral healthcare to patients.",
      img: "https://images.pexels.com/photos/216337/pexels-photo-216337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <nav>
        <Narbar />
      </nav>

      <div className="p-4 mt-10 select-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:m-10">
        <div className=" mb-10 mt-20">
          <h1 className=" text-3xl  font-bold sm:text-5xl">
            We have {Courses.length} courses total
          </h1>
          <p className=" text-lg sm:px-2 my-2">
            We have professional alliance's with leading Universities and
            Colleges around the world.
          </p>
        </div>

        <div className="select-none grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">


          {/* cards */}
          {/* cards */}

          {
            Courses.map((course, item) => {
              return (
                <div key={item} className='select-none shadow bg-white  rounded-3xl  w-full  sm:w-[95%]  relative'>
                  <div className=''>
                    <img className=' object-fill rounded-t-3xl  h-60 w-96' src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1060&t=st=1693924671~exp=1693925271~hmac=2f238744a200bf452c493cb44b4224fa9ed90e37a6e161fc557f387211472e58" alt="" />
                  </div>
                  <div className='flex flex-col w-fit m-4'>
                    <h1 className='my-2 text-lg text-gray font-thin'>{course.shortform}</h1>
                    <p className=' font-bold text-xl'>{course.fullform}</p>
                  </div>

                  <div className='flex flex-row  p-4 '>


                    <div class="flex  items-center  columns-2   rounded-lg w-auto space-x-1 lg:space-x-2">
                      <h1 className=' sm:Block'>Ratings : </h1>
                      <button class="mr-1">
                        <svg class=" text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                        </svg>
                      </button>

                      <span class="text-slate-400   font-medium">
                        9.5 <a href="#" class="font-normal">(129 reviews)</a>
                      </span>
                    </div>



                  </div>

                  {/* slider */}
                  <div class="select-none shadow rounded-3xl absolute top-0 w-full h-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-500 ease-in-out  hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <div className='absolute bottom-0 left-0 w-full h-0 overflow-hidden transition-all  duration-200 ease-in-out bg-white group-hover:h-full'>

                      <div className='flex flex-col m-4'>
                        <h1 className='my-2 text-gray text-lg font-thin'>{course.shortform}</h1>
                        <h1 className=' my-2 font-bold text-xl  font '>{course.fullform}</h1>
                        <p className='my-4  text-bgDark font-medium'>{course.description}</p>
                      </div>

                      <div className=' flex self-center m-3'>
                        <a href="#_" class="relative rounded-3xl inline-flex items-center self-center  px-6 py-3 overflow-hidden font-medium transition-all bg-white  justify-center  hover:bg-white  ">
                          <span class="w-48 h-48 rounded-3xl rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                            
                            APPLY NOW</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })

          }



        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Courses;
