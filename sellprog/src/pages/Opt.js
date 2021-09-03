import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Opt extends React.Component {
  render() {
    return (
      <div class="rozd-page">
        <Link class="back" to="/sell">
          {" "}
          &lt; назад
        </Link>
        <p class="title">Роздіб</p>
        <div class="table">
          <div class="meters">
            <p class="text">К-ть пачок</p>
            <input class="input"></input>
          </div>
          <div class="category">
            <p class="text">Тканина</p>
            <select class="kinds">
              <option>Кружева</option>
              <option>Однотонна </option>
              <option>Інше</option>
            </select>
          </div>
        </div>
        <button class="save">Зберегти</button>
      </div>
    );
  }
}

export default Opt;
