import React from "react";

let headerStyles = {
  textAlign: "center",
  padding: "10rem",
  backgroundImage:
    "linear-gradient(90deg, rgb(142, 84, 233), rgb(71, 118, 230))",
};
let titleStyles = {
  textTransform: "uppercase",
  fontSize: "42px",
  fontWeight: "600",
  fontFamily: "Roboto Slab",
  color: "#61dbfb",
  textShadow: "1px 1px #1d1b1b",
};

const getAvgWeightAndHeight = (data) => {
  let sumWeights = 0;
  let sumAge = 0;

  data.forEach((catData) => {
    sumAge += parseInt(catData.life_span.split("-")[1]);
    sumWeights += parseInt(catData.weight.metric.split("-")[1]);
  });

  let avgWeight = sumWeights / data.length;
  avgWeight = Math.round(avgWeight * 10) / 10;
  let avgAge = sumAge / data.length;
  avgAge = Math.round(avgAge * 10) / 10;
  return { weight: avgWeight, age: avgAge };
};

export default function Header({ data, loading }) {
  const { weight, age } = getAvgWeightAndHeight(data);

  return (
    <div style={headerStyles}>
      <h1 style={titleStyles}>30 days of react</h1>
      <h3>Cats Paradise</h3>
      {(!loading && weight && age) ? 
      <>
        <h3>There are <span style={titleStyles}>{data.length}</span> cats breeds</h3>
        <p>
          On an average a cat can weigh about 
          <span style={titleStyles}>{weight}</span>
          kg and lives 
          <span style={titleStyles}>{age}</span>
          years
        </p>
      </>
        :
        <h1>Loading...</h1>
      }
    </div>
  );
}
