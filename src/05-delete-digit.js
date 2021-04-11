/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
    let max = '';
    // eslint-disable-next-line no-param-reassign
    n = n.toString().split('');
    for (let i = 0; i < n.length; i++) {
      const currentArr = n;
      const currentDigit = currentArr[i];
      currentArr[i] = '';
      const str = currentArr.join('');
      if (max < str) {
        max = str;
      }
      currentArr[i] = currentDigit;
    }
    max = parseInt(max, 10);
    return max;
  }
  
  module.exports = deleteDigit;
  
