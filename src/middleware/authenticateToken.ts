import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function authenticateToken(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.sendStatus(401);

	jwt.verify(token, process.env.TOKEN_SECRET!, (err, user) => {
		if (err) {
			return res.sendStatus(403);
		}

		req.user = user;
		next();
	});
}