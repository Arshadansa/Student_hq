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
  const [recentPosts, setRecentPosts] = useState([]); // Add state for recent posts

  useEffect(() => {



    const recentPostsQuery = query(collection(db, 'posts'), orderBy('date', 'desc'), limit(3));
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

      unsubscribeRecentPosts();
    };
  }, [id]);


  return (
    <>

      <div className="">
        <div className="flex pt-20  flex-col justify-center text-center">

          <div>
            <div className="">
              <span className=" text-primary text-2xl font-bold text-md">
                STUDENT HQ UPDATES
              </span>
            </div>
            <div className="pt-4">
              <span className=" text-black font-bold text-2xl  sm:text-5xl ">
                Our Latest Blogs
              </span>
            </div>

            <div  className="flex flex-wrap justify-center md:justify-start lg:flex-nowrap m-3 lg:pr-24 lg:pl-24 lg:pt-4 lg:pb-20">
              {recentPosts.map((recentPost) => (
                <div className="w-full md:w-1/2 lg:w-1/3 p-3 md:pt-16 md:pb-20 rounded-lg" key={recentPost.id}>
                  <div className="rounded-lg aspect-w-16 aspect-h-9">
                    <img
                      className="object-cover rounded-3xl w-full h-[240px]"
                      src={recentPost.image}
                      alt={recentPost.title}
                    />
                  </div>

                  <div className="mt-5 mb-3 text-left">
                    <div className="font-semibold">
                      {recentPost.date}
                    </div>
                    <div className="text-2xl font-semibold">
                      {recentPost.title}
                    </div>
                  </div>
                  <div className="text-primary text-left">
                    <button onClick={() => handleReadMore(recentPost.id)} type="button">Read More</button>
                  </div>
                </div>
              ))}
            </div>

          </div>




        </div>
      </div>






    </>
  );
};

export default Blog;
