import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Axios from "axios";
import CharacterList from "./components/CharacterList";
import Search from "./components/Search";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const func = async () => {
      if (query) {
        const result = await Axios(
          `https://swapi.dev/api/films?search=${query}`
        );

        console.log(result.data.results[0].characters);
        setItems(result.data.results[0].characters);
        setIsLoading(false);
      }
    };

    func();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <div className="text-center">
        <h1>Total Characters:{items.length}</h1>
        <br />
        <br />
      </div>

      <CharacterList isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
