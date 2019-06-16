const BooleanConverter = require('./BooleanConverter');

/**
 * @param {*} value
 * @param {boolean} negativeNumber default is false
 * @param {string[]} positiveWords
 * @returns {boolean}
 */
const toBoolean = (value, negativeNumber, positiveWords) => new BooleanConverter(value, negativeNumber, positiveWords).toBoolean();

module.exports = toBoolean;
