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

    if (props.tab) {
      if (props.tab === "SpareParts") {
        console.log(name);

        const data = array.filter(
          (item) =>
            item.part_number.search(name) !== -1 ||
            item.vendor_name.search(name) !== -1
        );
        console.log(data);
        setSuggestions(data);
        props.onChangeSearch(data, name);
      }
      if (props.tab === "projectList") {
        console.log("hai helllooo");
        const data = array.filter(
          (item) =>
            item.name.search(name) !== -1 || item.project_id.search(name) !== -1
          // ||  item?.po_number!==null?item?.po_number.search(name) !== -1:''
          // || item.po_number===null?'':item?.po_number.search(name) !== -1

          // po_number
        );
        setSuggestions(data);
        props.onChangeSearch(suggestions, name);
      } else {
        const data1 = array.filter(
          (item) =>
            item.tagged_equipment_name.search(name) !== -1 ||
            item.line_name.search(name) !== -1
        );
        // console.log(data1);
        setSuggestions(data1);
        // props.onChangeSearch(suggestions, name);
        // setArray([])
      }
    } else {
      const data = array.filter(
        (item) =>
          item.name.search(name) !== -1 || item.project_id.search(name) !== -1
        // ||  item?.po_number!==null?item?.po_number.search(name) !== -1:''
        // || item.po_number===null?'':item?.po_number.search(name) !== -1

        // po_number
      );
      setSuggestions(data);
      props.onChangeSearch(suggestions, name);
    }
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
