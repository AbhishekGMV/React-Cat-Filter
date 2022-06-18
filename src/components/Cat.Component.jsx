import React from "react";
import { useState } from "react";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  boxShadow: "0 3px 3px 2px rgb(0 0 0 / 20%)",
  margin: "10px auto",
};

let initImageStyles = {
  maxWidth: "100%",
  maxHeight: "100%",
  transition: "transform 0.5s ease",
};

let imageContainerStyles = {
  overflow: "hidden",
};

export default function Cat({ catData }) {
  const { name, origin, weight, temperament, description, image, life_span } =
    catData;
  const [imageStyles, setImageStyles] = useState(initImageStyles);

  return (
    <div style={containerStyles}>
      <div style={imageContainerStyles}>
        {image && image.url ? (
          <img
            loading="lazy"
            src={image.url}
            alt={name}
            style={imageStyles}
            onMouseEnter={() =>
              setImageStyles({ ...initImageStyles, transform: "scale(1.1)" })
            }
            onMouseLeave={() => setImageStyles(initImageStyles)}
          />
        ) : (
          ""
        )}
      </div>

      <div style={{ padding: "1rem" }}>
        <h3>{name}</h3>
        <h2>{origin}</h2>
        <h3>Temperment: {temperament}</h3>
        <h3>Life Span: {life_span}</h3>
        <h3>Weight: {weight.metric}</h3>
        <h3>Description: {description}</h3>
      </div>
    </div>
  );
}
