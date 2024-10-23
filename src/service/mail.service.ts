import { configDotenv } from 'dotenv';
import nodemailer from 'nodemailer';

import { MailDTO } from '../interfaces/mail.dto';

configDotenv();

export default class MailService {
	private static instance: MailService;
	private transporter!: nodemailer.Transporter;

	private constructor() { }

	static getInstance() {
		if (!MailService.instance) {
			MailService.instance = new MailService();
		}
		return MailService.instance;
	}

	// connection for local testing
	async createLocalConnection() {
		const account = await nodemailer.createTestAccount();
		this.transporter = nodemailer.createTransport({
			host: account.smtp.host,
			port: account.smtp.port,
			secure: account.smtp.secure,
			auth: {
				user: account.user,
				pass: account.pass,
			}
		});
	}

	// connection for live
	async createConnection() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 0,
			secure: true,
			auth: {
				user: process.env.SMTP_USERNAME,
				pass: process.env.SMTP_PASSWORD,
			},
		});
	}

	async sendMail(requestId: string, options: MailDTO) {
		const connected = await this.verifyConnection();
		if (!connected) {
			return { 'status': 'fail', 'error': 'Connection not established.' };
		}
		return await this.transporter
			.sendMail({
				from: `"test from" ${process.env.SMTP_SENDER || options.from}`,
				to: options.to,
				cc: options.cc,
				bcc: options.bcc,
				subject: options.subject,
				text: options.text,
				html: options.html,
			})
			.then((info) => {
				console.log(`${requestId} - Mail sent`);
				return { 'status': 'success', 'requestId': requestId, 'info': info };
			})
			.catch((err) => {
				console.log(err);
				return { 'status': 'failed', 'error': err };
			});
	}

	async verifyConnection() {
		try {
			return this.transporter.verify();
		} catch (error) {
			return false;
		}
	}

	getTransporter() {
		return this.transporter;
	}
}