
import React from 'react';
import{Component} from "react";
import './movie-list-item.css'

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { favourite: false, like: false };
  }

  onFavourite = () => {
    this.setState({
      favourite: !this.state.favourite,
    });
  };
  onLiked= () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    const { name, viewers } = this.props;
    const { favourite, like } = this.state;

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && `favourite`
        }  ${like && "like"}`}
      >
        <span onClick={this.onLiked} className="list-group-item-label">{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />

        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onFavourite}
            type="button"
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// const MovieListItem = ({name,viewers,favourite}) => {

//   return (
//     <li  className={`list-group-item d-flex justify-content-between ${favourite&&`favourite`}`}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />

//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// }

export default MovieListItem