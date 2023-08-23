import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import StudyInIndia from './StudyInIndia'
import AssignementSection from '../Components/AssignementSection'
import ChooseUs from '../Components/ChooseUs'
import { Link } from 'react-router-dom'


function AssignmentWriting() {
    return (
        <>
            <Navbar />
            <AssignementSection />
            <div className="lg:pt-12 select-none pt-10 flex flex-col  justify-center">
                <div className="flex flex-col justify-center text-center">
                    <div className="pt-0">
                        <span className=" text-black font-bold lg:text-4xl text-4xl   ">
                            Why Choose Us
                        </span>
                    </div>
                </div>

                <ChooseUs />
                <div className='lg:w-full text-center h-24 bg-primary lg:flex lg:justify-center py-6'>
                    <div className="  lg:w-full md:block md:w-auto ">
                        <Link
                            to="/ApplyOnline"
                            className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-2 px-6   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group" >
                            <span
                                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative text-lg md:text-2xl lg:text-lg  ">
                                Book Your Assignment Now
                            </span>
                        </Link>
                    </div>
                </div>
            </div >
            <div className="flex justify-center bg-fourth  align-middle w-full lg:first-letter:h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default AssignmentWriting