import Character from "./Character";
import Spinner from "./Spinner";
import React from "react";

interface CharacterListProps {
  characters: any[];
  isLoading: boolean;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, isLoading }) => {
  return (
    <>
      <section className="cards">
        {characters.map((char) => (
          <Character key={char.name} character={char}></Character>
        ))}
      </section>
      {isLoading && <Spinner />}
    </>
  );
};

export default CharacterList;
