import React from 'react';
import axios from 'axios';
import '../App.css'

import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";



class Holovna extends React.Component {
  

  // componentDidMount() {
  //   axios
  //   .get('')
  //   .then(response => this.setState({data: response.data}));
    // Неробочий приклад!
    // axios
    //   .post('https://maliatko.herokuapp.com/rest/visitingCheck', {user: this.state.userData})
    //   .then(res => alert('Дані відправлено успішно!'));
  // }
  
  render() {

    return (
      <div class="holovna">
        <div class="nav-holovna">
          <Link class ="add" to="/add">Додавання товару</Link>
          <Link class ="sell" to="/sell">Продаж товару</Link>
          <Link class ="storage" to="storage">Склад</Link>
        </div>
      </div>
      
    )
  
  }
}



export default Holovna;
