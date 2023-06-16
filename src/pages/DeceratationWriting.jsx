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

            <div className='flex justify-center items-center p-10'>
                <div className='bg-red-400 w-[1600px] h-[290px] rounded-lg flex flex-col items-center pl-10 pr-10 pt-6 pb-6'>
                    <div className='flex justify-center items-start w-full '>
                        <span className='text-white text-5xl p-4 mb-3 font-bold'>We Cover the <span className=' font-medium'>follwing</span> topics. </span>
                    </div>
                    <div className="flex  justify-center items-center w-full h-full">
                        {/* <div className="steps text-xl flex items-center h-fit ">

                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 text-white text-xl bg-orange-300">1</span >
                                <p>Thesis</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>

                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">2</span >
                                <p>Book Review</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">3</span >
                                <p>Dissertations</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">4</span >
                                <p>Abstracts</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">5</span >
                                <p>Book Report</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">6</span >
                                <p>Conference Papers</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">7</span >
                                <p>Essay</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">8</span >
                                <p>Sop Writing Service</p>
                            </div>
                            <div >
                                <img width={"50px"} src="https://img.freepik.com/icones-gratuites/moins_318-312738.jpg" />
                            </div>
                            <div className='flex flex-col'>
                                <span className="border rounded-full p-5 pl-7 pr-7 w-fit text-white text-xl bg-orange-300">9</span >
                                <p>Research Papers</p>
                            </div>

                        </div> */}
                        {/* <ul className="steps text-md text-white">
                            <li className="step step-primary">Thesis</li>
                            <li className="step step-primary">Book Review</li>
                            <li className="step step-primary">Dissertations</li>
                            <li className="step step-primary">Abstracts</li>
                            <li className="step step-primary">Book Report</li>
                            <li className="step step-primary">Conference Papers</li>
                            <li className="step step-primary">Essay</li>
                            <li className="step step-primary">Sop Writing Service</li>
                            <li className="step step-primary">Research Papers</li>
                        </ul> */}
                    </div>

                    <div className="hidden  mt-5  w-full md:block md:w-auto ">
                        <a href="#_"
                            className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-3 px-6   font-sans tracking-tighter text-black  border-gray rounded-2xl group">
                            <span
                                className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                            <span
                                className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                            <span className="relative  group-hover:text-white text-2xl ">
                                Hire Experts
                            </span>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex justify-center bg-fourth bg-background   align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DeceratationWriting