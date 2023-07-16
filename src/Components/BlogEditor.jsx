import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlogView from '../Components/BlogView';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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

const BlogPostCreator = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [previewOpen, setPreviewOpen] = useState(false);
  const previewRef = useRef(null);

  const currentDate = new Date();
  const uniqueKey = uuidv4(); // Generate a unique key
  const postObject = {
    key: uniqueKey,
    title,
    category,
    content,
    image,
    author,
    tags: tags.split(',').map((tag) => tag.trim()),
    date: currentDate.toLocaleDateString(),
    time: currentDate.toLocaleTimeString(),
  };
  console.log(postObject);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleCreatePost = async () => {
    const currentDate = new Date();
    const postObject = {
      key: uniqueKey,
      title,
      category,
      content,
      image,
      author,
      tags: tags.split(',').map((tag) => tag.trim()),
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
    };  
    try {
      await addDoc(collection(db, 'posts'), postObject);
      console.log('Post created successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handlePreviewOpen = () => {
    setPreviewOpen(true);
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      [{ link: 'link' }],
      ['image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'color',
    'background',
    'link',
    'image',
    'video',
  ];

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {!previewOpen ? (
          <div className="max-w-screen-xl w-full bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Create a Blog Post</h1>
            <div className="mb-4">
              <label htmlFor="title" className="font-bold mb-2 block">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="font-bold mb-2 block">
                Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="font-bold mb-2 block">
                Image Link:
              </label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={handleImageChange}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="font-bold mb-2 block">
                Author:
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={handleAuthorChange}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tags" className="font-bold mb-2 block">
                Tags (separated by commas):
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={handleTagsChange}
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="font-bold mb-2 block">
                Content:
              </label>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                className="border rounded"
              />
            </div>
            <div className="bg-green-300 p-4 text-center fixed top-0 right-0 gap-5">
              <button
                type="button"
                onClick={handleCreatePost}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Create Post
              </button>
              <button
                type="button"
                onClick={handlePreviewOpen}
                className="ml-2 bg-gray-500 text-white py-2 px-4 rounded"
              >
                Preview
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-screen-xl w-full rounded-lg mx-auto">
            <h2 className="text-2xl mt-20 font-bold mb-4">Blog Preview</h2>
            <BlogView postObject={postObject} />
            <button
              type="button"
              onClick={handlePreviewClose}
              className="bg-red-500 fixed top-10 right-10 hover:bg-red-600 text-white py-2 px-4 rounded z-10"
            >
              Close Preview
            </button>
          </div>
        )}
      </div>
      <div ref={previewRef} className="mt-10"></div>
      {!previewOpen && (
        <button
          type="button"
          onClick={handlePreviewOpen}
          className="fixed bottom-5 right-5 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded z-10"
        >
          Show Preview
        </button>
      )}
    </>
  );
};

export default BlogPostCreator;
