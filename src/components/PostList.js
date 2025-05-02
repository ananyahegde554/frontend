import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
import './PostList.css';
const API_URL = "http://localhost:5000/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts`);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };;
    fetchPosts();
  }, []);

  // In your handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${API_URL}/posts`, { 
      title, 
      content 
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setTitle('');
    setContent('');
    // Refresh posts after successful submission
    const res = await axios.get(`${API_URL}/posts`);
    setPosts(res.data);
  } catch (err) {
    console.error("Error submitting post:", err);
  }
};

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Your thoughts..."
            required
          />
          <button type="submit">Publish</button>
        </form>
      </div>
      <div className="posts-container">
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;