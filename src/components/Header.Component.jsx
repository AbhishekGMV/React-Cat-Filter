import React from 'react'

let headerStyles = {
  textAlign: "center",
  padding: "10rem",
  backgroundImage: "linear-gradient(90deg, rgb(142, 84, 233), rgb(71, 118, 230))",
}
let titleStyles = {
  textTransform: "uppercase",
  fontSize: "42px",
  fontWeight: "600",
  fontFamily: "Roboto Slab",
  color: "#61dbfb",
  textShadow: "1px 1px #1d1b1b"
}
export default function Header({data}) {
  let sumWeights = 0;
  let sumAge = 0;

  data.forEach(catData => {
    sumAge += parseInt(catData.life_span.split("-")[1]);
    sumWeights += parseInt(catData.weight.metric.split("-")[1]);
  });

  const avgWeight = sumWeights/data.length;
  const avgAge = sumAge/data.length;

  return (
    <div style={headerStyles}>
        <h1 style={titleStyles}>30 days of react</h1>
        <h3>Cats Paradise</h3>
        <h3>There are {data.length} cats breeds</h3>
        <p>On an average a cat can weigh about {avgWeight} kg and lives {avgAge} years</p>
    </div>
  )
}
