import React, { useState, useEffect } from "react";
import Narbar from "../Components/Navbar";
import { motion } from 'framer-motion';
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc } from 'firebase/firestore';

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Blog() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const fetchedPosts = snapshot.docs.map((doc) => {
        const data = doc.data();
        console.log(doc.id);
        return {
          id: doc.id,
          ...data,
        };
      });
      setBlogPosts(fetchedPosts);
      setLoading(false); // Set loading to false once data is fetched
    });

    return () => unsubscribe();
  }, []);

  const handleReadMore = (postId) => {
    console.log(postId);
    navigate(`/new-page/${postId}`);
  };

  return (
    <>
      <nav>
        <Narbar />
      </nav>

      {loading ? ( // Display loader and background blur if loading is true
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "none", display: "block", shapeRendering: "auto" }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="23" r="13" fill="#93dbe9">
              <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
            </circle>
          </svg>
        </div>
      ) : (
        <div className="bg-purple select-none min-h-screen py-8 mt-20 m-4">
          <div className="container mx-auto">
            <h1 className="text-black text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={post.image} alt={post.title} className="w-full select-none h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                    <p className="text-gray-700 mt-2">{post.author}</p>
                    <button
                      className="bg-primary hover:bg-hotpink text-white rounded-full py-2 px-4 mt-4 transition-colors duration-300"
                      onClick={() => handleReadMore(post.id)}
                    >READ MORE</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blog;
