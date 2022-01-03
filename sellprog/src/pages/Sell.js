import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Sell extends React.Component {
  render() {
    return (
      <div class="sell-page">
        <div class="nav-sell">
          <Link class="rozd" to="/sell/rozd">
            Роздіб
          </Link>
          <Link class="opt" to="/sell/opt">
            Опт
          </Link>
        </div>
      </div>
    );
  }
}

export default Sell;
