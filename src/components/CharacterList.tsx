import Character from "./Character";
import Spinner from "./Spinner";
import React from "react";

interface CharacterListProps {
  characters: any[];
  isLoading: boolean;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map((char) => (
        <Character key={char.name} character={char}></Character>
      ))}
    </section>
  );
};

export default CharacterList;
