import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'

import { Players, calculatePlayerPositions } from '../imports/api/players';
//my own
import App from '../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    var players = Players.find({}, {
        sort: {
          score: 1
        }
      }).fetch();

    let positionedPlayers = calculatePlayerPositions(players);

    ReactDOM.render(<App players={positionedPlayers} title="Hello" />, document.getElementById('app'));
  });

});
