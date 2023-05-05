import React from 'react';
import HelloClient from '../../../src/components/HelloClient/HelloClient';
import { usePost } from '../../../src/store/post';

const Blog = async ({ params, searchParams }) => {
  const postDetail = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  ).then((r) => r.json());

  console.log(usePost.getState().data);

  return (
    <>
      <h1>{postDetail.title}</h1>

      <HelloClient title={postDetail.title} />
    </>
  );
};

export default Blog;
