import React from 'react'
import Narbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'





function StudyInIndia() {

  const Colleges = [
    {
      name: "Birla Institute of Technology and Science (BITS Pilani)",
      qswroldranking: "801-1000",
      location: "Pilani, Rajasthan",
      established: "1964"
    },
    {
      name: "Manipal Academy of Higher Education",
      qswroldranking: "1001-1200",
      location: "Manipal, Karnataka",
      established: "1953"
    },
    {
      name: "Vellore Institute of Technology (VIT)",
      qswroldranking: "801-1000",
      location: "Vellore, Tamil Nadu",
      established: "1984"
    },
    {
      name: "SRM Institute of Science and Technology (SRMIST)",
      qswroldranking: "1001-1200",
      location: "Chennai, Tamil Nadu",
      established: "1985"
    },
    {
      name: "Amity University",
      qswroldranking: "801-1000",
      location: "Noida, Uttar Pradesh",
      established: "2005"
    },
    {
      name: "Lovely Professional University",
      qswroldranking: "1001-1200",
      location: "Phagwara, Punjab",
      established: "2005"
    },
    {
      name: "Symbiosis International University",
      qswroldranking: "1001-1200",
      location: "Pune, Maharashtra",
      established: "1971"
    },
    {
      name: "Christ University",
      qswroldranking: "1001-1200",
      location: "Bengaluru, Karnataka",
      established: "1969"
    },
    {
      name: "Bennett University",
      qswroldranking: "1001-1200",
      location: "Greater Noida, Uttar Pradesh",
      established: "2016"
    },
    {
      name: "Ashoka University",
      qswroldranking: "1001-1200",
      location: "Sonepat, Haryana",
      established: "2014"
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
            className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark: text-bgDark">
            Study In India <br /></h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Studying in India offers affordable education, a wide range of courses, and a culturally diverse experience. Indian degrees are globally recognized, and the country provides ample research opportunities and a strong network for career development. <a
            href="https://flowbite.com/docs/getting-started/introduction/" className="hover:underline">Flowbite
            Library</a> and the <a className="hover:underline">Blocks System</a>.</p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">


            <div className="hidden select-none  w-full md:block md:w-auto ">
              <a href="#_"
                className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-5 px-10   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group">
                <span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span className="relative  group-hover:text-white text-2xl ">
                  Apply Now
                </span>
              </a>
            </div>



          </div>
        </div>
        <div className="hidden select-none lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://studenthq.in/images/study.webp" alt="hero image" />
        </div>
      </div>


      <div className=" mx-auto ">
        <div className="md:flex">

          {/* left */}
          <div className="p-10 flex    md:w-1/2 ">

            <div className=" select-none self-center "><img
              src="https://i.imgur.com/6KG2AmW.png"
              className=" " /></div>
          </div>



          {/* right */}

          <div className=" md:w-1/2 select-none md:mt-20">

            <div className="flex flex-col p-10 ">
              {/* <div className="text-primary mb-3 font-bold"><span>ABOUT US &amp; EXPERIENCE</span></div> */}
              <div className="text-4xl md:text-5xl tracking-normal  leading-tight font-medium"><span>Why Study in
                India?</span><br /><span></span><br /><span></span></div>
              <div className="  text-xl "><span>
                India offers high-quality education at an affordable cost, with over 950 universities and 40,000 colleges
                offering programs in various fields. Its diverse culture, rich history, and growing economy make it a
                unique and exciting place to study, while the emphasis on yoga and meditation provides a holistic approach
                to education and wellness.
              </span><span className=' block mt-7'>
                  India is a country with a rich culture, diverse history, and a booming economy. It offers a plethora of
                  opportunities for students to
                  learn and grow in a unique and dynamic environment. Here are some of the benefits of studying in India
                </span><br />
              </div>

              <div className="mt-12 "><a href="#_"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"><span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80" /><span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent " /><span
                    className="relative  group-hover:text-white text-xl ">Get Free Consulation</span></a></div>
            </div>


          </div>
        </div>
      </div>



      <div className=" mt-10 select-none md:m-10 ">
        <div className="md:flex">

          <div className="md:hidden"><img
            src="https://i.imgur.com/5HdvjWV.jpg"
            className=" p-5 md:p-10   " /></div>

          {/* left */}
          <div className="w-full p-6 select-none  h-full  md:flex md:flex-col">
            <div className="flex flex-col   h-full ">
              {/* <div className="text-primary mb-3 font-bold"><span>ABOUT US &amp; EXPERIENCE</span></div> */}
              <div className="text-3xl tracking-normal md:text-5xl  leading-tight font-medium"><span>Benefit of studying in
                India </span><br /><span></span><br /><span></span></div>
              <div className=" text-left text-five text-xl w-11/12"><span>
                Studying in India offers a multitude of benefits. With its renowned institutions and affordable education,
                students can receive a high-quality education without breaking the bank. Moreover, the diverse and multicultural
                society provides a unique cultural experience, exposing students to different traditions, languages, and festivals.
                Indian universities also boast a world-class faculty, providing students with the opportunity to learn from highly qualified
                professors. Additionally, India's emphasis on research and innovation opens doors for students to engage in cutting-edge projects and
                collaborate with renowned researchers.</span><br />

              </div>

              <ul role="list" className="pt-8 select-none space-y-5 border-t border-gray-200 my-7 dark:border-gray-700 text-black">
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Cost-effective</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Cultural
                    diversity</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Quality
                    education</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Internship
                    opportunities</span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" /></svg>
                  <span className="text-base font-medium leading-tight text-gray-900 text-gray-dark">Opportunities to learn
                    Indian languages
                  </span>
                </li>
              </ul>


              <div className="mt-12 "><a href="#_"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-14   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"><span
                  className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80" /><span
                  className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent " /><span
                    className="relative  group-hover:text-white text-xl ">Get Free Consultation</span></a></div>
            </div>
          </div>



          {/* right */}

          <div className=" w-4/5 select-none  hidden md:block">

            <div className="  h-auto  relative ">
              <div className=""><img
                src="https://i.imgur.com/5HdvjWV.jpg"
                className=" p-10  md:w-[200vh]   " /></div>
            </div>

          </div>
        </div>
      </div>










      {/* best  colleges in india */}

      <div className=' m-2 select-none rounded-3xl bg-primary' >
        <div className='m-5 p-10 md:p-10 justify-center'>
          <h1 className='font-bold  text-white text-3xl md:text-center md:text-5xl'>Some Top Colleges</h1>
          <div className="flex flex-wrap mt-10 md:m-20 gap-4">
            
        {
              
              Colleges.map((college)=>{
                  return (
                    <div className="bg-white border-solid border text-xl md:text-sm border-gray rounded-xl hover:border-primary md:w-[40vh]  shadow-md  p-8 md:p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <h2 className="font-bold mb-2">{college.name}</h2>
                    <p className="text-gray-600 mb-2">QS World Ranking: {college.qswroldranking}</p>
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

        <div
          className="select-none mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg ">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span> instead.
              </div>
            </div>
            <div className=" text-center">

              <img src="https://themeim.com/demo/eduplan/assets/img/services-details/01.png" alt="" />

            </div>
          </div>
          <div className>

            <div className='select-none grid grid-cols-2 gap-10'>
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder />
              </div>
              <div className="">
                <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" />
              </div>
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Contact</span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Destination</span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" />
            </div>
            <div className="mt-8">
              <a href="#_"
                class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                <span
                  class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span
                  class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
                <span class="relative">Submit</span>
              </a>
            </div>
          </div>
        </div>
      </div>





      <div>

        {/* <div className=' flex justify-center  bg-white pb-10'>
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block max-h-20 w-1/2 bg-indigo-500 ">
            <img className='  cover-full'
              src="https://images.pexels.com/photos/12794074/pexels-photo-12794074.jpeg?cs=srgb&dl=pexels-feyza-tuğba-12794074.jpg&fm=jpg&w=1920&h=2880&_gl=1*1y4h6v8*_ga*MTk4Mjk1MDkzMi4xNjgwMTk1MTM3*_ga_8JE65Q40S6*MTY4MzU2OTgxMy44LjEuMTY4MzU3MDg1MC4wLjAuMA.."
              alt="" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className=" mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Lets have a Quick Connect for a Free Counselling</h1>
              <p className=' text-center'>Enter your information to register</p>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor className="text-xs font-semibold px-1">Email</label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i
                      className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                  <input type="email"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="johnsmith@example.com" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor className="text-xs font-semibold px-1">First name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i
                        className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                    <input type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John" />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor className="text-xs font-semibold px-1">Last name</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i
                        className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                    <input type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith" />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor className="text-xs font-semibold px-1">Contact Number</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i
                        className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                    <input type="number"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Phone Number" />
                  </div>
                </div>
                <div className="w-full px-3 mb-12">
                  <label htmlFor className="text-xs font-semibold px-1">Preferred location</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i
                        className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                    <input type="country"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="location" />
                  </div>
                </div>

              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER
                    NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> */}
        {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
        {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank"
          className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <img className="object-cover object-center w-full h-full rounded-full"
            src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
        </a>
      </div>
    </div> */}
      </div>








      <div className=' '>
       
            < Faq />
      
      </div>










      <Footer />


    </>
  )
}

export default StudyInIndia