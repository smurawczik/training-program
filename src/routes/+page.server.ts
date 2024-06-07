import { db } from '$lib/server/db';
import { users } from '$lib/server/schema';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const users = await db.query.users.findMany();
	return { users };
};

export const actions = {
	register: async function ({ cookies, request }) {
		const data = await request.formData();
		const fullName = data.get('fullName');
		const phone = data.get('phone');

		const newUser = await db.insert(users).values({ fullName, phone });
		// With postgreSQL and SQLite, you can append `.returning()` to the statement to get the new user

		return { success: true, newUser };
	}
	// other actions...
};
