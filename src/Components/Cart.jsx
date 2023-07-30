import React from 'react'

function Cart() {
    return (
        <div className='lg:w-full  md:w-[765px] lg:h-66 flex  bg-third justify-between lg:px-20 lg:py-3 '>
            <div className='lg:p-11  p-5 text-white lg:mt-4'>
                <span className='lg:text-4xl md:text-3xl text-2sxl font-medium ' >
                    Get A Summarized Version of your Research
                </span>
                <p className='mt-1'>
                    We are happy to help you in synopsis writing.
                </p>
                <div className="mt-4 lg:w-full md:block md:w-auto ">
                    <a href="#_"
                        className="relative bg-white inline-flex  items-center justify-center overflow-hidden text-x  py-1 px-4   font-sans tracking-tighter shadow-md text-black border-[1px] border-gray-100 rounded group">
                        <span
                            className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                        <span
                            className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                        <span className="relative  group-hover:text-white text-xl ">
                            Get a Quote
                        </span>
                    </a>
                </div>
            </div>
            <div className='hidden md:block lg:mr-20'>
                <img className="lg:h-[300px] md:h-[200px]" src="https://studenthq.in/images/syno.webp" alt="" />
            </div>
        </div>
    )
}

export default Cart