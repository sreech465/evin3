import React from "react";

const Posts = ({ posts }) => {
  return (
    <div class="card">
      <div class="card-body">
        {posts.map((post) => (
          <>
            <p>
              {post.name} {post.customer_org_name}
            </p>
            <p>
              {post.po_number} {post.project_id}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

// {/* <>
// {/* <li key={post.id} className="list-group-item">
//   {post.name} {post.line_name} {post.solution_name} {post.modified_on} {post.line_name} {post.id}
// </li> */}

// </> */}

export default Posts;
