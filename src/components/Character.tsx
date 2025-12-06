import React from "react";

interface CharacterProps {
  character: any; // Using any for now to avoid rigid SWAPI type definition overhead, or I can define a basic one
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const id = character.url.split("/")[5];
  const imgUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${id}.jpg`;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={imgUrl}
            alt={character.name}
            style={{ width: "100%", height: "450px", objectFit: "cover" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
          <h1>{character.name}</h1>
        </div>
        <div className="card-back">
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Gender: </strong> {character.gender}
            </li>
            <li>
              <strong>Skin Color: </strong> {character.skin_color}
            </li>
            <li>
              <strong>Eye Color: </strong> {character.eye_color}
            </li>
            <li>
              <strong>Height: </strong> {character.height}
            </li>
            <li>
              <strong>Mass: </strong> {character.mass}
            </li>
            <li>
              <strong>Birth Year: </strong> {character.birth_year}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
