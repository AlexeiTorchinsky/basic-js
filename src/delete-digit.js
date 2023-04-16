const { NotImplementedError } = require('../extensions/index.js');

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
  let arrN = String(n).split('');
  let arrNMapped = arrN.map(x => Number(x));
  let maxNum = 0;
  for (let i = 0; i < arrNMapped.length; i++) {
    let numWithOutOneDigit = parseInt(arrNMapped.slice(0, i).concat(arrN.slice(i+1)).join(''));
    if (numWithOutOneDigit > maxNum) {
      maxNum = numWithOutOneDigit;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
