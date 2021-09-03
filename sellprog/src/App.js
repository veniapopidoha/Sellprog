import React from 'react';
import axios from 'axios';
import './App.css'
import Sell from './pages/Sell'
import Holovna from './pages/Holovna';

import addimg from './img/ADD-icon.svg'
import sellimg from './img/SELL-icon.svg'
import storageimg from './img/STORAGE-icon.svg'

import Add from './pages/Add';
import Storage from './pages/Storage';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Rozd from './pages/rozd';
import Opt from './pages/Opt';
import Storage1 from './pages/Storage1';
import Storage2 from './pages/Storage2';


class App extends React.Component {
  state = {
    count: 0,
    data: [],
    sw: [],
  };


  // componentDidMount() {
  //   axios
  //   .get('https://git.heroku.com/sleepy-lowlands-23823.git')
  //   .then(response => this.setState({data: response.data}));
  //   // Неробочий приклад!
  //   // axios
  //   //   .post('https://maliatko.herokuapp.com/rest/visitingCheck', {user: this.state.userData})
  //   //   .then(res => alert('Дані відправлено успішно!'));
  // }

  render() {

    return (
      <div class="holovna">

        <Router>
          <Switch>
            <Route exact path="/" component={Holovna} />
            <Route exact path="/add" component={Add} />

            <Route exact path="/sell" component={Sell} />
            <Route exact path="/sell/rozd" component={Rozd} />
            <Route exact path="/sell/opt" component={Opt} />

            <Route exact path="/storage" component={Storage} />
            <Route exact path="/storage/1" component={Storage1} />
            <Route exact path="/storage/2" component={Storage2} />

          </Switch>
        </Router>

        <footer>
          <a href="/add"><img src={addimg} alt={"Add"} /></a>
          <a href="/sell"><img src={sellimg} alt={"Sell"} /></a>
          <a href="/storage"><img src={storageimg} alt={"Storage"} /></a>
        </footer>
      </div>

    )
  }
}



export default App;
