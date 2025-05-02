import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post }) => (
  <div className="blog-container">
    <div className="blog-header">
      <span className="blog-category">thoughts</span>
      <h1>{post.title}</h1>
    </div>
    <div className="blog-content">
      <p>{post.content}</p>
      <div className="blog-divider"></div>
      <div className="blog-meta">
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <span>©yourname</span>
      </div>
    </div>
  </div>
);

export default BlogPost;