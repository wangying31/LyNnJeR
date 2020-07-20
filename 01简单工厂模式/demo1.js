function createBook(name, time, type) {
  // 创建一个对象，并扩展对象属性和方法
  var o = new Object();
  o.name = name;
  o.time = time;
  o.type = type;
  o.getName = function () {
    console.log(this.name);
  };
  // 返回对象
  return o;
}

var book1 = createBook('js book', '2019', 'js');
var book2 = createBook('css book', '2018', 'css');

book1.getName();
book2.getName();
