import React from "react";
import axios from "axios";
import "../App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class Holovna extends React.Component {
  
  componentDidMount() {
    axios
      .get("https://storageapp0.herokuapp.com/storage")
      .then((response) => this.setState({ data: response.data }));
    // // Неробочий приклад!
    // axios
    //   .post('storageapp0.herokuapp.com/storage', {storage: this.state.userData})
    //   .then(alert('Дані відправлено успішно!'));
    
  }

  render() {
    // fetch("https://storageapp0.herokuapp.com/storage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state.data), // DATA - це якраз наприклад товар який ти взяв з форми до прикладу - ти його переробляєш в json і направляєш на POST метод https://example.com/profile  на сервер
    // })
    //   .then((response) => response.json()) // тут перетворюєш JSON стрінгу в JS объект (Зазвичай сервер роблять так щоб він вертав успішно створену сущність)
    //   .then((data) => {
    //     console.log("Success:", data); // Тут вже робиш добрикладу пишеш код який би додав успішно додане на сервері в список на фронті
    //   })
    //   .catch((error) => () => {
    //     console.log("упс щось пішло не так - ", error);
    //   });

    // console.log(this.state.data);
    return (
      <div class="holovna">
        <div class="nav-holovna">
          <Link class="add" to="/add">
            Додавання товару
          </Link>
          <Link class="sell" to="/sell">
            Продаж товару
          </Link>
          <Link class="storage" to="storage">
            Склад
          </Link>
        </div>
      </div>
    );
  }
}

export default Holovna;
