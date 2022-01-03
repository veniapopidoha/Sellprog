
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleted from "../img/trash.png";
import rename from "../img/edit.png";
import change from "../img/cubes.png";
import "../App.css";
import { useEffect } from "react";

class Storage2 extends React.Component {
  state = {
    data: [],
  };

  getProducts() {
    axios
    .get("https://storageapp0.herokuapp.com/storage")
    .then((response) => this.setState({ data: response.data.storage }));
  }



  componentDidMount() {
    this.getProducts();
  }

  deleteElement(id){
    if (window.confirm('Ви впевнені?'))
    {
      axios
        .delete('https://storageapp0.herokuapp.com/storage/'+id)
        .then((res) => {
          this.getProducts();
        })
    }
  }
  

  render() {
    
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
                <th width="320px">Назва</th>
                <th width="100px">К-ть пачок</th>
                <th width="80px">
                  м
                  <sup>
                    <small>2</small>
                  </sup>
                </th>
                <th width="125px">Кнопки</th>
              </tr>
            </thead>
            {this.state.data && this.state.data.length ? (
              <tbody>
                {this.state.data.map((data, idx) => (
                  <tr key={idx}>
                    <td width="50px">{data._id}</td>
                    <td width="320px">{data.name}</td>
                    <td width="100px">{data.pack}</td>
                    <td width="80px">{data.meters}</td>
                    <td width="125px">
                      <button>
                        <img
                          onClick={() => this.deleteElement(data._id)}
                          class="icon"
                          src={deleted}
                          alt="delete"
                        />
                      </button>
                      <button>
                        <img class="icon" src={rename} alt="rename" />
                      </button>
                      <button>
                        <img class="icon" src={change} alt="change count" />
                      </button>
                    </td>
                  </tr>
                ))}
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


export default Storage2;
