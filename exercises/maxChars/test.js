const maxCharFunc = require('./index');

test('maxCharFunc function is defined', () => {
  expect(typeof maxCharFunc).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(maxCharFunc('a')).toEqual('a');
    expect(maxCharFunc('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
    expect(maxCharFunc('ab1c1d1e1f1g1')).toEqual('1');
});
  