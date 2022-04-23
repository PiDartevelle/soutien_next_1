import React, { useState } from "react";
import "./index.css";
function App() {
  const list = [
    "banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <div>
        Search :{" "}
        <input
          name="query"
          type="text"
          placeholder="type here"
          onChange={handleSearch}
        />
      </div>
      {filterList && filterList.map((item) => <div>{item}</div>)}
    </div>
  );
}

export default App;
