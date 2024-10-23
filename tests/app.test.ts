import requests, { Response } from 'supertest';

import app from '../src/app';

describe('Test index.ts', () => {
	test('Catch default route', async () => {
		const res: Response = await requests(app).get('/');
		expect(res.body).toEqual({ message: 'API is running on /api' });
	});
});