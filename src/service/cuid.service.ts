import { configDotenv } from 'dotenv';

import { init } from '@paralleldrive/cuid2';

configDotenv();

export const createCUID = (length: number) => {
	return init({
		random: Math.random as unknown as number,
		length: length,
		fingerprint: process.env.TOKEN_SECRET,
	})();
};