import { isEqual } from './index.mjs';

if (!isEqual([1, 2, 3], [1, 2, 3])) {
  throw new Error('Assertion failed');
}

console.log('OK');
