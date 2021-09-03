import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'




class Opt extends React.Component {

  render() {

    return (
      <div class="rozd-page">
        <Link class="back" to="/"> &lt; назад</Link>
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
            <p class="text-add" >К-ть пачок</p>
            <input class="input-add"></input>
          </div>

          <div class="meters">
            <p class="text-add" >Назва</p>
            <input class="input"></input>
          </div>

        </div>
        <button class="save">Зберегти</button>

      </div>


    )
  }
}


export default Opt;
