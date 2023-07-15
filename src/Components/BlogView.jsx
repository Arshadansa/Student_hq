import React from 'react';

const BlogView = ({ blogPost }) => {
  const { title, date, image, content } = blogPost;

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="md:w-3/4">
        <div className="mb-6">
          <h1 className="text-2xl bg-black font-bold mb-2 sm:text-4xl">{title}</h1>
          <div className="text-gray-500 mb-4">{date}</div>
          {image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img src={image} alt="Blog Post" className="w-full h-auto" style={{ aspectRatio: '16/9' }} />
            </div>
          )}
          <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
      <div className="md:w-1/4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Other Posts</h2>
          {/* Render other posts here */}
        </div>
      </div>
    </div>
  );
};

export default BlogView;
