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
   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  const domains1 = domains.map(el => el.split('.'));
  domains1.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      result[el[i]] = i
    }
  })
  console.log(result)
}

// Создаем пустой объект для хранения количества появлений каждого домена.

// Проходим по каждому домену в массиве.

// Разбиваем каждый домен на поддомены, используя разделитель точки.

// Для каждого поддомена мы создаем ключ в объекте и увеличиваем значение на 1. При этом, мы сначала должны обработать самый верхний уровень домена (например, '.ru'), затем следующий уровень домена (например, '.ru.yandex') и т.д., чтобы корректно посчитать количество появлений каждого поддомена.

// Возвращаем объект с количеством появлений каждого домена.
// Например, для данного массива доменов:

// javascript

// [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]

// Мы будем делать следующие шаги:

//     Создаем пустой объект.

//     Берем первый домен 'code.yandex.ru'.

//     Разбиваем его на поддомены: 'code', 'yandex', 'ru'.

//     Для каждого поддомена создаем ключ в объекте и увеличиваем значение на 1. Получаем следующий объект:

// javascript

// {
//   '.ru': 1,
//   '.ru.yandex': 1,
//   '.ru.yandex.code': 1
// }

module.exports = {
  getDNSStats
};
