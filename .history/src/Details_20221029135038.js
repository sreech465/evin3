import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectDetails } from "./Actions";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Details = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  // const ProjectList = useSelector((state) => state.ProjectReducer.Data100);
  // const posts = ProjectList;
  // console.log(posts);

  useEffect(() => {
    dispatch(getProjectDetails(access_token));
  }, []);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    // ProjectList ? (
    //   <>
    //     {ProjectList &&
    //       ProjectList.data.results.length > 0 &&
    //       ProjectList.data.results.map((element) => {
    //         return (
    <>
      {/* <div class="card">
                <div class="card-body">
                  <p>
                    {element.name} {element.customer_org_name}
                  </p>
                  <p>
                    {element.po_number} {element.project_id}
                  </p>
                </div>
              </div> */}

      {/* <div className="container mt-5">
        <h1 className="text-primary mb-3">Pagination</h1>
        <Posts posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div> */}
    </>
  );
};

export default Details;
