import React from 'react';
import BlogPost from './BlogPost/BlogPost';
import './BlogReferences.css';

const BlogReferences = ({ blogPosts }) => {
  return (
    <>
        <h2 className='blog-header'>Blog References</h2>
        <div className="blog-references">
        
        {blogPosts?.map((blogPost, index) => (
            <BlogPost 
            key={index} 
            title={blogPost.title} 
            author={blogPost.author} 
            date={blogPost.date} 
            summary={blogPost.summary} 
            url={blogPost.url} 
            />
        ))}
        </div>
    </>
  );
};

export default BlogReferences;
