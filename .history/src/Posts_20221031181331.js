import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <>
              <div class="card">
                <div class="card-body">
                  <img src="/projects@3x.png" />
                  <p>
                    {post.name} {post.customer_org_name}
                  </p>
                  <p>
                    {post.po_number} {post.project_id}
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Posts;
