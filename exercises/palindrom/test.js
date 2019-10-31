const palindromFunc = require('./index');

test('palindromFunc function is defined', () => {
  expect(typeof palindromFunc).toEqual('function');
});

test('Palindrom of aa', () => {
  expect(palindromFunc('aa')).toEqual(true);
});

test('Palindrom of 1sagar should be ragas1', () => {
  expect(palindromFunc('1sagar')).toEqual(false);
});

test('Palindrom of a single character', () => {
    expect(palindromFunc('a')).toEqual(true);
  });
  
test('Palindrom of yasay', () => {
  expect(palindromFunc('yasay')).toEqual(true);
});

test('Palindrom of !@#$%^%$#@!', () => {
  expect(palindromFunc('!@#$%^%$#@!')).toEqual(true);
});


