import {
	GOOGLE_PRIVATE_KEY,
	GOOGLE_SERVICE_ACCOUNT_EMAIL,
	TARGET_SHEET_ID
} from '$env/static/private';
import { sendEmail } from '$lib/server/emailService';
import { createServiceAccountAuth } from '$lib/server/utils';
import { json } from '@sveltejs/kit';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function POST({ request }) {
	const data = await request.formData();

	const formData = {
		name: String(data.get('name')),
		email: String(data.get('email')),
		alter: String(data.get('age')) === 'on' ? 'ja' : 'nein',
		essen: String(data.get('essen')),
		allergien: data.get('allergien-beschreibung')
			? String(data.get('allergien-beschreibung'))
			: 'Keine',
		beschreibung: String(data.get('beschreibung')),
		trigger: data.get('trigger') ? String(data.get('trigger')) : 'Keine'
	};

	// Versand der Bestätigungsmail
	try {
		await sendEmail(
			formData.email,
			'Anmeldebestätigung Äthertanz: Höhenluft',
			'mailtemplates/anmeldeBestaetigung.hbs',
			formData
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return json({ success: false });
	}

	// Eintragung im Google Spreadsheet
	const serviceAuth = createServiceAccountAuth(GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY);
	const doc = new GoogleSpreadsheet(TARGET_SHEET_ID, serviceAuth);

	await doc.loadInfo();

	const sheet = doc.sheetsByTitle['Anmeldungen'];

	await sheet.addRow({
		Name: formData.name,
		EMail: formData.email,
		Alter: formData.alter,
		Essen: formData.essen,
		Allergien: formData.allergien,
		Beschreibung: formData.beschreibung,
		Trigger: formData.trigger
	});

	return json({ success: true });
}
