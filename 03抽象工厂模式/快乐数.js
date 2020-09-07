/*编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。
如果可以变为 1，那么这个数就是快乐数。

示例:
输入: 19
输出: true
解释:
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1
*/
var isHappy = function(n) {
  var time = 10;
  while (time) {
    n = (n + '').split('');
    n = n.reduce(function(prev, curr, index, arr) {
      return prev + curr * curr;
    }, 0);
    if(n === 1) {
      return true;
    }
    time --;
  }
  return false;
};

console.log(isHappy(19));
console.log(isHappy(18));