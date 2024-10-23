import { Request, Response, NextFunction } from 'express';
import authorizeToken from '../../src/middleware/authorizeToken';

describe('authorizeToken middleware', () => {
	let req: Request;
	let res: Response;
	let next: NextFunction;

	beforeEach(() => {
		req = {
			user: { role: ['USER'] }, // Mocking an authenticated user with the 'USER' role
		} as unknown as Request;

		res = {
			sendStatus: jest.fn(),
		} as unknown as Response;

		next = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should call next if the user has the required role', () => {
		const requiredRoles = ['USER'];

		const middleware = authorizeToken(requiredRoles);

		middleware(req, res, next);

		expect(next).toHaveBeenCalledTimes(1);
	});

	it('should return 403 status if the user does not have the required role', () => {
		const requiredRoles = ['ADMIN'];

		const middleware = authorizeToken(requiredRoles);

		middleware(req, res, next);

		expect(res.sendStatus).toHaveBeenCalledTimes(1);
		expect(res.sendStatus).toHaveBeenCalledWith(403);
		expect(next).not.toHaveBeenCalled();
	});

	it('should call next if the user has some but not all the required roles', () => {
		const requiredRoles = ['USER', 'ADMIN'];

		const middleware = authorizeToken(requiredRoles);

		middleware(req, res, next);

		expect(next).toHaveBeenCalledTimes(1);
	});
});
