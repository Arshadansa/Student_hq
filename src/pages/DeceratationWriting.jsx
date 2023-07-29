import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import DeceratationSection from '../Components/DeceratationSection'

function DeceratationWriting() {
    return (
        <div>
            <Navbar />
            <DeceratationSection />

            <div className='lg:flex select-none justify-center items-center lg:p-10'>
                <div className='bg-lightblue lg:w-[1600px] lg:h-[290px] rounded-lg lg:first-letter lg:flex flex-col items-center lg:pl-10 lg:pr-10 pt-6 pb-6'>
                    <div className='flex justify-center items-start lg:w-full '>
                        <span className='text-white text-2xl md:text-4xl lg:text-5xl p-4 mb-3 font-bold'>We Cover the <span className=' font-medium'>follwing</span> topics. </span>
                    </div>
                    <div className="flex flex-wrap  justify-center items-center lg:w-full lg:h-full">
                        <ol class="lg:flex md:w-[50%] items-center lg:w-full md:text-2xl  font-medium text-center text-gray-500  border-none border-gray-200 rounded-lg shadow-md dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                            <li class="flex  mb-2 md:ml-4 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2  sm:text-xs border border-white rounded-full shrink-0 dark:border-blue-500">
                                    1
                                </span>
                                <span class=" sm:inline-flex sm:ml-2">Thesis</span>
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                            </li>

                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    2
                                </span>
                                <span class=" sm:inline-flex sm:ml-2 ">Book Review</span>
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    3
                                </span>
                                Dissertations
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    4
                                </span>
                                Abstracts
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    5
                                </span>
                                Book Report
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    6
                                </span>
                                Conference Papers
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    7
                                </span>
                                Essay
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    8
                                </span>
                                Sop Writing Service
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                            </li>
                            <li class="flex mb-2 lg:mb-0 items-center text-white dark:text-blue-500">
                                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-white rounded-full shrink-0 dark:border-gray-400">
                                    9
                                </span>
                                Research Papers
                            </li>
                        </ol>

                    </div>

                    <div className=" select-none flex items-center justify-center mt-5  lg:w-full  md:w-auto ">
                        <a href="#_"
                            className="relative bg-white lg:inline-flex  items-center justify-center overflow-hidden lg:text-x py-2 px-3 lg:py-3 md:py-3 md:px-4 lg:px-6   font-sans tracking-tighter text-black  border-gray rounded-2xl group">
                            <span
                                className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-third rounded-full group-hover:w-80 group-hover:h-80"></span>
                            <span
                                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative  group-hover:text-white md:text-2xl sm:text-xl lg:text-2xl ">
                                Hire Experts
                            </span>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex select-none justify-center bg-fourth bg-background  align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DeceratationWriting