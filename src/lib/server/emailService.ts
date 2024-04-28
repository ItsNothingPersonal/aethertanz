import {
	EMAIL_FROM,
	SMTP_HOST,
	SMTP_PASSWORD,
	SMTP_PORT,
	SMTP_USERNAME
} from '$env/static/private';
import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: true, // true for 465, false for other ports
	auth: {
		user: SMTP_USERNAME,
		pass: SMTP_PASSWORD
	}
});

const compileEmailTemplate = (templatePath: string, data: unknown): string => {
	const templateFile = fs.readFileSync('./src/lib/server/mailTemplates/' + templatePath, 'utf-8');
	const template = handlebars.compile(templateFile);
	return template(data);
};

export const sendEmail = async (
	to: string,
	subject: string,
	templatePath: string,
	data: unknown
) => {
	const html = compileEmailTemplate(templatePath, data);

	const mailOptions = {
		from: EMAIL_FROM,
		to,
		subject,
		html
	};

	await transporter.sendMail(mailOptions);
};
