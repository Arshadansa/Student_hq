import React from 'react'
import { Link } from 'react-router-dom'

function AssignementSection() {
    return (
        <>

            <div className="grid md:flex select-none max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        className="max-w-2xl mb-4 text-2xl lg:text-2xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-5xl dark: text-black">
                        Assignment Writing Service for erudite minds<br /></h1>
                    <p className="max-w-2xl  text-gray-500 lg:mb-8 md:text-xl lg:text-xl text-slate-900 font-normal ">  Get Custom Assignment Writing in Your budget</p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">


                        <div className="hidden md:mt-3 w-full md:block md:w-auto ">
                            <Link
                                to="/ApplyOnline"
                                className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  md:py-3 md:px-7  lg:py-3 lg:px-8   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group">
                                <span
                                    className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                                <span
                                    className="absolute inset-0 w-full h-full mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                <span className="relative  group-hover:text-white text-2xl ">
                                    Call to Our Experts
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className=" md:block  lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='md:h-[230px] md:w-[300px] lg:h-[410px] lg:w-[520px] lg:mb-3' src="https://o.remove.bg/downloads/8061104d-2df9-406d-bd17-7f08066160ea/creative-writing-assignment-isolated-cartoon-vector-illustration_107173-27606-removebg-preview.png" alt="hero image" />
                </div>

            </div>

            <div className='lg:w-full lg:h-32 lg:text-center md:flex md:w-full md:justify-around select-none text-white bg-primary lg:flex lg:justify-around   py-6 '>
                <div className="lg:w-fit mb-2 h-26 lg:ml-24">
                    <h1 className='lg:text-5xl text-3xl text-center font-bold'>2,11345</h1>
                    <div className='text-center lg:mt-2'>
                        <span className='text-lg font-light text-center px-6'>Delivered Orders</span>
                    </div>
                </div>
                <div className="lg:w-fit  mb-2  h-26 ">
                    <h1 className='lg:text-5xl text-3xl text-center font-bold'>5000+</h1>
                    <div className='text-center lg:mt-2'>
                        <span className='text-lg font-light text-center px-8'>Experts</span>
                    </div>
                </div>
                <div className="lg:w-fit  mb-2  h-26 lg:mr-28">
                    <h1 className='lg:text-5xl text-3xl text-center font-bold'>4.8/5</h1>
                    <div className='text-center lg:mt-2'>
                        <span className='text-xl font-light text-center px-3'>Client Rating</span>
                    </div>
                </div>
            </div>
            <div className='w-full  select-none  h-auto lg:p-10 flex flex-col justify-center align-middle'>
                <div className='flex md:text-3xl text-lg justify-center mt-6 lg:mb-10 lg:text-5xl font-semibold'>
                    <h1>Why Assignment Writing is Important</h1>
                </div>
                <div className='flex p-5 justify-center md:text-2xl  lg:text-xl text-justify lg:mx-24'>
                    <p>Writing assignments provide us with an opportunity to teach students to organize ideas, develop points logically, make explicit connections, elaborate ideas, argue points, and situate an argument in the context of previous research-all skills valued in higher education. If you avail of our assignment services, you will not save time but money only. Student will get 100% fresh writing. We offer assignment writing at very affordable prices. Assignment writing increases your academic score and boosts your knowledge. Whether you are a student of any college or school assignment writing is beneficial. Overall assignment writing has multiple benifits of growths and development of students. Assignment writing ensure the practical skills, time-management abilities, writing skills improve.
                        If, You have any assignment queries. then contact us. </p>
                </div>
                <div className='flex justify-start p-6 md:text-2xl text-lg text-justify mt-4 lg:mx-24'>
                    <p>Assignment Writing Services Provides Following benefits:-</p>
                </div>
                <div className='flex select-none  justify-start  p-8 lg:mx-24'>
                    <ul class="">
                        <li className='text-justify md:text-2xl mb-3 lg:text-lg'>
                            <div className='flex gap-2'>
                                <svg className="flex-shrink-0 w-5 mt-1 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd" /></svg>
                                <span className=' font-bold lg:w-[165px]  '>Improve skills:-</span>For a student , assignment writing improve lot of skills to students.While writing students develop a firm command over the topic which improve the practical knowledge.

                            </div>
                        </li>
                        <li className='text-justify md:text-2xl mb-3 lg:text-lg'>
                            <div className='flex gap-2'>
                                <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd" /></svg>
                                <span className=' font-bold lg:w-[445px]'>Improve Time Management:-</span>Assignment always come with up a deadline which improve the time managing  effectively, They will learn to schedule their time according to the priority. this whole journey will improve the time-management scheme.
                            </div>
                        </li>

                        <li className='text-justify md:text-2xl mb-3 lg:text-lg'>
                            <div className='flex gap-2'>
                                <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd" /></svg>
                                <span className='lg:w-[500px] font-bold'>Gain Knowledge and awareness:-</span>Students are provided with different assignemnts activities in such a way  that help them to know more about the topic deeply.therefore when students are writing they focus on each horizon and gain expertese.
                            </div>
                        </li>
                        <li className='text-justify md:text-2xl mb-3 lg:text-lg'>
                            <div className='flex gap-2'>
                                <svg className="flex-shrink-0  mt-1 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd" /></svg>
                                <span className=' font-bold'>Evaluation:-</span>The purpose of assignments to students is to analyze whether they have grasped much about that topic or not. It is a kind of evaluation process that ensures and makes out how much the student has learned or has he/she even grasped anything or not.
                            </div>
                        </li>
                    </ul>
                </div >
            </div >
        </>
    )
}

export default AssignementSection