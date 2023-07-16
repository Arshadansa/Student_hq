import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyBU0KUhO-qNDxYIYo-h0ShU4PBRUgFLTcE",
    authDomain: "studenthq-9ddfb.firebaseapp.com",
    projectId: "studenthq-9ddfb",
    storageBucket: "studenthq-9ddfb.appspot.com",
    messagingSenderId: "668174943946",
    appId: "1:668174943946:web:ffc357daf7db0de2135633",
    measurementId: "G-GQSM2XNMQK"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postRef = doc(db, 'posts', id);
    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setPost(data);
      }
    });

    return () => unsubscribe();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, category, content, image, author, tags, date, time } = post;

  return (
    <>

  

      <Navbar />
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
            <div className="px-8 py-6">
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
