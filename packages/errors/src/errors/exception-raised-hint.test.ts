import { beforeEach, expect, test } from 'vitest';
import type { ExceptionRaisedHintErrorExtensions } from './exception-raised-hint.js';
import { messageConstructor } from './exception-raised-hint.js';

let sample: ExceptionRaisedHintErrorExtensions;

beforeEach(() => {
	sample = {
		hint: 'Total would exceed 100.',
	};
});

test('Constructs the message', () => {
	const result = messageConstructor(sample);
	expect(result).toBe(`Total would exceed 100.`);
});
