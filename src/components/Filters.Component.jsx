import React, { useEffect, useState } from 'react'
import axios from 'axios';

const btnStyle = {
    display: "inline-block",
    border: "1px solid #c2bfbf",
    padding: "10px 15px",
    textTransform: "uppercase",
    margin: "5px 20px 5px 0",
    fontWeight: "400",
    borderRadius: "2px",
    cursor: "pointer"
}

export default function Filters() {
    const [filtersUI, setFiltersUI] =  useState([]);
    
    useEffect(()=>{
        const fetchData = async () => {
            let response = await axios.get("https://api.thecatapi.com/v1/breeds")
            let normalizedData = {};
            let countriesCount = {};

            response.data.forEach(({origin, id})=> {
                countriesCount[origin] = (countriesCount[origin] || 0) + 1;
                normalizedData = {...normalizedData, [origin]: {count: countriesCount[origin],key: id} }
            });
            
            normalizedData["all"] = {count: Object.keys(normalizedData).length, key: "all"};
            return normalizedData;
        }   
        
        fetchData().then((data)=>{
            const isValidData = Object.keys(data).length > 0;
            if(isValidData){
                let filtersUI = [];
                let button;
                for(const country in data){
                    let {key, count} = data[country];
                    button = <div style={btnStyle} key={key}>{country}({count})</div>
                    filtersUI.push(button);
                }
                setFiltersUI(filtersUI)
            } 
        })
    },[])
  return (
    <div>{filtersUI && filtersUI.length === 0 ? <h3>No filters available</h3> : filtersUI}</div>
  )
}
