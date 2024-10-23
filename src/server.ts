import { configDotenv } from 'dotenv';

import app from './app';

configDotenv();

const port: string = process.env.PORT || '3000';
app.listen(port, () =>
	console.log(`REST API server ready at: http://localhost:${port}`),
);
