import Cart from "./Cart"
import React from 'react'
import ChooseUs from "./ChooseUs"
import { Link } from "react-router-dom"
import phd from '../image/Phd.png'


function PhdthesisSection() {
    return (
        <>
            <div className="grid  select-none max-w-screen-xl px-4  lg:pb-8 mt-14 lg:mx-40 lg:gap-10 xl:gap-24 lg:py-16 md:grid-cols-12 lg:pt-24">
                <div className="mr-auto  lg:mb-16 place-self-center md:col-span-9 lg:col-span-7">
                    <h1
                        className="max-w-2xl mb-2 text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark: text-black">
                        Phd Writing Service.<br /></h1>
                    <p className="max-w-2xl mb-6  text-gray-500 lg:mb-4 md:text-lg lg:text-xl text-slate-900 font-normal ">  Best thesis  Writing Service for phd is here.</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className="  w-full md:block md:w-auto ">
                            <Link
                                to="/ApplyOnline"
                                className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x px-3 py-2 lg:px-6  shadow-md  font-sans tracking-tighter text-black border-[1px] border-gray rounded-xl group">
                                <span
                                    className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                                <span
                                    className="absolute inset-0 w-full h-full mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                <span className="relative  group-hover:text-white text-xl lg:text-2xl ">
                                    Call to Our Experts
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block z-0 lg:mt-0 lg:col-span-5 md:col-span-3 lg:flex">
                    <img src={phd} className='z-0 md:h-[180px] lg:h-[320px]' alt="hero image" />
                </div>
            </div>

            <div className='w-full select-none p-3 lg:h-auto  lg:pt-8 flex flex-col justify-center items-start  '>
                <div className='lg:px-[490px] md:text-2xl mt-6 mb-8 text-xl 2xl:text-4xl font-semibold '>
                    <h1>Phd Thesis Writing Services</h1>
                </div>
                <div className='flex justify-center text-lg lg:text-lg md:text-xl text-justify lg:mx-32'>
                    <p> The most difficult part of a PhD is to writing a thesis. The timely submission of a thesis with quality is the toughest job for getting a degree. We at StudentHq provide a PhD writing service who are experienced in writing the thesis. They are aware of all the formatting guidelines which are beneficial for the candidates. All experts ensure that the thesis for PhD writing is well-drafted to avoid the chances of rejection.</p>
                </div>
                <div className='flex justify-start text-lg md:text-xl lg:text-lg text-justify text-gray-600 font-medium lg:mx-32'>
                    <p>PhD thesis can be the toughest job for your doctorate. The guidelines we follow for the PhD writigng services:-</p>
                </div>
                <div className='flex md:text-xl text-lg lg:text-lg justify-start mt-3 lg:mx-32'>
                    <ul class="list-decimal mx-5">
                        <li className='text-justify  '>

                            <span className=' font-bold'>Formatting rules- </span>PhD thesis writing services in StudentHQ are familiar with various formatting guidelines and they also ensure that the font style and size, margins, spacing, etc. are according to rules. They also check the illustrations, tables and graphs, place them suitably and give references for them in the text.</li>
                        <li className='text-justify  '><span className=' font-bold'>Punctuality - </span> PhD theses are lengthy documents so it is important to write in a planned manner to finish them timely. Our experts maintain speed as well as accuracy.</li>
                        <li className='text-justify  '><span className=' font-bold'>Language and Grammar: -</span> Perfect academic language is required for writing theses. Technical terms are dual checked for spelling. Grammar and tense are also as per the university standards.</li>
                    </ul>
                </div>
                <div className="hidden select-none lg:px-[150px] mt-6 w-full md:block md:w-auto ">
                    <Link
                        to="/ApplyOnline"
                        className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-1 px-6 border-gray  font-sans tracking-tighter shadow-md text-black border-[1px] border-gray-100 rounded group">
                        <span
                            className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                        <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                        <span className="relative  group-hover:text-white text-xl ">
                            Hire Experts
                        </span>
                    </Link>
                </div>
            </div>
            <div className='w-full select-none mb-5 mt-5  lg:h-96 flex flex-col justify-center'>
                <Cart />
            </div>

            <div className='lg:w-full select-none lg:h-[690px] lg:px-28 lg:pt-4 '>
                <div className=' font-semibold'>
                    <h1 className='lg:text-4xl text-3xl ml-2 lg:ml-0 '>What Makes a Good Thesis </h1>
                    <p className='mt-3 ml-2 md:text-xl lg:text-lg '>A Good thesis means you  have a final project which fulfils all the guidelines as per university norms.</p>
                    <p className='ml-2 md:text-xl lg:text-lg'>A Good thesis will prove that your work is relevant and important</p>
                    <ul className='text-xl text-gray-700 font-thin  p-7 flex flex-col gap-y-4'>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Outlining.
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>

                            Knowing the Structure.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Planning the Structure.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>

                            Writing the thesis proposal.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Proofreading the proposal.</li>
                    </ul>
                </div>
                <div className='font-semibold'>
                    <h1 className='lg:text-4xl text-3xl ml-2 lg:ml-0 '>Tips to Write Phd Thesis Writing</h1>
                    <ul className='text-xl text-gray-700 font-thin list-decimal p-7 flex flex-col gap-y-4'>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Try to prepare a Strong Statement and highlight the objectives of your topic.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Go through your reasearch paper properly.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Start Collecting the data according to your topic and makes essential notes.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            Choose a good topic for your thesis and go through your latest journal and article related to your subject.</li>
                        <li className="flex items-center gap-2">
                            <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd" />
                            </svg>
                            After completing the work, give the best conclusion and a proper citation to all sources.</li>
                    </ul>
                </div>
            </div>

            <ChooseUs />
        </>
    )
}

export default PhdthesisSection