import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Rozd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selledMeters: "",
    };
  }
  sellMeters(){}
  componentDidMount() {
    axios
      .get("https://storageapp0.herokuapp.com/storage")
      .then((response) => this.setState({ data: response.data.storage }));
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { selledMeters } = this.state;
    return (
      <div class="rozd-page">
        <Link class="back" to="/sell">
          {" "}
          &lt; назад
        </Link>
        <p class="title">Роздріб</p>
        <div class="table">
          <div class="meters">
            <p class="text">
              м
              <sup>
                <small>2</small>
              </sup>
            </p>
            <input
              type="number"
              name="selledMeters"
              value={selledMeters}
              class="input"
              onChange={this.changeHandler}
            ></input>
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
        <button class="save" onClick={() => this.sellMeters()}>Продати</button>
      </div>
    );
  }
}
export default Rozd;
