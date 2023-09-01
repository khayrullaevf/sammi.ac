import React from "react";

import "./App.css";
import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPannel from "../search-pannel/Search-pannel";
import MovieList from "../movie-list/movie-list";
import MoveiesAddForm from "../movies-add-form/movies-add-form";
const App = () => {
  return (
    <>
      <div className="App font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-pannel">
            <SearchPannel />
            <AppFilter />
          </div>
          <MovieList />
          <MoveiesAddForm/>
        </div>
      </div>
    </>
  );
};

export default App;
