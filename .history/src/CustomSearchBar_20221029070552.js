import React, { useEffect, useState } from "react";

const CustomSearchBar = (props) => {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setArray(props.data);
  }, [props.data]);

  const handleSearch = (name) => {
    setInput(name);
    const data = array.filter(
      (item) =>
        item.name.search(name) !== -1 || item.project_id.search(name) !== -1
      // ||  item?.po_number!==null?item?.po_number.search(name) !== -1:''
      // || item.po_number===null?'':item?.po_number.search(name) !== -1

      // po_number
    );
    setSuggestions(data);
    props.onChangeSearch(suggestions, name);
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
