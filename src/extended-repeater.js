const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  string_ = String(str);
  repeatTimes = options.repeatTimes || 1;
  additionRepeatTimes = options.additionRepeatTimes || 1;
  separator = options.separator || "+";
  addition =
    options.addition === undefined ? "" : String(options.addition);
  additionSeparator = options.additionSeparator || "|";

  addition_part = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  result = new Array(repeatTimes)
    .fill(string_ + addition_part)
    .join(separator);

  return result;
}

module.exports = {
  repeater
};
