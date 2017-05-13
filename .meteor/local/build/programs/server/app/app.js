var require = meteorInstall({"imports":{"api":{"players.js":["babel-runtime/helpers/extends","meteor/mongo","numeral",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// imports/api/players.js                                                   //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
module.export({Players:function(){return Players},calculatePlayerPositions:function(){return calculatePlayerPositions}});var _extends;module.import('babel-runtime/helpers/extends',{"default":function(v){_extends=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var numeral;module.import('numeral',{"default":function(v){numeral=v}});
                                                                            // 1
                                                                            // 2
                                                                            //
var Players = new Mongo.Collection('players'); // constructor function      // 4
                                                                            //
var calculatePlayerPositions = function calculatePlayerPositions(players) {
  var rank = 1;                                                             // 7
                                                                            //
  return players.map(function (player, index) {                             // 9
    if (index !== 0 && players[index - 1].score <= player.score) {          // 10
      rank++;                                                               // 11
    }                                                                       // 12
                                                                            //
    return _extends({}, player, {                                           // 14
      rank: rank,                                                           // 16
      position: numeral(rank).format('0o')                                  // 17
    });                                                                     // 14
  });                                                                       // 19
};                                                                          // 20
//////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/players",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Players;module.import('../imports/api/players',{"Players":function(v){Players=v}});// import '../imports/utils'
                                                                            // 2
                                                                            // 3
                                                                            //
Meteor.startup(function () {});                                             // 5
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
