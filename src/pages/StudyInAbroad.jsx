import React from 'react'
import Narbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import StudyCard from '../Components/StudyCard'
import { Link } from 'react-router-dom'




function StudyInIndia() {

  const Colleges = [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      qswroldranking: "1",
      location: "Cambridge, United States",
      established: "1861"
    },
    {
      name: "Stanford University",
      qswroldranking: "2",
      location: "Stanford, United States",
      established: "1885"
    },
    {
      name: "Harvard University",
      qswroldranking: "3",
      location: "Cambridge, United States",
      established: "1636"
    },
    {
      name: "California Institute of Technology (Caltech)",
      qswroldranking: "4",
      location: "Pasadena, United States",
      established: "1891"
    },
    {
      name: "University of Oxford",
      qswroldranking: "5",
      location: "Oxford, United Kingdom",
      established: "1096"
    },
    {
      name: "University of Cambridge",
      qswroldranking: "6",
      location: "Cambridge, United Kingdom",
      established: "1209"
    },
    {
      name: "ETH Zurich - Swiss Federal Institute of Technology",
      qswroldranking: "7",
      location: "Zurich, Switzerland",
      established: "1854"
    },
    {
      name: "University of Chicago",
      qswroldranking: "9",
      location: "Chicago, United States",
      established: "1890"
    },
    {
      name: "University College London (UCL)",
      qswroldranking: "10",
      location: "London, United Kingdom",
      established: "1826"
    },
    {
      name: "Princeton University",
      qswroldranking: "13",
      location: "Princeton, United States",
      established: "1746"
    }
    // Add more colleges here
  ];

  return (
    <>
      <nav>
        <Narbar />
      </nav>

      <div className="grid select-none max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark: text-bgDark">
            Study Abroad EffortLessly <br /></h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Studying Abroad is Just more than an Experience<a href="https://tailwindcss.com"
            className="hover:underline"></a>  <a
              href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">
            </a>  <a href="https://flowbite.com/blocks/" className="hover:underline"></a>.</p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">


            <div className="hidden  w-full md:block md:w-auto ">
              <Link
                to="/ApplyOnline"
                className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-5 px-10   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group">
                <span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span className="relative  group-hover:text-white text-2xl ">
                  Apply Now
                </span>
              </Link>
            </div>



          </div>
        </div>
        <div className="hidden select-none lg:mt-0 lg:col-span-5 lg:flex mb-20">
          <img className=' h-full' src="https://i.imgur.com/HBcuLvY.png" alt="hero image" />
        </div>
      </div>



      <div className=" mx-auto ">
        <div className="md:flex">

          {/* left */}
          <div className="p-10 flex    md:w-1/2 ">

            <div className="select-none  self-center "><img
              src="https://i.imgur.com/jXoyKof.png"
              className=" " /></div>
          </div>



          {/* right */}

          <div className="select-none md:w-1/2">

            <div className="flex flex-col p-10 ">
              {/* <div className="text-primary mb-3 font-bold"><span>ABOUT US &amp; EXPERIENCE</span></div> */}
              <div className="text-4xl md:text-5xl tracking-normal  leading-tight font-medium"><span>Why Study
                Abroad?</span><br /><span></span><br /><span></span></div>
              <div className="  text-xl "><span>
                Studying abroad can be a life-changing experience for many students. It provides a
                unique opportunity to explore a new country, learn about different cultures, and gain a global
                perspective on various issues. Students who study abroad often develop a greater sense of independence,
                self-awareness, and confidence, which can help them stand out in the job market. Additionally, studying i
                n a foreign country can broaden a student's academic and professional horizons, as they have access to new e
                ducational and career opportunities that may not be available in their home country.
              </span><span className=' block mt-7'>
                  Overall, studying abroad offers a chance for personal growth, cultural immersion, and academic enrichment that can benefit students
                  in numerous ways.
                </span><br />
              </div>

              <div className="mt-12 "><Link
                to="/ApplyOnline"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"><span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80" /><span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent " /><span
                    className="relative  group-hover:text-white text-xl ">Get Free Consulation</span></Link></div>
            </div>


          </div>
        </div>
      </div>




      <div className="select-none mt-10  md:m-10 ">
        <div className="md:flex">

          <div className="md:hidden"><img
            src="https://i.imgur.com/8vrEZFM.png"
            className=" p-10   " /></div>

          {/* left */}
          <div className="w-full p-6 select-none   h-full  md:flex md:flex-col">
            <div className="flex flex-col   h-full ">
              {/* <div className="text-primary mb-3 font-bold"><span>ABOUT US &amp; EXPERIENCE</span></div> */}
              <div className="text-3xl tracking-normal md:text-5xl  leading-tight font-medium"><span>Benefits To Study
                Abroad </span><br /><span></span><br /><span></span></div>
              <div className=" text-left  text-xl w-11/12"><span>
                India is a country with a rich culture, diverse history, and a booming economy. It offers a plethora of
                opportunities for students to
                learn and grow in a unique and dynamic environment. Here are some of the benefits of studying in
                India</span><br />

              </div>

              <ul role="list" className="pt-8 select-none space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 text-black">
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Exposure to a new culture and way of life</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Opportunity to learn a new language or improve language skills
                    diversity</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Enhanced career opportunities and global job prospects
                    education</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Networking with people from diverse backgrounds
                    opportunities</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Development of independence, self-confidence, and adaptability
                    in Other languages
                  </span>
                </li>
              </ul>


              <div className="mt-12 "><Link
                to="/ApplyOnline"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"><span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80" /><span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent " /><span
                    className="relative  group-hover:text-white text-xl ">Get Free Consultation</span></Link></div>
            </div>
          </div>



          {/* right */}

          <div className=" md:w-1/2 select-none  hidden md:block">

            <div className="  h-auto  relative ">
              <div className=""><img
                src="https://i.imgur.com/8vrEZFM.png"
                className=" p-10 md:h-[60vh]   " /></div>
            </div>

          </div>
        </div>
      </div>




      {/* best  colleges in abroad */}

      <div className=' m-2 rounded-3xl select-none bg-primary p-5' >
        <div className='m-3 md:p-10 justify-center'>
          <h1 className='font-bold p-8  text-white text-2xl md:text-center md:text-5xl'>Some Top Colleges</h1>
          <div className="flex  justify-center flex-wrap m-5 mt-10 md:m-20 gap-4">
            {
              Colleges.map((college) => {
                return (
                  <div className="bg-white w-full border-solid border text-xl md:w-[350px] md:h-[180px] h-[230px] self-center  md:text-sm border-gray rounded-xl hover:border-primary   shadow-md  p-8 md:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="font-bold md:text-xl mb-2">{college.name}</h2>
                    <p className="text-gray-600  mb-2">QS World Ranking: {college.qswroldranking}</p>
                    <p className="text-sm text-gray-500">Location: {college.location}</p>
                    <p className="text-sm text-gray-500">Established: {college.established}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>


      </div>

      <StudyCard />

      <div className=' '>

        < Faq />

      </div>



      <footer>
        <Footer />
      </footer>


    </>
  )
}

export default StudyInIndia