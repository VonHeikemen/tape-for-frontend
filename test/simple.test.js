import test from 'tape';

import { countify } from '../src/index';

test('1 + 1 equals 2', function (t) {
  var sumResult = 1 + 1;
  t.equals(sumResult, 2);
  t.end();
});

test('counter increments', t => {
  var div = document.createElement('div');
  countify(div);

  var button = div.getElementsByTagName('button')[0];
  button.dispatchEvent(new MouseEvent('click'));

  t.equals(button.textContent, '1');
  t.end();
});

