import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import camera from "./style/camera.css"

const Camera = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63cac857d0ab64be2b5a7253.mockapi.io/camera`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="main">
        <div className="filter"></div>
        <div className="data">
          {data.map((e) => (
            <SingleProduct {...e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Camera;
