import React, { useState } from "react";

interface SearchProps {
  getQuery: (q: string) => void;
}

const Search: React.FC<SearchProps> = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q: string) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
