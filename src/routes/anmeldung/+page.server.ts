import type { Actions } from './$types';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		const response = await fetch('/anmeldung', {
			method: 'POST',
			body: data
		});
		const responseData = await response.json();

		return { success: responseData.success };
	}
} satisfies Actions;
