import React from "react";

const Posts = ({ posts }) => {
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <>
          <li key={post.id} className="list-group-item">
            {post.name} {post.line_name}
          </li>
          <li key={post.id} className="list-group-item">
            {post.solution_name} {post.modified_on}
          </li>
        </>
      ))}
    </ul>
  );
};

export default Posts;
