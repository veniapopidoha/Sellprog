import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Storage1 extends React.Component {
  render() {
    return (
      <div class="rozd-page">
        <Link class="back" to="/storage">
          {" "}
          &lt; назад
        </Link>
        <p class="title-add">Склад на вул.-----</p>
        <div class="storage-table">
          <table>
            <tr>
              <th width="100px">&#8470;</th>
              <th width="500px">Назва</th>
              <th width="300px">К-ть пачок</th>
              <th width="200px">
                м
                <sup>
                  <small>2</small>
                </sup>
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Тканина</td>
              <td>14</td>
              <td>5</td>
            </tr>
          </table>
        </div>
        <div class="buttons">
          <button class="button-del">Видалити</button>
          <button class="button-change">Змінити К-ть</button>
          <button class="button-rename">Перейменувати</button>
        </div>
      </div>
    );
  }
}

export default Storage1;
