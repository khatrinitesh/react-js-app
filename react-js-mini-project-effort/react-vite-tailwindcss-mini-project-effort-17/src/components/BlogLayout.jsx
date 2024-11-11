import React from 'react';
import { motion } from 'framer-motion';
import {blogPosts} from '../constants/blogData';

const BlogLayoutComp = () => {
  return (
    <>
      <BlogLayoutada/>
    </>
  );
}

export default BlogLayoutComp;

const BlogLayoutada = () => {
    return (
      <div className="blog-container" style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <div
          className="blog-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}  // Start with the post invisible and slightly below
              animate={{ opacity: 1, y: 0 }}  // Fade in and move to the correct position
              transition={{ duration: 0.5, delay: 0.1 * post.id }}  // Delay based on the post index
              whileHover={{
                scale: 1.05,  // Slightly scale up on hover
                backgroundColor: '#f0f0f0',  // Change background color on hover
              }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',  // Smooth color transition
              }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold' }}>{post.title}</h3>
                <p style={{ fontSize: '16px', color: '#555' }}>{post.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
