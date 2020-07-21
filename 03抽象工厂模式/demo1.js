/**
 * 制定了类的结构
 * 子类去实现父类中的抽象方法
 */

// 抽象工厂方法
var abstractFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof abstractFactory[superType] === 'function') {
    // 缓存类
    function F() { };
    // 继承父类属性和方法
    F.prototype = new abstractFactory[superType]();
    // 将子类constructor指向子类
    subType.constructor = subType;
    // 子类原型继承父类
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建该抽象类');
  }
}

// 小汽车抽象类
abstractFactory.Car = function () {
  this.type = 'car';
};
abstractFactory.Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用');
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用');
  }
};

// 公交车抽象类
abstractFactory.Bus = function () {
  this.type = 'bus';
};
abstractFactory.Bus.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用');
  },
  getPassengerNum: function () {
    return new Error('抽象方法不能调用');
  }
};

// 货车抽象类
abstractFactory.Truck = function () {
  this.type = 'truck';
};
abstractFactory.Truck.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用');
  },
  getTrainload: function () {
    return new Error('抽象方法不能调用');
  }
};

// 实现抽象类
// 宝马汽车子类
var BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
}
// 抽象工厂实现对Car抽象类的继承
abstractFactory(BMW, 'Car');
BMW.prototype.getPrice = function () {
  return this.price;
}
BMW.prototype.getSpeed = function () {
  return this.speed;
}
// 宇通公交车子类
var YUTONG = function (price, passenger) {
  this.price = price;
  this.passenger = passenger;
}
// 抽象工厂实现对Bus抽象类的继承
abstractFactory(YUTONG, 'Bus');
YUTONG.prototype.getPrice = function () {
  return this.price;
}
YUTONG.prototype.getPassengerNum = function () {
  return this.passenger;
}
// 奔驰汽车子类
var BenzTruck = function (price, trainLoad) {
  this.price = price;
  this.trainLoad = trainLoad;
}
// 抽象工厂实现对Truck抽象类的继承
abstractFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function () {
  return this.price;
}
BenzTruck.prototype.getTrainload = function () {
  return this.price;
}

// test

var truck = new BenzTruck(99999, 99);
console.log(truck.getPrice());
console.log(truck.type);

var yt = new YUTONG(99999, 99);
console.log(yt.getPrice());
console.log(yt.type);

var bmw = new BMW(99999, 99);
console.log(bmw.getPrice());
console.log(bmw.type);
