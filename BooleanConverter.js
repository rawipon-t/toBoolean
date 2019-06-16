class BooleanConverter {
  /**
    * @param {*} value
    * @param {boolean} negativeNumber default is false
    * @param {string[]} positiveWords
    * @returns {BooleanConverter}
    */
  constructor(value = undefined, negativeNumber = false, positiveWords = ['true', 'yes']) {
    this.value = value;
    this.setNegativeNumber(negativeNumber);
    this.addPositiveWords(positiveWords);
    return this;
  }

  /**
    * @param {*} value
    * @returns {boolean}
    */
  toBoolean(value = this.value) {
    let _value = value;
    if (!Number.isNaN(Number(value))) {
      _value = Number(value);
    }

    switch (typeof _value) {
      case 'string':
        return new RegExp(`^${this.positiveWords.join('|')}$`, 'i').test(_value);
      case 'number':
        if (_value < 0) {
          return this.negativeNumber;
        } else {
          return _value > 0;
        }
      case 'boolean':
        return _value;
      default:
        return false;
    }
  }

  /**
    * @param {boolean} value
    * @returns {BooleanConverter}
    */
  setNegativeNumber(value) {
    this.negativeNumber = value;
    return this;
  }

  /**
    * @param {string | string[]} words
    * @returns {BooleanConverter}
    */
  addPositiveWords(words) {
    let _words = [];
    if (typeof words === 'string') {
      _words = [words];
    } else {
      _words = words;
    }
    const set = new Set([...this.positiveWords || [], ..._words]);
    this.positiveWords = Array.from(set);
    return this;
  }
}

module.exports = BooleanConverter;
