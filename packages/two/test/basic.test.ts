import { expect, it, vitest } from 'vitest';

import { doSomething } from 'example-test-one';

vitest.mock('example-test-one');

it('should be mocked', () => {
  expect(doSomething(2, 3)).not.toBe(5);
});

it('should import actual', async () => {
  const { doSomething } = await vitest.importActual('example-test-one');
  expect(doSomething(2, 3)).toBe(5);
})
