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

export default function Filters({ setData, initState }) {
  const [filtersUI, setFiltersUI] = useState([]);
  useEffect(() => {
    const applyFilter = (country) => {
      if(country === "all"){
        setData(initState);
        return;
      }
      const filteredData = initState.filter((catData) => catData.origin === country);
      setData(filteredData);
    };

    const formatData = () => {
      let formattedData = {};
      let countriesCount = {};
      initState.forEach(({ origin, id }) => {
        countriesCount[origin] = (countriesCount[origin] || 0) + 1;
        formattedData = {
          ...formattedData,
          [origin]: { count: countriesCount[origin], key: id },
        };
      });

      formattedData["all"] = {
        count: Object.keys(formattedData).length,
        key: "all",
      };
      return formattedData;
    };

    const formattedData = formatData();

    const dataLoaded = Object.keys(formattedData).length > 0;
    if (dataLoaded) {
      let filtersUI = [];
      let button;
      for (const country in formattedData) {
        let { key, count } = formattedData[country];
        button = (
          <div
            onClick={() => applyFilter(country)}
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
  }, [setData, initState]);

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
