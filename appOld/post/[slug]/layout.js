import React from 'react';

const LayoutBlog = ({ children, params }) => {
  return (
    <div>
      <h1>Post Layout</h1>
      {children}
    </div>
  );
};

export default LayoutBlog;
