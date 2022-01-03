import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleted from "../img/trash.png";
import rename from "../img/edit.png";
import change from "../img/cubes.png";
import "../App.css";
import tick from "../img/tick.png";
import close from "../img/close.png";

import { useState } from "react";

class Storage1 extends React.Component {
  state = {
    data: [],
    name: "",
    editMode: false,
    test: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getProducts() {
    axios
      .get("https://storageapp0.herokuapp.com/storage")
      .then((response) => this.setState({ data: response.data.storage }));
  }

  componentDidMount() {
    this.getProducts();
  }

  renameProduct() {
    this.state.editMode = true;
    this.getProducts();
    console.log(this.state.editMode);
  }

  deleteElement(id) {
    if (window.confirm("Ви впевнені?")) {
      axios
        .delete("https://storageapp0.herokuapp.com/storage/" + id)
        .then((res) => {
          this.getProducts();
        });
    }
  }
  successElement() {}
  closeRename() {
    this.state.editMode = false;
    this.getProducts();
  }

  render() {
    const { test } = this.state;
    return (
      <div class="rozd-page">
        <Link class="back" to="/storage">
          {" "}
          &lt; назад
        </Link>
        <p class="title-add">Склад на вул.-----</p>
        <div>
          <table class="storage-table">
            <thead>
              <tr>
                <th width="50px">&#8470;</th>
                <th width="360px">Назва</th>
                <th width="100px">К-ть пачок</th>
                <th width="80px">
                  м
                  <sup>
                    <small>2</small>
                  </sup>
                </th>
                <th width="85px">Кнопки</th>
              </tr>
            </thead>

            {this.state.data && this.state.data.length ? (
              <tbody>
                {this.state.data.map((data, idx) =>
                  this.state.editMode ? (
                    <editableTr>
                      <tr key={idx}>
                        <td width="50px">{data._id}</td>
                        <td width="360px">
                          <input
                            class="input-name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={this.changeHandler}
                          ></input>
                        </td>
                        <td width="100px">
                          <input
                            class="input-pack"
                            type="text"
                            name="pack"
                            value={data.pack}
                            onChange={this.changeHandler}
                          ></input>
                        </td>

                        <td width="80px">
                          <input
                            class="input-meters"
                            type="text"
                            name="meters"
                            value={data.meters}
                            onChange={this.changeHandler}
                          ></input>
                        </td>
                        <td width="85px">
                          <button>
                            <img
                              onClick={() => this.successElement(data._id)}
                              class="icon"
                              src={tick}
                              alt="success"
                            />
                          </button>
                          <button>
                            <img
                              onClick={() => this.closeRename()}
                              class="icon"
                              src={close}
                              alt="close"
                            />
                          </button>
                        </td>
                      </tr>
                    </editableTr>
                  ) : (
                    <tr key={idx}>
                      <td width="50px">{data._id}</td>
                      <td width="360px">{data.name}</td>
                      <td width="100px">{data.pack}</td>
                      <td width="80px">{data.meters}</td>
                      <td width="85px">
                        <button>
                          <img
                            onClick={() => this.deleteElement(data._id)}
                            class="icon"
                            src={deleted}
                            alt="delete"
                          />
                        </button>
                        <button>
                          <img
                            onClick={() => this.renameProduct()}
                            class="icon"
                            src={rename}
                            alt="rename"
                          />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            ) : (
              <tbody></tbody>
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default Storage1;
