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
function deleteDigit(/*n*/) {
  throw new NotImplementedError('Not implemented');
  // let arrN = String(n).split('');
  // let arrNMapped = arrN.map(x => Number(x));
  // let min = Math.min(...arrNMapped);
  // let arrNMappedToString = arrNMapped.map(x => String(x)).join('');

  // return Number(arrNMappedToString.replace(min, '').split('').sort((a, b) => b - a).join(''));

}

module.exports = {
  deleteDigit
};
