import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-20">
          <div className="w-full md:w-3/4 pr-4">

            <div className="my-8">
              <h2 className="text-6xl font-bold text-black">Top Colleges in India</h2>
              <div className='ml-2 text-gray text-xl flex gap-5 my-3'>
                <p className=" ">Date: July 16, 2023</p>
                <p className="">Author: John Doe</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden">
                <img
                  src="https://static.theprint.in/wp-content/uploads/2023/01/Iyer.jpg"
                  alt="College"
                  className="w-full h-96 object-cover object-center"
                />
              </div>
            </div>
            <div className="px-8 py-6">
              <div className="mt-6">
                <p className="text-gray-700">
                  When it comes to higher education, India boasts some of the most prestigious and renowned colleges in the world. These institutions offer a wide range of academic programs and cutting-edge research opportunities, attracting students from both within the country and abroad.
                </p>
                <p className="mt-4 text-gray-700">
                  One of the top colleges in India is ABC University. Known for its excellent faculty and state-of-the-art facilities, ABC University provides students with a conducive learning environment. The university also offers a diverse range of courses across various disciplines, allowing students to pursue their academic interests.
                </p>
                <p className="mt-4 text-gray-700">
                  Another noteworthy college is XYZ Institute of Technology. Renowned for its engineering programs, XYZ Institute of Technology equips students with the necessary knowledge and skills to excel in the field. The institute's strong industry connections and practical approach to education ensure that graduates are well-prepared for the job market.
                </p>
                <p className="mt-4 text-gray-700">
                  Apart from these institutions, there are many other top colleges in India that offer outstanding educational opportunities. From prestigious universities to specialized institutes, students have a wide range of options to choose from based on their interests and career goals.
                </p>
                <p className="mt-4 text-gray-700">
                  In conclusion, India's top colleges provide a rich and diverse educational landscape. With their focus on academic excellence, research opportunities, and industry collaborations, these institutions play a crucial role in shaping the future leaders of various fields.
                </p>
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

          
          <div className="w-full md:w-1/4 mt-40 bg-white p-10 rounded-[35px]">
            <div className="px-4 py-6">
              <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
              <div className="bg-white rounded">
                <div className="flex items-center mb-4">
                  <div className="rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Post 1"
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Post 1</h3>
                    <p className="text-gray-700">Date: July 15, 2023</p>
                    <p className="text-gray-700">Author: Jane Smith</p>
                  </div>
                </div>
              </div>

              <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

              <div className="bg-white rounded">
                <div className="flex items-center mb-4">
                  <div className="rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Post 1"
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Post 2</h3>
                    <p className="text-gray-700">Date: July 15, 2023</p>
                    <p className="text-gray-700">Author: John Doe</p>
                  </div>
                </div>
              </div>

              <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

              <div className="bg-white rounded">
                <div className="flex items-center mb-4">
                  <div className="rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Post 1"
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Post 3</h3>
                    <p className="text-gray-700">Date: July 15, 2023</p>
                    <p className="text-gray-700">Author: Jane Smith</p>
                  </div>
                </div>
              </div>

              <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

              {/* Add more recent posts */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
