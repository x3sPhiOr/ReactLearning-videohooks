import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO : make sure we call
    // callback from parent component
    onFormSubmit(term);
  };

  return (
    <div className="searh-bar ui segement">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Pekora Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;