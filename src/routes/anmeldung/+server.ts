import { createServiceAccountAuth } from '$lib/server/utils';
import { json } from '@sveltejs/kit';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function POST({ request }) {
	const data = await request.formData();

	const name = String(data.get('name'));
	const email = String(data.get('email'));
	const beschreibung = String(data.get('beschreibung'));
	const essen = String(data.get('essen'));

	const serviceAuth = createServiceAccountAuth(
		import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
		import.meta.env.VITE_GOOGLE_PRIVATE_KEY
	);
	const doc = new GoogleSpreadsheet(import.meta.env.VITE_TARGET_SHEET_ID, serviceAuth);

	await doc.loadInfo();

	const sheet = doc.sheetsByTitle['Anmeldungen'];

	await sheet.addRow({
		Name: name,
		EMail: email,
		Beschreibung: beschreibung,
		Essen: essen
	});

	return json({ success: true });
}
