var Basketball = function() {
  this.intro = 'Basketball';
}
Basketball.prototype = {
  getMenber: function () {
    console.log('每个队伍需要5名球员');
  },
  getBallSize: function () {
    console.log('篮球很大');
  }
}

var Football = function() {
  this.intro = 'Football';
}
Football.prototype = {
  getMenber: function () {
    console.log('每个队伍需要11名球员');
  },
  getBallSize: function () {
    console.log('足球很大');
  }
}

var Tennis = function() {
  this.intro = 'Tennis';
}
Tennis.prototype = {
  getMenber: function () {
    console.log('每个队伍需要1名球员');
  },
  getBallSize: function () {
    console.log('网球很大');
  }
}

var SportsFactory = function (name) {
  switch (name) {
    case 'NBA':
      return new Basketball();
      break;
    case 'wordCup':
      return new Football();
      break;
    case 'FrenchOpen':
      return new Tennis();
      break;
  
    default:
      break;
  }
}

var football = SportsFactory('wordCup');
console.log(football);
console.log(football.intro);
football.getMenber();
