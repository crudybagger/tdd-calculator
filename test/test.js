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
  it('new line between numbers', function () {
    equal(add("1\n2, 3"), 6);
  });
  it('different delimiters', function () {
    equal(add("//;\n1;2"), 3);
  });
  it('different delimiters multiple numbers', function () {
    equal(add("//*\n1*2*12"), 15);
  });

});