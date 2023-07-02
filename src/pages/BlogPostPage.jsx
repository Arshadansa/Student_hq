import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { postId } = useParams();
  console.log(postId);

  // Retrieve the blog post based on the postId from your blogPosts array

  return (
    <div>
      <p>postId</p>
    </div>
  );
};

export default BlogPostPage;
