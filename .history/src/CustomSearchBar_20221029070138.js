import React, { useEffect, useState } from "react";

const CustomSearchBar = (props) => {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setArray(props.data);
  }, [props.data]);

  const handleSearch = (name) => {
    setInput(name);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(name) => {
          handleSearch(name);
        }}
        placeholder="enter the input"
        color="black"
      />
    </div>
  );
};

export default CustomSearchBar;
