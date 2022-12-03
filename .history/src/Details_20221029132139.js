import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectDetails } from "./Actions";
import Posts from "./Posts";

const Details = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  const ProjectList = useSelector((state) => state.ProjectReducer.Data100);
  const posts = ProjectList.data.results;
  console.log(posts);

  useEffect(() => {
    dispatch(getProjectDetails(access_token));
  }, []);

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

      <div className="container mt-5">
        <h1 className="text-primary mb-3">Pagination</h1>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Details;
