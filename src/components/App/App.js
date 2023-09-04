
import {Component} from "react";

import "./App.css";
import AppInfo from "../app-info/App-info";
import AppFilter from "../app-filter/App-filter";
import SearchPannel from "../search-pannel/Search-pannel";
import MovieList from "../movie-list/movie-list";
import MoveiesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
class App extends Component{
  constructor(props){
    super(props)
    this.state={
       data:[
       { name: "Spiderman", viewers: 1234, favourite: false, id: 1 },
       { name: "Batman", viewers: 4321, favourite: true, id: 2 },
       { name: "Joker", viewers: 9876, favourite: false, id: 3 },
       { name: "Ironman", viewers: 7890, favourite: true, id: 4 },
     ],

    }
    
  }
  onDelete=(id)=>{
   this.setState(({data})=>({
      data:data.filter(movie=>movie.id!==id)

     
   }))
    
  };

  addForm=(Event,item)=>{
    Event.preventDefault()
  
     this.setState(({data})=>({
       data: [...data, { ...item, id: uuidv4() }],
     }))
  };



  render(){
    const{data}=this.state
      return (
    <>
      <div className="App font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-pannel">
            <SearchPannel />
            <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} addForm={this.addForm} />
          <MoveiesAddForm />
        </div>
      </div>
    </>
  )
  }

};

export default App;
