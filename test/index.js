/* eslint-disable no-undef */
/* eslint-disable camelcase */
const assert = require('assert');
const toBoolean = require('../index');
const BooleanConverter = require(('../BooleanConverter'));

describe('Testing convert to any types variables to boolean', () => {
  it('boolean', () => {
    const mock_input1 = true;
    const mock_input2 = false;
    const expected_output1 = true;
    const expected_output2 = false;
    const output1 = toBoolean(mock_input1);
    const output2 = toBoolean(mock_input2);

    assert.equal(expected_output1, output1);
    assert.equal(expected_output2, output2);
  });
});

describe('Testing BooleanConverter class', () => {
  it('new object', () => {
    const output = new BooleanConverter();
    assert.equal(output.constructor.name, 'BooleanConverter');
  });

  it('function toBoolean', () => {

  });
});
