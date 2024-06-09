import { db } from '$lib/server/db';
import { excerciseRecord, excercises } from '$lib/server/schema';
import type { InsertExcerciseRecord } from '$lib/server/types.js';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const excercises = await db.query.excercises.findMany();
	const users = await db.query.users.findMany();
	return { excercises, users };
};

export const actions = {
	record: async function ({ request }) {
		const data = await request.formData();

		const userId = data.get('user') ?? null;
		const excercise = data.get('excercise') ?? null;
		const repetitions = data.get('repetitions') ?? null;

		if (!userId || !excercise || !repetitions) return fail(400, { error: 'missing fields' });

		try {
			const newRecordObject: InsertExcerciseRecord = {
				userId: parseInt(userId.toString()),
				excerciseId: parseInt(excercise.toString()),
				repetitions: repetitions.toString()
			};

			const newExcerciseRecord = (
				await db.insert(excerciseRecord).values(newRecordObject).returning()
			).at(0);

			return { success: true, newExcerciseRecord };
		} catch (e) {
			return fail(400, { e });
		}
	}
	// other actions...
} satisfies Actions;
