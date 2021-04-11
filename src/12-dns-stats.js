/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
    const res = {};
    let common = [];
    for (let i = 0; i < domains.length; i++) {
      // eslint-disable-next-line no-param-reassign
      domains[i] = domains[i].split('.').reverse();
      const arr = domains[i];
      let pattern = '';
      for (let k = 0; k < arr.length; k++) {
        pattern = `${pattern}.${arr[k]}`;
        common.push(pattern);
      }
    }
    common = common.sort();
    for (let i = 0; i < common.length; i++) {
      if (!res[common[i]]) {
        res[common[i]] = 1;
      } else {
        res[common[i]]++;
      }
    }
    return res;
  }
  
  module.exports = getDNSStats;
