import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogPostCreator = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');

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

  const handleCreatePost = () => {
    const currentDate = new Date();
    const postObject = {
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
    // You can perform further actions with the postObject, such as sending it to the server.
  };

  const handlePreviewOpen = () => {
    const previewWindow = window.open('', '_blank');
    previewWindow.document.write('<html><head><title>Blog Preview</title></head><body>');
    previewWindow.document.write('<div style="padding: 20px;">');
    previewWindow.document.write('<h2>Preview</h2>');
    previewWindow.document.write(`<h1>${title}</h1>`);
    previewWindow.document.write(`<p><strong>Category:</strong> ${category}</p>`);
    previewWindow.document.write(`<div>${content}</div>`);
    previewWindow.document.write('</div></body></html>');
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'],
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
        <div className="text-center">
          <button
            type="button"
            onClick={handleCreatePost}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Create Post
          </button>
          <button
            type="button"
            onClick={handlePreviewOpen}
            className="ml-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCreator;
