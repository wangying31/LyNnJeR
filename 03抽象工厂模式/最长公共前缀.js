/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

说明:
所有输入只包含小写字母 a-z 。
*/

var longestCommonPrefix  = function(list) {
  if(list.length < 2) {
    return !list.length ? '' : list[0];
  }
  return list.reduce(function(prev, curr) {
    var i = 0;
    while (prev[i] && curr[i] && prev[i] === curr[i]) {
      i ++;
    };
    return prev.slice(0, i);
  })
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["flower"]));


