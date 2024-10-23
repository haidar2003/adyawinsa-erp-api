import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authenticateToken from '../../src/middleware/authenticateToken';

jest.mock('jsonwebtoken');
const mockedJwtVerify = jwt.verify as jest.Mock;

describe('authenticateToken middleware', () => {
	let req: Request;
	let res: Response;
	let next: NextFunction;

	beforeEach(() => {
		req = {
			headers: {},
			user: undefined,
		} as Request;

		res = {
			sendStatus: jest.fn(),
		} as unknown as Response;

		next = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should call next if a valid token is provided', () => {
		const validToken = 'valid-token';

		req.headers.authorization = `Bearer ${validToken}`;

		// Mock jwt.verify to call the callback with no error and some user data
		mockedJwtVerify.mockImplementationOnce((token, secret, callback) =>
			callback(null, { userId: 123 })
		);

		authenticateToken(req, res, next);

		expect(next).toHaveBeenCalledTimes(1);
		expect(req.user).toEqual({ userId: 123 });
	});

	it('should return 401 status if no token is provided', () => {
		authenticateToken(req, res, next);

		expect(res.sendStatus).toHaveBeenCalledTimes(1);
		expect(res.sendStatus).toHaveBeenCalledWith(401);
		expect(next).not.toHaveBeenCalled();
	});

	it('should return 403 status if an invalid token is provided', () => {
		const invalidToken = 'invalid-token';

		req.headers.authorization = `Bearer ${invalidToken}`;

		// Mock jwt.verify to call the callback with an error
		mockedJwtVerify.mockImplementationOnce((token, secret, callback) =>
			callback(new Error('Invalid token'))
		);

		authenticateToken(req, res, next);

		expect(res.sendStatus).toHaveBeenCalledTimes(1);
		expect(res.sendStatus).toHaveBeenCalledWith(403);
		expect(next).not.toHaveBeenCalled();
	});
});
