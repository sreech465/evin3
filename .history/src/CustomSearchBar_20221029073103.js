import React, { useEffect, useState } from "react";

const CustomSearchBar = (props) => {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setArray(props.data);
  }, [props.data]);
  const handleSearch = (name) => {
    // console.log(props.tab)
    setInput(name);
  };

  return (
    <>
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
      <div>
        <img
          src="http://52.139.224.15:9090/assets/svg-icon/ic_filter.svg"
          style={{ width: "17%", position: "relative", right: 10 }}
        />
      </div>
    </>
  );
};

export default CustomSearchBar;
