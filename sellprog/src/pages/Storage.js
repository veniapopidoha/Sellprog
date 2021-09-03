import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'




class Sell extends React.Component {

  render() {

    return (
      <div class="sell-page">
        <div class="nav-sell">
          <Link class="rozd" to="/storage/1" >Склад 1</Link>
          <Link class="opt" to="/storage/2">Склад 2</Link>
        </div>
      </div>

    )
  }
}


export default Sell;
