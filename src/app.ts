import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import { serve, setup } from 'swagger-ui-express';

import swaggerFile from '../swagger_output.json';
import routes from './routes';
import MailService from './service/mail.service';
import { IncomingMessage } from 'http';

const app: Application = express();

// app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});
app.use(express.json({
	type: (req: IncomingMessage) => {
		return req.headers['content-type'] === 'application/json' 
		|| req.headers['content-type'] === undefined;
	},
	limit: '2mb'
}));
app.use(express.urlencoded({limit: '2mb'}));
app.use(fileUpload());

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'API is running on /api' });
});

const mailService = MailService.getInstance();

// Technically, we need to "await" the connection creation but it will cause
// top level await. This shouldn't be a problem unless we try to send a mail 
// instantly after starting the server.
if (process.env.NODE_ENV === 'local') {
	mailService.createLocalConnection();
} else if (process.env.NODE_ENV === 'production') {
	mailService.createConnection();
}

app.use('/api', routes);
app.use('/api-doc', serve, setup(swaggerFile));

export default app;