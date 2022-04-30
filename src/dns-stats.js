const { NotImplementedError } = require('../extensions/index.js');

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
  let map = {}
  domains.map(el => {
      let revEl = el.split('.').reverse()
      let str = ''
      for (let i = 0; i < revEl.length; i++) {
          str += '.' + revEl[i]
          map[str] = map[str] ? map[str] + 1 : 1
      }
  })
  return map
}

module.exports = {
  getDNSStats
};
