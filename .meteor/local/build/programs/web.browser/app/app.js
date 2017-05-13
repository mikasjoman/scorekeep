var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// client/template.main.js                                                       //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
                                                                                 // 1
Template.body.addContent((function() {                                           // 2
  var view = this;                                                               // 3
  return HTML.Raw('<div id="app"></div>');                                       // 4
}));                                                                             // 5
Meteor.startup(Template.body.renderToDocument);                                  // 6
                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////

},"main.js":["react","react-dom","meteor/meteor","meteor/tracker","../imports/api/players","../imports/ui/App",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// client/main.js                                                                //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Tracker;module.import('meteor/tracker',{"Tracker":function(v){Tracker=v}});var Players,calculatePlayerPositions;module.import('../imports/api/players',{"Players":function(v){Players=v},"calculatePlayerPositions":function(v){calculatePlayerPositions=v}});var App;module.import('../imports/ui/App',{"default":function(v){App=v}});
                                                                                 // 2
                                                                                 // 3
                                                                                 // 4
                                                                                 //
                                                                                 // 6
//my own                                                                         // 7
                                                                                 // 8
                                                                                 //
Meteor.startup(function () {                                                     // 10
  Tracker.autorun(function () {                                                  // 11
    var players = Players.find({}, {                                             // 12
      sort: {                                                                    // 13
        score: 1                                                                 // 14
      }                                                                          // 13
    }).fetch();                                                                  // 12
                                                                                 //
    var positionedPlayers = calculatePlayerPositions(players);                   // 18
                                                                                 //
    ReactDOM.render(React.createElement(App, { players: positionedPlayers, title: 'Hello' }), document.getElementById('app'));
  });                                                                            // 21
});                                                                              // 23
///////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"players.js":["babel-runtime/helpers/extends","meteor/mongo","numeral",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/api/players.js                                                        //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.export({Players:function(){return Players},calculatePlayerPositions:function(){return calculatePlayerPositions}});var _extends;module.import('babel-runtime/helpers/extends',{"default":function(v){_extends=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var numeral;module.import('numeral',{"default":function(v){numeral=v}});
                                                                                 // 1
                                                                                 // 2
                                                                                 //
var Players = new Mongo.Collection('players'); // constructor function           // 4
                                                                                 //
var calculatePlayerPositions = function calculatePlayerPositions(players) {      // 6
  var rank = 1;                                                                  // 7
                                                                                 //
  return players.map(function (player, index) {                                  // 9
    if (index !== 0 && players[index - 1].score <= player.score) {               // 10
      rank++;                                                                    // 11
    }                                                                            // 12
                                                                                 //
    return _extends({}, player, {                                                // 14
      rank: rank,                                                                // 16
      position: numeral(rank).format('0o')                                       // 17
    });                                                                          // 14
  });                                                                            // 19
};                                                                               // 20
///////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AddPlayer.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","../api/players",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/ui/AddPlayer.js                                                       //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Players;module.import('../api/players',{"Players":function(v){Players=v}});
                                                                                 //
                                                                                 //
                                                                                 // 1
                                                                                 // 2
                                                                                 //
var AddPlayer = function (_Component) {                                          //
  _inherits(AddPlayer, _Component);                                              //
                                                                                 //
  function AddPlayer() {                                                         //
    _classCallCheck(this, AddPlayer);                                            //
                                                                                 //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));  //
  }                                                                              //
                                                                                 //
  AddPlayer.prototype.handleSumbit = function () {                               //
    function handleSumbit(event) {                                               //
      event.preventDefault();                                                    // 8
      var playerName = event.target.playerName.value;                            // 9
      debugger;                                                                  // 10
      if (playerName) {                                                          // 11
        event.target.playerName.value = ""; // reset the form                    // 12
        Players.insert({                                                         // 13
          name: playerName,                                                      // 14
          score: 0                                                               // 15
        });                                                                      // 13
      }                                                                          // 17
    }                                                                            // 18
                                                                                 //
    return handleSumbit;                                                         //
  }();                                                                           //
                                                                                 //
  AddPlayer.prototype.render = function () {                                     //
    function render() {                                                          //
      return React.createElement(                                                // 21
        'div',                                                                   // 22
        { className: 'item' },                                                   // 22
        React.createElement(                                                     // 23
          'form',                                                                // 23
          { className: 'form', onSubmit: this.handleSumbit.bind(this) },         // 23
          React.createElement('input', { className: 'form__input', type: 'text', name: 'playerName', placeholder: 'Player name' }),
          React.createElement(                                                   // 25
            'button',                                                            // 25
            { className: 'button' },                                             // 25
            'Add player'                                                         // 25
          )                                                                      // 25
        )                                                                        // 23
      );                                                                         // 22
    }                                                                            // 29
                                                                                 //
    return render;                                                               //
  }();                                                                           //
                                                                                 //
  return AddPlayer;                                                              //
}(Component);                                                                    //
                                                                                 //
module.export("default",exports.default=(AddPlayer));                            //
///////////////////////////////////////////////////////////////////////////////////

}],"App.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./TitleBar","./AddPlayer","./PlayerList",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/ui/App.js                                                             //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var TitleBar;module.import('./TitleBar',{"default":function(v){TitleBar=v}});var AddPlayer;module.import('./AddPlayer',{"default":function(v){AddPlayer=v}});var PlayerList;module.import('./PlayerList',{"default":function(v){PlayerList=v}});
                                                                                 //
                                                                                 //
                                                                                 // 1
                                                                                 //
                                                                                 // 3
                                                                                 // 4
                                                                                 // 5
                                                                                 //
var App = function (_Component) {                                                //
  _inherits(App, _Component);                                                    //
                                                                                 //
  function App() {                                                               //
    _classCallCheck(this, App);                                                  //
                                                                                 //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));  //
  }                                                                              //
                                                                                 //
  App.prototype.render = function () {                                           //
    function render() {                                                          //
      return React.createElement(                                                // 10
        'div',                                                                   // 11
        null,                                                                    // 11
        React.createElement(TitleBar, {                                          // 12
          title: this.props.title,                                               // 13
          subTitle: 'Created by Mikael S'                                        // 14
        }),                                                                      // 12
        React.createElement(                                                     // 16
          'div',                                                                 // 16
          { className: 'wrapper' },                                              // 16
          React.createElement(PlayerList, { players: this.props.players }),      // 17
          React.createElement(AddPlayer, null)                                   // 18
        )                                                                        // 16
      );                                                                         // 11
    }                                                                            // 22
                                                                                 //
    return render;                                                               //
  }();                                                                           //
                                                                                 //
  return App;                                                                    //
}(Component);                                                                    //
                                                                                 //
module.export("default",exports.default=(App));                                  //
                                                                                 //
                                                                                 //
App.propTypes = {                                                                // 25
  title: React.PropTypes.string.isRequired,                                      // 26
  players: React.PropTypes.array.isRequired                                      // 27
};                                                                               // 25
///////////////////////////////////////////////////////////////////////////////////

}],"Player.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","../api/players",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/ui/Player.js                                                          //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var Players;module.import('../api/players',{"Players":function(v){Players=v}});
                                                                                 //
                                                                                 //
                                                                                 // 1
                                                                                 // 2
                                                                                 //
var Player = function (_Component) {                                             //
  _inherits(Player, _Component);                                                 //
                                                                                 //
  function Player() {                                                            //
    _classCallCheck(this, Player);                                               //
                                                                                 //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));  //
  }                                                                              //
                                                                                 //
  Player.prototype.render = function () {                                        //
    function render() {                                                          //
      var _props = this.props;                                                   // 8
      var player = _props.player;                                                // 8
      var key = _props.key;                                                      // 8
                                                                                 //
                                                                                 //
      var itemClassName = 'item item--position-' + player.rank;                  // 11
                                                                                 //
      return React.createElement(                                                // 13
        'div',                                                                   // 14
        { className: itemClassName, key: this.props.key },                       // 14
        React.createElement(                                                     // 15
          'div',                                                                 // 15
          { className: 'player' },                                               // 15
          React.createElement(                                                   // 16
            'div',                                                               // 16
            null,                                                                // 16
            React.createElement(                                                 // 17
              'h3',                                                              // 17
              { className: 'player__name' },                                     // 17
              player.name                                                        // 17
            ),                                                                   // 17
            React.createElement(                                                 // 18
              'p',                                                               // 18
              { className: 'player__stats' },                                    // 18
              player.rank,                                                       // 20
              ',',                                                               // 18
              player.position,                                                   // 21
              ' place, score: ',                                                 // 18
              player.score                                                       // 22
            )                                                                    // 18
          ),                                                                     // 16
          React.createElement(                                                   // 25
            'div',                                                               // 25
            { className: 'player__actions' },                                    // 25
            React.createElement(                                                 // 26
              'button',                                                          // 26
              {                                                                  // 26
                className: 'button button--round ',                              // 27
                onClick: function () {                                           // 28
                  function onClick() {                                           // 28
                    return Players.update(player._id, { $inc: { score: 1 } });   // 28
                  }                                                              // 28
                                                                                 //
                  return onClick;                                                // 28
                }() },                                                           // 28
              '+1'                                                               // 26
            ),                                                                   // 26
            React.createElement(                                                 // 33
              'button',                                                          // 33
              {                                                                  // 33
                className: 'button button--round ',                              // 34
                onClick: function () {                                           // 35
                  function onClick() {                                           // 35
                    return Players.remove({ _id: player._id });                  // 35
                  }                                                              // 35
                                                                                 //
                  return onClick;                                                // 35
                }()                                                              // 35
              },                                                                 // 33
              'X'                                                                // 33
            ),                                                                   // 33
            React.createElement(                                                 // 38
              'button',                                                          // 38
              {                                                                  // 38
                className: 'button button--round ',                              // 39
                onClick: function () {                                           // 40
                  function onClick() {                                           // 40
                    return Players.update(player._id, { $inc: { score: -1 } });  // 40
                  }                                                              // 40
                                                                                 //
                  return onClick;                                                // 40
                }() },                                                           // 40
              '-1'                                                               // 38
            )                                                                    // 38
          )                                                                      // 25
        )                                                                        // 15
      );                                                                         // 14
    }                                                                            // 47
                                                                                 //
    return render;                                                               //
  }();                                                                           //
                                                                                 //
  return Player;                                                                 //
}(Component);                                                                    //
                                                                                 //
module.export("default",exports.default=(Player));                               //
                                                                                 //
                                                                                 //
Player.propTypes = {                                                             // 50
  player: React.PropTypes.object.isRequired                                      // 51
};                                                                               // 50
///////////////////////////////////////////////////////////////////////////////////

}],"PlayerList.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-flip-move","./Player",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/ui/PlayerList.js                                                      //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var FlipMove;module.import('react-flip-move',{"default":function(v){FlipMove=v}});var Player;module.import('./Player',{"default":function(v){Player=v}});
                                                                                 //
                                                                                 //
                                                                                 // 1
                                                                                 // 2
                                                                                 //
                                                                                 // 4
                                                                                 //
var PlayerList = function (_Component) {                                         //
  _inherits(PlayerList, _Component);                                             //
                                                                                 //
  function PlayerList() {                                                        //
    _classCallCheck(this, PlayerList);                                           //
                                                                                 //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));  //
  }                                                                              //
                                                                                 //
  PlayerList.prototype.renderPlayers = function () {                             //
    function renderPlayers() {                                                   //
      if (this.props.players.length === 0) {                                     // 9
        return React.createElement(                                              // 10
          'div',                                                                 // 11
          { className: 'item' },                                                 // 11
          React.createElement(                                                   // 12
            'p',                                                                 // 12
            { className: 'item__message--empty' },                               // 12
            'No players in db'                                                   // 12
          )                                                                      // 12
        );                                                                       // 11
      }                                                                          // 15
      return this.props.players.map(function (player) {                          // 16
        return React.createElement(Player, { key: player._id, player: player });
      });                                                                        // 18
    }                                                                            // 19
                                                                                 //
    return renderPlayers;                                                        //
  }();                                                                           //
                                                                                 //
  PlayerList.prototype.render = function () {                                    //
    function render() {                                                          //
      return React.createElement(                                                // 22
        'div',                                                                   // 23
        null,                                                                    // 23
        React.createElement(                                                     // 24
          FlipMove,                                                              // 24
          {                                                                      // 24
            maintainContainerHeight: true                                        // 25
          },                                                                     // 24
          this.renderPlayers()                                                   // 27
        )                                                                        // 24
      );                                                                         // 23
    }                                                                            // 31
                                                                                 //
    return render;                                                               //
  }();                                                                           //
                                                                                 //
  return PlayerList;                                                             //
}(Component);                                                                    //
                                                                                 //
module.export("default",exports.default=(PlayerList));                           //
                                                                                 //
                                                                                 //
PlayerList.propTypes = {                                                         // 34
  players: React.PropTypes.array.isRequired                                      // 35
};                                                                               // 34
///////////////////////////////////////////////////////////////////////////////////

}],"TitleBar.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/ui/TitleBar.js                                                        //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var _classCallCheck;module.import("babel-runtime/helpers/classCallCheck",{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import("babel-runtime/helpers/possibleConstructorReturn",{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import("babel-runtime/helpers/inherits",{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});
                                                                                 //
                                                                                 //
                                                                                 // 1
                                                                                 //
var TitleBar = function (_Component) {                                           //
  _inherits(TitleBar, _Component);                                               //
                                                                                 //
  function TitleBar() {                                                          //
    _classCallCheck(this, TitleBar);                                             //
                                                                                 //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));  //
  }                                                                              //
                                                                                 //
  TitleBar.prototype.renderSubTitle = function () {                              //
    function renderSubTitle() {                                                  //
      if (this.props.subTitle) {                                                 // 6
        return React.createElement(                                              // 7
          "h2",                                                                  // 7
          { className: "title-bar__subtitle" },                                  // 7
          this.props.subTitle                                                    // 7
        );                                                                       // 7
      }                                                                          // 8
    }                                                                            // 9
                                                                                 //
    return renderSubTitle;                                                       //
  }();                                                                           //
                                                                                 //
  TitleBar.prototype.render = function () {                                      //
    function render() {                                                          //
      return React.createElement(                                                // 11
        "div",                                                                   // 12
        { className: "title-bar" },                                              // 12
        React.createElement(                                                     // 13
          "div",                                                                 // 13
          { className: "wrapper" },                                              // 13
          React.createElement(                                                   // 14
            "h1",                                                                // 14
            null,                                                                // 14
            this.props.title                                                     // 14
          ),                                                                     // 14
          this.renderSubTitle()                                                  // 15
        )                                                                        // 13
      );                                                                         // 12
    }                                                                            // 19
                                                                                 //
    return render;                                                               //
  }();                                                                           //
                                                                                 //
  return TitleBar;                                                               //
}(Component);                                                                    //
                                                                                 //
module.export("default",exports.default=(TitleBar));                             //
                                                                                 //
                                                                                 //
TitleBar.propTypes = {                                                           // 22
  title: React.PropTypes.string.isRequired                                       // 23
};                                                                               // 22
TitleBar.defaultProps = {                                                        // 25
  title: 'Default title'                                                         // 26
};                                                                               // 25
///////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".scss"]});
require("./client/template.main.js");
require("./client/main.js");