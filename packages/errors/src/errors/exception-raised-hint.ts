import { createError, ErrorCode } from '../index.js';

export interface ExceptionRaisedHintErrorExtensions {
	hint: string;
}

export const messageConstructor = ({ hint }: ExceptionRaisedHintErrorExtensions) => {
	return hint;
};

export const ExceptionRaisedHintError = createError<ExceptionRaisedHintErrorExtensions>(
	ErrorCode.ExceptionRaisedHint,
	messageConstructor,
	400,
);
