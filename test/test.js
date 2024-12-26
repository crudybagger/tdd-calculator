import { equal, throws } from 'assert';
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
  it('negative numbers', function () {
    throws(() => add("1,-2,3"), Error("negative numbers not allowed -2"));
  });
  it('negative numbers multiple', function () {
    throws(() => add("1,-2,-3"), Error("negative numbers not allowed -2,-3"));
  });
  it('numbers bigger than 1000', function () {
    equal(add("2, 1001"), 2);
  });
  it('multiple numbers bigger than 1000', function () {
    equal(add("2, 1001, 2000"), 2);
  });
  it('delimiters of any length', function () {
    equal(add("//[***]\n1***2***3"), 6);
  });
  it('multiple delimiters', function () {
    equal(add("//[*][%]\n1*2%3"), 6);
  });
  it('multiple delimiters with length longer than one', function () {
    equal(add("//[**][%%]\n1**2%%3"), 6);
  });
});