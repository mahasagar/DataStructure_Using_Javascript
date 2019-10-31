const integerReversalFunc = require('./index');

test('integerReversalFunc function is defined', () => {
  expect(typeof integerReversalFunc).toEqual('function');
});


test('Integer Reverse of 15 should be 51', () => {
  expect(integerReversalFunc(15)).toEqual(51);
});

test('Integer Reverse of 900 should be 9', () => {
  expect(integerReversalFunc(900)).toEqual(9);
});

test('Integer Reverse of 123 should be 321', () => {
  expect(integerReversalFunc(123)).toEqual(321);
});

test('Integer Reverse of 101 should be 101', () => {
  expect(integerReversalFunc(101)).toEqual(101);
});

test('Integer Reverse of -19 should be -91', () => {
  expect(integerReversalFunc(-19)).toEqual(-91);
});


test('Integer Reverse of -50 should be -5', () => {
  expect(integerReversalFunc(-50)).toEqual(-5);
});
