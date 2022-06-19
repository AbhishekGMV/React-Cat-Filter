import React from "react";
import Cat from "./Cat.Component";
import Filters from "./Filters.Component";

const containerStyles = {
  margin: "5rem auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "50rem",
};

const renderCatsList = (data) => {
  return data.map((catData) => <Cat key={catData.id} catData={catData} />);
};

export default function CatsList({ data, loading, initState, setData }) {
  return (
    <div style={containerStyles}>
      {!loading ? 
      <>
        <Filters setData={setData} initState={initState}/>
        {renderCatsList(data)}
      </>
      :
      <h1>Loading...</h1>
      }
    </div>
  );
}
