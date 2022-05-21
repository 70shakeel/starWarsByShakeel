import Character from "./Character";
import Spinner from "./Spinner";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const CharacterList = ({ isLoading, items }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const funcFilm = async () => {
      const result = await Promise.all(
        items.map((item) => {
          return Axios.get(item).then((response) => {
            return response.data;
          });
        })
      );
      console.log(result);
      setFilms(result);
    };
    funcFilm();
  }, [items]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {films.map((film) => (
        <Character key={film.name} film={film}></Character>
      ))}
    </section>
  );
};

export default CharacterList;
