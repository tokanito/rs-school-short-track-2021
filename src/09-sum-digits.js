/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
    // eslint-disable-next-line no-undef
    q = n.toString();
    let summ = 0;
    // eslint-disable-next-line no-undef
    for (let i = 0; i < q.length; i++) {
      // eslint-disable-next-line no-undef
      summ += parseInt(q[i], 10);
    }
    // eslint-disable-next-line no-undef
    q = summ;
    // eslint-disable-next-line no-undef
    if (q > 9) {
      // eslint-disable-next-line no-undef
      return getSumOfDigits(q);
    }
  
    // eslint-disable-next-line no-undef
    return q;
  }
  
  module.exports = getSumOfDigits;
  
