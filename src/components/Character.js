import React from "react";

const Character = ({ film }) => {
  // console.log(film);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h1>{film.name}</h1>
        </div>
        <div className="card-back">
          <ul>
            <li>
              <strong>Gender: </strong> {film.gender}
            </li>
            <li>
              <strong>Skin Color: </strong> {film.skin_color}
            </li>
            <li>
              <strong>Eye Color: </strong> {film.eye_color}
            </li>
            <li>
              <strong>Height: </strong> {film.height}
            </li>
            <li>
              <strong>Mass: </strong> {film.mass}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
