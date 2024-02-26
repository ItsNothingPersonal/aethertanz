import { JWT } from 'google-auth-library';

export function createServiceAccountAuth(email: string, key: string): JWT {
	return new JWT({
		email,
		key,
		scopes: ['https://www.googleapis.com/auth/spreadsheets']
	});
}
