import React from 'react'
import { Link } from 'react-router-dom'

function DeceratationSection() {
    return (
        <>
            <div className="grid  select-none max-w-screen-xl px-4 pt-20 lg:pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center md:col-span-8  lg:col-span-8">
                    <h1
                        className="max-w-4xl  flex-wrap text-3xl lg:mb-4 lg:text-2xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-4xl dark: text-black">
                        Are you Looking for Dissertation ?<br /></h1>
                    <p className="max-w-2xl  mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-2 text-slate-900 font-normal ">Get Online Dissertation Help From Our Experts Of Relevent Background</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div className=" w-full md:block md:w-auto ">
                            <Link
                                to="/ApplyOnline"
                                className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-lg  py-2 lg:py-3 lg:px-6 px-3   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group">
                                <span
                                    className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                                <span
                                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                <span className="relative  group-hover:text-white lg:text-2xl ">
                                    Call to Our Experts
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className=" hidden  md:block lg:mt-0 md:col-span-4 lg:col-span-4 lg:flex">
                    <img className='' src="/image/diss.png" alt="StuHq" />
                </div>

            </div>
            <div className='lg:w-full select-none lg:h-auto p-3 flex-wrap lg:p-10 lg:flex flex-col justify-center align-middle'>
                <div className='lg:flex justify-start lg:mx-28 lg:mt-6 lg:mb-10 lg:text-5xl text-lg  font-semibold'>
                    <h1>Dissertation Writing?</h1>
                </div>
                <div className='lg:flex justify-center flex-wrap text-justify lg:mx-28'>
                    <p>A dissertation is a long piece of writing based on original research conducted by you. It always requires solid research, analytic & writing skills. It can be the longest and most difficult piece of work a student has ever completed. Writing of dissertation requires strong planning. </p>
                </div>
                <div className='flex justify-start text-lg text-justify mt-4 lg:mx-28'>
                    <p className='font-bold'>There are some steps to writing a dissertation are:-</p>
                </div>
                <div className='flex flex-col justify-start mt-3 lg:mx-32'>
                    <ul class="list-decimal mx-5">
                        <li className='text-justify text'>
                            <span className=' font-bold'>Choose your topic carefully:- </span> Your topic must be engaging and meaningful. Your dissertation is an opportunity to showcase your ideas and thoughts.</li>
                        <li className='text-justify  text'><span className=' font-bold'> Have a clear goal & structure:-</span>
                            Once you are settled with the topic,  you have a clear goal and structure. Knowing where your ideas are headed, will ensure that you remain on track and only relevant points are made.
                        </li>
                        <li className='text-justify  text'><span className=' font-bold'>Write as you go-:</span>
                            when you are clear about what you are writing, your topic should make better sense. You should understand your narration, your analysis, interpretation and emphasis will change.
                        </li>
                    </ul>
                    <span className='mt-5 mb-4 text-justify font-medium'>
                        A good dissertation or thesis topic has a few important attributes. Specifically, a solid research topic should be:Clear Unique Important
                        The structure of your dissertation depends on a variety of factors, such as your discipline, topic, and approach.
                    </span>
                    <span>Whatever style is preferred, aim to keep your language simple and jargon-free. Use shorter, simpler words and phrases wherever possible. Short sentences are good as they are easier to follow. Any sentence that runs to more than three lines needs to be cut down or split.

                    </span>

                    <table className="select-none mt-4 mb-4">
                        <tr className=''>
                            <th className="shadow-md  rounded-l-md bg-red-400 text-left px-8 py-4">Phrases</th>
                            <th className="shadow-md  rounded-r-md bg-red-400 text-left px-8 py-4">Use instead</th>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">Due to the fact that…</td>
                            <td className="shadow-md rounded-r-md hover:bg-gray-100 px-8 py-4">Because</td>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">In addition</td>
                            <td className="shadow-md rounded-r-md hover:bg-gray-100 px-8 py-4">Additionally (or also)</td>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">In order to</td>
                            <td className="shadow-md  rounded-r-md hover:bg-gray-100 px-8 py-4">To</td>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">In the first place</td>
                            <td className="shadow-md  rounded-r-md hover:bg-gray-100 px-8 py-4">First</td>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">A considerable number</td>
                            <td className="shadow-md  rounded-r-md hover:bg-gray-100 px-8 py-4">Many</td>

                        </tr>
                        <tr
                            className=""
                            tabindex="0"
                        >
                            <td className="shadow-md rounded-l-md hover:bg-gray-100 px-8 py-4">Whether or not</td>
                            <td className="shadow-md  rounded-r-md hover:bg-gray-100 px-8 py-4">Whether or not</td>

                        </tr>
                    </table>

                    <span className='select-none font-bold'>Proof Reading:- You should have plenty of time for proof reading, to make sure that you did not make any errors.</span>
                    <p className='mt-2 mb-2'>Dissertations require a wide range of planning and research skills. In today's tech-savvy era, myriads have time management issues, for them, we help you to guide about dissertation. Our supervisors help you to submit your work in a committed time. Our experts do strong research with high-quality academic writing which help you to score well.
                    </p>
                    <span className='select-none font-bold'>Note:-You should also choose a topic that you already know something about so that you already have a frame of reference for your literature search and some understanding and interest in the theory behind your topic.
                    </span>
                    <div className="hidden select-none  mt-5  w-full md:block md:w-auto ">
                        <Link
                            to="/ApplyOnline"
                            className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-3 px-6   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group">
                            <span
                                className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                            <span
                                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative  group-hover:text-white text-2xl ">
                                Hire Experts
                            </span>
                        </Link>
                    </div>
                </div >
            </div >
        </>
    )
}

export default DeceratationSection