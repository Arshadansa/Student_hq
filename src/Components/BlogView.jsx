import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Blog = ({ postObject }) => {
  const { title, category, content, image, author, tags, date, time } = postObject;

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-20">
          <div className="w-full md:w-3/4 pr-4">
            <div className="my-8">
              <h2 className="text-6xl font-bold text-black">{title}</h2>
              <div className='ml-2 text-gray text-xl flex gap-5 my-3'>
                <p className=" ">Date: {date}</p>
                <p className="">Author: {author}</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden">
                <img
                  src={image}
                  alt="College"
                  className="w-full h-96 object-cover object-center"
                />
              </div>
            </div>
            <div className="px-8 py-6 ">
              <div className="mt-6">
                <div className="text-gray-700 overflow-auto" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="flex items-center mt-6">
                  <p className="text-gray-700 mr-4">Share this post:</p>
                  <div className="flex space-x-2">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">
                      <FaPinterest size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
