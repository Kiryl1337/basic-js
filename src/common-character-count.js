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
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split('')
  s2 = s2.split('')

  for(let i = s1.length - 1; i >= 0; i--){
    for(let j = s2.length - 1; j >= 0; j--){
       if(s1[i] === s2[j]){
         count++;
         s1[i] = '';
         s2[j] = '';
         break;
       }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
