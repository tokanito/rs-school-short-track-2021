/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let res = true;
  // eslint-disable-next-line no-param-reassign
  n = n.split('-');

  for (let i = 0; i < n.length; i++) {
    // eslint-disable-next-line no-param-reassign
    n[i] = parseInt(n[i], 16);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(n[i])) {
      res = false;
    }
  }
  return res;
}

module.exports = isMAC48Address;