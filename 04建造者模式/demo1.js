// 建造一个人类
var Human = function (param) {
  this.skill = param && param.skill || '保密';
  this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
  getSkill: function () {
    return this.skill;
  },
  getHobby: function () {
    return this.hobby;
  }
}

// 实例化姓名类
var Named = function (name) {
  var self = this;
  (function (name, self) {
    self.wholeName = name;
    if (name.indexOf(' ') > -1) {
      self.FirstName = name.slice(0, name.indexOf(' '));
      self.secondName = name.slice(name.indexOf(' '));
    }
  })(name, self);
}

// 实例化职位类
var Work = function (work) {
  var self = this;
  (function (work, self) {
    switch (work) {
      case 'code':
        self.work = '工程师';
        self.workDes = '每天沉醉于编程';
        break;
      case 'UI':
      case 'UE':
        self.work = '设计师';
        self.workDes = '设计更是一种艺术';
        break;
      case 'teach':
        self.work = '教师';
        self.workDes = '分享也是一种快乐';
        break;
      default:
        self.work = work;
        self.workDes = 'sorry';
        break;
    }
  })(work, self);
}
Work.prototype.changeWork = function (work) {
  this.work = work;
}
Work.prototype.changeDes = function (setence) {
  this.workDes = setence;
}

// 创建应聘者
var Person = function (name, work) {
  // 创建应聘者缓存对象
  var _person = new Human();
  _person.name = new Named(name);
  _person.work = new Work(work);
  return _person;
}

var person = new Person('hello world', 'code');

console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDes);
person.work.changeDes('更新职位描述');
console.log(person.work.workDes);
