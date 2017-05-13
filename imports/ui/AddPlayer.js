import React, { Component } from 'react';
import { Players } from '../api/players';


export default class AddPlayer extends Component {

  handleSumbit(event) {
    event.preventDefault();
    let playerName  = event.target.playerName.value;
    debugger;
    if (playerName){
      event.target.playerName.value = ""; // reset the form
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  };

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSumbit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button">Add player</button>
        </form>
      </div>
    );
  }
}
