import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectDetails } from "./Actions";

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

  return ProjectList ? (
    <>
      {ProjectList &&
        ProjectList.data.results.length > 0 &&
        ProjectList.data.results.map((element) => {
          return <>hhh</>;
        })}
    </>
  ) : (
    "loading"
  );
};

export default Details;
