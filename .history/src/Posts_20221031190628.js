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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVKsIXoO7waq9_auRrJdWaFR7NzajJbu_PQ&usqp=CAU" />
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