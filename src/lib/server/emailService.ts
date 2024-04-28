import {
	EMAIL_FROM,
	SMTP_HOST,
	SMTP_PASSWORD,
	SMTP_PORT,
	SMTP_USERNAME
} from '$env/static/private';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import { bestaetigungsTemplate } from './mailTemplates/anmeldeBestaetigung';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: true, // true for 465, false for other ports
	auth: {
		user: SMTP_USERNAME,
		pass: SMTP_PASSWORD
	}
});

const compileEmailTemplate = (data: unknown): string => {
	const template = handlebars.compile(bestaetigungsTemplate);
	return template(data);
};

export const sendEmail = async (to: string, subject: string, data: unknown) => {
	const html = compileEmailTemplate(data);

	const mailOptions = {
		from: EMAIL_FROM,
		to,
		subject,
		html,
		bcc: ['anu@naechtlichestheater.de', 'rai@naechtlichestheater.de']
	};

	await transporter.sendMail(mailOptions);
};
