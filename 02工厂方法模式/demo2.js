// 创建安全模式的工厂类
let Factory = function (type, content) {
  if(this instanceof Factory) {
    let s = new this[type](content);
    return s;
  } else {
    return new Factory(type, content);
  }
}
Factory.prototype = {
  Java(content) {
    this.content = content;
    (function(cotent){
      let div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px soild red';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  JavaScript(content) {
    this.content = content;
    (function(cotent){
      let div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px soild yellow';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  UI(content) {
    this.content = content;
    (function(cotent){
      let div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px soild green';
      document.getElementById('container').appendChild(div);
    })(content);
  }
}
let data = [
  {type: 'JavaScript', content: 'JavaScript is OK'},
  {type: 'Java', content: 'Java is OK'},
  {type: 'UI', content: 'UI is OK'},
];
for (let index = 0, len = data.length; index < len; index ++) {
  Factory(data[index].type, data[index].content);
}
