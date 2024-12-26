import { equal } from 'assert';
import { add } from '../calculator.js';

describe('test add', function () {
  it('empty input', function () {
    equal(add(""), 0);
  });
  it('one number', function () {
    equal(add("1"), 1);
  });
  it('two numbers', function () {
    equal(add("1,2"), 3);
  });
  it('multiple numbers', function () {
    equal(add("1, 2, 3, 4, 5"), 15);
  });
});