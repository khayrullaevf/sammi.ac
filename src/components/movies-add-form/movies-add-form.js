import { Component } from "react";
import "./movies-add-form.css";

class MoveiesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "+998(90)-",
      viewers: "11",
    };
  }

  onChanged = (e) => {
     this.setState({
      [e.target.name]:e.target.value,
     })
  };

  render() {
    const{name,viewers}=this.state
    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            onChange={this.onChanged}
            name="name"
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            onChange={this.onChanged}
            name="viewers"
            value={viewers}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoveiesAddForm;
