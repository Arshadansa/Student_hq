import React from "react";
import Faq from "./Faq";
import RecentPosts from "./RecentPosts";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Modal } from "flowbite-react";
import { MdPlayCircleOutline } from "react-icons/md";
import { useState } from "react";

function Bottom() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardsData = [
    {
      imgSrc: 'https://themeim.com/demo/eduplan/assets/img/icon/idea.png',
      title: 'Streamlined Application Process',
      description: 'Simplify the college application process and ensure a smooth submission of your applications.',
      link: '#',
    },
    {
      imgSrc: 'https://themeim.com/demo/eduplan/assets/img/icon/coversation.png',
      title: 'Financial Aid and Scholarships',
      description: 'Explore various financial aid options and scholarship programs to support your college education.',
      link: '#',
    },
    {
      imgSrc: 'https://themeim.com/demo/eduplan/assets/img/icon/emergency.png',
      title: 'Career Guidance and Counseling',
      description: 'Receive expert guidance and counseling to choose the right career path and make informed decisions.',
      link: '#',
    },
  ];
  const category = [

    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/canda.png',
      name: 'Agriculture & Foresty',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/usa.png',
      name: 'Science & Professional',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/australia.png',
      name: 'Art, Design & Culture',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/span.png',
      name: 'Business & Management',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/franch.png',
      name: 'Computer Science & IT',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/swideen.png',
      name: 'Education & Training',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/italy.png',
      name: 'Engineering & Technology',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/span.png',
      name: 'Hospitality & Sports',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/franch.png',
      name: 'Journalism & Media',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/swideen.png',
      name: 'Medicine & Health',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/italy.png',
      name: 'Law',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/span.png',
      name: 'Social Science',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/franch.png',
      name: 'Humanities',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/destination/swideen.png',
      name: 'Environmental Studies',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/foresty.png',
      name: 'Agriculture & Foresty',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/science.png',
      name: 'Science & Professional',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/art.png',
      name: 'Art, Design & Culture',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/business.png',
      name: 'Business & Management',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/pc.png',
      name: 'Computer Science & IT',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/book.png',
      name: 'Education & Training',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/click.png',
      name: 'Click',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/french-fry.png',
      name: 'French Fry',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/news-paper.png',
      name: 'Journalism & Media',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/first-aid-kit.png',
      name: 'Medicine & Health',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/enverment.png',
      name: 'Environmental Studies',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/humanity.png',
      name: 'Humanities',
    },
    {
      link: 'https://themeim.com/demo/eduplan/assets/img/sections/desipline/recicle.png',
      name: 'Recycle',
    },
  ];

  console.log(category);

  return (
    <>
      {/* about us...section */}



      {/* category...section */}
      <div className="flex flex-col p-2 sm:p-10  sm:m-10 m-4  flex-wrap">
        <div className="lg:ml-1">
          <p className="font-bold text-primary">CATEGORIES</p>
        </div>
        <div>
          <h1 className=" mt-3 lg:ml-2  font-bold text-xl md:text-2xl lg:text-5xl text-black">
            Popular Discipline & Courses
          </h1>
        </div>

        <div className="flex flex-row flex-wrap my-10 justify-center">
          {category.map((categories, item) => {
            return (
              <div
                key={item}
                className="flex m-2  flex-col justify-center   border-solid border border-gray rounded-xl  hover:border-primary w-[9rem]  sm:w-[11rem] sm:h-60 h-[12rem]"
              >
                <div className=" self-center">
                  <img
                    className="h-20 w-20 "
                    src={categories.link}
                    alt=""
                  />
                </div>

                <div className="m-4">
                  <h1 className=" text-xl text-center">{categories.name}</h1>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      {/* //stpes to get your destionation section*/}

      <div className="flex flex-row m-3 justify-center flex-wrap bg-fourth ">
        {
          cardsData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm py-[2rem] px-10 h-[28rem] bg-white rounded-3xl shadow-2xl w-[100rem] m-3 sm:h-[23rem]"
            >
              <div className="px-4">
                <img
                  className="my-3 text-gray-500 h-10 sm:h-[4rem]"
                  src={card.imgSrc}
                  alt=""
                />
                <a href={card.link}>
                  <h5 className="mb-5 text-2xl font-semibold">{card.title}</h5>
                </a>
                <p className="mb-3 font-normal text-black">{card.description}</p>
                <a
                  href={card.link}
                  className="no-underline inline-flex items-center text-blue-600 hover:underline text-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))
        }

      </div>

      <section className=" py-20">
        <div className="container mx-auto px-4">

          <div className="lg:w-full flex flex-col items-center mb-16 justify-center">
            <div className="lg:text-5xl text-lg lg:w-96 font-medium text-black ">Accommodation </div>
            <div className="text-lg font-normal text-gray-500 lg:w-96  lg:ml-24 ">"Your Home Away From Home"</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
              <img src="https://shorturl.at/fsNX3" alt="Standard Room" className="w-full object-cover h-48" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Standard Room</h3>
                <p className="mb-4 text-gray-700">Our cozy Standard Room offers a comfortable stay with modern amenities. Perfect for solo travelers or couples looking for a budget-friendly option.</p>
                <a href="tel:+919027886029" className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
              <img src="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1900,h_823,c_limit,e_sharpen,e_improve,e_vibrance:60/v1/propertyimages/3/312235/xspknzflk57dbbiger2x" alt="Deluxe Room" className="w-full object-cover h-48" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Deluxe Room</h3>
                <p className="mb-4 text-gray-700">Indulge in luxury and sophistication in our Deluxe Rooms. Featuring elegant decor, a spacious layout, and premium amenities, these rooms provide a truly memorable experience.</p>
                <a href="tel:+919027886029" className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
                  Book Now
                </a>
              </div>
            </div>

            <div className="bg-purple-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg animate-fade-in">
              <img src="https://shorturl.at/muEHP" alt="Suite" className="w-full object-cover h-48" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Suite</h3>
                <p className="mb-4 text-gray-700">Experience ultimate luxury in our spacious Suites. These well-appointed rooms offer stunning views, a separate living area, and all the amenities you need for a perfect stay.</p>
                <a href="tel:+919027886029" className="text-purple-600 font-semibold hover:underline bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* {education...section} */}
      <RecentPosts />
      <section className="m-3  ">
        <div className="flex flex-col   flex-wrap  sm:flex-nowrap md:flex-nowrap sm:justify-center sm:align-middle sm:mt-8">
          <div className=" uppercase  text-lg mb-4  flex justify-center text-primary font-bold">
            <span>FeedBacks</span>
          </div>
          <div className="mb-3 flex flex-nowrap flex-grow pl-10  justify-center text-5xl font-bold">
            <h1>Our Student shared their</h1>
          </div>
          <div className="flex flex-nowrap sm:justify-center pl-10   text-5xl font-bold">
            <h1>visa success stories</h1>
          </div>
        </div>

        <div className="mt-14 mb-20  justify-center md:justify-center sm:justify-start w-full h-full gap-3 flex flex-wrap sm:flex-row  ">
          <div className='flex flex-wrap justify-center  max-w-[320px]  py-[2rem] h-[28rem] bg-white rounded-3xl shadow-8xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-01.png")] bg-cover bg-no-repeat '>
            <div className="flex justify-center mt-8 border-none border-white h-48 w-28 items-end">
              <MdPlayCircleOutline
                size={100}
                onClick={openModal}
                className=" text-white cursor-pointer shadow-indigo-600"
              />
            </div>
            <div className="flex flex-col z-0 justify-end align-middle">
              <div className=" flex flex-wrap justify-center font-bold text-xl">
                <span className="text-white ">Annette black</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="border-gray-100 w-screen h-screen "
          >
            <div className="flex modal-content flex-col justify-center items-center w-screen h-screen">
              <div className="h-8  w-[950px] pr-3 flex items-center justify-end">
                <p
                  onClick={closeModal}
                  className="float-right text-black font-medium border-gray-100 cursor-pointer"
                >
                  X
                </p>
              </div>
              <ReactPlayer
                className=""
                controls="true"
                width={"950px"}
                height={"560px"}
                url="https://www.shutterstock.com/shutterstock/videos/1056759086/preview/stock-footage-top-ten-countdown-neon-light-numbers-from-to-laser-ray-appears-on-black-background.webm"
              />
            </div>
          </Modal>

          <div className='flex flex-wrap justify-center  max-w-[320px]  py-[2rem] h-[28rem] bg-white rounded-3xl shadow-8xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-02.png")] bg-cover bg-no-repeat '>
            <div className="flex justify-center mt-8 border-none border-white h-48 w-28 items-end">
              <MdPlayCircleOutline
                size={100}
                onClick={openModal}
                className=" text-white cursor-pointer shadow-indigo-600"
              />
            </div>
            <div className="flex flex-col z-0 justify-end align-middle">
              <div className=" flex flex-wrap justify-center font-bold text-xl">
                <span className="text-white ">Annette black</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="border-gray-100 w-screen h-screen "
          >
            <div className="flex flex-col justify-center items-center w-screen h-screen">
              <div className="h-8  w-[950px] pr-3 flex items-center justify-end">
                <p
                  onClick={closeModal}
                  className="float-right text-black font-medium border-gray-100 cursor-pointer"
                >
                  X
                </p>
              </div>
              <ReactPlayer
                className=""
                controls="true"
                width={"950px"}
                height={"560px"}
                url="https://www.shutterstock.com/shutterstock/videos/1056759086/preview/stock-footage-top-ten-countdown-neon-light-numbers-from-to-laser-ray-appears-on-black-background.webm"
              />
            </div>
          </Modal>

          <div className='flex flex-wrap justify-center  max-w-[320px]  py-[2rem] h-[28rem] bg-white rounded-3xl shadow-8xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-03.png")] bg-cover bg-no-repeat '>
            <div className="flex justify-center mt-8 border-none border-white h-48 w-28 items-end">
              <MdPlayCircleOutline
                size={100}
                onClick={openModal}
                className=" text-white cursor-pointer shadow-indigo-600"
              />
            </div>
            <div className="flex flex-col z-0 justify-end align-middle">
              <div className=" flex flex-wrap justify-center font-bold text-xl">
                <span className="text-white ">Annette black</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="border-gray-100 w-screen h-screen "
          >
            <div className="flex flex-col justify-center items-center w-screen h-screen">
              <div className="h-8  w-[950px] pr-3 flex items-center justify-end">
                <p
                  onClick={closeModal}
                  className="float-right text-black font-medium border-gray-100 cursor-pointer"
                >
                  X
                </p>
              </div>
              <ReactPlayer
                className=""
                controls="true"
                width={"950px"}
                height={"560px"}
                url="https://www.shutterstock.com/shutterstock/videos/1056759086/preview/stock-footage-top-ten-countdown-neon-light-numbers-from-to-laser-ray-appears-on-black-background.webm"
              />
            </div>
          </Modal>
          <div className='flex flex-wrap justify-center  max-w-[320px]  py-[2rem] h-[28rem] bg-white rounded-3xl shadow-8xl  w-[80rem]  sm:h-[28rem] bg-[url("https://themeim.com/demo/eduplan/assets/img/sections/students/student-04.png")] bg-cover bg-no-repeat '>
            <div className="flex justify-center mt-8 border-none border-white h-48 w-28 items-end">
              <MdPlayCircleOutline
                size={100}
                onClick={openModal}
                className=" text-white cursor-pointer shadow-indigo-600"
              />
            </div>
            <div className="flex flex-col z-0 justify-end align-middle">
              <div className=" flex flex-wrap justify-center font-bold text-xl">
                <span className="text-white ">Annette black</span>
              </div>
              <div>
                <span className="text-white font-bold">
                  University of Alberta ~ Canada
                </span>
              </div>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="border-gray-100 w-screen h-screen "
          >
            <div className="flex flex-col justify-center items-center w-screen h-screen">
              <div className="h-8  w-[950px] pr-3 flex items-center justify-end">
                <p
                  onClick={closeModal}
                  className="float-right text-black font-medium border-gray-100 cursor-pointer"
                >
                  X
                </p>
              </div>
              <ReactPlayer
                className=""
                controls="true"
                width={"950px"}
                height={"560px"}
                url="https://www.shutterstock.com/shutterstock/videos/1056759086/preview/stock-footage-top-ten-countdown-neon-light-numbers-from-to-laser-ray-appears-on-black-background.webm"
              />
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Bottom;
