/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res = true;
  const num = n.split('-');
  for (let i = 0; i < num.length; i++) {
    num[i] = parseInt(num[i], 16);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(num[i])) {
      res = false;
    }
  }
  return res;
}

module.exports = isMAC48Address;
