import React, { useState } from "react";

function Dropdown() {
  const data = [
    {
      name: "add items or other arrays",
      subQuestion: "I need to add:",
      subOptions: [
        { name: "element/s from an array", answer: "splice" },
        { name: "the last element of the array", answer: "push" },
        { name: "the first element of the array", answer: "unshift" },
        {
          name: "one or more elements in order for use, leaving the array as is",
          answer: "concat",
        },
      ],
    },
    {
      name: "remove items",
      subQuestion: "I need to remove:",
      subOptions: [
        { name: "element/s from an array", answer: "splice" },
        { name: "the last element of the array", answer: "pop" },
        { name: "the first element of the array", answer: "shift" },
        {
          name: "one or more elements in order for use, leaving the array as is",
          answer: "slice",
        },
      ],
    },
    {
      name: "walk over items",
      subQuestion: "I need to iterate by:",
      subOptions: [
        {
          name: "executing a function I will create for each element",
          answer: "forEach",
        },
        {
          name: "creating a new array from each element with a function I create",
          answer: "map",
        },
        { name: "creating an iterator object", answer: "entries" },
      ],
    },
  ];
  const [DD1, setDD1] = useState(null);
  const [DD2, setDD2] = useState(null);

  // function isThreeDots(x) {
  //   if (x === "...") {
  //     return true;
  //   } else return false;
  // }

  return (
    <div>
      I have an array, I would like to:{" "}
      <select
        onChange={(e) => {
          setDD1(e.target.value);
          setDD2(null);
        }}
        defaultValue={"..."}
      >
        <option disabled>...</option>
        {data.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      {DD1 !== null && (
        <div>
          {data[DD1].subQuestion}{" "}
          <select
            onChange={(e) => {
              setDD2(e.target.value);
            }}
            defaultValue={"..."}
          >
            <option disabled>...</option>
            {data[DD1].subOptions.map((item, index) => (
              <option value={index} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <br />
      {DD1 !== null && DD2 !== null && (
        <span>Ans: {data[DD1].subOptions[DD2].answer}</span>
      )}
    </div>
  );
}

export default Dropdown;
