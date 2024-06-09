import { db } from '$lib/server/db';
import { runRecord } from '$lib/server/schema';
import type { InsertRunRecord } from '$lib/server/types.js';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const users = await db.query.users.findMany({
		with: {
			runRecords: true
		}
	});
	return { users };
};

export const actions = {
	record: async function ({ request }) {
		const data = await request.formData();

		const userId = data.get('user') ?? null;
		const kmRun = data.get('km_run') ?? null;
		const timeTaken = data.get('time_taken') ?? null;

		if (!userId || !kmRun || !timeTaken) return fail(400, { error: 'missing fields' });

		try {
			const newRecordObject: InsertRunRecord = {
				userId: parseInt(userId.toString()),
				kmRun: kmRun.toString(),
				timeTaken: timeTaken.toString()
			};

			const newRecord = (await db.insert(runRecord).values(newRecordObject).returning()).at(0);
			// // With postgreSQL and SQLite, you can append `.returning()` to the statement to get the new user

			return { success: true, newRecord };
		} catch (e) {
			return fail(400, { e });
		}
	}
	// other actions...
} satisfies Actions;
