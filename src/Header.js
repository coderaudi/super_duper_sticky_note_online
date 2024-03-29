import React from "react";

var Header = props => (
  <header className="app-header">
    <h1 className="app-header__title">Super Duper Sticky Notes</h1>
    <aside className="app-header__controls">
      <button className="add-new" onClick={props.addNote}>
        + New Note
      </button>
      <input
        type="text"
        placeholder="Type here to search for buried treasure..."
        className="search"
        value={props.searchText}
        onChange={props.onSearch}
      />
    </aside>
  </header>
);

export default Header;
