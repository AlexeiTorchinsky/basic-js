const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let commonCount = 0;
  const charCount1 = {};
  const charCount2 = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    charCount1[char] = (charCount1[char] || 0) + 1;
  }
    console.log(charCount1)
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (const char in charCount1) {
    if (charCount2[char]) {
      commonCount += Math.min(charCount1[char], charCount2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
