import Link from "next/link";
import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <div>Posts</div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} >
              <a>
              <h1>{post.id}</h1>
              <h3>{post.title}</h3>
              </a>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 4),
    },
  };
}
