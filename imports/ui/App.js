import React, { Component } from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {

  render() {
    return (
      <div>
        <TitleBar
          title={this.props.title}
          subTitle="Created by Mikael S"
        />
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes ={
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
}
