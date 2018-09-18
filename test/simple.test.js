var test = require('tape');

test('1 + 1 equals 2', function (t) {
  var sumResult = 1 + 1;
  t.equals(sumResult, 2);
  t.end();
});

