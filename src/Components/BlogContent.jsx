import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useParams } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, collection, query, orderBy, limit } from 'firebase/firestore';

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

    const handleReadMore = (postId) => {
        console.log(postId);
        navigate(`/new-page/${postId}`);
      };

    const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [recentPosts, setRecentPosts] = useState([]); // Add state for recent posts

  useEffect(() => {
    const postRef = doc(db, 'posts', id);
    const unsubscribePost = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setPost(data);
        setLoading(false); // Set loading to false once data is fetched
      }
    });

    

    const recentPostsQuery = query(collection(db, 'posts'), orderBy('date', 'desc'), limit(4));
    const unsubscribeRecentPosts = onSnapshot(recentPostsQuery, (snapshot) => {
      const fetchedPosts = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
        };
      });
      setRecentPosts(fetchedPosts);
    });

    return () => {
      unsubscribePost();
      unsubscribeRecentPosts();
    };
  }, [id]);

  if (loading) {

    const handleReadMore = (postId) => {
    console.log(postId);
    navigate(`/new-page/${postId}`);
  };
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }}
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="50" cy="50" r="45" fill="#93dbe9">
            <animate
              attributeName="r"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;1"
              values="45;0"
              keySplines="0 0.45 0.55 1"
              begin="0s"
            ></animate>
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="0.8s"
              calcMode="spline"
              keyTimes="0;1"
              values="1;0"
              keySplines="0.2 0 0.8 1"
              begin="0s"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  }

  const { title, category, content, image, author, tags, date, time } = post;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap mt-20">
          <div className="w-full md:w-3/4 pr-4">
            <div className="my-8">
              <h2 className="text-3xl md:text-6xl font-bold text-black">{title}</h2>
              <div className='ml-2 text-gray text-xl flex gap-5 my-3'>
                <p className="text-sm md:text-xl   ">Date: {date}</p>
                <p className=" text-sm md:text-xl">Author: {author}</p>
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
            <div className="">
              <div className="mt-6">
                <div className="text-gray-700 overflow-auto" dangerouslySetInnerHTML={{ __html: content }} />
                <div className="flex items-center px-10 py-2 mt-6">
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

          <div className="w-full h-fit md:w-1/4 mt-40 sticky top-20 right-0 bg-white rounded-[35px]">
  <div className="px-4 py-6">
    <h2 className="text-3xl font-bold mb-10">Recent Posts</h2>
    {recentPosts.map((recentPost) => (
      <div className="h-28 rounded mb-4" key={recentPost.id}>
        <div className="flex items-center mb-4">
          <div className="rounded w-1/3 overflow-hidden">
            <img
              src={recentPost.image}
              alt={recentPost.title}
              className="w-25 h-20 object-cover"
            />
          </div>
          <div className="ml-4 w-full">
            <button onClick={() => handleReadMore(recentPost.id)} className="transition-colors duration-300 border-none focus:outline-none">
            <p className="text-primary text-left hover:text-black  text-xl font-bold overflow-hidden -webkit-line-clamp-2 line-clamp-2">
    {recentPost.title}
  </p>
            </button>
            <p className="text-gray-700 text-sm">Date: {recentPost.date}</p>
            <p className="text-gray-700 text-sm">Author: {recentPost.author}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
