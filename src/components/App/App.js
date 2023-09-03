import React from "react";

import "./App.css";
import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPannel from "../search-pannel/Search-pannel";
import MovieList from "../movie-list/movie-list";
import MoveiesAddForm from "../movies-add-form/movies-add-form";
const App = () => {
  const data = [
    { name: "Spiderman", viewers: 1234, favourite: false, id: 1 },
    { name: "Batman", viewers: 4321, favourite: true, id: 2 },
    { name: "Joker", viewers: 9876, favourite: false, id: 3 },
    { name: "Ironman", viewers: 7890, favourite: true, id: 4 },
  ];
  return (
    <>
      <div className="App font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-pannel">
            <SearchPannel />
            <AppFilter />
          </div>
          <MovieList data={data} />
          <MoveiesAddForm />
        </div>
      </div>
    </>
  );
};

export default App;
