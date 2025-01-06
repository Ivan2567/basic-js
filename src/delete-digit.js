const { NotImplementedError } = require("../extensions/index.js");

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
  str_n = String(n);
  let max = 0;
  for (i = 0; i < str_n.length; i++) {
    let n = Number(str_n.slice(0, i) + str_n.slice(i + 1));
    if (n > max) {
      max = n;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
