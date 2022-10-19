import React, { useState } from "react";

const Page = () => {
  // Declaring the state here

  const [state, setState] = useState({
    showMore: false,
  });
  const sampleData = [
    {
      name: "Shadman",
      profession: "JS Developer",
      age: 28,
    },
    {
      name: "Mahin",
      profession: "TS Developer",
      age: 26,
    },
    {
      name: "Mahin",
      profession: "TS Developer",
      age: 26,
    },
    {
      name: "Mahin",
      profession: "TS Developer",
      age: 26,
    },
    {
      name: "Mahin",
      profession: "TS Developer",
      age: 26,
    },
    {
      name: "Mahin",
      profession: "TS Developer",
      age: 26,
    },
  ];

  return (
    <div className="grid grid-cols-2 max-w-screen-lg gap-4">
      {/* Express the logic false by using spray oparetor */}
      {!state.showMore && (
        <div className="col-span-2 text-center" id="read-more-button">
          <button
            className="px-2 py-1 rounded-md border-2 border-red-600"
            onClick={() =>
              setState((prev) => ({
                ...prev,
                showMore: !prev.showMore,
              }))
            }
            // Declaring the setState here
          >
            Read More
          </button>
        </div>
      )}
      {/* set Another state and map it */}
      {state.showMore &&
        sampleData.map((each) => {
          const { name, profession, age } = each;
          return <Card key={name} {...{ name, age, profession }} />;
        })}
      {/* Add logic true  */}
      {state.showMore && (
        <div className="col-span-2 text-center" id="read-less-button">
          <button
            className="px-2 py-1 rounded-md border-2 border-red-600"
            // add onClick and declaring the setState
            onClick={
              () =>
                setState((prev) => ({
                  ...prev,
                  showMore: !prev.showMore,
                }))
              // finish the simple logic
            }
          >
            Read Less
          </button>
        </div>
      )}
    </div>
  );
};

const Card = (props) => {
  const { name, age, profession } = props;
  return (
    <div className="container px-10 py-6 rounded-lg border-2 border-black m-4 col-span-1">
      <p>{name}</p>
      <p>{age}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Page;
