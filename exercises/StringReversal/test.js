const revStr = require('./index');

test('revStr function is defined', () => {
  expect(typeof revStr).toEqual('function');
});

test('Reverse of aa', () => {
  expect(revStr('aa')).toEqual('aa');
});

test('Reverse of 1sagar should be ragas1', () => {
  expect(revStr('1sagar')).toEqual('ragas1');
});

test('Reverse reverses a string', () => {
    expect(revStr('  abcd')).toEqual('dcba  ');
  });
  

