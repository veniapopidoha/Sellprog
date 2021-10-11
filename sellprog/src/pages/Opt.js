import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Opt extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("https://storageapp0.herokuapp.com/storage")
      .then((response) => this.setState({ data: response.data.storage }));
  }

  render() {
    return (
      <div class="rozd-page">
        <Link class="back" to="/sell">
          {" "}
          &lt; назад
        </Link>
        <p class="title">Опт</p>
        <div class="table">
          <div class="meters">
            <p class="text">К-ть пачок</p>
            <input type="number" class="input"></input>
          </div>
          <div class="category">
            <p class="text">Тканина</p>
            <select class="kinds">
              {this.state.data.map((data, idx) => (
                
                  <option>{data.name}</option>
                
              ))}
            </select>
          </div>
        </div>
        <button class="save">Зберегти</button>
      </div>
    );
  }
}

export default Opt;
