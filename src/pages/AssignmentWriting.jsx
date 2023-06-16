import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import StudyInIndia from './StudyInIndia'
import AssignementSection from '../Components/AssignementSection'


function AssignmentWriting() {
    return (
        <>
            <Navbar />
            <AssignementSection />
            <div className=" bg-hotpink pt-16 pt flex flex-col  justify-center">
                <div className="flex flex-col justify-center text-center">
                    <div className="pt-0">
                        <span className=" text-black font-bold text-2xl  sm:text-5xl ">
                            Why Choose Us
                        </span>
                    </div>
                </div>

                <div className="flex flex-row p-20  flex-wrap justify-center">
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/on-time.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    On time Delivery
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    we Have 100% on-time  aasignment delivery rate to our customer.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/expert.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    5000+ PHD Experts
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    we are  poppular because of our 5000+ expert team  who  help you out.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/customer-service.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    24/7 Live  Support
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    we are  available to take  your doubts 24/7.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/bookshelf.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    Service for All Subects
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    we have many experts who are master in all subjects.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/best-price.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    Best Price Guranteed
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    we  assured you that our prices are afforadable as compared to other assignment platform.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row mx-5 w-96 justify-center justify-items-center py-8">
                        <div className="grid   justify-center justify-items-center ">
                            <div className="h-fit">
                                <img
                                    className="h-20"
                                    src="https://studenthq.in/images/flag.png"
                                    alt=""
                                />
                            </div>
                            <div className=" font-bold text-2xl">
                                <h2 className="">
                                    Plagiarism For Free
                                </h2>
                            </div>
                            <div className="">
                                <h2 className="text-center text-gray-500">
                                    Our assignment come  with  100% free Plagiarism
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-24 bg-primary flex justify-center py-6'>
                    <div className="hidden  w-full md:block md:w-auto ">
                        <a href="#_"
                            className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-2 px-6   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group" >
                            <span
                                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative  text-2xl ">
                                Book Your Assignment Now
                            </span>
                        </a>
                    </div>
                </div>
            </div >
            <div className="flex justify-center bg-fourth bg-background   align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default AssignmentWriting