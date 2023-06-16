import React from 'react'

function CourseCard() {
  return (
 <>
        <div className=' shadow bg-white  rounded-3xl  w-full  sm:w-[95%]  relative'>
        <div className=''>
          <img className=' object-fill rounded-t-3xl  h-60 w-96' src="https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='flex flex-col w-fit m-4'>
          <h1 className='my-2 text-lg text-gray font-thin'>BCA</h1>
          <p className=' font-bold text-xl'>BACHELOR OF COMPUTER APPLICATIONS</p>
        </div>

   <div className='flex flex-row  p-4 '>

 
   <div class="flex  items-center  columns-2   rounded-lg w-auto space-x-1 lg:space-x-2">
   <h1 className=' sm:Block'>Ratings : </h1>
  <button class="mr-1">
	<svg class=" text-yellow-500 w-5 h-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
	  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/>
	</svg>
  </button>

  <span class="text-slate-400   font-medium">
	9.5 <a href="#" class="font-normal">(129 reviews)</a>
  </span>
</div>



   </div>

{/* slider */}
   <div class=" shadow rounded-3xl absolute top-0 w-full h-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-500 ease-in-out  hover:pl-10 hover:pr-6 bg-gray-50 group">
       <div className='absolute bottom-0 left-0 w-full h-0 overflow-hidden transition-all  duration-200 ease-in-out bg-white group-hover:h-full'> 

       <div className='flex flex-col m-4'>
          <h1 className='my-2 text-gray text-lg font-thin'>BCA</h1>
          <h1 className=' my-2 font-bold text-xl  font '>BACHELOR OF COMPUTER APPLICATIONS</h1>
          <p className='my-4  text-bgDark font-medium'>We have professional alliance's with leading Universities Colleges around the world.</p>
        </div>

          <div className=' flex self-center m-3'>
          <a href="#_" class="relative rounded-3xl inline-flex items-center self-center  px-6 py-3 overflow-hidden font-medium transition-all bg-white  justify-center  hover:bg-white  ">
<span class="w-48 h-48 rounded-3xl rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">APPLY NOW</span>
</a>
          </div>
      </div>
   </div>
</div>



  </>
  )
}

export default CourseCard