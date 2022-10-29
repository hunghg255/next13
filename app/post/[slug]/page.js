import React from 'react';

const Blog = async ({ params, searchParams }) => {
  console.log(params, searchParams);
  const postDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  ).then((r) => r.json());

  return (
    <>
      <h1>{postDetail.title}</h1>
    </>
  );
};

export default Blog;
