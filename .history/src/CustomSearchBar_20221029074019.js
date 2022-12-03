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
      <div style={{ display: "flex" }}>
        <input
          style={{ width: "60%" }}
          type="text"
          onChange={(name) => {
            handleSearch(name);
          }}
          placeholder="enter the input"
          color="black"
        />

        <div>
          <img
            src="http://52.139.224.15:9090/assets/svg-icon/ic_filter.svg"
            style={{ width: "3%", position: "absolute", right: 5 }}
          />
        </div>

        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAQlBMVEX///+SkpKNjY2Kior8/Pzi4uLf39/39/eWlpbt7e2jo6Ozs7OGhobc3Nzx8fG3t7fAwMCdnZ2qqqrOzs7Hx8fV1dUz4sfjAAADRUlEQVRoge1Z25KDIAwtoIJiQbH+/69ugvYyW9tCwLo7w3nqdIQTcoXkdCooKCgoKCgo+J+opEf1XdJ2sq5TjHM2dnqY5Zd4Z816wdkVnIt+HOrdaY29s3LA9adQ0656b/VCC8dkndPWajfyVRTOh924pfVn5GK0s6xWmgqMrpUn52zeh/iscHuhbP10Nnl2XijhzA7Eg8BjqemFI7deIZydc/NWTnhTvgmg1nnZLnmJ5QgHEl37/qsZqYXNSWzQxP3w8btFQJePWCKxCLKgFllP3SFxYJZCRxS5bK0xYJrQrz11Hg9Hv+EROQIFVTniWmKYfnauO6oRFugMzHAEHuetss+i7xq24ZG6m8A+Krl8dCD/FL0I9BS96BcaEH+MFr/GaEhkdpxkMlgWEw4baDFCCOvw0GMS84VqMHSPpJjGDUg3S3DvpHrZgqN0pJWGvHIBJE5qdDgoqwkhbcHMxJv0wIPL2xYgAzOi4A1dXYBK0WPDgLroNwSTUHSkii00j2gj6+MjsFbSnRsyETkoq46S8K9oOKFOXeFSKuVxzMdpG5mP8bDEqGL0qMJMQpU7LZP47ElcWqeVyeMqxnFVEtMnzU1SbwZoaNptaE68DaG1aOoGZYsPHYb3aIm3V+q6B0AO7IOfznfo9OdN01M8BY9MvUbdgDfu6HdKl1BqbsAnnYp075mwZgP4OIsrG9hliNfTMwy2SaK8xUV3GV4AOwA8wr99gzQplm9w2KMJ3uoCxH2mdnPle4qB1EgsqBeZJ/i2pwhSuBWZWlIrWqQOiFCJhklNm1vUnzr2tVomKoR0+xoGbc3fDmgManqZ5GSdIfmmPhPjK6+VA1umKPmpIa6XCcplIy/Wy1hHjNMu1NL1flccyT2wm9nyfhknXdYmXGgkhKN2/ToVE6rTdhisG5ng63/Wi7NS89xDnFazmx/x+3gQJBmujr8X9clMTonbQNKzcqXPD+qvF9licn0weTO4UfntFWh9qn/5XLPaeqcBrTQtwGwG+HkXDw9Cczz1Drb+hN08/F9QH6DwP+BmB1D/gbguwfVl6uOCa6/K9Q6rhye1iohYTp0+FyZSi4xvngjUnTqGGHCEqgsKCgoKCgoK/jx+AD6bGFb0vMX+AAAAAElFTkSuQmCC"
            style={{ width: "3%", position: "absolute", left: 240 }}
          />
        </div>
      </div>
    </>
  );
};

export default CustomSearchBar;
