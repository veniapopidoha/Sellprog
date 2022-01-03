import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      pack: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name == "") {
      alert("Введіть назву");
    } else if (this.state.pack == "") {
      alert("Введіть кількість пачок");
    } else {
      axios
        .post("https://storageapp0.herokuapp.com/storage", this.state)
        .then((response) => {
          console.log(response);
          alert('Данні успішно збережені')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { name, pack } = this.state;
    return (
      <form class="rozd-page" onSubmit={this.submitHandler}>
        <Link class="back" to="/">
          {" "}
          &lt; назад
        </Link>
        <p class="title-add">Додати товар</p>
        <div class="table">
          <div class="category">
            <p class="text">Тканина</p>
            <select class="kinds-add">
              <option>Кружева</option>
              <option>Однотонна </option>
              <option>Інше</option>
            </select>
          </div>
          <div class="meters">
            <p class="text-add">К-ть пачок</p>
            <input
              class="input-add"
              type="number"
              name="pack"
              value={pack}
              onChange={this.changeHandler}
            ></input>
          </div>

          <div class="meters">
            <p class="text-add">Назва</p>
            <input
              class="input"
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            ></input>
          </div>
        </div>
        <button class="save" type="submit">
          Зберегти
        </button>
      </form>
    );
  }
}

export default Add;
