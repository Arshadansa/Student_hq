import React from 'react'
import onTime from "../image/on-time.png"
import expert from "../image/expert.png"
import customerservice from "../image/customer-service.png"
import bookshelf from "../image/bookshelf.png"
import bestprice from "../image/best-price.png"
import flag from "../image/flag.png"

function ChooseUs() {
    return (
        <div className=" p-12 flex-wrap justify-center">
            <div className='w-full flex-wrap md:flex-nowrap justify-center flex'>
                <div className="mb-6 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid   justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-20"
                                src={onTime}
                                alt="StuHq"
                            />
                        </div>
                        <div className="text-center  font-bold lg:text-2xl">
                            <h2 className="">
                                On time Delivery
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center   lg:text-lg  md:text-lg text-gray-500">
                                we Have 100% on-time  aasignment delivery rate to our customer.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mb-6 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid   justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-20"
                                src={expert}
                                alt="StuHq"
                            />
                        </div>
                        <div className="text-center font-bold lg:text-2xl">
                            <h2 className="">
                                5000+ PHD Experts
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center  lg:text-lgmd:text-lg md:text-lg text-gray-500">
                                we are  poppular because of our 5000+ expert team  who  help you out.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="lg:mb-14 md:mb-20    mb-4 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid     justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-20"
                                src={customerservice}
                                alt="StuHq"
                            />
                        </div>
                        <div className="text-center font-bold lg:text-2xl">
                            <h2 className="">
                                24/7 Live  Support
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center lg:text-lgmd:text-lg md:text-lg text-gray-500">
                                we are  available to take  your doubts 24/7.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap md:flex-nowrap justify-center'>
                <div className="lg:mb-12 mb-6 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid   justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-20"
                                src={bookshelf}
                                alt="StuHq"
                            />
                        </div>
                        <div className="text-center font-bold lg:text-2xl">
                            <h2 className="">
                                Service for All Subects
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center  lg:text-lgmd:text-lg md:text-lg text-gray-500">
                                we have many experts who are master in all subjects.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="lg:mb-12 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid   justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-20"
                                src={bestprice}
                                alt="StuHq"
                            />
                        </div>
                        <div className=" font-bold lg:text-2xl">
                            <h2 className="">
                                Best Price Guranteed
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center  lg:text-lgmd:text-lg md:text-lg text-gray-500">
                                we  assured you that our prices are afforadable as compared to other assignment platform.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="md:mb-16 lg:mb-20 flex flex-row mx-5 w-96 justify-center justify-items-center lg:py-8">
                    <div className="grid justify-center justify-items-center ">
                        <div className="h-fit">
                            <img
                                className="h-24"
                                src={flag}
                                alt="StuHq"
                            />
                        </div>
                        <div className=" font-bold lg:text-2xl">
                            <h2 className="">
                                Plagiarism For Free
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-center md:text lg:text-lgmd:text-lg md:text-lg text-gray-500">
                                Our assignment come  with  100% free Plagiarism
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs