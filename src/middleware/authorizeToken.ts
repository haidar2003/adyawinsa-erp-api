import { NextFunction, Request, Response } from 'express';

import { User } from '../interfaces/user.dto';

export default function authorizeToken(requiredRole: string[]) {
	return (req: Request, res: Response, next: NextFunction) => {
		const user = req.user as User;
		const hasRequiredRole = requiredRole.some((role) =>
			user.role.includes(role)
		);
		if (!hasRequiredRole) {
			return res.sendStatus(403);
		}
		next();
	};
}