import React from "react";
import Narbar from "../Components/Navbar";
import { motion } from 'framer-motion';
import Footer from "../Components/Footer";
import { useNavigate  } from 'react-router-dom';
import CourseCard from "../Components/CourseCard";

function Blog() {

  const handleReadMore = (postId) => {
    navigate(`/blog-post/${postId}`); // Navigate to the dynamic blog post page
  };

  const navigate = useNavigate(); 
  const blogPosts = [
    {
      id: 1,
      title: 'Tips for College Freshmen',
      image: 'https://placeimg.com/400/300/college',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ante vel erat.',
    },
    {
      id: 2,
      title: 'How to Choose the Right College Major',
      image: 'https://placeimg.com/400/300/university',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ante vel erat.',
    },
    {
      id: 3,
      title: 'Top Extracurricular Activities for College Applications',
      image: 'https://placeimg.com/400/300/campus',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ante vel erat.',
    },
    {
      id: 4,
      title: 'How to Manage Your Time in College',
      image: 'https://placeimg.com/400/300/books',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ante vel erat.',
    },
  ];


  return (
    <>
      <nav>
        <Narbar />
      </nav>


      <div className="bg-purple min-h-screen py-8 mt-20 m-4">
      <div className="container mx-auto">
        <h1 className="text-black text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-md  overflow-hidden hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="text-gray-700 mt-2">{post.content}</p>
                <button
                className="bg-primary hover:bg-hotpink text-white rounded-full py-2 px-4 mt-4 transition-colors duration-300"
                onClick={() => handleReadMore(post.id)}
              >
                Read More
              </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blog;
