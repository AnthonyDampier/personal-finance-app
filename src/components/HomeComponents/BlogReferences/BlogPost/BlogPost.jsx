import React from 'react';

const BlogPost = ({ title, author, date, summary, url }) => {
  return (
    <div className="blog-post">
    <div className='blog-info'>
      <h3>{title}</h3>
      <p className="blog-meta">By {author} on {date}</p>
      <p>{summary}</p>
    </div>
    {url && <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>}
    </div>
  );
};

export default BlogPost;
