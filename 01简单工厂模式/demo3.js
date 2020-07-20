class Basketball {
  constructor() {
    this.intro = 'Basketball';
  }
  getMenber() { console.log('每个队伍需要5名球员'); }
  getBallSize() { console.log('篮球很大'); }
}

class Football {
  constructor() {
    this.intro = 'Football';
  }
  getMenber() { console.log('每个队伍需要11名球员'); }
  getBallSize() { console.log('足球很大'); }
}

class Tennis {
  constructor() {
    this.intro = 'Tennis';
  }
  getMenber() { console.log('每个队伍需要1名球员'); }
  getBallSize() { console.log('网球很大'); }
}

let SportsFactory = (name) => {
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

let football = SportsFactory('wordCup');
console.log(football);
console.log(football.intro);
football.getMenber();
