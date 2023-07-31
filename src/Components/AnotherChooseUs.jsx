import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ChooseUs from './ChooseUs'

function AnotherChooseUs() {

    return (
        <div className="select-none bg-hotpink lg:pt-16 lg:pb-16  flex flex-col  justify-center">
            <ChooseUs />
            <div className=' md:w-[765px] m-3 lg:w-[100%]  select-none lg:h-96 flex justify-center'>
                <div className='bg-five lg:w-[1300px] md:w-[750px] md:flex justify-between   md:h-auto rounded-3xl'>
                    <div className='lg:p-16 p-12'>
                        <p className='text-white text-2xl lg:text-[45px]'><span className='font-bold'>Without Us</span> Where you will Lack.</p>

                        <div className=' text-white mt-4'>

                            <div className='flex gap-4'>
                                <div className=' flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Broad topic preference</span>
                                </div>
                                <div className='ml-1 md:ml-0 flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Interruption in degree</span>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Inconsistent Knowledge level</span>
                                </div>
                                <div className='mr-9  md:mr-0 flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Fear on PhD career</span>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Long term writing</span>
                                </div>
                                <div className='ml-8  md:ml-0 flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Fequent rejection by guide</span>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Violation of university guidelines</span>
                                </div>
                                <div className='mr-4  md:mr-0 flex gap-4'>
                                    <AiOutlineArrowRight size={24} className='text-white' />
                                    <span>Data collection problems</span>
                                </div>
                            </div>
                            <div className="mt-4 ml-6 lg:ml-0 lg:w-full  md:w-auto ">
                                <a href="#_"
                                    className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-1 px-4   font-sans tracking-tighter text-black border-[1px] border-gray shadow-md rounded group">
                                    <span
                                        className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                                    <span
                                        className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                                    <span className="relative   group-hover:text-white text-lg ">
                                        Book Your Assignment Now
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block md:mr-5 lg:mr-32 mt-16 '>
                        <img className='h-[230px] md:h-[200px]' src="https://studenthq.in/images/synops-trans.png" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AnotherChooseUs