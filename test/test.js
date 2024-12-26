import { equal } from 'assert';
import { add } from '../calculator.js';

describe('test add', function () {
  it('empty input', function () {
    equal(add(""), 0);
  });
});