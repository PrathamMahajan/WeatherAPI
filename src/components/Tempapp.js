import React, { useState } from "react";
import "../static/Tempapp.css";

const Tempapp = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Mumbai");

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="inputData">
            <input
              onChange={(event) => {}}
              className="inputField"
              type="search"
            />
          </div>
        </div>

        <div className="info">
          <h2 className="location">
            <i class="bi bi-geo"></i>{city}
          </h2>
          <h1 className="temp">5.25 Cel</h1>
          <h3 className="tempmin_max">Min : 5.25 Cel | Max : 5.25 Cel</h3>
        </div>
      </div>
    </>
  );
};

export default Tempapp;
