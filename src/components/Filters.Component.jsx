import React, { useEffect, useState } from "react";

const btnStyle = {
  display: "inline-block",
  border: "1px solid #c2bfbf",
  padding: "10px 15px",
  textTransform: "uppercase",
  margin: "5px 20px 5px 0",
  fontWeight: "400",
  borderRadius: "2px",
  cursor: "pointer",
  fontSize: "1.65rem",
  color: "#283747",
  fontFamily: "Roboto Slab",
};

export default function Filters({ data, setData }) {
  const [filtersUI, setFiltersUI] = useState([]);

  useEffect(() => {
    const getFilterData = (country) => {
      const filteredData = data.filter((catData) => catData.origin === country);
      setData(filteredData);
    };

    const normalizeData = () => {
      let normalizedData = {};
      let countriesCount = {};

      data.forEach(({ origin, id }) => {
        countriesCount[origin] = (countriesCount[origin] || 0) + 1;
        normalizedData = {
          ...normalizedData,
          [origin]: { count: countriesCount[origin], key: id },
        };
      });

      normalizedData["all"] = {
        count: Object.keys(normalizedData).length,
        key: "all",
      };
      return normalizedData;
    };

    const normalizedData = normalizeData();

    const isValidData = Object.keys(normalizedData).length > 0;
    if (isValidData) {
      let filtersUI = [];
      let button;
      for (const country in normalizedData) {
        let { key, count } = normalizedData[country];
        button = (
          <div
            onClick={() => getFilterData(country)}
            style={btnStyle}
            key={key}
          >
            {country}({count})
          </div>
        );
        filtersUI.push(button);
      }
      setFiltersUI(filtersUI);
    }
  }, [data, setData]);

  return (
    <div>
      {filtersUI && filtersUI.length === 0 ? (
        <h3>No filters available</h3>
      ) : (
        filtersUI
      )}
    </div>
  );
}
